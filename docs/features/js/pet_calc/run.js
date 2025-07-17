(function() {
    sessionStorage.removeItem('hasReloadedChar');
    
    if (!sessionStorage.getItem('hasReloadedSum')) {
        sessionStorage.setItem('hasReloadedSum', 'true');
        sessionStorage.setItem('activeCalculator', 'sum');
        setTimeout(function() {
            window.location.reload();
        }, 300);
        return;
    }

    function initializeAll() {
        if (typeof buffs !== 'function' || 
            typeof debuffs !== 'function' ||
            typeof edebuffs !== 'function' ||
            typeof calc !== 'function' ||
            typeof boxgoaway !== 'function') {
            console.warn('Missing required functions, retrying in 100ms...');
            setTimeout(initializeAll, 100);
            return;
        }

        const form = document.forms['statcalculator'];
        if (!form) {
            console.warn('Form not found, retrying in 100ms...');
            setTimeout(initializeAll, 100);
            return;
        }

        console.log('Initializing sum calculator...');
        
        if (sessionStorage.getItem('lastCalculator') === 'char') {
            form.reset();
        }
        sessionStorage.setItem('lastCalculator', 'sum');

        buffs();
        debuffs();
        edebuffs();
        calc();
        boxgoaway();

        setTimeout(function() {
            if (typeof initializeWeaponSAs === 'function') {
                initializeWeaponSAs();
            }
        }, 100);
    }

    function init() {
        if (document.readyState === 'complete') {
            initializeAll();
        } else {
            document.addEventListener('DOMContentLoaded', initializeAll);
        }
        
        if (typeof document$ !== 'undefined') {
            document$.subscribe(function() {
                console.log('Material navigation detected, reinitializing...');
                setTimeout(initializeAll, 100);
            });
        }
    }

    setTimeout(init, 50);
})();