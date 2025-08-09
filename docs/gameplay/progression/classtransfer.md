---
icon: material/comment-question
---

<style>
.md-typeset a {
    color: var(--md-typeset-color);
    text-decoration: none;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.margin = '2em 0';
    
    const select = document.createElement('select');
    select.id = 'race-selector';
    
    select.style.cssText = `
        padding: 0.8em 1.5em;
        font-size: 1.1em;
        border-radius: 20px;
        border: 1px solid var(--md-default-fg-color--light);
        background-color: var(--md-default-bg-color);
        color: var(--md-default-fg-color);
        cursor: pointer;
        transition: all 0.25s ease;
        background-repeat: no-repeat;
        background-position: right 0.7em center;
        background-size: 1em;
        min-width: 200px;
        text-align:center;
    `;
    
    select.addEventListener('mouseover', function() {
        this.style.borderColor = 'var(--md-accent-fg-color)';
    });
    
    select.addEventListener('mouseout', function() {
        this.style.borderColor = 'var(--md-default-fg-color--light)';
    });
    
    select.addEventListener('focus', function() {
        this.style.outline = 'none';
        this.style.boxShadow = '0 0 0 2px var(--md-accent-fg-color--transparent)';
        this.style.borderColor = 'var(--md-accent-fg-color)';
    });
    
    select.addEventListener('blur', function() {
        this.style.boxShadow = 'none';
        this.style.borderColor = 'var(--md-default-fg-color--light)';
    });
    
    const races = ['All Races', 'Human', 'Elf', 'Dark Elf', 'Orc', 'Dwarf'];
    races.forEach(race => {
        const option = document.createElement('option');
        option.value = race;
        option.textContent = race;
        select.appendChild(option);
    });
    
    container.appendChild(select);
    
    const firstH2 = document.querySelector('h2');
    if (firstH2) {
        firstH2.parentNode.insertBefore(container, firstH2);
    }
    
    select.addEventListener('change', function() {
        const selectedRace = this.value;
        let currentElement = firstH2;
        
        while (currentElement) {
            if (currentElement.tagName === 'H2') {
                const isRaceHeader = races.slice(1).includes(currentElement.textContent);
                const shouldShow = selectedRace === 'All Races' || 
                                 currentElement.textContent === selectedRace || 
                                 !isRaceHeader;
                
                let nextElement = currentElement.nextElementSibling;
                currentElement.style.display = shouldShow ? '' : 'none';
                
                while (nextElement && nextElement.tagName !== 'H2') {
                    nextElement.style.display = shouldShow ? '' : 'none';
                    nextElement = nextElement.nextElementSibling;
                }
            }
            currentElement = currentElement.nextElementSibling;
        }
    });
    
    select.dispatchEvent(new Event('change'));
});
</script>

# Class Transfers

All of the Quests are set to Chronicle 4. If you are playing a different version, set it to the one you are playing on. **(WIP)**{style="color:red;"}

