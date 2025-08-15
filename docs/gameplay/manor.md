---
icon: material/seed
---

# Manor System

Thank you **@Shuma**{style="color:white;"} and **@Ascy**{style="color:red;"} for helping out on this page!

## Manor Tool

<figure>
<div class="manor-calc">
  <h3>Manor Calculator</h3>
  
  <select id="res_list" onchange="selRes(this.value)">
    <option value="0">Select Resource</option>
  </select>
  
  <div class="inputs">
    <input type="number" id="buy_price" placeholder="Fruit price (adena)" min="1">
    <input type="number" id="crop_num" placeholder="Fruits you have" min="1">
    <button onclick="doCalc()">Calculate</button>
  </div>

  <div id="result" class="result hidden"></div>
</div>
</figure>

<style>
.manor-calc {
  padding: 1rem;
  border-radius: 6px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  max-width: 400px;
}

.manor-calc h3 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

#buy_price, #crop_num {
    font-size: 13px !important;
}

.manor-calc select, .manor-calc input, .manor-calc button {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.75rem;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 4px;
  background: rgba(255,255,255,0.08);
  color: inherit;
  font-size: 0.9rem;
}

.manor-calc select:focus, .manor-calc input:focus {
  outline: none;
  border-color: #3F51B5;
  background: rgba(255,255,255,0.12);
}

.manor-calc button {
  background: #3F51B5;
  color: white;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 0;
}

.manor-calc button:hover {
  background: #303F9F;
}

.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.inputs button {
  grid-column: span 2;
}

.result {
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  margin-top: 0.75rem;
}

.result.success {
  background: rgba(76, 175, 80, 0.2);
  border: 1px solid rgba(76, 175, 80, 0.5);
  color: #A5D6A7;
}

.result.warning {
  background: rgba(255, 152, 0, 0.2);
  border: 1px solid rgba(255, 152, 0, 0.5);
  color: #FFCC02;
}

.result.hidden {
  display: none;
}
</style>

<script>
const resources = {
  "Adamantite Nugget": 5000, "Animal Bone": 150, "Animal Skin": 150, "Asofe": 6000, "Braided Hemp": 500,
  "Charcoal": 200, "Coal": 200, "Coarse Bone Powder": 1500, "Cokes": 1200, "Cord": 325, "Crafted Leather": 5700,
  "Durable Metal Plate": 8500, "Enria": 12000, "High Grade Suede": 2400, "Iron Ore": 200, "Leather": 900,
  "Metallic Fiber": 700, "Metallic Thread": 2000, "Mithril Alloy": 12100, "Mithril Ore": 1000, "Mold Glue": 6000,
  "Mold Hardener": 23000, "Mold Lubricant": 10000, "Oriharukon": 24600, "Oriharukon Ore": 3000, "Silver Nugget": 500,
  "Steel": 2000, "Stem": 100, "Suede": 300, "Synthetic Cokes": 6600, "Thorns": 6000, "Thread": 100,
  "Varnish": 200, "Varnish Of Purity": 7100
};

let selectedResource = null;

function fillSelect() {
  const select = document.getElementById("res_list");
  Object.keys(resources).forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });
}

function selRes(name) {
  selectedResource = resources[name] ? { name, price: resources[name] } : null;
}

function doCalc() {
  const fruits = parseInt(document.getElementById("crop_num").value);
  const buyPrice = parseInt(document.getElementById("buy_price").value);
  const result = document.getElementById("result");
  
  if (!selectedResource || !fruits || !buyPrice) {
    result.textContent = "Please fill all fields";
    result.className = "result warning";
    return;
  }
  
  const total = fruits * buyPrice;
  const resourceCount = Math.floor(total / selectedResource.price);
  const isOptimal = total % selectedResource.price === 0;
  
  if (isOptimal) {
    result.textContent = `Perfect! You'll get exactly ${resourceCount} ${selectedResource.name}`;
    result.className = "result success";
  } else {
    let minFruits = fruits;
    let maxFruits = fruits;
    
    while (minFruits > 0 && (minFruits * buyPrice) % selectedResource.price !== 0) {
      minFruits--;
    }
    
    while ((maxFruits * buyPrice) % selectedResource.price !== 0) {
      maxFruits++;
    }
    
    let suggestion = "";
    if (minFruits > 0) {
      suggestion = ` Better: ${minFruits} or ${maxFruits} fruits for no waste.`;
    } else {
      suggestion = ` Better: ${maxFruits} fruits for no waste.`;
    }
    
    result.textContent = `Wasteful! ${resourceCount} resources.${suggestion}`;
    result.className = "result warning";
  }
}

document.addEventListener('DOMContentLoaded', fillSelect);
</script>

## What is Manor and Why Should You Care?

Manor is a farming system that lets ANY class (not just dwarves) get crafting materials and resources. But it's actually much more complex - it's a massive economic system that controls server inflation and makes castle ownership profitable.

