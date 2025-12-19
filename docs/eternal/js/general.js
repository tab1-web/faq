(function() {
    let periodTimeout = null;

    function updatePeriodDisplay() {
        // Clear existing timeout to prevent memory leaks/timer stacking
        if (periodTimeout) clearTimeout(periodTimeout);

        const container = document.querySelector('.period-widget');
        if (!container) return;

        const now = new Date();
        const day = now.getUTCDay();
        const hours = now.getUTCHours();
        const minutes = now.getUTCMinutes();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Logic: Friday 18:00 UTC to Monday 18:00 UTC
        const isRewardPeriod = (day === 5 && hours >= 18) || (day === 6) || (day === 0) || (day === 1 && hours < 18);

        // Calculate Next Target Phase Change
        let targetDay = isRewardPeriod ? 1 : 5; // Monday or Friday
        let targetTime = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 18, 0, 0));
        
        let daysUntil = (targetDay - day + 7) % 7;
        if (daysUntil === 0 && hours >= 18) daysUntil = 7;
        targetTime.setUTCDate(targetTime.getUTCDate() + daysUntil);
        
        const diffMs = targetTime - now;
        const diffDays = Math.floor(diffMs / 86400000);
        const diffHours = Math.floor((diffMs % 86400000) / 3600000);
        const timeLeftStr = `${diffDays}d ${diffHours}h remaining`;

        // Update DOM
        const indicator = container.querySelector('.period-indicator');
        const description = container.querySelector('.period-description');
        const utctime = container.querySelector('.current-utctime');

        if (indicator) {
            indicator.textContent = isRewardPeriod ? "Reward Period" : "Registration Period";
            indicator.className = `period-indicator ${isRewardPeriod ? 'reward' : 'register'}`;
        }

        if (description) {
            description.innerHTML = isRewardPeriod 
                ? `Mammons (Blacksmith/Merchant) are active in Giran. <br> <b>Ends in: ${timeLeftStr}</b>`
                : `Registration open for Seal competition. <br> No Blacksmith/Merchant <br> <b>Ends in: ${timeLeftStr}</b>`;
        }

        if (utctime) {
            utctime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}, ${days[day]} UTC`;
        }

        // Sync to trigger exactly at the top of the next minute
        periodTimeout = setTimeout(updatePeriodDisplay, 60000 - (now.getUTCSeconds() * 1000));
    }

    // MkDocs Material Navigation Support
    if (typeof document$ !== 'undefined') {
        document$.subscribe(() => {
            updatePeriodDisplay();
        });
    } else {
        document.addEventListener('DOMContentLoaded', updatePeriodDisplay);
    }
})();