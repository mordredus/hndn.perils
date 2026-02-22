// ======================================
// HN-DN INTERACTIVE SCRIPT
// ======================================

// Loader fade
window.addEventListener('load', () => {
    const loader = document.getElementById('site-wrapper');
    loader.style.opacity = 0;
    setTimeout(() => loader.style.opacity = 1, 200);
});

// Member profile click interaction
const memberDetails = {
    ezra: "Ezra Milagrosa Diwa — Leader, Producer, Filipino powerhouse. Multi-talented vocalist and dancer.",
    sally: "Sally Armitage — British vocalist and lead dancer. Sharp, graceful stage presence.",
    sariyah: "Sariyah Lie — Indonesian-Chinese sub-vocalist with wide vocal range.",
    slyvan: "Slyvan Montgomery — American rapper and freestyle battle specialist.",
    hyunseok: "Lee Hyun-Seok — Korean-American main dancer, rapper, charismatic performer."
};

// Add click listeners
document.querySelectorAll('.member-profile').forEach(profile => {
    profile.addEventListener('click', () => {
        const nameKey = profile.querySelector('h3').textContent.toLowerCase().split(' ')[0];
        const infoBox = document.getElementById('member-info');
        infoBox.innerHTML = `<p>${memberDetails[nameKey] || "No details available."}</p>`;
        infoBox.scrollIntoView({behavior: 'smooth'});
    });
});

// Scroll fade-in for sections
const sections = document.querySelectorAll('section');

const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0px)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    fadeObserver.observe(section);
});

// Pre-save form submit feedback
const preSaveForm = document.querySelector('#presave form');
if(preSaveForm){
    preSaveForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const platform = document.querySelector('#platform').value;
        alert(`Thanks! Pre-save link sent to ${email} for ${platform}.`);
        preSaveForm.reset();
    });
}