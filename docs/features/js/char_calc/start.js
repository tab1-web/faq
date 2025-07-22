(function() {
    sessionStorage.removeItem('hasReloadedSum');
    sessionStorage.removeItem('sumFormState');
    
    if (!sessionStorage.getItem('hasReloadedChar')) {
        sessionStorage.setItem('hasReloadedChar', 'true');
        sessionStorage.setItem('activeCalculator', 'char');
        setTimeout(() => window.location.reload(), 50);
        return;
    }

    function resetForm() {
        const form = document.forms['statcalculator'];
        if (!form) return;
        
        form.reset();
        
    }

    function initializeAll() {
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