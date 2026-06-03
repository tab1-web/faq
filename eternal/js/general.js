(function() {
    // Declared outside to persist across MkDocs navigation events
    let periodTimeout = null;

    function updatePeriodDisplay() {
        // Essential: Clear the existing timeout to prevent duplicate "clock chains"
        if (periodTimeout) clearTimeout(periodTimeout);

        const container = document.querySelector('.period-widget');
        
        // If the widget isn't on this page, stop the timer entirely
        if (!container) {
            periodTimeout = null; 
            return;
        }

        const now = new Date();
        const day = now.getUTCDay();
        const hours = now.getUTCHours();
        const minutes = now.getUTCMinutes();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Logic: Friday 18:00 UTC to Monday 18:00 UTC
        const isRewardPeriod = (day === 5 && hours >= 18) || (day === 6) || (day === 0) || (day === 1 && hours < 18);

        // Calculate Next Target Phase Change
        let targetDay = isRewardPeriod ? 1 : 5; 
        let targetTime = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 18, 0, 0));
        
        let daysUntil = (targetDay - day + 7) % 7;
        // If it's the target day but past 18:00, move to next week
        if (daysUntil === 0 && hours >= 18) daysUntil = 7;
        targetTime.setUTCDate(targetTime.getUTCDate() + daysUntil);
        
        const diffMs = targetTime - now;
        const d = Math.floor(diffMs / 86400000);
        const h = Math.floor((diffMs % 86400000) / 3600000);
        const m = Math.floor((diffMs % 3600000) / 60000);
        
        // Added minutes to the string for better accuracy
        const timeLeftStr = `${d}d ${h}h ${m}m remaining`;

        const indicator = container.querySelector('.period-indicator');
        const description = container.querySelector('.period-description');
        const utctime = container.querySelector('.current-utctime');

        if (indicator) {
            indicator.textContent = isRewardPeriod ? "Reward Period" : "Registration Period";
            indicator.className = `period-indicator ${isRewardPeriod ? 'reward' : 'register'}`;
        }

        if (description) {
            description.innerHTML = isRewardPeriod 
                ? `Mammons (Blacksmith/Merchant) are active. Registration is not open. <br> <b>Ends in: ${timeLeftStr}</b>`
                : `Registration open for Seal competition. <br> <span style="color:#ff4444; font-size:0.8em;">Blacksmith/Merchant are currently away.</span> <br> <b>Ends in: ${timeLeftStr}</b>`;
        }

        if (utctime) {
            utctime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}, ${days[day]} UTC`;
        }

        // Sync to the next minute
        periodTimeout = setTimeout(updatePeriodDisplay, 60000 - (now.getUTCSeconds() * 1000));
    }

    if (typeof document$ !== 'undefined') {
        document$.subscribe(() => {
            // Small delay to ensure MkDocs finished rendering the new page
            setTimeout(updatePeriodDisplay, 100);
        });
    } else {
        document.addEventListener('DOMContentLoaded', updatePeriodDisplay);
    }
})();
