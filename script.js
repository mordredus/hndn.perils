// SECTION FADE-IN
const sections=document.querySelectorAll('section');
const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';}
    });
},{threshold:0.2});
sections.forEach(s=>observer.observe(s));

// HERO FLOAT
const heroContent=document.querySelector('#hero-content');
setInterval(()=>{
    const x=Math.random()*6-3;
    const y=Math.random()*6-3;
    heroContent.style.transform=`translate(${x}px,${y}px)`;
},500);

// MEMBER ALERTS
const members=document.querySelectorAll('.member-profile');
const memberInfo={
    ezra:"Ezra Milagrosa Diwa — Leader & Producer • Filipino",
    sally:"Sally Armitage — Vocalist & Lead Dancer • British",
    sariyah:"Sariyah Lie — Sub-Vocalist • Indonesian-Chinese",
    slyvan:"Slyvan Montgomery — Rapper & Dancer • American",
    hyunseok:"Lee Hyun-Seok — Main Dancer & Rapper • Korean-American"
};
members.forEach(m=>{
    m.addEventListener('click',()=>alert(memberInfo[m.id]));
});

// ALBUM ALERTS
const albums=document.querySelectorAll('.album');
const albumInfo={
    dreamweaver:["Dreamweaver (Title Track)","Wave","Immutable","No-Nonsense","Tuonela (B-Side)"],
    worlds:["The World's a Stage (Single Album)"],
    schmetterling:["Schmetterling","Nothing But My Love","Spotlight"],
    instrumental:["Hun-Dun Hezou/Wan-Deon Hapzau (Instrumental)"]
};
albums.forEach(a=>{
    a.addEventListener('click',()=>{
        const t=albumInfo[a.id];
        if(t) alert(t.map((v,i)=>`${i+1}. ${v}`).join('\n'));
        else alert("No track info available");
    });
});

// PRE-SAVE FORM
const form=document.querySelector('#presave-form');
form.addEventListener('submit',e=>{
    e.preventDefault();
    const email=document.querySelector('#email').value;
    const platform=document.querySelector('#platform').value;
    alert(`Pre-save sent to ${email} for ${platform}`);
    form.reset();
});