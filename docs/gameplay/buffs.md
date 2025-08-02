---
icon: simple/magic
---

## Basic Information
- **Buffs**: Temporary beneficial effects (e.g., increased stats)
- **Debuffs**: Temporary harmful effects (e.g., slows, poison)
- **Duration**: Most buffs are for 20 minutes.
    - **Prophecies**: 5 minutes
    - **Songs/Dances**: 2 minutes
    - **Gifts/Blessings**: 2 minutes

> **On Eternal** all buffs given from Maria are for 2 hours.


## Buff Limits
- **Base Limit**: 20 buff slots
- **Divine Inspiration Books**: +4 slots (unlockable)
- **Total Possible**: 24 buff slots

<figure markdown>

| Icon      | Book          | Level  | Max Buff Slots |
|-----------|---------------|----------------|-----------|
| [![modern.png](https://i.postimg.cc/rFgHPRtH/modern.png)](https://postimg.cc/xcJgkC5G)          | Modern        | 52     | +1        |
| [![original.png](https://i.postimg.cc/SQdVSFN2/original.png)](https://postimg.cc/hhJVsYmc)          | Original      | 62       | +1        |
| [![manuscript.png](https://i.postimg.cc/nhj1GXKB/manuscript.png)](https://postimg.cc/w1zJ6TGj)          | Manuscript    | 76      | +1        |
| [![original-vers.png](https://i.postimg.cc/MTD0pVx2/original-vers.png)](https://postimg.cc/zbyHdLV0)          | Original Ver. | 76    |  +1        |

</figure>

> Learn at your class trainer, unlock them in order (Original needs Modern) <br> **Mages**: Magic Guild, **Fighters**: Fighter Guild, **Dark Elf**: Dark Elf Guild etc..




## Buff Rules
1. **Overflow Handling**: 
    - New buffs remove oldest ones when limit is reached
2. **Priority System**:
    - Higher-level buffs overwrite lower-level ones of same type
3. **Stacking Rules**:
    - Buffs with identical effects don't stack - they override each other

## Buff Overview
<div class="filter-container">
    <select id="buffFilter" class="class-filter">
        <option value="show-all">Show All Buffs</option>
        <optgroup label="Movement Buffs">
            <option value="movement-speed-buffs">Movement Speed Buffs</option>
        </optgroup>
        <optgroup label="Defensive Buffs">
            <option value="shield-buffs">Shield Buffs</option>
            <option value="magic-defense-buffs">Magic Defense Buffs</option>
            <option value="evasion-buffs">Evasion Buffs</option>
            <option value="shield-defense-buffs">Shield Defense Buffs</option>
        </optgroup>
        <optgroup label="Offensive Buffs">
            <option value="physical-critical-buffs">Physical Critical Buffs</option>
            <option value="physical-sustain-buffs">Physical Sustain Buffs</option>
            <option value="physical-attack-buffs">Physical Attack Buffs</option>
            <option value="physical-critical-damage-buffs">Physical Critical Damage Buffs</option>
            <option value="magic-attack-buffs">Magic Attack Buffs</option>
        </optgroup>
        <optgroup label="Utility Buffs">
            <option value="casting-speed-buffs">Casting Speed Buffs</option>
            <option value="resist-effects">Resist Effects</option>
            <option value="general-buffs">General Buffs</option>
        </optgroup>
        <optgroup label="Special Buffs">
            <option value="bard-songs">Songs</option>
            <option value="dancer-dances">Dances</option>
            <option value="warlock-summoner-buffs">Warlock Summoner Buffs</option>
            <option value="elemental-summoner-buffs">Elemental Summoner Buffs</option>
            <option value="prophecy-buffs">Prophecy Buffs</option>
        </optgroup>
    </select>
</div>

<p style="color:grey; text-align:center;">Choose Buff Types!</p>

<style>
    .class-card {
        display: none;
        margin-bottom: 20px;
        border-radius: 5px;
    }
    .class-card.active {
        display: block;
    }
    .filter-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        width: 100%;
    }
    .class-filter {
        padding: 12px 16px;
        font-size: 16px;
        width: 100%;
        max-width: 350px;
        border: 2px solid #c63ba1;
        border-radius: 8px;
        background-color: #2d2d2d;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
    }
    .class-filter {
        border-color: #d94bc1;
    }
    .class-filter:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(198, 59, 161, 0.3);
    }
    .class-filter option {
        color: white;
        background-color: #2d2d2d;
        padding: 8px;
    }
    .class-filter optgroup {
        color: #c63ba1;
        font-weight: bold;
        font-style: normal;
        background-color: #1d1d1d;
    }
    .class-filter optgroup option {
        padding-left: 20px;
    }
    .class-card iframe {
        display: block;
        margin: 0 auto;
        max-width: 100%;
    }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('buffFilter');
    if (!filterSelect) return;

    function getSectionId(heading) {
        return heading.textContent.trim()
            .toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, '-');
    }

    const allHeadings = document.querySelectorAll('h3');
    const buffSections = [];
    
    allHeadings.forEach(heading => {
        if (heading.textContent.includes('Buffs') || 
            heading.textContent.includes('Songs') ||
            heading.textContent.includes('Dances') ||
            heading.textContent.includes('Effects')) {
            
            const sectionId = getSectionId(heading);
            let contentElement = heading.nextElementSibling;
            
            while (contentElement && 
                  !contentElement.matches('figure, table, .highlight, .codehilite')) {
                contentElement = contentElement.nextElementSibling;
            }
            
            if (contentElement) {
                const wrapper = document.createElement('div');
                wrapper.className = 'buff-section';
                wrapper.id = sectionId;
                
                heading.parentNode.insertBefore(wrapper, heading);
                
                wrapper.appendChild(heading);
                wrapper.appendChild(contentElement);
                
                buffSections.push(wrapper);
                wrapper.style.display = 'block';
            }
        }
    });

    filterSelect.addEventListener('change', function() {
        const selectedValue = this.value;
        
        if (selectedValue === 'show-all') {
            buffSections.forEach(section => {
                section.style.display = 'block';
            });
        } else {
            buffSections.forEach(section => {
                section.style.display = section.id === selectedValue ? 'block' : 'none';
            });
        }
    });
});
</script>

<h3> Movement Speed Buffs </h3>
<figure markdown="span" markdown>
| Buff Name | Effect |
|-----------|--------|
| Wind Walk 2 | Increases Speed by 33% |
| Greater Haste Potion 2 | Increases Speed by 33% |
| Speed of Paagrio 2 | Increases Speed by 33% |
| Sprint 2 | Increases Speed by 33% |
| Haste Potion 1 | Increases Speed by 20% |
</figure>



<h3> Shield Buffs </h3>
<figure markdown="span" markdown>
| Buff Name | Effect |
|-----------|--------|
| Shield 3 | Increases P. Def. by 15% |
| Glory of Paagrio 3 | Increases P. Def. by 15% |
| Chant of Shielding 3 | Increases P. Def. by 15% |
| Greater Shield 3 | Increases P. Def. by 15% |
| Earth Chant | Increases P. Def. by 15% |
| Defense Aura | Increases P. Def. by 12% |
</figure>



<h3> Magic Defense Buffs </h3>
<figure markdown="span" markdown>
| Buff Name | Effect |
|-----------|--------|
| Magic Barrier 3 | Increases M. Def. by 30% |
| The Glory of Paagrio 3 | Increases M. Def. by 30% |
| Chant of Fire 3 | Increases M. Def. by 30% |
| Spirit Barrier 3 | Increases M. Def. by 30% |
</figure>



<h3> Evasion Buffs </h3>
<figure markdown="span" markdown>
| Buff Name | Effect |
|-----------|--------|
| Agility 3 | +4 Evasion |
| Tact of Paagrio 3 | +4 Evasion |
| Chant of Evasion 3 | +4 Evasion |
</figure>



<h3> Shield Defense Buffs </h3>
<figure markdown="span" markdown>
| Buff Name | Effect |
|-----------|--------|
| Bless Shield 6 | Increases Shield Defense Rate by 80% |
| Under the Protection of Paagrio 3 | Increases Shield Defense Rate by 50% |
| Advanced Block 3 | Increases Shield Defense Power by 100% |
</figure>




<h3> Physical Critical Buffs </h3>
<figure markdown="span" markdown>
| Buff Name | Effect |
|-----------|--------|
| Focus 3 | Increases Critical by 30% |
| Chant of Predator 3 | Increases Critical by 30% |
</figure>




<h3> Physical Sustain Buffs </h3>
<figure markdown="span" markdown>
| Buff Name | Effect |
|-----------|--------|
| Vampiric Rage 4 | Restores HP using damage inflicted by 9%<br>Skill/Ranged Atk. Excluded |
| Chant of Vampire 4 | Restores HP using damage inflicted by 9%<br>Skill/Ranged Atk. Excluded |
</figure>



<h3> Physical Attack Buffs </h3>
<figure markdown="span" markdown>

| Buff Name | Effect |
|-----------|--------|
| Might 3 | Increases P. Atk. by 15% |
| Chant of Battle 3 | Increases P. Atk. by 15% |
| The Paagrian Gift 3 | Increases P. Atk. by 15% |
| Attack Aura 2 | Increases P. Atk. by 12% |
| Greater Might 3 | Increases P. Atk. by 10% |
| War Chant 3 | Increases P. Atk. by 10% |
</figure>




<h3> Physical Critical Damage Buffs </h3>
<figure markdown="span" markdown>

| Buff Name | Effect |
|-----------|--------|
| Death Whisper 3 | Increases Critical Damage Amount by 35% |
| Eye of Paagrio 3 | Increases Critical Damage Amount by 35% |
| Chant of Rage 3 | Increases Critical Damage Amount by 35% |
</figure>




<h3> Magic Attack Buffs </h3>
<figure markdown="span" markdown>


| Buff Name | Effect |
|-----------|--------|
| Empower 3 | Increases M. Atk. by 75% |
| The Soul of Paagrio 3 | Increases M. Atk. by 75% |

</figure>



<h3> Casting Speed Buffs </h3>

<figure markdown="span" markdown>

| Buff Name | Effect |
|-----------|--------|
| Acumen 3 | Increases Cast. Speed by 30% |
| Wisdom of Paagrio 3 | Increases Cast. Speed by 30% |
| Flame Chant 3 | Increases Cast. Speed by 30% |
| Greater Magic Haste Potion 3 | Increases Cast. Speed by 30% |
| Magic Haste Potion 2 | Increases Cast. Speed by 23% |

</figure>



<h3> Bard Songs </h3>
<figure markdown="span" markdown>

| Song Name | Effect |
|-----------|--------|
| **Song of Wind** | Increases Spd. by 20% |
| **Song of Life** | Increases HP Regen by 20% |
| **Song of Water** | Increases Evasion by 3 |
| **Song of Warding** | Increases M.Def. by 30% |
| **Song of Earth** | Increases P.Def. by 25% |
| **Song of Hunter** | Increases Crit. Rate by 100% |
| **Song of Invocation** | Increases Dark Resist by 20 |
| **Song of Vitality** | Increases Max HP by 30% |
| **Song of Vengeance** | Reflects physical attack by 20% |
| **Song of Flame Guard** | Increases Fire Resist by 30 |
| **Song of Storm Guard** | Increases Wind Resist by 30 |
| **Song of Renewal** | Decreases MP Consumption by 5% and Reuse for Physical/Magic skills by 30% |
| **Song of Meditation** | Increases MP Regen by 20% and MP Consumption by 10% |
| **Song of Champion** | Decreases MP Consumption by 20% and Reuse for Physical Skills by 30% |
</figure>




<h3> Dancer Dances </h3>
<figure markdown="span" markdown>

| Dance Name | Effect |
|------------|--------|
| Dance of Warrior | Increases P. Atk. by 12% |
| Dance of Inspiration | Increases Accuracy by 4 |
| Dance of Mystic | Increases M. Atk. by 20% |
| Dance of Fire | Increases Crit. Dmg. by +35% |
| Dance of Fury | Increases Atk. Spd. by 15% |
| Dance of Concentration | Decreases Cancel Rate by 40% and Increases Cast. Spd. by 30% |
| Dance of Light | Makes your Attacks Holy |
| Dance of Aqua Guard | Increases Water Resist by 30 |
| Dance of Earth Guard | Increases Earth Resist by 30 |
| Dance of Vampire | Restores HP using damage inflicted by 8%. Skill/Ranged Atk. Excluded |
| Dance of Protection | Increases Terrain Resist by 30 |
| Dance of Siren | Increases Magic Crit. Rate by 200% |
| Dance of Shadow | Decreases Speed and protected from monsters preemptive attacks |
</figure>




<h3> Resist Effects </h3>
<figure markdown="span" markdown>

| Resist Name | Effect |
|------------|--------|
| Resist Poison 3 | Increases Poison Resist by 30 |
| Resist Aqua 3 | Increases Water Resist by 30 |
| Resist Wind 3 | Increases Wind Resist by 30 |
| Resist Fire 3 | Increases Fire Resist by 30 |
| Resist Shock 4 | Increases Shock Resist by 40 |
| Unholy Resistance 3 | Increases Unholy Resist by 25 |
| Holy Resistance 3 | Increases Holy Resist by 25 |
| Mental Shield 4 | Increases Hold, Sleep and Derangement Resist by 80% |
| Divine Protection 3 | Increases Unholy and Holy resist by 30  |
| Chant of Spirit 1 | Increases cancel by 30% and de-buff attack resist by 20% |
| Pa'agrio Emblem | Increases cancel by 30% and de-buff attack resist by 20% |
| Arcane Protection 3 | Increases cancel by 30% and de-buff attack resist by 20% |
</figure>



<h3> General Buffs </h3>
<figure markdown="span" markdown>

| Buff Name | Effect |
|-----------|--------|
| Clarity 3 | Decreases MP Consumption by 12% |
| Berserker 2 | Increases P.Atk by 8%, Atk.Spd by 8%<br>Cast. Spd. by 8%, M.Atk. by 16%<br>Speed by 8%<br><br>Decreases P.Def. by 8%, M.Def. by 16%<br>-4 Evasion |
| Wild Magic 2 | Increases Magic Crit. Rate by 300% |
| Concentration 6 | Lowers magic cancel probability by +35 |
| Bless the Body 6 | Increases Max. HP by 35% |
| Bless the Soul 6 | Increases Max. MP by 35% |
| Pa'agrio's Fist 1 | Increases Max. CP by +800 |
</figure>

<h3> Warlock Summoner Buffs </h3>
<figure markdown="span" markdown>
| Buff Name               | Effect                          | Value  | Target |
|-------------------------|---------------------------------|--------|--------|
| Gift of Queen Lv.3      | Increased Physical Attack <br> <br> Increased Accuracy      | +10% <br> <br> +3 | Party <br> <br> Party |
| Blessing of Queen Lv.3  | Increased Critical Rate <br> <br> Increased Critical Damage        | +30% <br> <br> +25%   | Party <br> <br> Party  |
</figure>

<h3> Elemental Summoner Buffs </h3>
<figure markdown="span" markdown>
| Buff Name                | Effect                          | Value  | Target |
|--------------------------|---------------------------------|--------|--------|
| Gift of Seraphim Lv.3    | Decreased Magic Skill Reuse Time| -35%   | Party  |
| Blessing of Seraphim Lv.3 | Increased MP Regeneration       | +35%   | Party  |
</figure>

<h3> Prophecy Buffs </h3>
<figure markdown="span" markdown>

| Buff Name | Effects |
|-----------|---------|
| **Prophecy of Fire** | - Max HP +20%<br>- HP Regen +20%<br>- P.Def. +20%<br>- Accuracy +4<br>- P.Atk. +10%<br>- Speed -10%<br>- Atk. Spd. +20%<br>- Debuff Resist +10% |
| **Prophecy of Water** | - MP Regen +20%<br>- Speed -20%<br>- M.Def. +20%<br>- M.Atk. +20%<br>- Cast. Speed +20%<br>- Magic Crit. Rate +100%<br>- Debuff Resist +10% |
| **Magnus Chant (C5+)** | - Max MP +20%<br>- MP Regen +300% (Robe)<br>- MP Regen +50% (Light/Heavy)<br>- M.Def +30%<br>- M.Atk +30%<br>- Cast. Speed +20%<br>- Magic MP Consumption -20%<br>- All Elemental Resists +10 |
| **Prophecy of Wind** | - Accuracy +4<br>- Evasion +4<br>- Atk. Spd. +20%<br>- 5% Vampiric Rage<br>- +20% Crit. Rate/Power (from behind)<br>- Debuff Resist +10% |
| **Victory of Paagrio (IL)** | - Max HP +20%<br>- Speed -20%<br>- Accuracy +4<br>- P.Def. +20%<br>- P.Atk. +10%<br>- Atk. Spd. +20%<br>- Crit. Rate/Power +20%<br>- M.Def. +20%<br>- M.Atk. +20%<br>- Cast. Speed +20%<br>- Debuff Resist +20% |
| **Chant of Victory** | - Max HP +20%<br>- Speed -20%<br>- Accuracy +4<br>- P.Def. +20%<br>- P.Atk. +10%<br>- Atk. Spd. +20%<br>- Crit. Rate/Power +20%<br>- M.Def. +20%<br>- M.Atk. +20%<br>- Cast. Speed +20%<br>- Debuff Resist +20% 
</figure>


