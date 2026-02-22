// Section switching
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Album info
function selectAlbum(albumName) {
    const info = document.getElementById('album-info');

    if (albumName === "Leafless Tea") {
        info.innerHTML = `
            <p>Release: May 14</p>
            <p>Genre: Alternative Pop / Dark R&B</p>
            <p>Concept: Emotional restraint, quiet chaos.</p>
        `;
    } else {
        info.innerHTML = `
            <p>Release: TBA</p>
            <p>Genre: Cinematic Pop</p>
            <p>Concept: Duality and destiny.</p>
        `;
    }
}

// Wuxing-inspired member bios
function showBio(element) {
    const display = document.getElementById('bio-display');

    const bios = {
        WOOD: "LIAN — Leader, Main Vocal. Represents growth and vision.",
        FIRE: "RYU — Main Dancer, Rapper. Represents passion and intensity.",
        EARTH: "KAEL — Producer, Sub Vocal. Represents balance and stability.",
        METAL: "SEI — Visual, Lead Vocal. Represents discipline and elegance.",
        WATER: "NOX — Maknae, Sub Rapper. Represents mystery and adaptability."
    };

    display.innerHTML = `<p>${bios[element]}</p>`;
}

// Pre-save unlock
function unlockPresave() {
    const status = document.getElementById('presave-status');
    const content = document.getElementById('exclusive-content');

    status.innerText = "Access Granted";
    content.innerHTML = `
        <p>🎧 Exclusive Teaser Snippet Unlocked</p>
        <p>“Silence tastes like tea without leaves...”</p>
    `;
}

