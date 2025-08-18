document.addEventListener('DOMContentLoaded', function() {
    const h2Elements = document.querySelectorAll('h2');
    
    h2Elements.forEach(function(h2, index) {
        h2.setAttribute('data-collapsible', 'true');
        
        let nextElement = h2.nextElementSibling;
        let contentElements = [];
        
        // Collect all content until next H2 or end
        while (nextElement && nextElement.tagName !== 'H2') {
            contentElements.push(nextElement);
            nextElement = nextElement.nextElementSibling;
        }
        
        if (contentElements.length > 0) {
            const wrapper = document.createElement('div');
            wrapper.className = 'auto-collapsible-h2-content';
            
            // For first H2 open, others closed by default:
            // if (index > 0) {
            //     h2.setAttribute('data-collapsed', 'true');
            //     wrapper.setAttribute('data-collapsed', 'true');
            // }
            
            // For all sections closed by default, uncomment:
            // h2.setAttribute('data-collapsed', 'true');
            // wrapper.setAttribute('data-collapsed', 'true');
            
            contentElements.forEach(function(element) {
                wrapper.appendChild(element);
            });
            
            h2.parentNode.insertBefore(wrapper, h2.nextSibling);
            
            h2.addEventListener('click', function() {
                const isCollapsed = h2.getAttribute('data-collapsed') === 'true';
                
                if (isCollapsed) {
                    h2.removeAttribute('data-collapsed');
                    wrapper.removeAttribute('data-collapsed');
                } else {
                    h2.setAttribute('data-collapsed', 'true');
                    wrapper.setAttribute('data-collapsed', 'true');
                }
            });
        }
    });
});

