// =====================================
// HN-DN INTERACTIVE JS (CSS-friendly)
// =====================================

// DOM elements
const sections = document.querySelectorAll('section');
const members = document.querySelectorAll('.member-profile');
const albums = document.querySelectorAll('.album');
const presaveForm = document.querySelector('#presave form');
const heroContent = document.querySelector('#hero-content');

// ===========================
// SECTION FADE ON SCROLL
// ===========================
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });
sections.forEach(section => fadeObserver.observe(section));

// ===========================
// MEMBER CLICK INFO
// ===========================
const memberDetails = {
    ezra: "Ezra Milagrosa Diwa — Leader, Producer, Vocalist, Dancer. Filipino powerhouse.",
    sally: "Sally Armitage — British main vocalist and lead dancer.",
    sariyah: "Sariyah Lie — Sub-vocalist, Indonesian-Chinese, majestic vocals.",
    slyvan: "Slyvan Montgomery — American rapper & dancer, freestyle specialist.",
    hyunseok: "Lee Hyun-Seok — Korean-American main dancer & rapper."
};
members.forEach(profile => {
    profile.addEventListener('click', () => {
        const key = profile.querySelector('h3').textContent.split(' ')[0].toLowerCase();
        alert(memberDetails[key] || "Member info unavailable.");
    });
});

// ===========================
// MEMBER HOVER SCALE
// ===========================
members.forEach(profile => {
    profile.addEventListener('mouseenter', () => profile.style.transform = "scale(1.05)");
    profile.addEventListener('mouseleave', () => profile.style.transform = "scale(1)");
});

// ===========================
// ALBUM CLICK INFO
// ===========================
const albumDetails = {
    dreamweaver: ["Dreamweaver (Title Track)", "Wave", "Immutable", "No-Nonsense", "Tuonela (B-Side)"],
    worlds: ["The World's a Stage (Single Album)"],
    schmetterling: ["Schmetterling", "Nothing But My Love", "Spotlight"],
    instrumental: ["Hun-Dun Hezou / Wan-Deon Hapzau (Instrumental Album)"]
};
albums.forEach(album => {
    album.addEventListener('click', () => {
        const albumName = album.querySelector('h3').textContent.toLowerCase().split(' ')[0];
        const tracks = albumDetails[albumName];
        if(tracks) alert(`Tracks:\n${tracks.map((t,i)=>`${i+1}. ${t}`).join('\n')}`);
        else alert("Track info unavailable.");
    });
});

// ===========================
// PRE-SAVE FORM INTERACTION
// ===========================
if(presaveForm){
    presaveForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const platform = document.querySelector('#platform').value;
        alert(`Pre-save sent to ${email} for ${platform}!`);
        presaveForm.reset();
    });
}

// ===========================
// HERO FLOATING EFFECT
// ===========================
setInterval(() => {
    if(heroContent){
        const x = Math.random()*10-5;
        const y = Math.random()*10-5;
        heroContent.style.transform = `translate(${x}px, ${y}px)`;
    }
}, 500);