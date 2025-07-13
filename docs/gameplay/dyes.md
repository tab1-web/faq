---
icon: material/flask
---

# Dyes

## Dyes Info
<style>
    .dye-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        background-color:rgba(56, 56, 74, 0.9);
        color: #e0e0e0;
    }
    .dye-table th, .dye-table td {
        padding: 8px;
        text-align: center;
    }
    .dye-table th {
        background-color:rgb(39, 39, 53);
        color: #b388ff;
    }
    .available { 
        color: #69f0ae;
        font-weight: bold;
    }
    .not-available { 
        color: #ff5252;
        font-weight: bold;
    }
    
    .available {
        color: #69f0ae;
        font-weight: bold;
        text-shadow: 0 0 8px rgba(105, 240, 174, 0.3);
    }
    
    .not-available {
        color: #ff5252;
        font-weight: bold;
        text-shadow: 0 0 8px rgba(255, 82, 82, 0.3);
    }
    
    select {
        text-align: center;
        padding: 10px 15px;
        border-radius: 12px;
        border: 1px solid #3a3a4a;
        background-color: #2a2a3a;
        color: #e0e0e0;
        margin-bottom: 20px;
        font-size: 0.95em;
        appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23b388ff'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 12px center;
        background-size: 16px;
        padding-right: 36px;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    select:hover {
        border-color: #7c4dff;
    }
    
    select:focus {
        outline: none;
        border-color: #7c4dff;
        box-shadow: 0 0 0 3px rgba(124, 77, 255, 0.2);
    }
    
    label {
        color: #b388ff;
        margin-right: 12px;
        font-size: 0.95em;
        font-weight: 500;
    }
    
    .tables-container {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
    }
    
    .table-wrapper {
        flex: 1;
        min-width: 300px;
    }
    
    optgroup {
        text-align: center;
        font-style: normal;
        color: #d1c4e9;
        background-color: rgba(0,0,0,0.1);
    }
    
    option {
        padding: 8px 12px;
        background-color: #2a2a3a;
    }
    
    h3 {
        color: #b388ff;
        border-bottom: 2px solid #3a3a4a;
        padding-bottom: 8px;
        margin: 10px 0 16px 0 !important;
        font-size: 1.1em;
        font-weight: 600;
    }

    .green-row {
        background-color: rgba(0, 120, 40, 0.3);
    }
    
    .red-row {
        background-color: rgba(100, 20, 30, 0.3);
    }
    
    figure {
        margin: 2em 0;
    }
</style>

Each base class starts with different stats that come from **"Dye"** differences.

You can check below what dye combinations you can put on your character.

> Dyes you apply to your character can't be more +5. <br> **Example:** STR + 3 and STR + 4 cannot exceed +5. <br> <br> There is no limit to the reduction in values, but it is not possible to reduce an ability value all the way to zero.

<div class="grid cards" markdown>
- ### __:material-flask:__{ .middle } How To apply & remove Dyes
    Symbol Makers apply the dyes on you for a fee, they can be found in most **Magic Shops**.

    Adena Fee can be 149k to 258k for the better ones. 
    
    > It's cheaper to apply +3/+2 than +4/+1.

- <figure markdown>
    [![symbolmakers.png](https://i.postimg.cc/nrL9TP1V/symbolmakers.png){width=55%;}](https://postimg.cc/jwGjSv9B)
    </figure>
</div>

## Dyes Calculator

<figure>
    <div>
        <label for="class-select">Select Class:</label>
        <select id="class-select" onchange="updateTables()">
            <optgroup label="= Human Fighter =">
                <option value="human-fighter-gladiator">Gladiator</option>
                <option value="human-fighter-warlord">Warlord</option>
                <option value="human-fighter-paladin">Paladin</option>
                <option value="human-fighter-dark-avenger">Dark Avenger</option>
                <option value="human-fighter-treasure-hunter">Treasure Hunter</option>
                <option value="human-fighter-hawkeye">Hawkeye</option>
            </optgroup>
            <optgroup label="= Human Mage =">
                <option value="human-mage-sorcerer">Sorcerer</option>
                <option value="human-mage-necromancer">Necromancer</option>
                <option value="human-mage-warlock">Warlock</option>
                <option value="human-mage-bishop">Bishop</option>
                <option value="human-mage-prophet">Prophet</option>
            </optgroup>
            <optgroup label="= Elf Fighter =">
                <option value="elf-fighter-temple-knight">Temple Knight</option>
                <option value="elf-fighter-swordsinger">Swordsinger</option>
                <option value="elf-fighter-plainswalker">Plainswalker</option>
                <option value="elf-fighter-silver-ranger">Silver Ranger</option>
            </optgroup>
            <optgroup label="= Elf Mage =">
                <option value="elf-mage-spellsinger">Spellsinger</option>
                <option value="elf-mage-elemental-summoner">Elemental Summoner</option>
                <option value="elf-mage-elven-elder">Elven Elder</option>
            </optgroup>
            <optgroup label="= Dark Elf Fighter =">
                <option value="de-fighter-shillien-knight">Shillien Knight</option>
                <option value="de-fighter-bladedancer">Bladedancer</option>
                <option value="de-fighter-abyss-walker">Abyss Walker</option>
                <option value="de-fighter-phantom-ranger">Phantom Ranger</option>
            </optgroup>
            <optgroup label="= Dark Elf Mage =">
                <option value="de-mage-spellhowler">Spellhowler</option>
                <option value="de-mage-phantom-summoner">Phantom Summoner</option>
                <option value="de-mage-shillien-elder">Shillien Elder</option>
            </optgroup>
            <optgroup label="= Orc Fighter =">
                <option value="orc-fighter-destroyer">Destroyer</option>
                <option value="orc-fighter-tyrant">Tyrant</option>
            </optgroup>
            <optgroup label="= Orc Mage =">
                <option value="orc-mage-overlord">Overlord</option>
                <option value="orc-mage-warcryer">Warcryer</option>
            </optgroup>
            <optgroup label="= Dwarf Fighter =">
                <option value="dwarf-fighter-bounty-hunter">Bounty Hunter</option>
                <option value="dwarf-mage-warsmith">Warsmith</option>
            </optgroup>
            <optgroup label="= Kamael =">
                <option value="kamael-male">Kamael Male</option>
                <option value="kamael-female">Kamael Female</option>
            </optgroup>
        </select>
    </div>

    <div class="tables-container">
        <div class="table-wrapper">
            <h3>Base Stats</h3>
            <table class="dye-table">
                <thead>
                    <tr>
                        <th>Dye</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody id="stats-table">
                </tbody>
            </table>
        </div>
        
        <div class="table-wrapper">
            <h3>Dye Combinations</h3>
            <table class="dye-table">
                <thead>
                    <tr>
                        <th>Combination</th>
                        <th>Available</th>
                    </tr>
                </thead>
                <tbody id="dye-combinations-table">
                </tbody>
            </table>
        </div>
    </div>
</figure>

<script>
    const baseStats = {
        "fighter": {
            "human": { STR: 40, CON: 43, DEX: 30, WIT: 11, INT: 21, MEN: 25 },
            "elf": { STR: 36, CON: 36, DEX: 35, WIT: 14, INT: 23, MEN: 26 },
            "de": { STR: 41, CON: 32, DEX: 34, WIT: 12, INT: 25, MEN: 26 },
            "orc": { STR: 40, CON: 47, DEX: 26, WIT: 12, INT: 18, MEN: 27 },
            "dwarf": { STR: 39, CON: 45, DEX: 29, WIT: 10, INT: 20, MEN: 27 },
            "kamael": { STR: 41, CON: 31, DEX: 33, WIT: 11, INT: 29, MEN: 25 }
        },
        "mage": {
            "human": { STR: 22, CON: 27, DEX: 21, WIT: 20, INT: 41, MEN: 39 },
            "elf": { STR: 21, CON: 25, DEX: 24, WIT: 23, INT: 37, MEN: 40 },
            "de": { STR: 23, CON: 24, DEX: 23, WIT: 19, INT: 44, MEN: 37 },
            "orc": { STR: 25, CON: 31, DEX: 20, WIT: 21, INT: 31, MEN: 42 },
            "dwarf": { STR: 39, CON: 45, DEX: 29, WIT: 10, INT: 20, MEN: 27 },
            "kamael": { STR: 39, CON: 30, DEX: 35, WIT: 11, INT: 28, MEN: 27 }
        }
    };

    const dyeCombinations = {
        "intMen": [
            "human-mage-sorcerer", "human-mage-necromancer", "human-mage-warlock",
            "elf-mage-spellsinger", "elf-mage-elemental-summoner",
            "de-mage-spellhowler", "de-mage-phantom-summoner"
        ],
        
        "intWit": [
            "human-fighter-gladiator", "human-mage-warlock", "human-mage-necromancer", "human-mage-sorcerer", "human-fighter-warlord", "human-fighter-paladin",
            "human-fighter-dark-avenger", "elf-mage-spellsinger", "human-fighter-treasure-hunter", "human-fighter-hawkeye",
            "elf-fighter-temple-knight", "elf-fighter-swordsinger", "elf-fighter-plainswalker", "elf-mage-elemental-summoner",
            "elf-fighter-silver-ranger", "de-fighter-shillien-knight", "de-fighter-bladedancer",
            "de-fighter-abyss-walker", "dwarf-mage-warsmith", "de-fighter-phantom-ranger", "orc-fighter-destroyer",
            "orc-fighter-tyrant", "dwarf-fighter-bounty-hunter", "de-mage-spellhowler", "kamael-male", "kamael-female", "de-mage-phantom-summoner"
        ],
        
        "menWit": [
            "human-mage-bishop", "elf-mage-spellsinger", "human-mage-warlock", "human-mage-necromancer", "human-mage-sorcerer", "human-mage-prophet", "elf-mage-elven-elder", "elf-mage-elemental-summoner", 
            "de-mage-shillien-elder", "orc-mage-overlord", "orc-mage-warcryer",
            "de-mage-spellhowler", "de-mage-phantom-summoner"
        ]
    };

    const classTypes = {
        "human-fighter-gladiator": "fighter",
        "human-fighter-warlord": "fighter",
        "human-fighter-paladin": "fighter",
        "human-fighter-dark-avenger": "fighter",
        "human-fighter-treasure-hunter": "fighter",
        "human-fighter-hawkeye": "fighter",
        "human-mage-sorcerer": "mage",
        "human-mage-necromancer": "mage",
        "human-mage-warlock": "mage",
        "human-mage-bishop": "mage",
        "human-mage-prophet": "mage",
        
        "elf-fighter-temple-knight": "fighter",
        "elf-fighter-swordsinger": "fighter",
        "elf-fighter-plainswalker": "fighter",
        "elf-fighter-silver-ranger": "fighter",
        "elf-mage-spellsinger": "mage",
        "elf-mage-elemental-summoner": "mage",
        "elf-mage-elven-elder": "mage",
        
        "de-fighter-shillien-knight": "fighter",
        "de-fighter-bladedancer": "fighter",
        "de-fighter-abyss-walker": "fighter",
        "de-fighter-phantom-ranger": "fighter",
        "de-mage-spellhowler": "mage",
        "de-mage-phantom-summoner": "mage",
        "de-mage-shillien-elder": "mage",
        
        "orc-fighter-destroyer": "fighter",
        "orc-fighter-tyrant": "fighter",
        "orc-mage-overlord": "mage",
        "orc-mage-warcryer": "mage",
        
        "dwarf-fighter-bounty-hunter": "fighter",
        "dwarf-mage-warsmith": "fighter",
        
        "kamael-male": "fighter",
        "kamael-female": "fighter"
    };

    function updateTables() {
        const select = document.getElementById("class-select");
        const classId = select.value;
        const statsTable = document.getElementById("stats-table");
        const combinationsTable = document.getElementById("dye-combinations-table");
        
        statsTable.innerHTML = "";
        combinationsTable.innerHTML = "";

        const parts = classId.split('-');
        const race = parts[0];
        const classType = classTypes[classId];
        
        const stats = baseStats[classType][race];
        
        for (const stat in stats) {
            const row = document.createElement("tr");
            
            const statCell = document.createElement("td");
            statCell.textContent = stat;
            
            const valueCell = document.createElement("td");
            valueCell.textContent = stats[stat];
            
            row.appendChild(statCell);
            row.appendChild(valueCell);
            statsTable.appendChild(row);
        }
        
        const combinations = [
            { name: "STR/CON/DEX", available: true, classes: "All classes" },
            { 
                name: "INT+MEN", 
                available: dyeCombinations.intMen.includes(classId),
                classes: "Sorcerer, Necromancer, Warlock, Spellsinger, Elemental Summoner, Spellhowler, Phantom Summoner"
            },
            { 
                name: "INT+WIT", 
                available: dyeCombinations.intWit.includes(classId),
                classes: "Sorcerer, Necromancer, Warlock, Spellsinger, Elemental Summoner, Spellhowler, Phantom Summoner, Paladin, Gladiator, Warlord, Dark Avenger, Treasure Hunter, Hawkeye, Temple Knight, Swordsinger, Plainswalker, Silver Ranger, Shillien Knight, Bladedancer, Abyss Walker, Phantom Ranger, Destroyer, Tyrant, Bounty Hunter, Warsmith"
            },
            { 
                name: "MEN+WIT", 
                available: dyeCombinations.menWit.includes(classId),
                classes: "Sorcerer, Necromancer, Warlock, Spellsinger, Elemental Summoner, Spellhowler, Phantom Summoner, Bishop, Prophet, Elven Elder, Shillien Elder, Overlord, Warcryer"
            }
        ];
        
        combinations.forEach(combo => {
            const row = document.createElement("tr");
            
            const nameCell = document.createElement("td");
            nameCell.textContent = combo.name;
            
            const availableCell = document.createElement("td");
            availableCell.innerHTML = combo.available 
                ? '<span class="available">Yes</span>' 
                : '<span class="not-available">No</span>';
            
            row.appendChild(nameCell);
            row.appendChild(availableCell);
            if (combo.available) {
                row.classList.add('green-row');
            } else {
                row.classList.add('red-row');
            }
            combinationsTable.appendChild(row);
        });
    }

    updateTables();
</script>