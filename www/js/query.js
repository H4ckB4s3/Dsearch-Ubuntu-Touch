document.getElementById('hns-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let query = document.getElementById('hns-input').value.trim();
    query = query.replace(/^https?:\/\//, '').replace(/^\./, '').replace(/\s+/g, '.');

    if (query) {
        const parts = query.split('/');
        let domain = parts.shift();
        const path = parts.join('/');

        if (/\.eth$/.test(domain)) {
            domain += '.limo';
        } else {
            domain += '.hns.to';
        }

        const url = path ? `http://${domain}/${path}` : `http://${domain}`;
        window.open(url, '_blank');
    }
});

const settingsButton = document.querySelector('.settings-button');
const settingsMenu = document.querySelector('.settings-menu');

settingsButton.addEventListener('click', () => {
    settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if (!settingsButton.contains(event.target) && !settingsMenu.contains(event.target)) {
        settingsMenu.style.display = 'none';
    }
});
