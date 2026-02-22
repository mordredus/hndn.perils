// =======================================
// HN-DN CINEMATIC INTERACTIVE SCRIPT
// =======================================

// =======================================
// GLOBAL VARIABLES & DOM ELEMENTS
// =======================================
const siteWrapper = document.getElementById('site-wrapper');
const sections = document.querySelectorAll('section');
const members = document.querySelectorAll('.member-profile');
const albums = document.querySelectorAll('.album');
const presaveForm = document.querySelector('#presave form');
const heroContent = document.querySelector('#hero-content');

// Member detailed info for popups
const memberDetails = {
    ezra: {
        fullName: "Ezra Milagrosa Diwa",
        role: "Leader • Producer • Vocalist • Dancer",
        nationality: "Filipino",
        bio: "Ezra leads HN-DN with creative direction and production expertise. She writes and produces much of the group's music."
    },
    sally: {
        fullName: "Sally Armitage",
        role: "Main Vocalist • Lead Dancer",
        nationality: "British",
        bio: "Known for her clear vocal tone and technical dance precision."
    },
    sariyah: {
        fullName: "Sariyah Lie",
        role: "Sub-Vocalist",
        nationality: "Indonesian-Chinese",
        bio: "Recognized for her cool, majestic vocal range spanning multiple octaves."
    },
    slyvan: {
        fullName: "Slyvan Montgomery",
        role: "Rapper • Dancer",
        nationality: "American",
        bio: "Energetic performer known for freestyle battles and powerful stage presence."
    },
    hyunseok: {
        fullName: "Lee Hyun-Seok",
        role: "Main Dancer • Rapper",
        nationality: "Korean-American",
        bio: "Charismatic performer known for sharp choreography and confident delivery."
    }
};

// Album info for gallery interactions
const albumDetails = {
    "dreamweaver": ["Dreamweaver (Title Track)", "Wave", "Immutable", "No-Nonsense", "Tuonela (B-Side)"],
    "worlds-a-stage": ["The World's a Stage (Single Album)"],
    "schmetterling": ["Schmetterling", "Nothing But My Love", "Spotlight"],
    "instrumental": ["Hun-Dun Hezou / Wan-Deon Hapzau (Instrumental Album)"]
};

// =======================================
// HELPER FUNCTIONS
// =======================================

// Smooth fade-in for any element
function fadeInElement(element, delay = 0) {
    element.style.transition = `opacity 1.2s ease ${delay}s, transform 1.2s ease ${delay}s`;
    element.style.opacity = 1;
    element.style.transform = "translateY(0)";
}

// Smooth fade-out
function fadeOutElement(element) {
    element.style.opacity = 0;
    element.style.transform = "translateY(40px)";
}

// Random floating animation for hero text
function floatHeroText() {
    let x = Math.random() * 10 - 5;
    let y = Math.random() * 10 - 5;
    heroContent.style.transform = `translate(${x}px, ${y}px)`;
}

// Scroll-triggered animation observer
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fadeInElement(entry.target);
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    fadeOutElement(section);
    fadeObserver.observe(section);
});

// =======================================
// MEMBERS INTERACTION
// =======================================

members.forEach(profile => {
    profile.addEventListener('mouseenter', () => {
        profile.style.transform = "scale(1.05)";
        profile.style.transition = "transform 0.3s ease";
    });
    profile.addEventListener('mouseleave', () => {
        profile.style.transform = "scale(1)";
    });

    profile.addEventListener('click', () => {
        const key = profile.querySelector('h3').textContent.split(' ')[0].toLowerCase();
        const info = memberDetails[key];
        if (info) {
            alert(`${info.fullName}\n${info.role}\n${info.nationality}\n\n${info.bio}`);
        } else {
            alert("Member info not found.");
        }
    });
});

// =======================================
// ALBUM INTERACTIONS
// =======================================

albums.forEach(album => {
    album.addEventListener('mouseenter', () => {
        album.style.transform = "translateX(10px)";
        album.style.transition = "transform 0.4s ease";
    });
    album.addEventListener('mouseleave', () => {
        album.style.transform = "translateX(0)";
    });

    album.addEventListener('click', () => {
        const albumName = album.querySelector('h3').textContent.split(' ')[0].toLowerCase();
        const tracks = albumDetails[albumName.replace(/[^a-z]/g, '')];
        if (tracks) {
            let trackList = tracks.map((t, i) => `${i+1}. ${t}`).join("\n");
            alert(`Tracks in ${album.querySelector('h3').textContent}:\n\n${trackList}`);
        } else {
            alert("No track info found.");
        }
    });
});

// =======================================
// PRE-SAVE FORM INTERACTION
// =======================================

if (presaveForm) {
    presaveForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const platform = document.querySelector('#platform').value;

        // Show confirmation popup
        const confirmation = document.createElement('div');
        confirmation.textContent = `Thanks! Pre-save sent to ${email} for ${platform}.`;
        confirmation.style.position = 'fixed';
        confirmation.style.bottom = '20px';
        confirmation.style.right = '20px';
        confirmation.style.backgroundColor = '#fff';
        confirmation.style.color = '#000';
        confirmation.style.padding = '15px 25px';
        confirmation.style.borderRadius = '8px';
        confirmation.style.zIndex = 9999;
        confirmation.style.boxShadow = '0 0 20px rgba(255,255,255,0.5)';
        document.body.appendChild(confirmation);

        setTimeout(() => confirmation.remove(), 4000);
        presaveForm.reset();
    });
}

// =======================================
// HERO FLOATING & GLITCH EFFECT
// =======================================

setInterval(() => {
    floatHeroText();

    // Glitch effect
    if (Math.random() > 0.8) {
        heroContent.style.textShadow = `
            -2px 0 red,
            2px 0 cyan,
            0 -2px lime,
            0 2px magenta
        `;
    } else {
        heroContent.style.textShadow = "none";
    }
}, 500);

// =======================================
// WUXING-INSPIRED MEMBER LAYOUT (conceptual)
// =======================================

function applyWuxingLayout() {
    const radius = 150;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2 + 100;

    members.forEach((member, index) => {
        const angle = (index / members.length) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle) - member.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - member.offsetHeight / 2;
        member.style.position = 'absolute';
        member.style.left = `${x}px`;
        member.style.top = `${y}px`;
    });
}

// Only apply if screen is wide
if(window.innerWidth > 900) applyWuxingLayout();
window.addEventListener('resize', () => {
    if(window.innerWidth > 900) applyWuxingLayout();
});

// =======================================
// SCROLL PARALLAX FOR ALBUMS
// =======================================

window.addEventListener('scroll', () => {
    albums.forEach((album, i) => {
        const offset = window.scrollY * 0.05 * (i+1);
        album.style.transform = `translateY(${offset}px)`;
    });
});

// =======================================
// SITE LOADER FADE-IN
// =======================================

window.addEventListener('load', () => {
    siteWrapper.style.transition = "opacity 1.5s ease";
    siteWrapper.style.opacity = 1;
});

// =======================================
// RANDOM BACKGROUND FLICKER (existential chaos vibe)
// =======================================

setInterval(() => {
    if (Math.random() > 0.97) {
        document.body.style.backgroundColor = "#111";
    } else {
        document.body.style.backgroundColor = "#000";
    }
}, 300);

// =======================================
// END OF SCRIPT
// =======================================