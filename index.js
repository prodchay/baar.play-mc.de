function showServerStatus(status) {
    const statusDiv = document.getElementById('server-status-text');
    const imageEl = document.getElementById('server-status-image');

    if (status.online) {
        statusDiv.textContent = "Online!";
        statusDiv.style.color = "#00ff00";
        imageEl.src = 'https://cdn.7tv.app/emote/63bb3450799f5d0ce4b80686/4x.webp';
        document.title = "baar.play-mc.de | Online";
    } else {
        statusDiv.textContent = "Offline";
        statusDiv.style.color = "#f01000";
        statusDiv.style.marginTop = "20px";
        imageEl.src = 'https://cdn.7tv.app/emote/613b5a03d39af29b8b6e9471/4x.webp';
        document.title = "baar.play-mc.de | Offline";
    }
}

async function fetchPlayers() {
    const response = await fetch('https://api.mcsrvstat.us/3/baar.play-mc.de');
    const data = await response.json();

    showServerStatus(data);

    const players = data.players;
    
    updatePlayers(players);
}

function updatePlayers(players) {
    const playerContainer = document.getElementById('players');
    playerContainer.innerHTML = '';

    players.list.forEach(player => {
        const playerElement = document.createElement('div');
        playerElement.className = 'player';
        playerElement.innerHTML = `${player.name}`;
        playerContainer.appendChild(playerElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPlayers();
});