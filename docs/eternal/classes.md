---
icon: octicons/people-16
---

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
        padding-top: 20px;
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

# Classes

## Meta Classes

**Below, you'll find an overview of the top meta classes, organized by role**{style="color:rgb(198, 59, 161);"}. Each post highlights key traits to help you choose based on playstyle and leveling experience. I've also included embedded videos for each class to give you a visual feel for how they play, **support the original creators.** ☺️

### Why These Classes?

I've focused on the most versatile and beginner-friendly options—classes that perform well in most content. Some niche or highly specialized picks aren't listed here, as they're less ideal for newcomers.

As starter, I would choose a farm character like a Spellsinger/Spellhowler.

<div class="filter-container">
    <select id="classFilter" class="class-filter">
        <optgroup label="Daggers">
            <option value="treasure-hunter">Treasure Hunter</option>
            <option value="abyss-walker">Abyss Walker</option>
            <option value="plainswalker">Plainswalker</option>
        </optgroup>
        <optgroup label="Other Fighters">
            <option value="tyrant">Tyrant</option>
            <option value="titan">Titan</option>
            <option value="gladiator">Gladiator</option>
        </optgroup>
        <optgroup label="Archers">
            <option value="phantom-ranger">Phantom Ranger</option>
            <option value="hawkeye">Hawkeye</option>
            <option value="silver-ranger">Silver Ranger</option>
        </optgroup>
        <optgroup label="Mages">
            <option value="necromancer">Necromancer</option>
            <option value="spellsinger">Spellsinger</option>
            <option value="sorcerer">Sorcerer</option>
            <option value="spellhowler">Spellhowler</option>
        </optgroup>
        <optgroup label="Support">
            <option value="bishop">Bishop</option>
            <option value="warlord">Warlord</option>
            <option value="dominator">Dominator</option>
        </optgroup>
        <optgroup label="Economy">
            <option value="spoiler">Spoiler</option>
            <option value="artisan">Artisan</option>
        </optgroup>
    </select>
</div>

<p style="color:grey; text-align:center;">Choose a class!</p>

<div id="treasure-hunter" class="class-card">
    <h2>Treasure Hunter</h2>
    <p>Great lethal damage, has access to Dash that can be up most of the time. Broken melee assassin.</p>
    <p>- <strong>Leveling:</strong> Medium</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">Burst Damage, close combat PvP, DM Events</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/aOgVeADIGV0" frameborder="0" allowfullscreen></iframe>
</div>

<div id="abyss-walker" class="class-card">
    <h2>Abyss Walker</h2>
    <p>Low maximum HP, Balanced offensive capabilities. Treasure Hunter more preferable for quick disengage and higher HP.</p>
    <p>- <strong>Leveling:</strong> Medium</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">Burst Damage, close combat PvP</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/p8938aIAKHo" frameborder="0" allowfullscreen></iframe>
</div>

<div id="plainswalker" class="class-card">
    <h2>Plainswalker</h2>
    <p>Bit higher evasion, specializing in mobility and using skills for damaging, low damage on hits. Treasure Hunter more preferable for higher HP and better damage.</p>
    <p>- <strong>Leveling:</strong> Medium</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">Evasion, Mobility</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/vl9YF89d0hU" frameborder="0" allowfullscreen></iframe>
</div>

<div id="tyrant" class="class-card">
    <h2>Tyrant</h2>
    <p>Versatile PvP brawler class using fist weapons, deadliest on Low HP with Zealot. Combines range skills with powerful close-combat combos.</p>
    <p>- <strong>Leveling:</strong> Medium</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">HP, Burst Combos, PvE/PvP mix, Olympiad</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/km9de1lEqck" frameborder="0" allowfullscreen></iframe>
</div>

<div id="titan" class="class-card">
    <h2>Titan</h2>
    <p>High HP and broken melee damage on low HP. Performs exceptionally in boss encounters. For Solo farm mages are more preferable due to being limited to melee in a large population server with lot of mages.</p>
    <p>- <strong>Leveling:</strong> Medium</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">High HP, AoE Damage with Spear, Boss Killer, DM events</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/DsF0ve8ZYzA" frameborder="0" allowfullscreen></iframe>
</div>

<div id="gladiator" class="class-card">
    <h2>Gladiator</h2>
    <p>Skilled dual-sword fighter more effective in Olympiad. Balanced melee and ranged abilities.</p>
    <p>- <strong>Leveling:</strong> Slow</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">Great 1v1 combat, ranged attack options, high defenses, Olympiad</span></p>
    
    <iframe width="399" height="226" src="https://www.youtube.com/embed/n0XzV1NFdMM" frameborder="0" allowfullscreen></iframe>
