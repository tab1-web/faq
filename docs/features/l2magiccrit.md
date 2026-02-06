---
icon: material/magic-staff
---

# Magic Crit

Thank you @Crossto , @Emihiro for the guide.

When you deal a magic critical, your magic damage is multiplied by 4. Calculating chances are below.

## Magic Critical Rate Formula 

**Signature:**{style="color:lightblue;"}

- Everything remains retail. Hero weapons were changed, but the magic critical chance was not changed.
- Augments come with Interlude.

```math
mcrit_rate = (0.005+1.05^(WIT-20) * buffs * items)/2
```

**Eternal:**{style="color: #af5d5dff;"}

- Eternal uses custom values when calculating magic critical rate. Active and passive augment effects are halved. Whole magic critical rate is **capped to 70%**.

```math
mcrit_rate = min(mcrit_rate = (0.005+1.05^(WIT-20) * buffs * items)/2, 70)
```

- With current setup it's impossible to hit the 70% cap without highly contested items (Hero weapon, Necklace of Valakas). Solo Mystic Muse with +4 WIT, Dark Crystal Set, all buffs, active+passive WM augment can reach 56% magic critical rate.

### WIT modifier

<figure markdown>

| WIT   | mod  | WIT | mod  | WIT | mod  |
| --- | ---- | --- | ---- | --- | ---- |
| 1   | 0.40 | 11  | 0.64 | 21  | 1.05 |
| 2   | 0.42 | 12  | 0.68 | 22  | 1.10 |
| 3   | 0.44 | 13  | 0.72 | 23  | 1.16 |
| 4   | 0.46 | 14  | 0.75 | 24  | 1.22 |
| 5   | 0.48 | 15  | 0.78 | 25  | 1.28 |
| 6   | 0.51 | 16  | 0.82 | 26  | 1.34 |
| 7   | 0.53 | 17  | 0.86 | 27  | 1.41 |
| 8   | 0.56 | 18  | 0.91 | 28  | 1.48 |
| 9   | 0.58 | 19  | 0.95 | 29  | 1.55 |
| 10  | 0.61 | 20  | 1.00 | 30  | 1.63 |
|     |      |     |      | 31  | 1.71 | 

or by formula (result stripped to 2 decimal places)

```math
wit_mod = (1.05**(wit - 20) * 100 + 0.5) / 100
```
</figure>

<div class="grid cards" markdown>

- ### Buff modifier

    If you have more than one buff the effect is multiplied (eg. buff mod is 24 if you have fullbuff).

    | buff | mod |
    | --- | --- |
    | Wild Magic lvl. 1 | 3 |
    | Wild Magic lvl. 2 | 4 |
    | Siren's Dance | 3 |
    | Prophecy of Water | 2 |
    | Curse of Abyss | 0.7 |

- ### Item modifier
    | item | mod |
    | --- | --- |
    | Active Wild Magic Augment lvl. 10 | 1.5 (Eternal) <br> 2 (IL) |
    | Passive Wild Magic Augment lvl. 10 | 1.25 (Eternal) <br> 1.5 (IL) |
    | Infinity Scepter | 1.54 |
    | Necklace of Valakas | 2 |

</div>

## Calculator

<div id="magicCritCalculator">
<figure>
    <div>
        <label for="serverType">Server Type:</label>
        <select id="serverType">
            <option value="signature">Interlude</option>
            <option value="eternal">Eternal</option>
        </select>
    </div>
</figure>
<hr>
    <div>
        <label for="wit">WIT:</label>
        <input type="number" id="wit" min="1" max="31" value="20">
    </div>
    <hr>
    <div>
        <label>Buffs:</label>
        <div>
            <input type="checkbox" id="wildMagic1" value="3">
            <label for="wildMagic1">Wild Magic lvl. 1</label>
        </div>
        <div>
            <input type="checkbox" id="wildMagic2" value="4">
            <label for="wildMagic2">Wild Magic lvl. 2</label>
        </div>
        <div>
            <input type="checkbox" id="sirensDance" value="3">
            <label for="sirensDance">Siren's Dance</label>
        </div>
        <div>
            <input type="checkbox" id="prophecyOfWater" value="2">
            <label for="prophecyOfWater">Prophecy of Water</label>
        </div>
        <div>
            <input type="checkbox" id="curseOfAbyss" value="0.7">
            <label for="curseOfAbyss">Curse of Abyss</label>
        </div>
    </div>
    <hr>
    <div>
        <label>Items:</label>
        <div>
            <input type="checkbox" id="activeAugment" value="active">
            <label for="activeAugment">Active Wild Magic Augment lvl. 10</label>
        </div>
        <div>
            <input type="checkbox" id="passiveAugment" value="passive">
            <label for="passiveAugment">Passive Wild Magic Augment lvl. 10</label>
        </div>
        <div>
            <input type="checkbox" id="infinityScepter" value="1.54">
            <label for="infinityScepter">Infinity Scepter</label>
        </div>
        <div>
            <input type="checkbox" id="valakasNecklace" value="2">
            <label for="valakasNecklace">Necklace of Valakas</label>
        </div>
    </div> <br>
