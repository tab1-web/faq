(function() {
    function initializeAll() {
        if (typeof classskills !== 'function' || 
            typeof equipmentgrade !== 'function' ||
            typeof calc !== 'function') {
            console.error('Missing required functions!');
            setTimeout(initializeAll, 100);
            return;
        }
        
        classskills();
        equipmentgrade();
        buffs();
        passives();
        toggles();
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