</div>

<div id="phantom-ranger" class="class-card">
    <h2>Phantom Ranger</h2>
    <p>Highest burst damage among archers but comes with lower durability. Hawkeye more preferable.</p>
    <p>- <strong>Leveling:</strong> Slower</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">High Damage, PvP DPS</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/JvYSaiBc4gU" frameborder="0" allowfullscreen></iframe>
</div>

<div id="hawkeye" class="class-card">
    <h2>Hawkeye</h2>
    <p>Balanced archer with superior HP. Great for surviving and kiting enemies from range. Hit based <a href="/faq/gameplay/abbreviations">(F1)</a> Archer.</p>
    <p>- <strong>Leveling:</strong> Slower</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">Durability, Balanced Stats</span></p>
    <h3>Buff Setup</h3>
    <figure><a href="https://postimg.cc/181t4D2x"><image src="https://i.postimg.cc/2SVBcwx5/Hawkeye.png"></image></a></figure>

    <p>If you are pulling or just need <strong style="color:yellow;">Movement Speed</strong> for moving around the world, cancel Chant of Victory and Apply <strong style="color:yellow;">Prophecy of Wind</strong> instead.</p>

    <p>Daggers have higher attack speed, therefore you can have better uptime of Dash if you use it with a Dagger. Use a <strong style="color:red;">Rsk. Haste</strong> dagger like <strong style="color:red;">Cursed Dagger</strong>, when <strong style="color:red;">HP drops to 60%</strong> or lower, it increases Atk. Speed as well.</p>

    <p>In Deathmatches you can also skip Windwalk and Song of Wind and get more resists as you won't be moving around too much.</p>

    <h3>Video</h3>

    <iframe width="399" height="226" src="https://www.youtube.com/embed/pGkkp3C1zVk" frameborder="0" allowfullscreen></iframe>
</div>

<div id="silver-ranger" class="class-card">
  <h2>Silver Ranger</h2>
  <p>Fast attack speed with balanced HP and good movement speed. Skill type build requires committing to fights due to cast time. Hawkeye more preferable.</p>
  <p>- <strong>Leveling:</strong> Slower</p>
  <p>- <strong>Strengths:</strong> <span class="strengths">Attack Speed, Mobility</span></p>
  <h3>Buff Setup</h3>
  <figure>
    <a href="https://postimg.cc/F1wJ28FV">
    <image src="https://i.postimg.cc/Wb16JcQC/Silver-Ranger.png"></image>
    </a>
  </figure>

  <p>Feel free to change around the shield buffs for other resists or trying to remove Berserker Spirit, in PvP: it feels worse to have. Most of the players are playing either <strong style="color:purple;">Necromancer</strong> or <strong style="color:cyan;">Spellsinger</strong>, so you can stack more <strong style="color:purple;">Unholy</strong> +  <strong style="color:cyan;">Water resists</strong> against them.</p>

  <p>For farming, a <strong style="color:red;">more critical based buffs</strong> are preferred.</p>

  <p>If you are pulling or just need <strong style="color:yellow;">Movement Speed</strong> for moving around the world, cancel Chant of Victory and Apply <strong style="color:yellow;">Prophecy of Wind</strong> instead. Chant of Victory is nice for Extra P. Def. when you feel like you are taking too much damage from monsters. I recommend checking out the <a href="/faq/gameplay/monsters">Monsters Page</a> and <a href="/faq/gameplay/buffs">Buffs Page</a> as well for more insight.</p>

  <p>In Deathmatches you can also skip Windwalk and Song of Wind and get more resists as you won't be moving around too much.</p>

  <h3>Video</h3>
  <iframe width="399" height="226" src="https://www.youtube.com/embed/YGUVCegLs9Y" frameborder="0" allowfullscreen></iframe>
</div>

<div id="necromancer" class="class-card">
    <h2>Necromancer</h2>
    <p>Durable mage using Transfer Pain to tank damage. Good for solo play.</p>
    <p>- <strong>Leveling:</strong> Fast</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">Survivability, Debuffs, Single target PvE, Curse Death Link, Vampiric Claw</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/9gpCHKUK2Xs" frameborder="0" allowfullscreen></iframe>
</div>

