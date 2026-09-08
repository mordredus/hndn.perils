/* =========================
   STORY DATABASE
========================= */

const stories = {

    dreamweaver: {
        title: "DREAMWEAVER",
        type: "STORY / EZRA",
        content:
`EZRA

The first story.

The dream begins here.

[ STORY CONTENT PLACEHOLDER ]

This section can eventually contain the complete Dreamweaver narrative, divided into chapters.`
    },

    schmetterling: {
        title: "SCHMETTERLING",
        type: "STORY / DANIEL",
        content:
`DANIEL

A different perspective.

A different story.

[ STORY CONTENT PLACEHOLDER ]

The Schmetterling narrative will eventually be loaded here.`
    },

    rebis: {
        title: "REBIS",
        type: "STORY / SALLY",
        content:
`SALLY

Two halves.

One identity.

[ STORY CONTENT PLACEHOLDER ]

The Rebis narrative will eventually be loaded here.`
    },

    yggdrasill: {
        title: "YGGDRASILL",
        type: "STORY / SYLVAN",
        content:
`SYLVAN

The tree remembers.

[ STORY CONTENT PLACEHOLDER ]

The Yggdrasill narrative will eventually be loaded here.`
    },

    diner: {
        title: "PERILOUS DINER",
        type: "SIDE STORY / VINCENT",
        content:
`VINCENT

WELCOME TO THE DINER.

Your table is waiting.

Your order has already been placed.

[ STORY CONTENT PLACEHOLDER ]

Side stories may reveal things that the main stories never mention.`
    }

};


/* =========================
   OPEN STORY
========================= */

function openStory(id) {

    const story = stories[id];

    if (!story) return;

    document.getElementById("modal-type").textContent =
        story.type;

    document.getElementById("modal-title").textContent =
        story.title;

    document.getElementById("modal-content").textContent =
        story.content;

    document.getElementById("modal").classList.add("active");

}


/* =========================
   MEMBER DATABASE
========================= */

const members = {

    Ezra: {
        role: "PROTAGONIST — DREAMWEAVER"
    },

    Daniel: {
        role: "PROTAGONIST — SCHMETTERLING"
    },

    Sally: {
        role: "PROTAGONIST — REBIS"
    },

    Sylvan: {
        role: "PROTAGONIST — YGGDRASILL"
    },

    Riya: {
        role: "PROTAGONIST — TMI"
    },

    Vincent: {
        role: "HN-DN MEMBER — PERILOUS DINER"
    }

};


/* =========================
   MEMBER MODAL
========================= */

function openMember(name) {

    const member = members[name];

    document.getElementById("modal-type").textContent =
        "MEMBER FILE";

    document.getElementById("modal-title").textContent =
        name.toUpperCase();

    document.getElementById("modal-content").textContent =
        `${member.role}

[ MEMBER INFORMATION PLACEHOLDER ]

Biography, personality, lore connections, appearances,
and other information can be added here.`;

    document.getElementById("modal").classList.add("active");

}


/* =========================
   CLOSE MODAL
========================= */

function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("active");

}


/* =========================
   LISTEN
========================= */

function listenAlbum(album) {

    /*
        Replace this later with:

        audio.src = "audio/" + album + ".mp3";
        audio.play();

        We keep it as a placeholder for now.
    */

    document.getElementById("modal-type").textContent =
        "AUDIO PLAYER";

    document.getElementById("modal-title").textContent =
        album.toUpperCase();

    document.getElementById("modal-content").textContent =
        `NOW SELECTED:

${album}

[ AUDIO PLAYER WILL GO HERE ]

You can later add:
• album artwork
• tracklist
• progress bar
• play/pause
• volume
• individual tracks`;

    document.getElementById("modal").classList.add("active");

}


/* =========================
   CLOSE WITH ESC
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================
   CLOSE WHEN CLICKING OUTSIDE
========================= */

document
    .getElementById("modal")
    .addEventListener("click", (event) => {

        if (event.target.id === "modal") {
            closeModal();
        }

    });