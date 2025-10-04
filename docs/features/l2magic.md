---
icon: simple/magic
search:
  exclude: true
hide:
  - toc
---

<style>
.calc-title {
    border-bottom: 2px solid #7e56c2;
    padding-bottom: 15px;
    margin-bottom: 30px;
    font-size: 28px;
}

.section-title {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 20px;
}

.main-cont {
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-bottom: 20px;
}

.magic-cont {
    flex: 1;
    background: #24272e;
    padding: 25px;
    border-radius: 8px;
    border: 1px solid #33363d;
}

.input-label {
    display: block;
    margin: 15px 0;
    color: #c9d1d9;
    font-size: 14px;
}

.number-input,
.select-input {
    padding: 8px 12px;
    margin-left: 10px;
    border: 1px solid #33363d;
    border-radius: 4px;
    background: #1a1d23;
    color: #e1e4e8;
    font-size: 14px;
    min-width: 100px;
}

.number-input:focus,
.select-input:focus {
    outline: none;
    border-color: #7e56c2;
}

.checkbox-input {
    margin-right: 8px;
    cursor: pointer;
}

.calc-button {
    background: var(--md-primary-fg-color);
    color: #fff;
    padding: 12px 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    font-weight: 500;
    transition: background 0.2s;
}

.calc-button:hover {
    background: var(--md-primary-fg-color);
}

.results-container {
    margin-top: 30px;
    padding: 25px;
    background: #24272e;
    border-radius: 8px;
    border: 1px solid #33363d;
    border-left: 4px solid var(--md-primary-fg-color);
}

.results-container .section-title {
    margin-top: 0;
}

.result-text {
    margin: 12px 0;
    font-size: 16px;
    color: #c9d1d9;
}

.result-value {
    color: #e1e4e8;
}

.cdl-hp-container {
    margin-left: 20px;
    margin-top: 10px;
    padding: 15px;
    background: #1a1d23;
    border-radius: 4px;
    border: 1px solid #33363d;
}

@media (max-width: 768px) {
    .main-cont {
        flex-direction: column;
    }
}
</style>

<h1 class="calc-title">Lineage 2 Magic Damage Calculator</h1>

<div class="main-cont">
    <div class="magic-cont">
        <h2 class="section-title">Character Stats</h2>
        <label class="input-label">Skill Power: <input type="number" class="number-input" id="skillpower" value="91" step="0.1"></label>
        <label class="input-label">M.Atk: <input type="number" class="number-input" id="matk" value="1000" step="1"></label>
        <label class="input-label">Spirit Shots: 
            <select class="select-input" id="ss">
                <option value="1">None</option>
                <option value="2" selected>Spirit Shot</option>
                <option value="4">Blessed Spirit Shot</option>
            </select>
        </label>
        <label class="input-label"><input type="checkbox" class="checkbox-input" id="isCrit"> Magic Critical Hit (x4)</label>
        <label class="input-label"><input type="checkbox" class="checkbox-input" id="isDeathLink"> Using Curse: Death Link</label>
        <div id="cdlHP" class="cdl-hp-container" style="display:none;">
            <label class="input-label">Current HP %: <input type="number" class="number-input" id="currentHP" value="40" min="0" max="100" step="1"></label>
        </div>
    </div>

    <div class="magic-cont">
        <h2 class="section-title">Target Stats</h2>
        <label class="input-label">M.Def: <input type="number" class="number-input" id="mdef" value="200" step="1"></label>
        <label class="input-label">Zerk Status: 
            <select class="select-input" id="zerk">
                <option value="0" selected>None</option>
                <option value="1">Zerk 1 (-10% M.Def)</option>
                <option value="2">Zerk 2 (-16% M.Def)</option>
            </select>
        </label>
        <label class="input-label">Resist %: <input type="number" class="number-input" id="resist" value="0" step="1"> <br> (negative for weakness)</label>
        <label class="input-label">Target Max HP: <input type="number" class="number-input" id="mobHP" value="10000" step="1"></label>
    </div>
</div>

<button class="calc-button" onclick="calculate()">Calculate Damage</button>

<div id="results"></div>

<script>
    const cdlHPDiv = document.getElementById('cdlHP');
    const isDeathLinkCB = document.getElementById('isDeathLink');
    
    isDeathLinkCB.addEventListener('change', function() {
        cdlHPDiv.style.display = this.checked ? 'block' : 'none';
    });

    function calculate() {
        const skillpower = parseFloat(document.getElementById('skillpower').value);
        const matk = parseFloat(document.getElementById('matk').value);
        const ssBonus = parseFloat(document.getElementById('ss').value);
        let mdef = parseFloat(document.getElementById('mdef').value);
        const zerk = parseInt(document.getElementById('zerk').value);
        const resist = parseFloat(document.getElementById('resist').value);
        const isCrit = document.getElementById('isCrit').checked;
        const isDeathLink = document.getElementById('isDeathLink').checked;
        const mobHP = parseFloat(document.getElementById('mobHP').value);
        
        if (mdef <= 0) {
            document.getElementById('results').innerHTML = '<p class="result-text">M.Def must be greater than 0</p>';
            return;
        }

        if (zerk === 1) {
            mdef *= 0.9;
        } else if (zerk === 2) {
            mdef *= 0.84;
        }
        
        const resistMod = (100 - resist) / 100;
        let damage = resistMod * 91 * skillpower * Math.sqrt(matk * ssBonus) / mdef;
        
        if (isDeathLink) {
            const currentHP = parseFloat(document.getElementById('currentHP').value);
            const cdlBoost = 1.8 - 2 * (currentHP / 100);
            damage *= cdlBoost;
        }
        
        if (isCrit) {
            damage *= 4;
        }
        
        damage = Math.floor(damage);
        
        const hitsToKill = Math.ceil(mobHP / damage);
        
        let resultsHTML = '<div class="results-container">';
        resultsHTML += '<h2 class="section-title">Results</h2>';
        resultsHTML += '<p class="result-text"><span class="result-value">Damage per hit:</span> ' + damage + '</p>';
        resultsHTML += '<p class="result-text"><span class="result-value">Hits to kill:</span> ' + hitsToKill + '</p>';
        resultsHTML += '<p class="result-text"><span class="result-value">Total damage needed:</span> ' + (hitsToKill * damage) + '</p>';
        resultsHTML += '</div>';
        
        document.getElementById('results').innerHTML = resultsHTML;
    }
</script>
