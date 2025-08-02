document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('/faq/classtransfers/js/link-mappings.json');
        const data = await response.json();
        
        document.querySelectorAll('table td').forEach(td => {
            const cellItems = td.textContent.split(',').map(item => item.trim());
            
            td.innerHTML = cellItems.map(item => {
                const found = data.mappings.find(m => m.text === item);
                return found ? `<a href="${found.url}" target="_blank">${item}</a>` : item;
            }).join(', ');
        });
    } catch (error) {
        console.error('Failed to load link mappings:', error);
    }
});