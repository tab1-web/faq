---
icon: material/nintendo-game-boy

---

# Lineage II: A World of War & Power  

**Lineage II** is a high-fantasy MMORPG where players battle for dominance in a chaotic, war-torn world. Your character is a weapon—forge their strength, ally with clans, and shape history through conquest, politics, and siege warfare.  

---

### :material-sword-cross: **Key Features**  
- **Class-Driven Combat**: Choose from 5-7 races (Humans, Elves, Orcs, etc.) and 30+ classes with unique skill trees.  
- **Real-Time PvP & PK System**: Fight players or monsters in fast-paced combat with consequences for aggression.  
- **Clan Sieges**: Lead epic castle battles for territory control, taxes, and exclusive rewards  
- **Group-Centric Gameplay**: Buffs and class roles make teamwork essential for survival.  

---
### :material-dna: **Classes**

<div class="grid cards" markdown>
<ul markdown>
<li>
<strong>Classes Table</strong> 
<div class="md-typeset__table"><table>
<thead>
<tr>
<th>Race</th>
<th>Playstyle</th>
</tr>
</thead>
<tbody>
<tr>
<td>Human</td>
<td>Balanced base stats</td>
</tr>
<tr>
<td>Elf</td>
<td>Fast</td>
</tr>
<tr>
<td>Dark Elf</td>
<td>High Damage, Low HP</td>
</tr>
<tr>
<td>Orc</td>
<td>High Strength</td>
</tr>
<tr>
<td>Dwarf</td>
<td>Crafting-Economy/Melee</td>
</tr>
<tr>
<td>Kamael <strong>(Essence, Origins, H5)</strong></td>
<td>Hybrid Magic/Melee</td>
</tr>
<tr>
<td>Sylph <strong>(Essence only)</strong></td>
<td>Ranged Gun User</td>
</tr>
</tbody>
</table></div>
<strong>Progression</strong> <br>Start as a base class → Advance to specialized roles <br>(e.g., Dwarf Fighter → Scavenger → Bounty Hunter).  
</li>
<li>
<p><strong>Base Stats</strong></p>

<div style="max-width: 300px; margin: 0 auto;">
  <div style="display: flex; gap: 8px; margin-bottom: 8px;">
    <select id="class-select" style="padding: 4px; font-size: 12px; flex: 1;">
        <option value="Fighter">Fighter</option>
        <option value="Mage">Mage</option>
        <option value="Kamael">Kamael</option>
    </select>
    <select id="race-select" style="padding: 4px; font-size: 12px; flex: 1;">
      <!-- Options will be populated by JavaScript -->
    </select>
  </div>
  <div style="position: relative; height: 250px;">
    <canvas id="hexagonChart" height="250"></canvas>
  </div>
</div>
<p><strong>STR</strong> = Phys. Damage</p>
<p><strong>DEX</strong> = Atk. Spd, Accuracy, Evasion, Movement Speed, Critical Chance</p>
<p><strong>CON</strong> = Max. HP, HP Regen, Shock + Bleed Resistance</p>
<p><strong>INT</strong> = Magic Damage, Curse Success Probability</p>
<p><strong>WIT</strong> = Magic Crit Chance, Casting Spd, Debuff Res.</p>
<p style="text-align: center;"><strong>In C5</strong>: Debuff Resistance goes to MEN</p>
<p><strong>MEN</strong> = Magic Defense, Max MP, MP Regen, Less Magic Interruption, Poison Res.</p>
<p style="text-align: center;"><strong>In C5</strong>: Poison Resistance goes to CON</p>
<p><a href="https://lineage2wiki.com/c2/patch-notes/#basic_systems">C2 Source</a>, <a href="https://lineage2wiki.com/c5/patch-notes/#skills_and_magic">C5 Source</a></p>
</li>
</ul>
</div>
---

### :material-castle: **Siege Warfare**  
- **Goal**: Capture castles to control territories, impose taxes, and unlock rare perks.  
- **Dynamics**: Real-time strategy with siege weapons, clan alliances, and evolving tactics.  
- **Rewards**: Castle Lords gain Wyvern mounts, crafting monopolies, and political influence.  

---

