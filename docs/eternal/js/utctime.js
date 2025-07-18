function displayUTCTime() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    document.getElementById('utc-time').innerHTML = `<strong>UTC Time Now:</strong> ${hours}:${minutes}`;
}

displayUTCTime();
setInterval(displayUTCTime, 1000);