(function() {
    function updateUTCTime() {
        const now = new Date();
        const utcHours = now.getUTCHours().toString().padStart(2, '0');
        const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
        document.getElementById('utc-time').textContent = `${utcHours}:${utcMinutes}`;
    }
    updateUTCTime();
    setInterval(updateUTCTime, 1000);
})();