(function() {
  const eventConfigs = [
    {
      selector: '[data-target="2025-07-18T18:00:00Z"] .countdown-display',
      pastText: "SERVER IS ONLINE! NPCs ARE UP!",
      showSeconds: false
    },
    {
      selector: '[data-target="2025-07-18T17:00:00Z"] .countdown-display',
      pastText: "SERVER IS ONLINE! NPCs ARE NOT!",
      showSeconds: false
    },
    {
      selector: '[data-target="2025-07-11T18:00:00Z"] .countdown-display',
      pastText: "BETA TEST IS LIVE!",
      showSeconds: false
    },
    {
      selector: '[data-target="2025-07-19T00:00:00Z"] .countdown-display',
      pastText: "SUBCLASS & NOBLESSE DONATION IS ON!",
      showSeconds: false
    },
    {
      selector: '[data-target="2025-07-25T00:00:00Z"] .countdown-display',
      pastText: "FIRST MAMMON ON! (NO A/S GRADE SERVICES)",
      showSeconds: false
    },
    {
      selector: '[data-target="2025-08-01T00:00:00Z"] .countdown-display',
      pastText: "A GRADE MAMMON SERVICES ON!",
      showSeconds: false
    },
    {
      selector: '[data-target="2025-08-15T00:00:00Z"] .countdown-display',
      pastText: "S GRADE MAMMON SERVICES ON!",
      showSeconds: false
    },
    {
      selector: '[data-target="2025-08-11T00:00:00Z"] .countdown-display',
      pastText: "FIRST CYCLE OF OLYMPIAD IS ON!",
      showSeconds: false
    },
    {
      selector: '[data-target="2025-08-18T00:00:00Z"] .countdown-display',
      pastText: "X30 RATES & YOU CAN BUY B-GRADE AT MARIA!",
      showSeconds: false
    }
  ];
  function updateAllCountdowns() {
    const now = new Date();
    
    document.querySelectorAll('.countdown-card').forEach(card => {
      const targetDate = new Date(card.dataset.target);
      const displayEl = card.querySelector('.countdown-display');
      const timeLeft = targetDate - now;
      const config = eventConfigs.find(c => c.selector === `[data-target="${card.dataset.target}"] .countdown-display`);
      
      if (!displayEl || !config) return;
      
      if (timeLeft <= 0) {
        displayEl.textContent = config.pastText;
        displayEl.style.color = "#4CAF50";
        card.classList.add('active-event');
        return;
      }
      
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      let countdownText;
      if (days > 0) {
        countdownText = `${days}d ${hours}h ${minutes}m`;
      } else if (hours > 0) {
        countdownText = `${hours}h ${minutes}m`;
      } else {
        countdownText = `${minutes}m`;
      }
      
      if (config.showSeconds) {
        countdownText += ` ${seconds}s`;
      }
      
      displayEl.textContent = countdownText;
      displayEl.style.color = "";
      card.classList.remove('active-event');
    });
  }

  if (document.readyState === 'complete') {
    updateAllCountdowns();
  } else {
    document.addEventListener('DOMContentLoaded', updateAllCountdowns);
  }
  
  setInterval(updateAllCountdowns, 60000);
  
  if (typeof document$ !== 'undefined') {
    document$.subscribe(updateAllCountdowns);
  }
})();