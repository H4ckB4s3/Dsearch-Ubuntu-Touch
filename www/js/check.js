async function checkSite(url, indicatorId) {
    try {
        const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
        if (response.ok || response.type === 'opaque') {
            document.getElementById(indicatorId).classList.add('green');
            document.getElementById(indicatorId).classList.remove('red');
        } else {
            document.getElementById(indicatorId).classList.add('red');
            document.getElementById(indicatorId).classList.remove('green');
        }
    } catch (error) {
        document.getElementById(indicatorId).classList.add('red');
        document.getElementById(indicatorId).classList.remove('green');
    }
}

window.onload = () => {
    checkSite('https://hns.to', 'hns-indicator');
    checkSite('https://eth.limo', 'limo-indicator');
};
