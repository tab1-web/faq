document.addEventListener('DOMContentLoaded', function() {
    const h2Elements = document.querySelectorAll('h2');
    let levelingZonesH2 = null;
    
    h2Elements.forEach(function(h2) {
        if (h2.textContent.trim().toLowerCase().includes('leveling zones')) {
            levelingZonesH2 = h2;
        }
    });
    
    if (!levelingZonesH2) return;
    
    let nextElement = levelingZonesH2.nextElementSibling;
    let sectionElements = [];
    
    while (nextElement && nextElement.tagName !== 'H2') {
        sectionElements.push(nextElement);
        nextElement = nextElement.nextElementSibling;
    }
    
    const h3Elements = sectionElements.filter(el => el.tagName === 'H3');
    
    h3Elements.forEach(function(h3) {
        h3.setAttribute('data-collapsible', 'true');
        
        let nextEl = h3.nextElementSibling;
        let contentElements = [];
        
        while (nextEl && !['H2', 'H3'].includes(nextEl.tagName)) {
            contentElements.push(nextEl);
            nextEl = nextEl.nextElementSibling;
        }
        
        if (contentElements.length > 0) {
            const wrapper = document.createElement('div');
            wrapper.className = 'auto-collapsible-h3-content';
            
            contentElements.forEach(function(element) {
                wrapper.appendChild(element);
            });
            
            h3.parentNode.insertBefore(wrapper, h3.nextSibling);
            
            h3.addEventListener('click', function() {
                const isCollapsed = h3.getAttribute('data-collapsed') === 'true';
                
                if (isCollapsed) {
                    h3.removeAttribute('data-collapsed');
                    wrapper.removeAttribute('data-collapsed');
                } else {
                    h3.setAttribute('data-collapsed', 'true');
                    wrapper.setAttribute('data-collapsed', 'true');
                }
            });
        }
    });
});