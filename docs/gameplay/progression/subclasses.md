---
icon: material/dna

---
<style>

table td.off {
    color: grey;
    text-decoration: line-through;
}

table td {
    cursor: pointer;
}


table td.selected {
    font-size: large;
    font-weight: bold;
}

</style>

## :material-dna: General Info


Subclasses are a major milestone in your character's progression. If you finish the subclass quests,
you're eligible to unlock a new class on the same character that starts from level 40, 
allowing you to switch classes.

!!! tip "Quick Start"
    Talk to the appropriate **Class Master** in your village to switch between your **main class** and any **subclass** you've unlocked.

---

## :fontawesome-solid-scroll: Quests
To unlock your subclass, complete the following quests:

- :material-key: [**Fate's Whisper**](https://lineage2wiki.com/c4/quest/234/fates-whisper/)
    - [:material-skull: Hallate](https://lineage2wiki.com/c4/monster/10220/death-lord-hallate-raid-boss/) - Tower of Insolence - ([3rd floor](https://postimg.cc/ZRLXJ3Vw))
    - [:material-skull: Kernon](https://lineage2wiki.com/c4/monster/10054/kernon-raid-boss/) - Tower of Insolence - ([8th floor](https://postimg.cc/zBN9mpSL))
    - [:material-skull: Golkonda](https://lineage2wiki.com/c4/monster/10126/longhorn-golkonda-raid-boss/) - Tower of Insolence - ([11th floor](https://postimg.cc/d3tp31fw))
- :material-flask-outline: [**Mimir's Elixir**](https://lineage2wiki.com/c4/quest/235/mimirs-elixir/)

### :material-book: Subclass Mechanics

- Switching classes **removes active buffs and symbol skills**.
- The following information is **retained** between main and subclass:

    - :material-sword-cross: PvP/PK count
    - :material-account-group: Clan and siege info
    - :material-thumb-up: Recommendations and votes
    - :material-account-multiple: Friends and party
    - :material-scale-balance: Seven Signs progress
    - :material-book: Quest progress
    - :material-warehouse: Inventory & Warehouse

!!! note 
    Weight penalties still apply, and you may become **overloaded** after switching classes.

---

### :octicons-sliders-16: Subclass Limits

- Level up a subclass to **75** to unlock **two more**.
- There’s **no cooldown** or limit on how often you can switch.
- Subclasses are required to unlock:
    - :material-crown: **Noblesse**
    - :material-trophy: **Olympiad participation** requires Noblesse

---

## Subclass Selection Interactive Table

Your **main class is the selected one**, the cell turns `grey` if you can't have that subclass.

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
!!! warning
    You must **subclass twice** before subclassing Kamael Inspector.


    
<script>
if (!sessionStorage.getItem('subclassPageLoaded')) {
    sessionStorage.setItem('subclassPageLoaded', 'true');
    setTimeout(() => {
        window.location.reload();
    }, 100);
} else {
    sessionStorage.removeItem('subclassPageLoaded');
}

document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll("table td");
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
});


</script>

<figure markdown="span">
[C3 Patch Notes](https://lineage2wiki.com/c3/patch-notes/#subclasses){ .md-button .lightbox }
</figure>