<hr>
    <figure>
    <button id="calculateBtn">Calculate Magic Crit Rate</button> <br>
    </figure>
    
    <div id="result"></div>
</div>

<style>
#magicCritCalculator {
    background: var(--md-default-bg-color);
    border: 1px solid var(--md-code-bg-color);
    border-radius: 4px;
    padding: 1.5rem;
    margin: 1rem 0;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-section {
    margin-bottom: 1.5rem;
}

.form-group label,
.form-section label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--md-default-fg-color);
}

.form-control {
    width: 100%;
    padding: 0.5rem;
    background: var(--md-code-bg-color);
    border: 1px solid var(--md-default-bg-color--light);
    border-radius: 2px;
    color: var(--md-code-fg-color);
    font-size: 0.9rem;
}

.form-control:focus {
    outline: none;
    border-color: var(--md-typeset-a-color);
}

.checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    color: var(--md-default-fg-color);
    font-size: 0.9rem;
}

.checkbox-label input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    accent-color: var(--md-typeset-a-color);
}

.calculate-button {
    width: 100%;
    padding: 0.75rem;
    background: var(--md-typeset-a-color);
    color: var(--md-default-bg-color);
    border: none;
    border-radius: 2px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
    margin-top: 1rem;
}

.calculate-button:hover {
    opacity: 0.9;
}

.result-container {
    margin-top: 1.5rem;
    padding: 1rem;
    background: var(--md-code-bg-color);
    border-radius: 2px;
    border-left: 4px solid var(--md-typeset-a-color);
}

.result-container h3 {
    margin: 0 0 0.5rem 0;
    color: var(--md-default-fg-color);
    font-size: 1.1rem;
}

.result-container p {
    margin: 0.5rem 0;
    color: var(--md-default-fg-color);
    font-weight: 600;
}

.result-container ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
    color: var(--md-default-fg-color--light);
}

.result-container li {
    margin-bottom: 0.25rem;
    font-size: 0.9rem;
}
#calculateBtn {
    background: var(--md-code-bg-color);
    padding: 1rem;
    cursor: pointer;
    border-radius: 20px;
}
</style>

<script>
document.getElementById('calculateBtn').addEventListener('click', calculateMagicCrit);

document.getElementById('wildMagic1').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('wildMagic2').checked = false;
    }
});

document.getElementById('wildMagic2').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('wildMagic1').checked = false;
    }
});

function calculateMagicCrit() {
    const serverType = document.getElementById('serverType').value;
    const wit = parseInt(document.getElementById('wit').value) || 0;
    const isEternal = serverType === 'eternal';

    // Calculate Base WIT
    // Formula: (0.005 + 1.05^(WIT-20))
    const witComponent = 0.005 + Math.pow(1.05, wit - 20);

    // Aggregate Multipliers
    let totalMultipliers = 1;

    // Buffs 
    const buffs = [
        { id: 'wildMagic1', val: 3 }, 
        { id: 'wildMagic2', val: 4 }, 
        { id: 'sirensDance', val: 3 },
        { id: 'prophecyOfWater', val: 2 },
        { id: 'curseOfAbyss', val: 0.7 } 
    ];

    buffs.forEach(buff => {
        const el = document.getElementById(buff.id);
        if (el && el.checked) {
            totalMultipliers *= buff.val;
        }
    });

    // Items
    if (document.getElementById('valakasNecklace').checked) {
        totalMultipliers *= 2; 
    }
    if (document.getElementById('infinityScepter').checked) {
        totalMultipliers *= 1.54;
    }
    
    // Augments 
    if (document.getElementById('activeAugment').checked) {
        totalMultipliers *= isEternal ? 1.5 : 2;
    }
    if (document.getElementById('passiveAugment').checked) {
        totalMultipliers *= isEternal ? 1.25 : 1.5;
    }

    // Calculation
    // Formula: (WIT Component * Multipliers) / 2
    let mcritRate = ((witComponent * totalMultipliers) / 2);

    // Eternal Cap
    if (isEternal) {
        mcritRate = Math.min(mcritRate, 70);
    }

    // Display Result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h3>Magic Critical Rate: ${mcritRate.toFixed(1)}%</h3>
        <p>Breakdown:</p>
        <ul>
            <li>Total WIT: ${wit}</li>
            <li>WIT Component: ${witComponent.toFixed(4)}</li>
            <li>Combined Multiplier: ${totalMultipliers.toFixed(2)}x</li>
        </ul>
    `;
}

function calculateWitMod(wit) {
    // Formula: wit_mod = (1.05^(wit - 20) * 100 + 0.5) / 100
    if (wit < 1) wit = 1;
    if (wit > 31) wit = 31;
    
    const witMod = (Math.pow(1.05, wit - 20) * 100 + 0.5) / 100;
    return Math.round(witMod * 100) / 100; 
}

</script>


