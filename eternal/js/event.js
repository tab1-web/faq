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
  const REGISTRATION_DURATION = 5;

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
    const isRegistrationWindow = nextTime.minutesUntil <= REGISTRATION_DURATION;
    
    return `
      <li class="event-item ${event.className}">
        <span class="event-icon">${event.icon}</span>
        <span class="event-name">${event.name}</span>
        <span class="event-time ${isRegistrationWindow ? 'active' : ''}">
          ${isRegistrationWindow ? 'REGISTER NOW!' : `Next: ${nextTime.time} (<strong>in ${nextTime.minutesUntil} min</strong>)`}
          ${isRegistrationWindow ? '<span class="event-blink">🔥</span>' : ''}
        </span>
      </li>
    `;
  }

  function getNextEventTime(times, currentMinutes) {
    for (const time of times) {
      const [h, m] = time.split(':').map(Number);
      const eventMinutes = h * 60 + m;
      if (eventMinutes <= currentMinutes && currentMinutes < eventMinutes + REGISTRATION_DURATION) {
        return {
          time: time,
          minutesUntil: 0 
        };
      }
      if (eventMinutes > currentMinutes) {
        return {
          time: time,
          minutesUntil: eventMinutes - currentMinutes
        };
      }
    }
    const [h, m] = times[0].split(':').map(Number);
    return {
      time: times[0],
      minutesUntil: (1440 - currentMinutes) + (h * 60 + m)
    };
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