(function() {
  const EVENTS = [
    { 
      name: "TVT", 
      times: ["02:00", "08:00", "14:00", "20:00"],
      icon: "⚔️",
      className: "event-tvt"
    },
    { 
      name: "CTF", 
      times: ["04:00", "10:00", "16:00", "22:00"],
      icon: "🏁",
      className: "event-ctf"
    },
    { 
      name: "DM", 
      times: ["00:00", "06:00", "12:00", "18:00"],
      icon: "💀",
      className: "event-dm"
    }
  ];
  const REGISTRATION_DURATION = 5; // 5 minutes after event start

  function initWidget() {
    const container = document.querySelector('.events-widget');
    if (!container) return;

    updateEvents();
    startAutoRefresh();
  }

  function updateEvents() {
    const now = new Date();
    const currentMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
    const list = document.querySelector('.events-list');
    
    if (!list) return;

    list.innerHTML = EVENTS.map(event => 
      createEventItem(event, currentMinutes)
    ).join('');
    
    updateRefreshTimer();
  }

  function createEventItem(event, currentMinutes) {
    const nextTime = getNextEventTime(event.times, currentMinutes);
    const isRegistrationWindow = nextTime.isActive;
    
    return `
      <li class="event-item ${event.className}">
        <span class="event-icon">${event.icon}</span>
        <span class="event-name">${event.name}</span>
        <span class="event-time ${isRegistrationWindow ? 'active' : ''}">
          ${isRegistrationWindow ? 'REGISTER NOW!' : `Next: ${nextTime.time} (in ${nextTime.minutesUntil} min)`}
          ${isRegistrationWindow ? '<span class="event-blink">🔥</span>' : ''}
        </span>
      </li>
    `;
  }

  function getNextEventTime(times, currentMinutes) {
    let nextEvent = null;
    let activeEvent = null;
    
    // Convert all times to minutes
    const eventMinutes = times.map(time => {
      const [h, m] = time.split(':').map(Number);
      return h * 60 + m;
    });
    
    // Check if we're in any active event window
    for (const minutes of eventMinutes) {
      if (currentMinutes >= minutes && currentMinutes < minutes + REGISTRATION_DURATION) {
        activeEvent = {
          time: formatMinutesToTime(minutes),
          minutesUntil: 0,
          isActive: true
        };
        break;
      }
    }
    
    if (activeEvent) return activeEvent;
    
    // Find next upcoming event
    for (const minutes of eventMinutes) {
      if (minutes > currentMinutes) {
        if (!nextEvent || minutes < nextEvent.minutes) {
          nextEvent = {
            minutes: minutes,
            time: formatMinutesToTime(minutes),
            minutesUntil: minutes - currentMinutes,
            isActive: false
          };
        }
      }
    }
    
    // If no more events today, use first event tomorrow
    if (!nextEvent) {
      const firstEvent = Math.min(...eventMinutes);
      nextEvent = {
        time: formatMinutesToTime(firstEvent),
        minutesUntil: (1440 - currentMinutes) + firstEvent,
        isActive: false
      };
    }
    
    return nextEvent;
  }

  function formatMinutesToTime(totalMinutes) {
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  function updateRefreshTimer() {
    const timer = document.querySelector('.refresh-timer');
    if (timer) timer.textContent = '60';
  }

  function startAutoRefresh() {
    let seconds = 60;
    const timer = document.querySelector('.refresh-timer');
    
    const interval = setInterval(() => {
      seconds--;
      if (timer) timer.textContent = seconds;
      
      if (seconds <= 0) {
        seconds = 60;
        updateEvents();
      }
    }, 1000);
    
    if (typeof document$ !== 'undefined') {
      document$.subscribe(() => clearInterval(interval));
    }
  }

  if (document.readyState === 'complete') {
    initWidget();
  } else {
    document.addEventListener('DOMContentLoaded', initWidget);
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(() => setTimeout(initWidget, 100));
  }
})();