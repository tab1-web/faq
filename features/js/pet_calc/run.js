(function() {
    sessionStorage.removeItem('hasReloadedChar');
    sessionStorage.removeItem('charFormState');
    
    if (!sessionStorage.getItem('hasReloadedSum')) {
        sessionStorage.setItem('hasReloadedSum', 'true');
        sessionStorage.setItem('activeCalculator', 'sum');
        setTimeout(function() {
            window.location.reload();
        }, 300);
        return;
    }

    function resetForm() {
        const form = document.forms['statcalculator'];
        if (!form) return;
        
        form.reset();
    }

    function initializeAll() {
        if (typeof buffs !== 'function' || 
            typeof debuffs !== 'function' ||
            typeof edebuffs !== 'function' ||
            typeof calc !== 'function' ||
            typeof boxgoaway !== 'function') {
            setTimeout(initializeAll, 100);
            return;
        }

        const form = document.forms['statcalculator'];
        if (!form) {
            setTimeout(initializeAll, 100);
            return;
        }

        if (sessionStorage.getItem('lastCalculator') === 'char') {
            resetForm();
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
                setTimeout(initializeAll, 100);
            });
        }
    }

    setTimeout(init, 50);
})();