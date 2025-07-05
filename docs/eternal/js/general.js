(function() {
  function updatePeriodDisplay() {
    const now = new Date();
    const day = now.getUTCDay();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    const formattedDay = days[day];

    const isRewardPeriod = 
      (day === 5 && hours >= 18) ||
      (day === 6) ||
      (day === 0) ||
      (day === 1 && hours < 18);

    document.querySelectorAll('.period-indicator').forEach(el => {
      el.textContent = isRewardPeriod ? "Reward Period" : "Register Period";
      el.className = isRewardPeriod ? "period-indicator reward" : "period-indicator register";
    });
    
    document.querySelectorAll('.period-description').forEach(el => {
      el.innerHTML = isRewardPeriod 
        ? `Blacksmith of Mammon and Merchant of Mammon are available in Giran, <span style="color: #ff4444">you cannot register to fight in the catacombs.</span> Lasts until Monday 18:00 UTC.`
        : `Blacksmith of Mammon and Merchant of Mammon are not available, <span style="color: #44ff44">you can register to fight in the catacombs.</span> Lasts until Friday 18:00 UTC.`;
    });

    document.querySelectorAll('.current-utctime').forEach(el => {
      el.textContent = `${formattedTime}, ${formattedDay}`;
      el.title = now.toUTCString();
    });

    setTimeout(updatePeriodDisplay, 60000 - (now.getUTCSeconds() * 1000 + now.getUTCMilliseconds()));
  }

  if (document.readyState === 'complete') {
    updatePeriodDisplay();
  } else {
    document.addEventListener('DOMContentLoaded', updatePeriodDisplay);
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(function() {
      setTimeout(updatePeriodDisplay, 100);
    });
  }
})();