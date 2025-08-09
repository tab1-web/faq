document.addEventListener('DOMContentLoaded', function() {
    fetch('/faq/classtransfers/js/link-mappings.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(npcNames => {
            
            updateNpcLinks('c4', npcNames);
            
            createVersionButtons(npcNames);
        })
        .catch(error => {
            console.error('Error loading NPC mappings:', error);
        });

    function extractBaseName(fullName) {
        const prefixes = ["Golden Wheel's","Silver Scale's","Bronze Ley's","Black Anvil's","Guild President","High Summoner","Priest of","Warehouse Keeper","Grand Magister","Astrologer","Duelist","Captain","Gray Pillar's","Magic Trader","Veteran","Saint","Cardinal" ,"Iron Gate's", 'Magister', 'Shadow', 'Trader', 'High Priest', 'Priest', 
                          'Grand Master', 'Warehouse Chief', 'Researcher', 'Warder','Guard', 'Urutu', 'Neruga', 'Atuba', 'High Prefect','Vuku Chief', 'Turek Chief', 'Leunt Chief','Enku Chief', 'Breka Chief','Gandi Chief','ever-influenced', 'Summoner', "Bodyguard", 'Militaman', 'Prefect','Sagittarius', 'Hermit', 'Wanderer','Gauri', 'Ancestor', 'Father', 'Drunkard', 'Master', 'Tetrarch', 'Hierarch', 'Seer', 'Flame Lord',
                          'Maestro', 'Blacksmith','Wiseman','Sir', 'Fisherman', 'Spirit of', 'Any'];
        
        let baseName = fullName;
        prefixes.forEach(prefix => {
            const regex = new RegExp(`^${prefix}\\s+|\\s+${prefix}\\s+`, 'i');
            baseName = baseName.replace(regex, ' ').trim();
        });
        
        return baseName || fullName;
    }
    
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function updateNpcLinks(version, npcNames) {
        
        const existingLinks = document.querySelectorAll('.npc-link');
        existingLinks.forEach(link => {
            const parent = link.parentNode;
            parent.replaceChild(document.createTextNode(link.textContent), link);
            parent.normalize();
        });
        
        const tables = document.querySelectorAll('table');
        if (tables.length === 0) {
            console.warn('No tables found in document');
            return;
        }
        
        const sortedNpcNames = [...npcNames].sort((a, b) => b.text.length - a.text.length);
        
        tables.forEach(table => {
            const cells = table.querySelectorAll('td, th');
            
            cells.forEach(cell => {
                processCell(cell, sortedNpcNames, version);
            });
        });
    }

    function processCell(cell, npcNames, version) {
        let textContent = cell.innerHTML;
        
        const replacements = [];
        
        npcNames.forEach(npc => {
            const regex = new RegExp(`\\b${escapeRegExp(npc.text)}\\b`, 'gi');
            let match;
            
            while ((match = regex.exec(textContent)) !== null) {
                const start = match.index;
                const end = match.index + match[0].length;
                
                const overlaps = replacements.some(replacement => 
                    (start >= replacement.start && start < replacement.end) ||
                    (end > replacement.start && end <= replacement.end) ||
                    (start < replacement.start && end > replacement.end)
                );
                
                if (!overlaps) {
                    const baseName = extractBaseName(npc.text);
                    const searchQuery = encodeURIComponent(baseName);
                    const url = `https://lineage2wiki.org/${version}/search/?q=${searchQuery}`;
                    
                    replacements.push({
                        start: start,
                        end: end,
                        original: match[0],
                        replacement: `<a href="${url}" target="_blank" class="npc-link" data-version="${version}">${match[0]}</a>`
                    });
                }
            }
        });
        
        replacements.sort((a, b) => b.start - a.start);
        
        let modifiedContent = textContent;
        replacements.forEach(replacement => {
            modifiedContent = modifiedContent.substring(0, replacement.start) + 
                            replacement.replacement + 
                            modifiedContent.substring(replacement.end);
        });
        
        if (replacements.length > 0) {
            cell.innerHTML = modifiedContent;
        }
    }

    function createVersionButtons(npcNames) {
        const existingButtons = document.querySelector('.version-buttons');
        if (existingButtons) {
            existingButtons.remove();
        }
        
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'version-buttons';
        buttonContainer.style.margin = '10px 0';
        buttonContainer.style.textAlign = 'center';
        
        const versions = [
            { name: 'C4', value: 'c4' },
            { name: 'C5', value: 'c5' },
            { name: 'Interlude', value: 'interlude' }
        ];
        
        versions.forEach(version => {
            const button = document.createElement('button');
            button.textContent = version.name;
            button.dataset.version = version.value;
            button.className = version.value === 'c4' ? 'active' : '';
            
            button.addEventListener('click', () => {
                document.querySelectorAll('.version-buttons button').forEach(btn => 
                    btn.classList.remove('active')
                );
                button.classList.add('active');
                
                updateNpcLinks(version.value, npcNames);
            });
            
            buttonContainer.appendChild(button);
            buttonContainer.appendChild(document.createTextNode(' '));
        });
        
        const content = document.querySelector('.md-content') || document.body;
        content.insertBefore(buttonContainer, content.firstChild);
    }

    const style = document.createElement('style');
    style.textContent = `
    .npc-link {
        color: #4CAF50;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.2s ease;
    }
    .npc-link:hover {
        text-decoration: underline;
        color: #388E3C;
    }
    
    .version-buttons {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin: 15px 0;
    }
    
    .version-buttons button {
        margin: 0;
        padding: 10px 20px;
        cursor: pointer;
        border: 2px solid #4CAF50;
        border-radius: 6px;
        color: #4CAF50;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.3s ease;
        min-width: 80px;
        text-align: center;
    }
    
    .version-buttons button:hover {
        background: rgba(76, 175, 80, 0.1);
        transform: translateY(-2px);
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .version-buttons button.active {
        background: #4CAF50;
        color: white;
        border-color: #4CAF50;
        box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
    }
    
    .version-buttons button.active:hover {
        background: #45a049;
        border-color: #45a049;
        transform: translateY(-2px);
    }
`;
    document.head.appendChild(style);
});