> Your choices write history - conquer alone or rally a clan to dominance.  


<div class="grid cards" markdown>

- <iframe width="560" height="315" src="https://www.youtube.com/embed/oH6-k6-1FXM?si=Rv1PpMlf9PKAh0Iz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- <iframe width="560" height="315" src="https://www.youtube.com/embed/FYc7BRC7CX0" title="L2Reborn Origins - Euphoria - Cardinal PvP Movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>
<script>
if (!sessionStorage.getItem('gamePageLoaded')) {
    sessionStorage.setItem('gamePageLoaded', 'true');
    setTimeout(() => {
        window.location.reload();
    }, 100);
} else {
    sessionStorage.removeItem('gamePageLoaded');
}
</script>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
const statsData = {
  "Fighter": {
    "Human": { "STR": 40, "CON": 43, "DEX": 30, "WIT": 11, "INT": 21, "MEN": 25 },
    "Elf": { "STR": 36, "CON": 36, "DEX": 35, "WIT": 14, "INT": 23, "MEN": 26 },
    "Dark Elf": { "STR": 41, "CON": 32, "DEX": 34, "WIT": 12, "INT": 25, "MEN": 26 },
    "Dwarf": { "STR": 39, "CON": 45, "DEX": 29, "WIT": 10, "INT": 20, "MEN": 27 },
    "Orc": { "STR": 40, "CON": 47, "DEX": 26, "WIT": 12, "INT": 18, "MEN": 27 },
  },
  "Mage": {
    "Human": { "STR": 22, "CON": 27, "DEX": 21, "WIT": 20, "INT": 41, "MEN": 39 },
    "Elf": { "STR": 21, "CON": 25, "DEX": 24, "WIT": 23, "INT": 37, "MEN": 40 },
    "Dark Elf": { "STR": 23, "CON": 24, "DEX": 23, "WIT": 19, "INT": 44, "MEN": 37 },
    "Orc": { "STR": 25, "CON": 31, "DEX": 20, "WIT": 21, "INT": 31, "MEN": 42 },
  },
  "Kamael": {
    "Male": { "STR": 41, "CON": 31, "DEX": 33, "WIT": 11, "INT": 29, "MEN": 25 },
    "Female": { "STR": 39, "CON": 30, "DEX": 35, "WIT": 11, "INT": 28, "MEN": 27 },
  },
};

const ctx = document.getElementById('hexagonChart').getContext('2d');
let chart;

function populateRaceOptions() {
  const classSelect = document.getElementById('class-select');
  const raceSelect = document.getElementById('race-select');
  const selectedClass = classSelect.value;
  
  raceSelect.innerHTML = '';
  
  Object.keys(statsData[selectedClass]).forEach(race => {
    const option = document.createElement('option');
    option.value = race;
    option.textContent = race;
    raceSelect.appendChild(option);
  });
}

function createChart(stats) {
  if (chart) chart.destroy();
  
  chart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['STR', 'CON', 'DEX', 'WIT', 'INT', 'MEN'],
      datasets: [{
        data: [stats.STR, stats.CON, stats.DEX, stats.WIT, stats.INT, stats.MEN],
        backgroundColor: 'rgba(156, 39, 176, 0.2)',
        borderColor: 'rgba(156, 39, 176, 1)',
        borderWidth: 1,
        pointRadius: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: 10
      },
      scales: {
        r: {
          angleLines: { color: '#422378', lineWidth: 1 },
          suggestedMin: 0,
          suggestedMax: 50,
          ticks: {
            stepSize: 10,
            display: false
          },
          pointLabels: {
            font: {
              size: 10
            }
          },
          grid: {
            color: '#422378',
            lineWidth: 1
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          bodyFont: { size: 11 }
        }
      }
    }
  });
}

function updateChart() {
  const selectedClass = document.getElementById('class-select').value;
  const selectedRace = document.getElementById('race-select').value;
  const stats = statsData[selectedClass][selectedRace];
  createChart(stats);
}

document.getElementById('class-select').addEventListener('change', function() {
  populateRaceOptions();
  updateChart();
});

document.getElementById('race-select').addEventListener('change', updateChart);

populateRaceOptions();
updateChart();
</script>