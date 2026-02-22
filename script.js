// =======================================
// HN-DN INTERACTIVE JAVASCRIPT
// =======================================

// ===========================
// GLOBAL VARIABLES
// ===========================
const sections = document.querySelectorAll('section');
const members = document.querySelectorAll('.member-profile');
const albums = document.querySelectorAll('.album');
const presaveForm = document.querySelector('#presave form');
const heroContent = document.querySelector('#hero-content');

// ===========================
// SECTION FADE-IN ON SCROLL
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
// HERO FLOATING + GLITCH EFFECT
// ===========================
function heroGlitch(){
    const x = Math.random()*10-5;
    const y = Math.random()*10-5;
    heroContent.style.transform = `translate(${x}px, ${y}px)`;
    if(Math.random() > 0.85){
        heroContent.style.textShadow = `
            -2px 0 red,
            2px 0 cyan,
            0 -2px lime,
            0 2px magenta
        `;
    } else {
        heroContent.style.textShadow = 'none';
    }
}
setInterval(heroGlitch, 500);

// ===========================
// MEMBER INFO & HOVER SCALE
// ===========================
const memberDetails = {
    ezra: "Ezra Milagrosa Diwa — Leader & Producer. Filipino powerhouse in music.",
    sally: "Sally Armitage — British main vocalist and lead dancer.",
    sariyah: "Sariyah Lie — Indonesian-Chinese sub-vocalist, majestic vocals.",
    slyvan: "Slyvan Montgomery — American rapper & dancer, freestyle specialist.",
    hyunseok: "Lee Hyun-Seok — Korean-American main dancer & rapper."
};

members.forEach(profile=>{
    // Hover scale
    profile.addEventListener('mouseenter',()=> profile.style.transform='scale(1.05)');
    profile.addEventListener('mouseleave',()=> profile.style.transform='scale(1)');
    // Click info
    profile.addEventListener('click',()=>{
        const key = profile.id;
        alert(memberDetails[key] || "Member info unavailable");
    });
});

// ===========================
// ALBUM CLICK INTERACTIONS
// ===========================
const albumDetails = {
    dreamweaver:["Dreamweaver (Title Track)","Wave","Immutable","No-Nonsense","Tuonela (B-Side)"],
    worlds:["The World's a Stage (Single Album)"],
    schmetterling:["Schmetterling","Nothing But My Love","Spotlight"],
    instrumental:["Hun-Dun Hezou / Wan-Deon Hapzau (Instrumental Album)"]
};

albums.forEach(album=>{
    album.addEventListener('mouseenter',()=> album.style.transform='translateX(10px)');
    album.addEventListener('mouseleave',()=> album.style.transform='translateX(0)');
    album.addEventListener('click',()=>{
        const key = album.id;
        const tracks = albumDetails[key];
        if(tracks) alert(`Tracks:\n${tracks.map((t,i)=>`${i+1}. ${t}`).join('\n')}`);
        else alert("No track info available");
    });
});

// ===========================
// PRE-SAVE FORM INTERACTION
// ===========================
if(presaveForm){
    presaveForm.addEventListener('submit', e=>{
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const platform = document.querySelector('#platform').value;
        
        const confirmation = document.createElement('div');
        confirmation.textContent = `Thanks! Pre-save sent to ${email} for ${platform}.`;
        confirmation.style.position='fixed';
        confirmation.style.bottom='20px';
        confirmation.style.right='20px';
        confirmation.style.background='#fff';
        confirmation.style.color='#000';
        confirmation.style.padding='15px 25px';
        confirmation.style.borderRadius='8px';
        confirmation.style.zIndex='9999';
        confirmation.style.boxShadow='0 0 20px rgba(255,255,255,0.5)';
        document.body.appendChild(confirmation);
        setTimeout(()=>confirmation.remove(),4000);
        presaveForm.reset();
    });
}

// ===========================
// OPTIONAL WUXING CIRCULAR LAYOUT
// ===========================
function applyWuxing(){
    const radius = 150;
    const centerX = window.innerWidth/2;
    const centerY = window.innerHeight/2 + 100;
    members.forEach((member,index)=>{
        const angle = (index/members.length)*(2*Math.PI);
        const x = centerX + radius*Math.cos(angle) - member.offsetWidth/2;
        const y = centerY + radius*Math.sin(angle) - member.offsetHeight/2;
        member.style.position='absolute';
        member.style.left=`${x}px`;
        member.style.top=`${y}px`;
    });
}
if(window.innerWidth>900) applyWuxing();
window.addEventListener('resize',()=>{ if(window.innerWidth>900) applyWuxing(); });

// ===========================
// SCROLL PARALLAX FOR ALBUMS
// ===========================
window.addEventListener('scroll',()=>{
    albums.forEach((album,i)=>{
        const offset = window.scrollY*0.05*(i+1);
        album.style.transform = `translateY(${offset}px)`;
    });
});

// ===========================
// RANDOM BACKGROUND FLICKER
// ===========================
setInterval(()=>{
    if(Math.random()>0.97) document.body.style.backgroundColor='#111';
    else document.body.style.backgroundColor='#000';
},300);

// ===========================
// SITE LOAD FADE-IN
// ===========================
window.addEventListener('load',()=>{
    document.getElementById('site-wrapper').style.transition='opacity 1.5s ease';
    document.getElementById('site-wrapper').style.opacity=1;
});