(function() {
    sessionStorage.removeItem('hasReloadedSum');
    sessionStorage.removeItem('sumFormState');
   
    const lastCalculator = sessionStorage.getItem('lastCalculator');
    const currentCalculator = 'char';
    
    if (!sessionStorage.getItem('hasReloadedChar')) {
        sessionStorage.setItem('hasReloadedChar', 'true');
        sessionStorage.setItem('activeCalculator', 'char');
    }
    
    function resetForm() {
        const form = document.forms['statcalculator'];
        if (!form) return;
        
    }
    
    function initializeAll() {
        try {
            if (typeof classskills !== 'function' ||
                typeof equipmentgrade !== 'function' ||
                typeof calc !== 'function') {
                setTimeout(initializeAll, 100);
                return;
            }
            
            if (sessionStorage.getItem('lastCalculator') === 'sum') {
                resetForm();
            }
            
            sessionStorage.setItem('lastCalculator', 'char');
            
            if (typeof classskills === 'function') classskills();
            if (typeof equipmentgrade === 'function') equipmentgrade();
            if (typeof buffs === 'function') buffs();
            if (typeof passives === 'function') passives();
            if (typeof toggles === 'function') toggles();
            if (typeof debuffs === 'function') debuffs();
            if (typeof edebuffs === 'function') edebuffs();
            if (typeof calc === 'function') calc();
            if (typeof boxgoaway === 'function') boxgoaway();
            
        } catch (error) {
            console.error('Calculator initialization error:', error);
            setTimeout(initializeAll, 200);
        }
    }
    
    function init() {
        try {
            if (document.readyState === 'complete') {
                initializeAll();
            } else {
                document.addEventListener('DOMContentLoaded', initializeAll);
            }
           
            if (typeof document$ !== 'undefined' && document$.subscribe) {
                document$.subscribe(function() {
                    setTimeout(initializeAll, 100);
                });
            }
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }
    
    setTimeout(init, 50);
})();