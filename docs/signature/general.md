---
icon: material/clock-time-one-outline
---


<script>
(function() {
    const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
    const DESCRIPTIONS = {
        COMPETITION: `<strong style="color: #32cd32">Registration:</strong> Players with 1st class can register. <br>
                     <strong style="color: #ff3333">Mammons:</strong> Not available during this period.`,
        SEAL: `<strong style="color: #32cd32">Blacksmith:</strong> Witch | <strong style="color: #32cd32">Merchant:</strong> Patriots <br>
               <strong style="color: #ff3333">Registration:</strong> Closed. Winning side only.`
    };

    const SERVERS = [
        { name: 'Teon', selector: '.teon-period-display', startDate: new Date('2024-11-04T18:00:00Z'), inverted: false },
        { name: 'Franz', selector: '.franz-period-display', startDate: new Date('2024-12-30T18:00:00Z'), inverted: true }
    ];

    function getTimeRemaining(ms) {
        const d = Math.floor(ms / (24 * 60 * 60 * 1000));
        const h = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const m = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
        const s = Math.floor((ms % (60 * 1000)) / 1000);
        return `${d}d ${h}h ${m}m ${s}s`;
    }

    function updateAllDashboards() {
        const now = new Date();
        const currentUTC = now.getTime();

        SERVERS.forEach(server => {
            const displays = document.querySelectorAll(server.selector);
            if (displays.length === 0) return;

            const weeksSinceStart = Math.floor((currentUTC - server.startDate) / WEEK_MS);
            let isComp = (weeksSinceStart % 2 === 0);
            if (server.inverted) isComp = !isComp;

            const periodEnd = new Date(server.startDate.getTime() + ((weeksSinceStart + 1) * WEEK_MS));
            const msLeft = periodEnd.getTime() - currentUTC;
            
            const color = isComp ? '#0084ff' : '#44ff44';
            const label = isComp ? 'Competition' : 'Validation';
            const note = isComp ? DESCRIPTIONS.COMPETITION : DESCRIPTIONS.SEAL;

            displays.forEach(el => {
                el.style.margin = '10px 0';
                el.innerHTML = `
                    <div style="background: rgba(255,255,255,0.05); border-radius: 4px; border-left: 3px solid ${color}; overflow: hidden;">
                        <div style="display: flex; align-items: center; padding: 8px 12px;">
                            <span style="font-size: 0.65rem; font-weight: 800; text-transform: uppercase; background: ${color}; color: #000; padding: 2px 6px; border-radius: 3px; margin-right: 12px;">
                                ${server.name}
                            </span>
                            <span style="font-weight: bold; color: ${color}; font-size: 0.95rem; flex-grow: 1;">
                                ${label}
                            </span>
                            <span style="font-size: 0.85rem; font-family: monospace; color: #FF6347; font-weight: bold;">
                                ${getTimeRemaining(msLeft)}
                            </span>
                        </div>
                        
                        <div style="padding: 0 12px 8px 45px; font-size: 0.8rem; line-height: 1.4; border-top: 1px solid rgba(255,255,255,0.03); padding-top: 4px; color: #ccc;">
                            ${note}
                        </div>
                    </div>
                `;
            });
        });

        setTimeout(updateAllDashboards, 1000);
    }

    if (typeof document$ !== 'undefined') {
        document$.subscribe(updateAllDashboards);
    } else {
        document.addEventListener('DOMContentLoaded', updateAllDashboards);
    }
})();
</script>

## Quick Links

<div class="button-grid">
    <a href="https://l2reborn.org/news/reborn-signature-features/" class="md-button lightbox">Features</a>
    <a href="https://youtu.be/5BNTfw2cDUs?si=gRY-ATlcqrXPLvel" class="md-button lightbox">PvP Video</a>
    <a href="https://l2reborn.org/news/" class="md-button lightbox">News</a>
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

### Teon Seven Signs
<div class="teon-period-display"></div>

### Franz Seven Signs
<div class="franz-period-display"></div>

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