---
icon: material/clock-time-one-outline
---


<script>
function updatePeriodDisplays() {
    const START_DATE = new Date('2024-11-04T18:00:00Z');
    const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
    
    const DESCRIPTION = {
        COMPETITION: `During Competition Week, <strong style="color: #32cd32">players with 1st class can register to fight in the Catacombs.</strong> <br>
       <strong style="color: #ff3333" >Blacksmith of Mammon</strong> and <strong style="color: #ff3333" >Merchant of Mammon</strong> are <strong style="color: #ff3333" >not available.</strong>`,
        SEAL: `During Seal Effective Week, <strong style="color:red;">players cannot register to fight in the Catacombs.</strong> <br> 
        In order to hunt in the Catacombs, you need to be registered and be on the winning side. <br> <br>
        <strong style="color: #32cd32" >Blacksmith of Mammon is at:</strong> Witch / Heretic <br>
        <strong style="color: #32cd32 ">Merchant of Mammon is at:</strong> Disciples / Sacrifice `
    };
    
    const now = new Date();
    const currentUTC = now.getTime();
    
    const weeksSinceStart = Math.floor((currentUTC - START_DATE) / WEEK_MS);
    
    let period, bgColor, borderColor, textColor, note;
    if (weeksSinceStart % 2 === 0) {
        period = "Competition Week";
        bgColor = 'rgba(50, 70, 255, 0.15)';
        borderColor = '#ff3333';
        textColor = '#0084ffff';
        note = DESCRIPTION.COMPETITION;
    } else {
        period = "Seal Validation Week";
        bgColor = 'rgba(50, 205, 50, 0.15)';
        borderColor = '#32cd32';
        textColor = '#00a700ff';
        note = DESCRIPTION.SEAL;
    }
    
    const periodStart = new Date(START_DATE.getTime() + (weeksSinceStart * WEEK_MS));
    const periodEnd = new Date(periodStart.getTime() + WEEK_MS);
    
    const formatDate = (date) => {
        const pad = (num) => num.toString().padStart(2, '0');
        return `${date.getUTCFullYear()}. ${pad(date.getUTCMonth()+1)}. ${pad(date.getUTCDate())}. ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`;
    };
    
    const currentUTCStr = formatDate(now) + ' UTC +0';
    const startStr = formatDate(periodStart) + ' UTC +0';
    const endStr = formatDate(periodEnd) + ' UTC +0';
    
    const displays = document.getElementsByClassName('period-display');
    for (let display of displays) {
        display.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-weight: bold; color: ${textColor}; font-size: 1.2rem;" >${period}</span>
                <span>${currentUTCStr}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: auto 1fr; gap: 4px; font-size: 0.9em; margin-bottom: 8px;">
                <span style="color: #4d9475; font-weight: bold;">From:</span>
                <span>${startStr}</span>
                <span style="color: #4d9475; font-weight: bold;">Until:</span>
                <span>${endStr}</span>
            </div>
            
            <div style="background: rgba(0,0,0,0.2); padding: 8px; border-radius: 4px; ">
                <div style="color: #0084ffff; font-size: 0.85em; font-weight: bold; margin-bottom: 4px;">Description:</div>
                <div style="color: #ff; font-size: 0.9em; line-height: 1.4;">${note}</div>
            </div>
        `;
        display.style.backgroundColor = bgColor;
        display.style.padding = '12px';
        display.style.margin = '12px 0';
        display.style.borderRadius = '6px';
        display.style.fontFamily = 'system-ui, sans-serif';
        display.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
}

document.addEventListener('DOMContentLoaded', updatePeriodDisplays);
setInterval(updatePeriodDisplays, 60 * 1000);
</script>

## Quick Links

<div class="button-grid">
    <a href="https://l2reborn.org/news/reborn-signature-features/" class="md-button lightbox">Features</a>
    <a href="https://youtu.be/5BNTfw2cDUs?si=gRY-ATlcqrXPLvel" class="md-button lightbox">PvP Video</a>
    <a href="https://l2reborn.org/latest-news/" class="md-button lightbox">News</a>
    <a href="https://lineage2wiki.org/c5/" class="md-button lightbox">Wiki</a>
</div>

<style>
.button-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.5rem;
    margin: 1rem 0;
}

.button-grid .md-button {
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media (max-width: 400px) {
    .button-grid {
        grid-template-columns: 1fr 1fr;
    }
}
</style>


## Seven Signs Quick Info

<div class="period-display"></div>


## Commands
<div class="grid cards" markdown>

- ### .visualequip off/on
    Toggles visibility for suits.

- ### .pledgeannounce
    Sets clan notice.

- ### .setlockpw pin
    Sets the main pin to unlock/lock.

- ### .lock pin
    Enables the lock system.

- ### .unlock pin
    Disables the lock system.

- ### .offline
    Puts shop to offline on setup.

</div>

> There is no `.expoff` command on Signature.