**Simple version:** You buy seeds → Plant them on monsters → Kill monsters → Harvest fruits → Trade fruits for materials

## How Manor Works - The Basics

### Step 1: Buy Seeds
- Go to any major town and find the Manor Manager (usually near wagons)
- Buy seeds with adena
- Each seed type can only be used on specific monster levels (check the seed description)

> You can only use seeds for the territory you buy! <br> Tooltip of the seed says the territory and the monster level range you can sow. 

### Step 2: Plant and Harvest
- Use seeds on monsters BEFORE or DURING combat (from inventory or hotbar)
- Kill the monster
- **IMPORTANT:** Use your Harvester tool immediately after the monster dies or you lose the fruits and Sweep after (if you are a Spoiler).
- Seeds work like Spoil but can be used by any class

### Step 3: Selling Fruits
1. **Where to Sell**:  

    - Bring harvested fruits to any **Manor Manager**.  
    - *Selling outside your current territory charges an extra fee*.  

2. **Selling Process**:  

    - Talk to the Manor Manager → Select *"Tally up the indigenous product."*  
    - Double-click your fruit → Choose a **Territory buyer** (if none appear, stocks refresh at **20:06 UTC**).  
    - Enter quantity → Click **OK** → Confirm **Sell**.  
    - *Transaction fails if another player sells the same product first*.  

## The Economics Behind Manor

### Why Manor Removes Monster Drops
When you use Manor seeds, the monster drops NOTHING except adena and your fruit harvest. 

**What happens to the lost drops?**
The game calculates how much your drops would have been worth, then gives you fruits of equivalent value. So you're not losing out, just getting rewards in a different form.

### Price Controls and Limits
Castle lords control Manor prices, but they have restrictions:

- **Maximum price:** 10x the base seed/fruit cost
- **Minimum price:** 60% of base cost

This prevents lords from completely manipulating the market.

## Castle Lord Mechanics

### How Lords Make Money
1. **Seed Sales:** Lords buy seeds at fixed NPC prices, then sell to players at higher prices
2. **Fruit Processing:** ords can use Mature/Ripe Fruit with some adena to purchase D- to A-grade enchants and various consumables such as Crystals, Quick Healing Potions and Dualsword Crafting Stamp.
3. Ripe fruits go to the clan warehouse of the castle-owning clan

### Daily Manor Cycle
- **8:06 PM - 5:55 AM:** Lords can change seed/fruit prices
- **6:00 AM** System charges lords for all ordered seeds/fruits
- **8:06 PM** Manor opens for business
- **7:56 PM** Unsold seeds disappear

### What Happens to Your Fruits
1. You sell fruits to Manor Manager
2. At 8:00 PM, fruits "ripen" (90% survive, 10% disappear)
3. Ripe fruits go to castle storage for lord to use

## Advanced Mechanics You Should Know

### Territory Restrictions
Seeds bought in one castle can ONLY be used in that castle's territory. Check with any NPC to see which lord controls an area.

### Level Penalties
If your level is too high or low compared to the monster (appears blue/pink to you), you get fewer fruits. Farm monsters at appropriate levels for maximum efficiency.

### Alternative Seeds
These are cheaper seeds that DON'T remove monster drops, but give much fewer fruits (3-10x less chance). Rarely used except on very high-level monsters where normal drops are more valuable than fruits.

### Harvest Calculations
The number of fruits you get depends on monster value vs fruit value:

- Weak monster vs expensive fruit = 1 fruit or less
- Strong monster vs cheap fruit = multiple fruits
- System uses probability for fractional amounts (130% chance = sometimes 1 fruit, sometimes 2)

## Tax System

Selling fruits to a lord other than your current area's lord costs 5% tax. The receiving lord sets this tax rate.

## Tips for New Players

### Maximizing Profit
1. Check multiple castles for best seed prices
2. Look for lords offering high fruit buyback prices
3. Use Manor Calculators to optimize your resource chances
4. Farm monsters at appropriate levels to avoid penalties

### Avoiding Losses
- Always harvest immediately after killing monsters
- Plan your fruit deliveries - calculate if you have enough fruits for 100% resource chance
- Don't plant seeds on monsters too high/low level for you

### Understanding Resource Chances
If a fruit costs 100 adena but you want a resource worth 5700 adena, you need 57 fruits for guaranteed success. With fewer fruits, you're gambling on RNG.

## Key Takeaways

- Manor works for any class, not just dwarves
- Seeds remove normal monster drops but give equivalent value in fruits
- Castle lords control prices within set limits
- Territory restrictions and level penalties affect efficiency
- Timing is crucial - harvest immediately and plan your fruit deliveries
- Understanding the economics helps you make better farming decisions

The Manor system might seem simple on the surface, but it's one of the most sophisticated economic control mechanisms in any MMORPG. Master it, and you'll have a reliable source of income and materials regardless of your class!