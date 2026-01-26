(function() {
    function updateUTCTime() {
        const now = new Date();
        const utcHours = now.getUTCHours().toString().padStart(2, '0');
        const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
        const timeElement = document.getElementById('utc-time');
        if (timeElement) {
            timeElement.textContent = `${utcHours}:${utcMinutes}`;
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            updateUTCTime();
            setInterval(updateUTCTime, 1000);
        });
    } else {
        updateUTCTime();
        setInterval(updateUTCTime, 1000);
    }
})();