[![change-chronicle.gif](https://i.postimg.cc/prP4fjnD/change-chronicle.gif){.lightbox}](https://postimg.cc/Kks0FRfz)

2nd class transfer quest **step can be saved** if you click on the desired row, so you can continue where you left off.

## Human

### Tanks

- [Human Knight](https://lineage2wiki.org/c4/quest/402/path-to-a-human-knight/) :material-arrow-right: [Paladin](/faq/classtransfers/paladin) :material-arrow-right: [Phoenix Knight](https://lineage2wiki.org/c4/quest/70/succession-to-the-legend-phoenix-knight/)
- [Human Knight](https://lineage2wiki.org/c4/quest/402/path-to-a-human-knight/) :material-arrow-right: [Dark Avenger](/faq/classtransfers/darkavenger) :material-arrow-right: [Hell Knight](https://lineage2wiki.org/c4/quest/95/succession-to-the-legend-hell-knight/)

### Warriors

- [Warrior](https://lineage2wiki.org/c4/quest/401/path-to-a-warrior/) :material-arrow-right: [Warlord](/faq/classtransfers/warlord) :material-arrow-right: [Dreadnoughts](https://lineage2wiki.org/c4/quest/74/succession-to-the-legend-dreadnoughts/)
- [Warrior](https://lineage2wiki.org/c4/quest/401/path-to-a-warrior/) :material-arrow-right: [Gladiator](/faq/classtransfers/gladiator) :material-arrow-right: [Duelist](https://lineage2wiki.org/c4/quest/73/succession-to-the-legend-duelist/)

### Wizards

- [Human Wizard](https://lineage2wiki.org/c4/quest/404/path-to-a-human-wizard/) :material-arrow-right: [Spellsinger](/faq/classtransfers/spellsinger) :material-arrow-right: [Arcana Lord](https://lineage2wiki.org/c4/quest/91/succession-to-the-legend-arcana-lord/)
- [Human Wizard](https://lineage2wiki.org/c4/quest/404/path-to-a-human-wizard/) :material-arrow-right: [Sorcerer](/faq/classtransfers/sorcerer) :material-arrow-right: [Archmage](https://lineage2wiki.org/c4/quest/88/succession-to-the-legend-archmage/)
- [Human Wizard](https://lineage2wiki.org/c4/quest/404/path-to-a-human-wizard/) :material-arrow-right: [Necromancer](/faq/classtransfers/necromancer) :material-arrow-right: [Soultaker](https://lineage2wiki.org/c4/quest/94/succession-to-the-legend-soultaker/)

### Clerics

- [Cleric](https://lineage2wiki.org/c4/quest/405/path-to-a-cleric/) :material-arrow-right: [Bishop](/faq/classtransfers/bishop) :material-arrow-right: [Cardinal](https://lineage2wiki.org/c4/quest/85/succession-to-the-legend-cardinal/)
- [Cleric](https://lineage2wiki.org/c4/quest/405/path-to-a-cleric/) :material-arrow-right: [Prophet](/faq/classtransfers/prophet) :material-arrow-right: [Hierophant](https://lineage2wiki.org/c4/quest/86/succession-to-the-legend-hierophant/)

### Rogues

- [Rogue](https://lineage2wiki.org/c4/quest/403/path-to-a-rogue/) :material-arrow-right: [Hawkeye](/faq/classtransfers/hawkeye) :material-arrow-right: [Sagittarius](https://lineage2wiki.org/c4/quest/82/succession-to-the-legend-sagittarius/)
- [Rogue](https://lineage2wiki.org/c4/quest/403/path-to-a-rogue/) :material-arrow-right: [Treasure Hunter](/faq/classtransfers/treasurehunter) :material-arrow-right: [Adventurer](https://lineage2wiki.org/c4/quest/79/succession-to-the-legend-adventurer/)

## Elf

### Elven Knights

- [Elven Knight](https://lineage2wiki.org/c4/quest/406/path-to-an-elven-knight/) :material-arrow-right: [Swordsinger](/faq/classtransfers/swordsinger) :material-arrow-right: [Sword Muse](https://lineage2wiki.org/c4/quest/72/succession-to-the-legend-sword-muse/)
- [Elven Knight](https://lineage2wiki.org/c4/quest/406/path-to-an-elven-knight/) :material-arrow-right: [Temple Knight](/faq/classtransfers/templeknight) :material-arrow-right: [Eva's Templar](https://lineage2wiki.org/c4/quest/71/succession-to-the-legend-evas-templar/)

### Elven Scouts

- [Elven Scout](https://lineage2wiki.org/c4/quest/407/path-to-an-elven-scout/) :material-arrow-right: [Plainswalker](/faq/classtransfers/plainswalker) :material-arrow-right: [Wind Rider](https://lineage2wiki.org/c4/quest/80/succession-to-the-legend-wind-rider/)
- [Elven Scout](https://lineage2wiki.org/c4/quest/407/path-to-an-elven-scout/) :material-arrow-right: [Silver Ranger](/faq/classtransfers/silverranger) :material-arrow-right: [Moonlight Sentinel](https://lineage2wiki.org/c4/quest/83/succession-to-the-legend-moonlight-sentinel/)

### Elven Wizards

- [Elven Wizard](https://lineage2wiki.org/c4/quest/408/path-to-an-elven-wizard/) :material-arrow-right: [Spellsinger](/faq/classtransfers/spellsinger) :material-arrow-right: [Mystic Muse](https://lineage2wiki.org/c4/quest/89/succession-to-the-legend-mystic-muse/)
- [Elven Wizard](https://lineage2wiki.org/c4/quest/408/path-to-an-elven-wizard/) :material-arrow-right: [Elemental Summoner](/faq/classtransfers/elementalsummoner) :material-arrow-right: [Elemental Master](https://lineage2wiki.org/c4/quest/92/succession-to-the-legend-elemental-master/)

### Elven Oracle

- [Elven Oracle](https://lineage2wiki.org/c4/quest/409/path-to-an-elven-oracle/) :material-arrow-right: [Elven Elder](/faq/classtransfers/elvenelder) :material-arrow-right: [Eva's Saint](https://lineage2wiki.org/c4/quest/87/succession-to-the-legend-evas-saint/)

## Dark Elf

### Dark Wizards

- [Dark Wizard](https://lineage2wiki.org/c4/quest/412/path-to-a-dark-wizard/) :material-arrow-right: [Spellhowler](/faq/classtransfers/spellhowler) :material-arrow-right: [Storm Screamer](https://lineage2wiki.org/c4/quest/90/succession-to-the-legend-storm-screamer/)
- [Dark Wizard](https://lineage2wiki.org/c4/quest/412/path-to-a-dark-wizard/) :material-arrow-right: [Phantom Summoner](/faq/classtransfers/phantomsummoner) :material-arrow-right: [Spectral Master](https://lineage2wiki.org/c4/quest/93/succession-to-the-legend-spectral-master/)

### Palus Knights

- [Palus Knight](https://lineage2wiki.org/c4/quest/410/path-to-a-palus-knight/) :material-arrow-right: [Shillien Knight](/faq/classtransfers/shillienknight) :material-arrow-right: [Shillien Templar](https://lineage2wiki.org/c4/quest/97/succession-to-the-legend-shillien-templar/)
- [Palus Knight](https://lineage2wiki.org/c4/quest/410/path-to-a-palus-knight/) :material-arrow-right: [Bladedancer](/faq/classtransfers/bladedancer) :material-arrow-right: [Spectral Dancer](https://lineage2wiki.org/c4/quest/96/succession-to-the-legend-spectral-dancer/)

### Assassins

- [Assassin](https://lineage2wiki.org/c4/quest/411/path-to-an-assassin/) :material-arrow-right: [Abyss Walker](/faq/classtransfers/abysswalker) :material-arrow-right: [Ghost Sentinel](https://lineage2wiki.org/c4/quest/84/succession-to-the-legend-ghost-sentinel/)
- [Assassin](https://lineage2wiki.org/c4/quest/411/path-to-an-assassin/) :material-arrow-right: [Phantom Ranger](/faq/classtransfers/phantomranger) :material-arrow-right: [Ghost Hunter](https://lineage2wiki.org/c4/quest/81/succession-to-the-legend-ghost-hunter/)

### Shillien Oracle

- [Shillien Oracle](https://lineage2wiki.org/c4/quest/413/path-to-a-shillien-oracle/) :material-arrow-right: [Shillien Elder](/faq/classtransfers/shillienelder) :material-arrow-right: [Shillien Saint](https://lineage2wiki.org/c4/quest/98/succession-to-the-legend-shillien-saint/)

## Orc

### Orc Fighters

- [Orc Raider](https://lineage2wiki.org/c4/quest/414/path-to-an-orc-raider/) :material-arrow-right: [Destroyer](/faq/classtransfers/destroyer) :material-arrow-right: [Titan](https://lineage2wiki.org/c4/quest/75/succession-to-the-legend-titan/)
- [Monk](https://lineage2wiki.org/c4/quest/415/path-to-a-monk/) :material-arrow-right: [Tyrant](/faq/classtransfers/tyrant) :material-arrow-right: [Grand Khavatari](https://lineage2wiki.org/c4/quest/76/succession-to-the-legend-grand-khavatari/)

### Orc Shamans

- [Orc Shaman](https://lineage2wiki.org/c4/quest/416/path-to-an-orc-shaman/) :material-arrow-right: [Overlord](/faq/classtransfers/overlord) :material-arrow-right: [Dominator](https://lineage2wiki.org/c4/quest/77/succession-to-the-legend-dominator/)
- [Orc Shaman](https://lineage2wiki.org/c4/quest/416/path-to-an-orc-shaman/) :material-arrow-right: [Warcryer](/faq/classtransfers/warcryer) :material-arrow-right: [Doomcryer](https://lineage2wiki.org/c4/quest/78/succession-to-the-legend-doomcryer/)

## Dwarf

- [Artisan](https://lineage2wiki.org/c4/quest/418/path-to-an-artisan/) :material-arrow-right: [Warsmith](/faq/classtransfers/warsmith) :material-arrow-right: [Maestro](https://lineage2wiki.org/c4/quest/100/succession-to-the-legend-maestro/)
- [Scavenger](https://lineage2wiki.org/c4/quest/417/path-to-become-a-scavenger/) :material-arrow-right: [Bounty Hunter](/faq/classtransfers/bountyhunter) :material-arrow-right: [Fortune Seeker](https://lineage2wiki.org/c4/quest/99/succession-to-the-legend-fortune-seeker/)