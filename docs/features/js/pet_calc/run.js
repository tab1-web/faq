(function() {
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

    function reloadPage() {
        window.location.reload();
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
    
    window.reloadPage = reloadPage;
})();