---
icon: material/medal
---

# My Achievement Tracker

Track your progress and celebrate your accomplishments!

<div class="achievement-container">
    <div class="achievement-controls">
        <button id="saveBtn">Save Progress to File</button>
        <button id="loadBtn">Load Progress from File</button>
        <input type="file" id="fileInput" accept=".txt" style="display: none;">
    </div>

    <div id="achievementsList"></div>
</div>

<div id="congratsModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="congratsTitle"></h2>
        <p id="congratsDate"></p>
        <p id="congratsMessage"></p>
    </div>
</div>

<style>
:root {
    --md-default-bg-color: var(--md-code-bg-color, #f5f5f5);
    --md-accent-fg-color--transparent: rgba(68, 138, 255, 0.1);
    --md-typeset-a-color: #448aff;
    --md-primary-fg-color: #448aff;
    --md-primary-fg-color--dark: #1976d2;
}

.achievement-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: var(--md-default-bg-color);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.achievement-item {
    display: flex;
    align-items: center;
    padding: 12px;
    margin: 8px 0;
    background-color: var(--md-code-bg-color);
    border-radius: 4px;
    transition: all 0.3s ease;
}

.achievement-item:hover {
    background-color: var(--md-accent-fg-color--transparent);
}

.achievement-item input[type="checkbox"] {
    margin-right: 12px;
    transform: scale(1.3);
}

.achievement-label {
    flex-grow: 1;
    cursor: pointer;
}

.achievement-date {
    color: var(--md-typeset-a-color);
    font-size: 0.8em;
    margin-left: 12px;
}

.achievement-controls {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
}

#saveBtn, #loadBtn {
    padding: 8px 16px;
    background-color: var(--md-primary-fg-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

#saveBtn:hover, #loadBtn:hover {
    background-color: var(--md-primary-fg-color--dark);
}

.modal {
    display: none;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

.modal-content {
    background-color: var(--md-default-bg-color);
    margin: 15% auto;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    position: relative;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.close {
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 24px;
    cursor: pointer;
    color: #999;
}

.close:hover {
    color: #333;
}
</style>

<script>
const achievements = [
    // Levels
    { id: 'level1', title: "Reach Level 1", message: `You've taken your first step! =) <br> Your adventure starts here. <br> Take a look around, <a href="/faq/gameplay/controls.md">adjust your settings</a>, talk to the NPCs, make a screenshot, read the <a href="/faq/support/rules.md">rules</a>, and hunt! ` },
    { id: 'level2', title: "Reach Level 2", message: `You made it! There's many more levels to come, take it slow, make breaks, drink some water, check your posture, the game will be here for long. Game released in <b>2003</b> and you are still playing it today.` },
    { id: 'level5', title: "Reach Level 5", message: `Level 5.. Already?! Well done! Think about getting some No-Grade weapons and armors perhaps, they should be pretty cheap in the shops. Don't worry, you can upgrade them for Adena and best of all, becase you are upgrading: they are without taxes! <br>` },
    { id: 'level10', title: "Reach Level 10", message: `By now you have already learned a new skill, got some lucky drops, perhaps? Not sure, though I know for sure you reached level 10, cheers! :D` },
    { id: 'level20', title: "Reach Level 20", message: `Now you're getting serious! Time to upgrade to D-Grade gear` },
    { id: 'level30', title: "Reach Level 30", message: `Soon you get to be Level 40 and do your major class transfer. Starting to regret your choice? Every class has its' pros and cons, there is no right answer, find your niche and hone it. But if you feel like you really don't like it, don't be afraid to restart. Later you do it, the worse it'll be.` },
    { id: 'level40', title: "Reach Level 40", message: `Halfway to greatness! C-Grade gear awaits, and the real challenges begin. Thought of joining a clan yet?` },
    { id: 'level50', title: "Reach Level 50", message: `The big Five-Zero! You're no longer a rookie - those C-Grade weapons should feel like extensions of your arms by now. Ever tried fishing? It's oddly relaxing between hunts.` },
    { id: 'level60', title: "Reach Level 60", message: `Look at you, veteran! I knew you could do it. The levels start to get slower, but don't let it get to you.` },
    { id: 'level70', title: "Reach Level 70", message: `70 winters have shaped you. Ivory Tower whispers of Subclasses and Noblesse vows, will you answer them?  ` },
    { id: 'level76', title: "Reach Level 76", message: `Welcome to the big leagues! S-Grade whispers your name, but don't rush - some of the best memories happen in these final climbs. Have you done your Subclass quest? Levelled it to 75 for Noblesse? Or perhaps 3rd class?` },
    { id: 'level78', title: "Reach Level 78", message: `You have unlocked most of your skills and slained even more enemies, Congratulations, this is a huge achievement!` },
    { id: 'level80', title: "Reach Level 80", message: `Max level magic! Whether you're here for PvP glory or just to flex in Giran, take a moment to appreciate the journey. That 2003 release date? You're why it still lives. <br> <iframe width="560" height="315" src="https://www.youtube.com/embed/UqyT8IEBkvY?si=W4OxwP1x7zL9Jtbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` },
    { id: 'hero', title: "Become hero", message: `You've achieved the prestigious Hero status! The entire server now recognizes your prowess in battle. Wear that aura with pride - you've earned your place among legends.` },
    { id: 'noble', title: "Become noble", message: `You've taken the Noblesse vow! This sacred path opens new skills and responsibilities. The weight of nobility rests upon your shoulders - use your power wisely.` },

    // SECTION SEPARATOR - Gear & Wealth
    { id: 'section-gear', title: "🎯 GEAR & WEALTH", isSection: true },

    // Gear & Wealth
    { id: 'nograde', title: "Cover Me in No-Grade!", message: `Someone is looking fancy!` },
    { id: 'dgrade', title: "Cover Me in D-Grade!", message: `Upgraded to D-Grade gear! Now you can handle tougher foes. How long did it take you to get them?` },
    { id: 'cgrade', title: "Cover Me in C-Grade!", message: `Some people say it's foolish to wear C-Grade even Lv70+, they just don't understand the C-Grade way of Life. Do you really need anything else? Warrior, you earned it. <br> <a href="https://postimg.cc/4nyJk2Qf"><img src="https://i.postimg.cc/SQ7j9wXM/cgrade.png"></img></a>` },
    { id: 'bgrade', title: "Cover Me in B-Grade!", message: `Gears are starting to look more proper, unlike the pyjamas you have been wearing.` },
    { id: 'agrade', title: "Cover Me in A-Grade!", message: `Crafting or getting A-Grade is not by any means easy, you pushed through it though and earned this achievement! Flex your gear in Giran!` },
    { id: 'sgrade', title: "Cover Me in S-Grade!", message: `Whether clad in the Crusader's argent plate or the Arcana's celestial weave, true power needs no color, yet Draconic's crimson still stains the hands of those unworthy. You? You wear it as birthright.` },
    { id: 'zariche', title: "Acquire demon sword", message: `The weapon of slaughter, The Demonic Sword Zariche (hereafter Zariche), was once used by the Demon Bremmnon, one of the four demon kings. You now wield this legendary blade of chaos - may its dark power serve you well in battle, but beware the curse that comes with such formidable power!` },
    { id: 'onemillion', title: "Acquire 1 Million Adena", message: `I bet the dwarves are drooling over this, don't let them have one penny! Hide it, quick!` },
    { id: 'tenmillion', title: "Acquire 10 Million Adena", message: `Things are getting serious! What was your strategy? Nonetheless, you have earned this achievement! ` },
    { id: 'hundredmillion', title: "Acquire 100 Million Adena", message: `You are going to do something with this Adena right? Right? Unused memory is wasted memory as unused Adena is wasted adena as well, let the Adena circulate! <br> <iframe width="560" height="315" src="https://www.youtube.com/embed/ntPeHC8z1Og?si=l64JD2pfBWJ5GG7S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` },
    { id: 'onebillion', title: "Acquire 1 Billion Adena", message: `What's the color of your Strider? Is it made out of Gold? <br> One of the most difficult achievements, congratulations! <br> <iframe width="560" height="315" src="https://www.youtube.com/embed/GjazN63hMkA?si=bLmBMqXnFZd15mdz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` },

    // SECTION SEPARATOR - PvE & Raids
    { id: 'section-pve', title: "🐉 PvE & RAIDS", isSection: true },

    // PvE & Raids
    { id: 'firstraid', title: "First Raid Boss Kill", message: `You've tasted blood! Raid bosses will fear you now. I wonder how it went! Were there a lot of call outs, healers running out of mana, perhaps realizing too late that the boss does reflect damage? Hope you got some cool drops!` },
    { id: 'antharas', title: "Slayer of Antharas", message: `The Land Dragon falls before you! A legendary feat. Was it ton of fun? I hope so!` },
    { id: 'valakas', title: "Slayer of Valakas", message: `The Fire Dragon is no more. The world trembles at your might. Did your party get last hit for getting Valakas Slayer Circlet?` },
    { id: 'baium', title: "Slayer of Baium", message: `You've defeated the fallen angel. Heaven and Hell know your name.` },
    { id: 'orfen', title: "Slayer of Orfen", message: `You defeated Orfen, the corrupted Arachne whose rage twisted her into a vengeful terror. Now her threads of madness weave no more.` },
    { id: 'frintezza', title: "Slayer of Frintezza", message: `You vanquished Frintezza, the tragic ruler who sacrificed his humanity in a desperate pact with Halisha. The reign of Elmoreden's final emperor ends with you.` },
    { id: 'zaken', title:"Slayer of Zaken", message: `You've put Zaken's tormented soul to rest. The cannons fall silent on Devil's Isle - his mutinous crew can finally stop walking the plank... for eternity.`},
    { id: 'queenant', title:"Slayer of Queen Ant", message: `The Queen Ant's steel-carapace lies shattered. Her hive's chittering frenzy falls silent—no more eggs will hatch in the shadow of her jagged pincers.`},
    { id: 'core', title:"Slayer of Core", message: `The last shuddering pulse of Core fades from Cruma's walls. Was it a failed experiment, a cursed guardian, or something older? All that remains is the echo of its minions collapsing—and your party's exhausted cheers.`},
    { id: 'toiclimber', title: "Climb TOI, killing everyone", message: `ToI Conqueror! You have climbed Tower of Insolence and killed everyone who stood before you. Congratulations!` },

    // SECTION SEPARATOR - PvP & Sieges
    { id: 'section-pvp', title: "⚔️ PvP & SIEGES", isSection: true },

    // PvP & Sieges
    { id: 'firstkill', title: "First Player Kill", message: `The hunt begins. Your name spreads across the battlefield.` },
    { id: 'pvp10', title: "10 PvP Kills", message: `Aspiring warrior! Keep climbing the ranks.` },
    { id: 'pvp100', title: "100 PvP Kills", message: `A true force to be reckoned with.` },
    { id: 'decisivepvp', title: "Be decisive in a PvP", message: `You turned the tide of battle! Whether it was a perfectly timed heal, a crucial kill, or brilliant strategy, your actions determined the outcome. True PvP excellence!` },
    { id: 'hunted', title: "Hunted by random player-hunter (PK in the top 100)", message: `You've made someone's most wanted list! Being hunted by a top PK means you're either too rich, too powerful, or just really annoyed the wrong person. Watch your back!` },
    { id: 'gotepicfrompk', title: "Get an epic from a PK", message: `You struck gold from chaos! Snatched an epic item from a PK'd player's drop. Whether it was luck or perfect timing, you turned someone else's misfortune into your legendary treasure!` },
    { id: 'lostepictopk', title: "Lost an epic because of PK", message: `The cruel hand of fate! You've experienced every player's worst nightmare - losing a precious epic item to a PK. May this painful memory fuel your revenge and future triumphs!` },
    { id: 'stealmoney', title: "Steal Adena off the floor", message: `You pulled off the ultimate high-risk gamble! Snatched riches from a pro player's and took the PK like a champ. The adrenaline rush was worth every penalty.` },
    { id: 'castleowner', title: "Castle Lord", message: `You rule over a castle! Taxes, glory, and power are yours.` },
    { id: 'siegewon', title: "Siege Victor", message: `Your clan stood triumphant in the chaos of battle. I came, I saw, I conquered.` },

    // SECTION SEPARATOR - Crafting & Economy
    { id: 'section-crafting', title: "🛠️ CRAFTING & ECONOMY", isSection: true },

    // Crafting & Economy
    { id: 'firstcraft', title: "First Item Crafted", message: `From raw materials to a masterpiece. Keep refining your skills!` },
    { id: 'tradesuccess', title: "First Trade", message: `Buy low, sell high - you've mastered the market. You are a true Wolf of Giran Street.` },
    { id: 'trader', title: "Buy low, Sell High with +3kk profit!", message: `You've mastered the market! That 3 million Adena profit proves you have the business savvy of a true Wolf of Giran Street. Buy low, sell high!` },
    { id: 'spellbookfarmer', title: "Farmed my own spellbooks", message: `How Self-sufficient! You've grinded through the toughest mobs to collect your own spellbooks instead of buying them. That's dedication!` },

    // SECTION SEPARATOR - Social & Exploration
    { id: 'section-social', title: "👥 SOCIAL & EXPLORATION", isSection: true },

    // Social & Exploration
    { id: 'joinclan', title: "Join a Clan", message: `Together we stand! Find allies and conquer the world. Under the same Crest, under the same underwear! Sorry, got a little bit carried away..` },
    { id: 'clanleader', title: "Leader of a clan", message: `You've founded or taken leadership of a clan! Now the real responsibility begins - managing members, organizing events, and leading your clan to glory. May your crest fly high across Aden!` },
    { id: 'allianceleader', title: "Leader of an alliance", message: `You've united multiple clans under one banner! The power to coordinate massive sieges and shape server politics is now in your hands. A true diplomat and strategist!` },
    { id: 'academic', title: "Did at least 1 academic for the CRP", message: `You have contributed to Clan Reputation. It must have taken a long time, but time well spent to strengthen your ally.` },
    { id: 'explore100', title: "Visit Every Town", message: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zsbdJPT0G7M?si=cGWKV50bzsYS8L1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` },

    // SECTION SEPARATOR - Humorous & Unique
    { id: 'section-humorous', title: "🎭 HUMOROUS & UNIQUE", isSection: true },

    // Humorous & Unique
    { id: 'death1', title: "Die 1 Time", message: `First death always stings.. Is it time to upgrade your gear or perhaps turn your Monitor on?` },
    { id: 'death10', title: "Die 5 Times", message: `"I meant to do that..." - Every L2 player ever.` },
    { id: 'fish100', title: "Catch 100 Fish", message: `The sea whispers secrets to you. Or maybe just fish. Those trade slots won't upgrade themselves!` },
    { id: 'fishchampionship', title: "Reach #1 in the Fishing Championship", message: `You earned yourself 800k and this achievement! Was it skill or luck? 100% Skill and 100% reason to remember the name! The Anglers bow before you.` },
    { id: 'dancehour', title: "Dance for 5 minutes", message: `The true endgame: becoming the best dancer in Giran Alleyways, I guess it's one way to make Adena..?` },
];

const storage = {
    data: {},
    
    getItem: function(key) {
        if (typeof localStorage !== 'undefined') {
            return localStorage.getItem(key);
        }
        return this.data[key] || null;
    },
    
    setItem: function(key, value) {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, value);
        } else {
            this.data[key] = value;
        }
    },
    
    removeItem: function(key) {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem(key);
        } else {
            delete this.data[key];
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const achievementsList = document.getElementById('achievementsList');
    const congratsModal = document.getElementById('congratsModal');
    const congratsTitle = document.getElementById('congratsTitle');
    const congratsDate = document.getElementById('congratsDate');
    const congratsMessage = document.getElementById('congratsMessage');
    const closeBtn = document.querySelector('.close');
    const saveBtn = document.getElementById('saveBtn');
    const loadBtn = document.getElementById('loadBtn');
    const fileInput = document.getElementById('fileInput');

    function createAchievementItems() {
        achievementsList.innerHTML = '';
        
        achievements.forEach(achievement => {
            if (achievement.isSection) {
                const sectionHeader = document.createElement('div');
                sectionHeader.className = 'achievement-section';
                
                const hr = document.createElement('hr');
                hr.className = 'section-divider';
                
                const sectionTitle = document.createElement('h3');
                sectionTitle.className = 'section-title';
                sectionTitle.textContent = achievement.title;
                
                sectionHeader.appendChild(hr);
                sectionHeader.appendChild(sectionTitle);
                achievementsList.appendChild(sectionHeader);
                return;
            }

            const storedData = storage.getItem(achievement.id);
            const achievementData = storedData ? JSON.parse(storedData) : {
                completed: false,
                date: null
            };

            const item = document.createElement('div');
            item.className = 'achievement-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = achievement.id;
            checkbox.checked = achievementData.completed;
            
            const label = document.createElement('label');
            label.className = 'achievement-label';
            label.htmlFor = achievement.id;
            label.textContent = achievement.title;
            
            const dateContainer = document.createElement('div');
            dateContainer.className = 'achievement-date-container';
            
            const dateSpan = document.createElement('span');
            dateSpan.className = 'achievement-date';
            if (achievementData.date) {
                dateSpan.textContent = `Completed on: ${achievementData.date}`;
            }
            
            const editBtn = document.createElement('button');
            editBtn.className = 'edit-date-btn';
            editBtn.textContent = 'Edit Date';
            editBtn.style.display = achievementData.completed ? 'inline-block' : 'none';
            editBtn.style.marginLeft = '10px';
            editBtn.style.fontSize = '12px';
            editBtn.style.padding = '2px 6px';
            
            dateContainer.appendChild(dateSpan);
            dateContainer.appendChild(editBtn);
            
            item.appendChild(checkbox);
            item.appendChild(label);
            item.appendChild(dateContainer);
            achievementsList.appendChild(item);
            
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    const completionDate = new Date().toLocaleString();
                    const newAchievementData = {
                        completed: true,
                        date: completionDate
                    };
                    storage.setItem(achievement.id, JSON.stringify(newAchievementData));
                    dateSpan.textContent = `Completed on: ${completionDate}`;
                    editBtn.style.display = 'inline-block';
                    
                    congratsTitle.textContent = `Congratulations! <3`;
                    congratsDate.textContent = `Achieved on: ${completionDate}`;
                    congratsMessage.innerHTML = achievement.message;
                    congratsModal.style.display = 'block';
                } else {
                    storage.removeItem(achievement.id);
                    dateSpan.textContent = '';
                    editBtn.style.display = 'none';
                }
            });
            
            editBtn.addEventListener('click', function() {
                const currentDate = achievementData.date || new Date().toLocaleString();
                const newDate = prompt('Edit completion date:', currentDate);
                
                if (newDate !== null && newDate.trim() !== '') {
                    const updatedAchievementData = {
                        completed: true,
                        date: newDate.trim()
                    };
                    storage.setItem(achievement.id, JSON.stringify(updatedAchievementData));
                    dateSpan.textContent = `Completed on: ${newDate.trim()}`;
                    
                    if (congratsTitle.textContent.includes(achievement.title)) {
                        congratsDate.textContent = `Achieved on: ${newDate.trim()}`;
                    }
                }
            });
        });
    }

    createAchievementItems();

    closeBtn.addEventListener('click', function() {
        congratsModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === congratsModal) {
            congratsModal.style.display = 'none';
        }
    });

    saveBtn.addEventListener('click', function() {
        const progress = {};
        achievements.forEach(achievement => {
            if (!achievement.isSection) {
                const data = storage.getItem(achievement.id);
                if (data) {
                    progress[achievement.id] = JSON.parse(data);
                }
            }
        });
        
        const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'achievements_progress.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    loadBtn.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const progress = JSON.parse(e.target.result);
                
                achievements.forEach(achievement => {
                    if (!achievement.isSection) {
                        storage.removeItem(achievement.id);
                    }
                });
                
                for (const id in progress) {
                    storage.setItem(id, JSON.stringify(progress[id]));
                }
                
                createAchievementItems();
                alert('Progress loaded successfully!');
            } catch (error) {
                alert('Error loading progress: Invalid file format');
            }
        };
        reader.readAsText(file);
    });
});
</script>