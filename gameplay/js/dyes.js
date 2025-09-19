
(function() {
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
        "kamael-female": "mage"
    };

    function updateTables() {
        const select = document.getElementById("class-select");
        if (!select) return;
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

    function initStatsWidget() {
        updateTables();
        
        const select = document.getElementById("class-select");
        if (select) {
            select.addEventListener("change", updateTables);
        }
    }

    if (document.readyState === 'complete') {
        initStatsWidget();
    } else {
        document.addEventListener('DOMContentLoaded', initStatsWidget);
    }

    if (typeof document$ !== 'undefined') {
        document$.subscribe(() => {
            setTimeout(initStatsWidget, 100);
        });
    }
})();