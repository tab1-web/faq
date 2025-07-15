(function() {
    var shouldReload = !sessionStorage.getItem('reloaded') && !window.location.hash.includes('reloaded');
    
    if (shouldReload) {
        sessionStorage.setItem('reloaded', 'true');
        window.location.hash = 'reloaded';
        
        setTimeout(function() {
            window.location.reload(true);
        }, 200);
        return;
    }

    function initializeAll() {
        if (typeof buffs !== 'function' || 
            typeof debuffs !== 'function' ||
            typeof calc !== 'function') {
            console.error('Missing required functions!');
            setTimeout(initializeAll, 100);
            return;
        }
        
        buffs();
        debuffs();
        edebuffs();
        calc();
        boxgoaway();
    }

    function init() {
        if (document.readyState === 'complete') {
            initializeAll();
        } else {
            document.addEventListener('DOMContentLoaded', initializeAll);
        }
        
        if (typeof document$ !== 'undefined') {
            document$.subscribe(function() {
                setTimeout(initializeAll, 100);
            });
        }
    }

    setTimeout(init, 100);
})();