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
        ? `Blacksmith of Mammon and Merchant of Mammon are available in Giran <br> <span style="color: #ff4444">You cannot register to fight in the catacombs</span> <br> <span style="color: #FF6347">Lasts until Monday 18:00 UTC</span>`
        : `Blacksmith of Mammon and Merchant of Mammon are not available <br> <span style="color: #44ff44">You can register to fight in the catacombs</span> <br> <span style="color: #FF6347">Lasts until Friday 18:00 UTC</span>`;
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