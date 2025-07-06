(function() {
  const OPENING_TIME = new Date(Date.UTC(2025, 6, 18, 18, 0, 0));
  const BETA_TEST_TIME = new Date(Date.UTC(2025, 6, 11, 18, 0, 0));
  const BETA_EVENT_TIME = new Date(Date.UTC(2025, 6, 13, 0, 0, 0)); // Starts at midnight UTC on the 13th
  
  function updateTimer() {
    const now = new Date();
    const timeLeft = OPENING_TIME - now;
    const betaTestTimeLeft = BETA_TEST_TIME - now;
    const betaEventTimeLeft = BETA_EVENT_TIME - now;
    
    // Update main server countdown
    if (timeLeft <= 0) {
      document.querySelectorAll('.main-countdown').forEach(el => {
        el.textContent = "SERVER IS ONLINE!";
        el.style.color = "#4CAF50";
      });
    } else {
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
      
      document.querySelectorAll('.main-countdown').forEach(el => {
        el.textContent = countdownText;
      });
    }
    
    // Update beta test countdown
    if (betaTestTimeLeft <= 0) {
      document.querySelectorAll('.beta-test-countdown').forEach(el => {
        el.textContent = "BETA TEST IS LIVE!";
        el.style.color = "#4CAF50";
      });
    } else {
      const daysLeft = Math.floor(betaTestTimeLeft / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((betaTestTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((betaTestTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
      
      let countdownText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m`;
      document.querySelectorAll('.beta-test-countdown').forEach(el => {
        el.textContent = countdownText;
      });
    }
    
    // Update beta event countdown
    if (betaEventTimeLeft <= 0) {
      document.querySelectorAll('.beta-event-countdown').forEach(el => {
        el.textContent = "BETA EVENT IS LIVE!";
        el.style.color = "#4CAF50";
      });
    } else {
      const daysLeft = Math.floor(betaEventTimeLeft / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((betaEventTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((betaEventTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
      
      let countdownText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m`;
      document.querySelectorAll('.beta-event-countdown').forEach(el => {
        el.textContent = countdownText;
      });
    }
    
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