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
    Symbol Makers apply the dyes on you for a fee (needs 10 Dyes), they can be found in most **Magic Shops**.

    Adena Fee can be 149k to 258k for the better ones. 
    
    > It's cheaper to apply +3/+2 than +4/+1.

- <figure markdown>
    [![symbolmakers.png](https://i.postimg.cc/nrL9TP1V/symbolmakers.png){width=55%;}](https://postimg.cc/jwGjSv9B)
    </figure>
</div>

!!! warning "1st Class Only Dyes"
    There are some Dyes that are only for 1st class and won't be applied on 2nd class transfer. **Example:**<br>

    <figure markdown>
    [![184-AB0-B9-0-C30-41-A0-A347-F35-D808-E1-CB9.png](https://i.postimg.cc/RFzbs1t3/184-AB0-B9-0-C30-41-A0-A347-F35-D808-E1-CB9.png){width=40%}](https://postimg.cc/CZmNdqmY)
    </figure>


## Dyes Calculator

<figure>
    <div>
        <label for="class-select">Select Class:</label>
        <select id="class-select">
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

## Dyes and what they increase

<figure markdown>

| Name    | Stat    |
|---|---|
| **STR**{style="color:rgb(139, 0, 137); font-weight: bold;"}    | +P. Atk    |
| **DEX**{style="color:rgb(197, 223, 103); font-weight: bold;"}    | +Atk.Spd, +Accuracy, +Evasion +Critical, +Speed, +Shield def. |
| **CON**{style="color:rgb(255, 0, 0); font-weight: bold;"}    | +Max HP, +HP Regen Speed, +Shock Resistance, +Bleed Resistance, +Poison Resistance |
| **INT**{style="color:rgb(25, 55, 164); font-weight: bold;"}    | +M. Atk, +Curse Success Chance    |
| **WIT**{style="color:rgb(42, 169, 55); font-weight: bold;"}    | +Cast. Speed |
| **MEN**{style="color:rgb(0, 255, 251); font-weight: bold;"}    | +M. Def, +Max MP, +MP Regen Speed, +Cast Interrupt Resistance, +Abnormal Resistance. <br> (Hold, Silence, Sleep, Fear, Paralysis, Magic that decreases Cast. Speed, Heal Reduction) |

</figure>

<script defer src="/faq/gameplay/js/dyes.js"></script>