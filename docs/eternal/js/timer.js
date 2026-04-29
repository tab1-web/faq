(function() {
  const eventConfigs = [
    // summer season 2025
    { target: "2025-07-18T18:00:00Z", pastText: "SERVER IS ONLINE! NPCs ARE UP!", showSeconds: false },
    { target: "2025-07-18T17:00:00Z", pastText: "SERVER IS ONLINE! NPCs ARE NOT!", showSeconds: false },
    { target: "2025-07-11T18:00:00Z", pastText: "BETA TEST IS LIVE!", showSeconds: false },
    { target: "2025-07-19T00:00:00Z", pastText: "SUBCLASS & NOBLESSE DONATION IS ON!", showSeconds: false },
    { target: "2025-07-25T18:00:00Z", pastText: "FIRST MAMMON ON! (NO A/S GRADE SERVICES)", showSeconds: false },
    { target: "2025-08-01T18:00:00Z", pastText: "A GRADE MAMMON SERVICES ON!", showSeconds: false },
    { target: "2025-08-15T18:00:00Z", pastText: "S GRADE MAMMON SERVICES ON!", showSeconds: false },
    { target: "2025-08-11T20:30:00Z", pastText: "FIRST CYCLE OF OLYMPIAD IS ON!", showSeconds: false },
    { target: "2025-08-18T00:00:00Z", pastText: "THIRD STAGE IS ON!", showSeconds: false },
    // winter season 2026
    { target: "2026-01-09T17:00:00Z", pastText: "OBT IS LIVE!", showSeconds: true },
    { target: "2026-01-16T17:00:00Z", pastText: "SERVER ON WITHOUT NPC!", showSeconds: true },
    { target: "2026-01-16T18:00:00Z", pastText: "SERVER ON WITH NPC!", showSeconds: true },
    { target: "2026-01-19T18:00:00Z", pastText: "NECROPOLIS & CATACOMBS ARE OPEN!", showSeconds: false },
    { target: "2026-01-23T18:00:00Z", pastText: "FIRST MAMMON ON! (NO A/S GRADE SERVICES)", showSeconds: false },
    { target: "2026-01-25T18:00:00Z", pastText: "FIRST CASTLE SIEGES HAVE BEGUN!", showSeconds: false },
    { target: "2026-01-30T18:00:00Z", pastText: "A GRADE MAMMON SERVICES ON!", showSeconds: false },
    { target: "2026-02-09T20:30:00Z", pastText: "OLYMPIAD CYCLE IS LIVE!", showSeconds: false },
    { target: "2026-02-11T18:00:00Z", pastText: "VALENTINES EVENT ON!", showSeconds: false },
    { target: "2026-02-13T18:00:00Z", pastText: "S GRADE MAMMON SERVICES ON!", showSeconds: false },
    { target: "2026-02-16T00:00:00Z", pastText: "FIRST HEROES HAVE ARRIVED!", showSeconds: false },
    { target: "2026-02-25T18:00:00Z", pastText: "STAGE 2 IS LIVE! x10, B-GRADE IN SHOP", showSeconds: false },
    { target: "2026-03-25T18:00:00Z", pastText: "STAGE 3 IS LIVE! x30 RATES ACTIVE", showSeconds: false },
    // may season 2026
    { target: "2026-05-01T17:00:00Z", pastText: "STREAM STARTED!", showSeconds: false},
    { target: "2026-04-30T07:00:00Z", pastText: "SERVERS MERGED!", showSeconds: false },
    { target: "2026-05-04T18:00:00Z", pastText: "OBT IS LIVE!", showSeconds: true },
    { target: "2026-05-08T18:00:00Z", pastText: "STAGE 1: SERVER OPEN!", showSeconds: true },
    { target: "2026-05-22T18:00:00Z", pastText: "STAGE 2: A-GRADE UNLOCKED!", showSeconds: false },
    { target: "2026-06-05T18:00:00Z", pastText: "STAGE 3: S-GRADE UNLOCKED!", showSeconds: false },
    { target: "2026-06-26T18:00:00Z", pastText: "STAGE 4: CATCH-UP & SUMMER EVENT!", showSeconds: false },
    { target: "2026-07-03T18:00:00Z", pastText: "STAGE 5: x30 RATES ACTIVE!", showSeconds: false }
];

  let cachedEvents = [];
  let countdownInterval = null; 

  function init() {
    // Clear old timer to prevent "timer stacking" during MkDocs navigation
    if (countdownInterval) clearInterval(countdownInterval); 

    cachedEvents = eventConfigs.map(config => {
      const card = document.querySelector(`[data-target="${config.target}"]`);
      if (!card) return null;

      return {
        ...config,
        card: card,
        displayEl: card.querySelector('.countdown-display'),
        targetTime: new Date(config.target).getTime()
      };
    }).filter(event => event !== null); 

    updateAllCountdowns();
    
    // Store the interval ID so we can clear it next time
    countdownInterval = setInterval(updateAllCountdowns, 1000);
  }

  function updateAllCountdowns() {
    const now = Date.now();
    
    cachedEvents.forEach(event => {
      const timeLeft = event.targetTime - now;
      
      if (timeLeft <= 0) {
        if (event.displayEl.textContent !== event.pastText) {
          event.displayEl.textContent = event.pastText;
          event.displayEl.style.color = "#4CAF50";
          event.card.classList.add('active-event');
        }
        return;
      }
      
      const d = Math.floor(timeLeft / 86400000);
      const h = Math.floor((timeLeft % 86400000) / 3600000);
      const m = Math.floor((timeLeft % 3600000) / 60000);
      const s = Math.floor((timeLeft % 60000) / 1000);
      
      let text = "";
      if (d > 0) text += `${d}d ${h}h ${m}m`;
      else if (h > 0) text += `${h}h ${m}m`;
      else text += `${m}m`;
      
      if (event.showSeconds) {
        text += ` ${s}s`;
      }
      
      // Crucial: Only update the DOM if the string actually changed
      if (event.displayEl.textContent !== text) {
        event.displayEl.textContent = text;
      }
    });
  }

  // Handle various loading scenarios
  if (document.readyState === 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
  
  // Support for MkDocs/Material theme instant loading
  if (typeof document$ !== 'undefined') {
    document$.subscribe(init);
  }
})();