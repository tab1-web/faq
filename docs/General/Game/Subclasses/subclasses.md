## General
Subclasses are major part of progression in the game. It allows you essentially to have another class
on your main class, starting from level 40 that you can switch to.

When switching classes, the buff state and symbol information is not maintained.

You can switch between your main class and your subclasses through the appropriate Master of 
each class in the village.

Property of character, PvP/PK counter, information related to the clan/siege, recommended numeric 
value and number of votes, friends list, party information, numeric value related to the Seven Signs, 
and quest information are retained as in the previous class. Warehouse and inventory are also shared. 
Therefore, please note that, when switching classes, in some cases, you are not able to move due to 
weight restrictions.

!!! info
    You may not select a **similar class** as the subclass. The occupations classified as similar 
    classes are as follows:

    - Treasure Hunter, Plainswalker and Abyss Walker
    - Hawkeye, Silver Ranger and Phantom Ranger
    - Paladin, Dark Avenger, Temple Knight and Shillien Knight
    - Warlocks, Elemental Summoner and Phantom Summoner
    - Elder and Shillien Elder
    - Swordsinger and Bladedancer
    - Sorcerer, Spellsinger and Spellhowler

    If the race of the main class is **Elf** or **Dark Elf**, you may not select either class as a 
    subclass to the other class. You may not select either the Overlord or Warsmith class as a 
    subclass.

## Subclass Selection Interactive Table
Your main class is the selected one, the cell turns grey if you can't have that subclass.

| Human           | Elf                | Dark Elf         | Orc       | Dwarf         |
|-----------------|--------------------|------------------|-----------|---------------|
| Dark Avenger    | Temple Knight      | Shillien Knight  | Destroyer | Warsmith      |
| Paladin         | Swordsinger        | Bladedancer      | Tyrant    | Bounty Hunter |
| Treasure Hunter | Plainswalker       | Abyss Walker     | Overlord  |               |
| Hawkeye         | Silver Ranger      | Phantom Ranger   | Warcryer  |               |
| Warlock         | Elemental Summoner | Phantom Summoner |           |               |
| Sorcerer        | Spellsinger        | Spellhowler      |           |               |
| Necromancer     | Elven Elder        | Shillien Elder   |           |               |
| Warlord         |                    |                  |           |               |
| Gladiator       |                    |                  |           |               |
| Bishop          |                    |                  |           |               |

## For Origins & Forever H5 Kamael Tables:

<table>
    <tbody>
    <tr>
        <td style="font-weight: bold; border-right: .05rem solid var(--md-typeset-table-color);">Kamael:</td>
        <td>Berserker</td>
        <td>Soulbreaker</td>
        <td>Arbalester</td>
        <td class="off" style="cursor: not-allowed;">Inspector</td>
    </tr>
    </tbody>
</table>
You must **subclass twice** before subclassing Kamael Inspector.


    
<script>
document$.subscribe(function () {
  const cells = document.querySelectorAll("table td");
    const excluded = ["Inspector"];

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
});
</script>