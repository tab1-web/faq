(function() {
    function initTableInteractions() {
        const cells = document.querySelectorAll("table td");
        if (cells.length === 0) return;

        const excluded = ["Inspector", "Kamael:"];

        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                const cellValue = cell.textContent.trim();
                if (excluded.includes(cellValue)) return;

                const offTargets = getOffTargets(cellValue);
            
                cells.forEach(c => {
                    const value = c.textContent.trim();
                    c.classList.remove("selected");

                    if (offTargets.includes(value)) {
                        c.classList.add("off");
                    } else {
                        c.classList.remove("off");
                    }
                    if (value === cellValue) {
                        c.classList.add("selected");
                    }
                });
            });
        });

        function getOffTargets(cellValue) {
            const map = {
        "Dark Avenger": ["Temple Knight", "Shillien Knight", "Paladin", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Paladin": ["Dark Avenger", "Shillien Knight", "Temple Knight", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],
      
        "Temple Knight": ["Dark Avenger", "Shillien Knight", "Warsmith", "Paladin", "Bladedancer", "Abyss Walker", "Overlord", "Phantom Ranger", 
        "Phantom Summoner", "Spellhowler", "Shillien Elder", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Shillien Knight": ["Dark Avenger", "Temple Knight", "Warsmith", "Paladin", "Swordsinger", "Overlord", "Plainswalker", "Silver Ranger", "Elemental Summoner", "Spellsinger", "Elven Elder", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Destroyer": ["Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Warsmith": ["Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Swordsinger": ["Shillien Knight", "Bladedancer", "Abyss Walker", "Phantom Ranger", "Phantom Summoner", "Spellhowler", "Shillien Elder", "Overlord", "Warsmith", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Bladedancer": ["Temple Knight", "Swordsinger", "Plainswalker", "Silver Ranger", "Elemental Summoner", "Spellsinger", "Elven Elder",  "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],
        
        "Tyrant": ["Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Bounty Hunter": ["Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Treasure Hunter": ["Plainswalker", "Abyss Walker", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Plainswalker": ["Treasure Hunter", "Shillien Knight", "Bladedancer", "Abyss Walker", "Phantom Ranger", "Phantom Summoner", "Spellhowler", "Shillien Elder", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Abyss Walker": ["Temple Knight", "Swordsinger", "Plainswalker", "Silver Ranger", "Elemental Summoner", "Spellsinger", "Elven Elder", "Treasure Hunter", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Overlord": ["Warsmith", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Hawkeye": ["Silver Ranger", "Phantom Ranger", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],
        
        "Silver Ranger": ["Hawkeye", "Shillien Knight", "Bladedancer", "Abyss Walker", "Phantom Ranger", "Phantom Summoner", "Spellhowler", "Shillien Elder", "Overlord", "Warsmith", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Phantom Ranger": ["Hawkeye", "Temple Knight", "Swordsinger", "Plainswalker", "Silver Ranger", "Elemental Summoner", "Spellsinger", "Elven Elder", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Warcryer": ["Overlord", "Warsmith", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Warlock": ["Elemental Summoner", "Phantom Summoner", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Elemental Summoner": ["Warlock", "Shillien Knight", "Bladedancer", "Abyss Walker", "Phantom Ranger", "Phantom Summoner", "Spellhowler", "Shillien Elder", "Overlord", "Warsmith", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Phantom Summoner": ["Warlock", "Temple Knight", "Swordsinger", "Plainswalker", "Silver Ranger", "Elemental Summoner", "Spellsinger", "Elven Elder", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Sorcerer": ["Spellsinger", "Spellhowler", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Spellsinger": ["Sorcerer", "Shillien Knight", "Bladedancer", "Abyss Walker", "Phantom Ranger", "Phantom Summoner", "Spellhowler", "Shillien Elder", "Overlord", "Warsmith", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Spellhowler": ["Sorcerer", "Temple Knight", "Swordsinger", "Plainswalker", "Silver Ranger", "Elemental Summoner", "Spellsinger", "Elven Elder", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Necromancer": ["Overlord", "Warsmith", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Elven Elder": ["Shillien Knight", "Bladedancer", "Abyss Walker", "Phantom Ranger", "Phantom Summoner", "Spellhowler", "Shillien Elder", "Overlord", "Warsmith", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Shillien Elder": ["Temple Knight", "Swordsinger", "Plainswalker", "Silver Ranger", "Elemental Summoner", "Spellsinger", "Elven Elder", "Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Warlord": ["Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Gladiator": ["Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Bishop": ["Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Prophet": ["Warsmith", "Overlord", "Berserker", "Soulbreaker", "Arbalester", "Inspector"],

        "Berserker": ["Inspector", "Dark Avenger", "Temple Knight", "Shillien Knight", "Destroyer", "Warsmith", "Paladin", "Swordsinger", "Bladedancer", "Tyrant", "Bounty Hunter", "Treasure Hunter", "Plainswalker", "Abyss Walker",  "Overlord", "Hawkeye", "Silver Ranger", "Phantom Ranger", "Warcryer", "Warlock", "Elemental Summoner", "Phantom Summoner", "Sorcerer", "Spellsinger", "Spellhowler", "Necromancer", "Elven Elder", "Shillien Elder", "Warlord", "Gladiator", "Bishop", "Prophet"],

        "Soulbreaker": ["Inspector", "Dark Avenger", "Temple Knight", "Shillien Knight", "Destroyer", "Warsmith", "Paladin", "Swordsinger", "Bladedancer", "Tyrant", "Bounty Hunter", "Treasure Hunter", "Plainswalker", "Abyss Walker",  "Overlord", "Hawkeye", "Silver Ranger", "Phantom Ranger", "Warcryer", "Warlock", "Elemental Summoner", "Phantom Summoner", "Sorcerer", "Spellsinger", "Spellhowler", "Necromancer", "Elven Elder", "Shillien Elder", "Warlord", "Gladiator", "Bishop", "Prophet"],

        "Arbalester": ["Inspector", "Dark Avenger", "Temple Knight", "Shillien Knight", "Destroyer", "Warsmith", "Paladin", "Swordsinger", "Bladedancer", "Tyrant", "Bounty Hunter", "Treasure Hunter", "Plainswalker", "Abyss Walker",  "Overlord", "Hawkeye", "Silver Ranger", "Phantom Ranger", "Warcryer", "Warlock", "Elemental Summoner", "Phantom Summoner", "Sorcerer", "Spellsinger", "Spellhowler", "Necromancer", "Elven Elder", "Shillien Elder", "Warlord", "Gladiator", "Bishop", "Prophet"],
            };
            return map[cellValue] || [];
        }
    }

    document.addEventListener('DOMContentLoaded', initTableInteractions);

    if (typeof document$ !== 'undefined') {
        document$.subscribe(function() {
            setTimeout(initTableInteractions, 100);
        });
    }

    if (document.readyState === 'complete') {
        initTableInteractions();
    }
})();
