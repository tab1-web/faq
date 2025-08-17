class QuestGuideController {
    constructor() {
        this.currentLevel = '1-20';
        this.currentRace = 'human';
        this.currentVersion = 'c5';
        this.currentContentType = 'hunting-zones';
        
        this.removeWordExceptions = [
            'Farm Goblin',
        ];
        
        this.noSplitExceptions = [
        ];
        
        this.searchFirstPartExceptions = [
            'jumble, tumble, diamond fuss', 'Whisper of Dreams, Part 2', 'Whisper of Dreams, Part 1' , 'Exploration of Giants Cave, Part 2', '1000 Years, the End of Lamentation', 'Exploration of Giants Cave, Part 1'
        ];
        
        this.noLinkExceptions = [
            'Additional Note',
            'Class Change',
            'Alternatives',
        ];
        
        this.manualLinks = [
            {
                text: 'Class Change',
                url: '/faq/gameplay/progression/classtransfer'
            }
        ];
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateDisplay();
        this.addWikiSearchLinks();
    }

    bindEvents() {
        document.querySelectorAll('[data-level]').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleLevelChange(e.target.dataset.level);
            });
        });

        document.querySelectorAll('[data-race]').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleRaceChange(e.target.dataset.race);
            });
        });

        document.querySelectorAll('[data-version]').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleVersionChange(e.target.dataset.version);
            });
        });

        document.querySelectorAll('[data-content-type]').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleContentTypeChange(e.target.dataset.contentType);
            });
        });
    }

    // Helper method to determine if a level range requires race selection
    requiresRaceSelection(level) {
        return level === '1-20' || level === '1-39';
    }

    // Helper method to determine if a level range should show content types
    showsContentTypes(level) {
        return level === '20-30' || level === '30-40' || level === '40-50' || level === '50-60' || level === '60-70' || level === '70-80';
    }

    handleLevelChange(level) {
        this.currentLevel = level;
        
        this.updateButtonStates('[data-level]', level);
        
        const raceSelector = document.querySelector('.race-selector');
        const contentTypeSelector = document.querySelector('.content-type-selector');
        
        if (this.requiresRaceSelection(level)) {
            // Show race selector for 1-20 and 1-39
            raceSelector.classList.add('active');
            contentTypeSelector.classList.remove('active');
            this.showRaceContent();
            this.hideAllContentTypeContent();
        } else if (this.showsContentTypes(level)) {
            // Show content type selector for 20-30, 30-40, and 40+
            raceSelector.classList.remove('active');
            contentTypeSelector.classList.add('active');
            this.hideAllRaceContent();
            this.showContentTypeContent();
        } else {
            // Fallback case
            raceSelector.classList.remove('active');
            contentTypeSelector.classList.remove('active');
            this.hideAllRaceContent();
            this.hideAllContentTypeContent();
        }
    }

    handleRaceChange(race) {
        this.currentRace = race;
        this.updateButtonStates('[data-race]', race);
        this.showRaceContent();
    }

    handleVersionChange(version) {
        this.currentVersion = version;
        this.updateButtonStates('[data-version]', version);
        console.log('Version changed to:', version);
        
        this.refreshWikiLinks();
    }

    handleContentTypeChange(contentType) {
        this.currentContentType = contentType;
        this.updateButtonStates('[data-content-type]', contentType);
        this.showContentTypeContent();
    }

    updateButtonStates(selector, activeValue) {
        document.querySelectorAll(selector).forEach(button => {
            button.classList.remove('md-button--primary');
            if (button.dataset.level === activeValue ||
                button.dataset.race === activeValue ||
                button.dataset.version === activeValue ||
                button.dataset.contentType === activeValue) {
                button.classList.add('md-button--primary');
            }
        });
    }

    showRaceContent() {
        this.hideAllRaceContent();
        
        const raceElementId = this.requiresRaceSelection(this.currentLevel) ? 
            `${this.currentLevel}-${this.currentRace}` : this.currentRace;
        
        const raceElement = document.getElementById(raceElementId);
        if (raceElement) {
            raceElement.style.display = 'block';
        }
    }

    hideAllRaceContent() {
        document.querySelectorAll('.race-content').forEach(element => {
            element.style.display = 'none';
        });
    }

    showContentTypeContent() {
        this.hideAllContentTypeContent();
        
        const contentElement = document.getElementById(`${this.currentLevel}-${this.currentContentType}`);
        if (contentElement) {
            contentElement.style.display = 'block';
        }
    }

    hideAllContentTypeContent() {
        document.querySelectorAll('.content-type-section').forEach(element => {
            element.style.display = 'none';
        });
    }

    updateDisplay() {
        this.updateButtonStates('[data-level]', this.currentLevel);
        this.updateButtonStates('[data-race]', this.currentRace);
        this.updateButtonStates('[data-version]', this.currentVersion);
        this.updateButtonStates('[data-content-type]', this.currentContentType);
        
        const raceSelector = document.querySelector('.race-selector');
        const contentTypeSelector = document.querySelector('.content-type-selector');
        
        if (this.requiresRaceSelection(this.currentLevel)) {
            raceSelector.classList.add('active');
            contentTypeSelector.classList.remove('active');
            this.showRaceContent();
            this.hideAllContentTypeContent();
        } else if (this.showsContentTypes(this.currentLevel)) {
            raceSelector.classList.remove('active');
            contentTypeSelector.classList.add('active');
            this.hideAllRaceContent();
            this.showContentTypeContent();
        } else {
            raceSelector.classList.remove('active');
            contentTypeSelector.classList.remove('active');
            this.hideAllRaceContent();
            this.hideAllContentTypeContent();
        }
    }

    processSearchQuery(actionText) {
        const lowerActionText = actionText.toLowerCase();
        
        const beforeApostrophe = actionText.split("'")[0];
        
        for (const exception of this.removeWordExceptions) {
            if (lowerActionText === exception.toLowerCase()) {
                const words = beforeApostrophe.split(' ');
                return words.slice(1).join(' ').trim();
            }
        }
        
        for (const exception of this.searchFirstPartExceptions) {
            if (lowerActionText === exception.toLowerCase()) {
                return beforeApostrophe.split(',')[0].trim();
            }
        }
        
        for (const exception of this.noSplitExceptions) {
            if (lowerActionText === exception.toLowerCase()) {
                return beforeApostrophe;
            }
        }
        
        if (beforeApostrophe.includes(',')) {
            return beforeApostrophe.split(',')[0].trim();
        }
        
        return beforeApostrophe;
    }

    generateWikiSearchURL(searchQuery) {
        const encodedQuery = encodeURIComponent(searchQuery);
        return `http://lineage2wiki.org/${this.currentVersion}/search/?q=${encodedQuery}`;
    }

    isWikiSearchLink(link) {
        return link.href && link.href.includes('lineage2wiki.org') && link.href.includes('/search/?q=');
    }

    isManualLink(link) {
        return this.manualLinks.some(manualLink => 
            link.textContent.trim() === manualLink.text && 
            link.href.includes(manualLink.url)
        );
    }

    createManualLink(actionCell, actionText) {
        const manualLinkConfig = this.manualLinks.find(config => 
            actionText.toLowerCase() === config.text.toLowerCase()
        );
        
        if (manualLinkConfig) {
            const link = document.createElement('a');
            link.href = manualLinkConfig.url;
            link.textContent = actionText;
            link.style.color = '#2196F3';
            link.style.textDecoration = 'underline';
            link.title = manualLinkConfig.text;
            
            actionCell.innerHTML = '';
            actionCell.appendChild(link);
            return true;
        }
        return false;
    }

    shouldCreateMultipleLinks(actionText) {
        const lowerActionText = actionText.toLowerCase();
        
        for (const exception of this.noSplitExceptions) {
            if (lowerActionText === exception.toLowerCase()) {
                return false;
            }
        }
        
        for (const exception of this.searchFirstPartExceptions) {
            if (lowerActionText === exception.toLowerCase()) {
                return false;
            }
        }
        
        if (actionText.includes(',')) {
            const parts = actionText.split(',');
            
            if (parts.length >= 2) {
                const allPartsLookLikeQuests = parts.every(part => {
                    const trimmed = part.trim();
                    return trimmed.split(' ').length >= 2; 
                });
                
                if (allPartsLookLikeQuests) {
                    return true;
                }
            }
        }
        
        return false;
    }

    createMultipleLinks(actionCell, actionText) {
        const parts = actionText.split(',');
        actionCell.innerHTML = '';
        
        parts.forEach((part, index) => {
            const trimmedPart = part.trim();
            const searchQuery = this.processSearchQuery(trimmedPart);
            const wikiURL = this.generateWikiSearchURL(searchQuery);
            
            const link = document.createElement('a');
            link.href = wikiURL;
            link.target = '_blank';
            link.textContent = trimmedPart;
            link.style.color = '#2196F3';
            link.style.textDecoration = 'underline';
            link.title = `Search wiki for: ${searchQuery}`;
            
            actionCell.appendChild(link);
            
            if (index < parts.length - 1) {
                actionCell.appendChild(document.createTextNode(', '));
            }
        });
    }

    addWikiSearchLinks() {
        document.querySelectorAll('table').forEach(table => {
            let headerRow = table.querySelector('thead tr');
            if (!headerRow) {
                headerRow = table.querySelector('tr');
            }
            if (!headerRow) return;
            
            const headers = headerRow.querySelectorAll('th');
            let actionColumnIndex = -1;
            
            headers.forEach((header, index) => {
                if (header.textContent.trim().toLowerCase() === 'action') {
                    actionColumnIndex = index;
                }
            });
            
            if (actionColumnIndex === -1) return;
            
            let bodyRows = table.querySelectorAll('tbody tr');
            if (bodyRows.length === 0) {
                const allRows = table.querySelectorAll('tr');
                bodyRows = Array.from(allRows).slice(1); 
            }
            
            bodyRows.forEach(row => {
                const actionCell = row.querySelectorAll('td')[actionColumnIndex];
                if (!actionCell) return;
                
                const actionText = actionCell.textContent.trim();
                if (!actionText) return;
                
                const lowerActionText = actionText.toLowerCase();
                
                if (this.createManualLink(actionCell, actionText)) {
                    return;
                }
                
                const shouldSkipLink = this.noLinkExceptions.some(exception => 
                    lowerActionText === exception.toLowerCase()
                );
                
                if (shouldSkipLink) {
                    return; 
                }
                
                if (this.shouldCreateMultipleLinks(actionText)) {
                    this.createMultipleLinks(actionCell, actionText);
                } else {
                    const searchQuery = this.processSearchQuery(actionText);
                    const wikiURL = this.generateWikiSearchURL(searchQuery);
                    
                    const link = document.createElement('a');
                    link.href = wikiURL;
                    link.target = '_blank';
                    link.textContent = actionText;
                    link.style.color = '#2196F3';
                    link.style.textDecoration = 'underline';
                    link.title = `Search wiki for: ${searchQuery}`;
                    
                    actionCell.innerHTML = '';
                    actionCell.appendChild(link);
                }
            });
        });
    }

    storeOriginalContent(actionCell) {
        if (!actionCell.dataset.originalContent) {
            actionCell.dataset.originalContent = actionCell.textContent.trim();
        }
    }

    refreshWikiLinks() {
        document.querySelectorAll('table').forEach(table => {
            let headerRow = table.querySelector('thead tr');
            if (!headerRow) {
                headerRow = table.querySelector('tr');
            }
            if (!headerRow) return;
            
            const headers = headerRow.querySelectorAll('th');
            let actionColumnIndex = -1;
            
            headers.forEach((header, index) => {
                if (header.textContent.trim().toLowerCase() === 'action') {
                    actionColumnIndex = index;
                }
            });
            
            if (actionColumnIndex === -1) return;
            
            let bodyRows = table.querySelectorAll('tbody tr');
            if (bodyRows.length === 0) {
                const allRows = table.querySelectorAll('tr');
                bodyRows = Array.from(allRows).slice(1);
            }
            
            bodyRows.forEach(row => {
                const actionCell = row.querySelectorAll('td')[actionColumnIndex];
                if (actionCell && actionCell.querySelector('a')) {
                    const existingLinks = actionCell.querySelectorAll('a');
                    
                    const hasWikiSearchLinks = Array.from(existingLinks).some(link => 
                        this.isWikiSearchLink(link) && !this.isManualLink(link)
                    );
                    
                    if (hasWikiSearchLinks) {
                        if (!actionCell.dataset.originalContent) {
                            this.storeOriginalContent(actionCell);
                        }
                        
                        const originalText = actionCell.dataset.originalContent;
                        if (originalText) {
                            actionCell.textContent = originalText;
                        }
                    }
                }
            });
        });
        
        this.addWikiSearchLinks();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QuestGuideController();
});