<div id="spellsinger" class="class-card">
  <h2>Spellsinger</h2>
  <p>Fast-casting water magic specialist. Effective in both PvE and PvP. Sustains HP by Battle Healing themselves.</p>
  <p>- <strong>Leveling:</strong> Fast</p>
  <p>- <strong>Strengths:</strong> <span class="strengths">Casting Speed, access to AoE and Cancel (removes buffs)</span></p>
  <h3>Buff Setup</h3>
  <figure>
  <a href="https://postimg.cc/PLNDGjDK">
  <img src="https://i.postimg.cc/cJBBn1Lq/Spellsinger.png"></img>
  </a>
  </figure>

  <p>Feel free to test without the shield buffs, concentration for other resists or trying to remove Berserker Spirit, in PvP: it feels worse to have.</p>

  <p>If you want more Movement Speed, apply Magnus Chant instead of Prophecy of Water.</p>

  <p>If you want to save some adena for Mana Potions: Use Magnus Chant, Clarity and/or Song of Meditation.</p>

  <p>In Deathmatches you can also skip Windwalk and Song of Wind and get more resists as you won't be moving around too much.</p>

  <h3>Video</h3>
  <iframe width="399" height="226" src="https://www.youtube.com/embed/fwDoh4Fk1xg" frameborder="0" allowfullscreen></iframe>
</div>

<div id="sorcerer" class="class-card">
    <h2>Sorcerer</h2>
    <p>Fire mage with balanced casting speed and powerful AoE spells. Sustains HP by Battle Healing themselves. Spellsinger/Spellhowler more preferable.</p>
    <p>- <strong>Leveling:</strong> Fast</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">access to AoE and Cancel (removes buffs), Versatility</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/LKTji4TeSiI?start=601" frameborder="0" allowfullscreen></iframe>
</div>

<div id="spellhowler" class="class-card">
    <h2>Spellhowler</h2>
    <p>Dark magic user with slow casting but high magical damage. Low Maximum HP.</p>
    <p>- <strong>Leveling:</strong> Fast</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">PvE beast, great sustain due to Vampiric Claw in trains, Curse Death Link, access to AoE</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/a-nm-x5mC2I" frameborder="0" allowfullscreen></iframe>
</div>

<div id="bishop" class="class-card">
    <h2>Bishop</h2>
    <p>The best healer class in the game. Good for group PvE & PvP content. Not ideal for solo players.</p>
    <p>- <strong>Leveling:</strong> Limited to killing undead monsters.</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">Healing, Resurrection, Party Support</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/0BthJh62mL0" frameborder="0" allowfullscreen></iframe>
</div>

<div id="warlord" class="class-card">
    <h2>Warlord</h2>
    <p>Stunner / Stop party for PvP and Sieges. Good for group PvP content. Not ideal for solo players.</p>
    <p>- <strong>Leveling:</strong> Slow</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">Stun, High HP</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/3CbbG8KJkN4" frameborder="0" allowfullscreen></iframe>
</div>

<div id="dominator" class="class-card">
    <h2>Dominator</h2>
    <p>Clan support mage that shines in group play. Not ideal for solo players. Good for group PvP content.</p>
    <p>- <strong>Leveling:</strong> Slow</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">Clan Buffs, Ally Support, Mass PvP Utility: Debuffs, Olympiad</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/FnkDzy9Cehs" frameborder="0" allowfullscreen></iframe>
</div>

<div id="spoiler" class="class-card">
    <h2>Spoiler</h2>
    <p>Specialist in spoiling monsters for materials. A must for players looking to fund crafting or economy roles.</p>
    <p>- <strong>Leveling:</strong> Slow</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">Economy, Item Farming, PvE Utility</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/4pF6tOz4Efc" frameborder="0" allowfullscreen></iframe>
</div>

<div id="artisan" class="class-card">
    <h2>Artisan</h2>
    <p>Focuses on creating gear, items, and consumables for other players and himself. Spoiler more preferable for newer players.</p>
    <p>- <strong>Leveling:</strong> Slow</p>
    <p>- <strong>Strengths:</strong> <span class="strengths">Crafting, Economy playstyle</span></p>
    <iframe width="399" height="226" src="https://www.youtube.com/embed/jd_4V6nfb2E" frameborder="0" allowfullscreen></iframe>
</div>

<figure markdown>
[Buffs Info](/faq/gameplay/buffs/){ .md-button .lightbox }
</figure>

<script>
    document.getElementById('classFilter').addEventListener('change', function() {
        document.querySelectorAll('.class-card').forEach(card => {
            card.classList.remove('active');
        });
        
        const selectedValue = this.value;
        if (selectedValue) {
            document.getElementById(selectedValue).classList.add('active');
        }
    });

    document.getElementById('classFilter').dispatchEvent(new Event('change'));
</script>
