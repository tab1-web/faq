(function() {
  const EVENTS = [
    { name: "TVT", times: ["02:00", "08:00", "14:00", "20:00"], icon: "⚔️", className: "event-tvt" },
    { name: "CTF", times: ["04:00", "10:00", "16:00", "22:00"], icon: "🏁", className: "event-ctf" },
    { name: "DM", times: ["00:00", "06:00", "12:00", "18:00"], icon: "💀", className: "event-dm" }
  ];
  const REGISTRATION_DURATION = 5; 
  let refreshInterval = null; 

  function initWidget() {
    if (refreshInterval) {
        clearInterval(refreshInterval);
        refreshInterval = null;
    }
    
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

    list.innerHTML = EVENTS.map(event => {
      const nextTime = getNextEventTime(event.times, currentMinutes);
      const isRegistrationWindow = nextTime.isActive;
      
      return `
        <li class="event-item ${event.className} ${isRegistrationWindow ? 'is-active' : ''}">
          <span class="event-icon">${event.icon}</span>
          <div class="event-details">
            <span class="event-name">${event.name}</span>
            <span class="event-status">
              ${isRegistrationWindow ? 
                '<b class="status-active">REGISTER NOW! <span class="event-blink">🔥</span></b>' : 
                `Next: <b>${nextTime.time}</b> <small>(in ${nextTime.minutesUntil}m)</small>`}
            </span>
          </div>
        </li>
      `;
    }).join('');
  }

  function getNextEventTime(times, currentMinutes) {
    const eventMinutes = times.map(t => {
      const [h, m] = t.split(':').map(Number);
      return h * 60 + m;
    }).sort((a, b) => a - b);
    
    const active = eventMinutes.find(m => currentMinutes >= m && currentMinutes < m + REGISTRATION_DURATION);
    if (active !== undefined) return { time: formatMinutesToTime(active), minutesUntil: 0, isActive: true };
    
    const next = eventMinutes.find(m => m > currentMinutes);
    if (next !== undefined) return { time: formatMinutesToTime(next), minutesUntil: next - currentMinutes, isActive: false };
    
    const first = eventMinutes[0];
    return { time: formatMinutesToTime(first), minutesUntil: (1440 - currentMinutes) + first, isActive: false };
  }

  function formatMinutesToTime(m) {
    return `${Math.floor(m/60).toString().padStart(2,'0')}:${(m%60).toString().padStart(2,'0')} UTC`;
  }

  function startAutoRefresh() {
    let seconds = 60;
    const timerDisplay = document.querySelector('.refresh-timer');
    
    // 3. Assign to the persistent variable so it can be cleared next time
    refreshInterval = setInterval(() => {
      seconds--;
      if (timerDisplay) timerDisplay.textContent = seconds;
      
      if (seconds <= 0) {
        seconds = 60;
        updateEvents();
      }
    }, 1000);
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(() => {
        // Small delay ensures MkDocs has finished DOM injection
        setTimeout(initWidget, 50); 
    });
  } else {
    document.addEventListener('DOMContentLoaded', initWidget);
  }
})();
