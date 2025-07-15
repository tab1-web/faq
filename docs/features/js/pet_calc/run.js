(function() {
    if (!sessionStorage.getItem('reloaded')) {
        sessionStorage.setItem('reloaded', 'true'); 
        window.location.reload(); 
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

    setTimeout(init, 50);
})();