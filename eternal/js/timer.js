(function() {
  const OPENING_TIME = new Date(Date.UTC(2025, 6, 18, 18, 0, 0));
  
  function updateTimer() {
    const now = new Date();
    const timeLeft = OPENING_TIME - now;
    
    if (timeLeft <= 0) {
      document.querySelectorAll('.countdown-timer').forEach(el => {
        el.textContent = "SERVER IS ONLINE!";
        el.style.color = "#4CAF50";
      });
      return;
    }
    
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    
    let countdownText;
    if (daysLeft > 0) {
      countdownText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m`;
    } else if (hoursLeft > 0) {
      countdownText = `${hoursLeft}h ${minutesLeft}m`;
    } else {
      countdownText = `${minutesLeft}m`;
    }
    
    document.querySelectorAll('.countdown-timer').forEach(el => {
      el.textContent = countdownText;
    });
    
    setTimeout(updateTimer, 60000 - (now.getUTCSeconds() * 1000 + now.getUTCMilliseconds()));
  }
  
  if (document.readyState === 'complete') {
    updateTimer();
  } else {
    document.addEventListener('DOMContentLoaded', updateTimer);
  }
  
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function() {
      setTimeout(updateTimer, 100);
    });
  }
})();