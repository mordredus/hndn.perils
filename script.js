/* =========================================================
   HN-DN STORY DATABASE
========================================================= */

const stories = {

    dreamweaver: {
        type: "ALBUM / STORY — EZRA",
        title: "DREAMWEAVER",

        content: `
EZRA

The first story.

The dream begins here.

[ STORY CONTENT PLACEHOLDER ]

The complete narrative can eventually be divided
into chapters, scenes, documents, and lore entries.

LISTEN TO ALBUM

[ AUDIO PLAYER PLACEHOLDER ]
        `
    },

    schmetterling: {
        type: "ALBUM / STORY — DANIEL",
        title: "SCHMETTERLING",

        content: `
DANIEL

A different perspective.

A different story.

[ STORY CONTENT PLACEHOLDER ]

The Schmetterling narrative will eventually
contain its complete story and lore.

LISTEN TO ALBUM

[ AUDIO PLAYER PLACEHOLDER ]
        `
    },

    rebis: {
        type: "ALBUM / STORY — SALLY",
        title: "REBIS",

        content: `
SALLY

Two halves.

One identity.

[ STORY CONTENT PLACEHOLDER ]

The Rebis narrative will eventually
contain its complete story and lore.

LISTEN TO ALBUM

[ AUDIO PLAYER PLACEHOLDER ]
        `
    },

    yggdrasill: {
        type: "ALBUM / STORY — SYLVAN",
        title: "YGGDRASILL",

        content: `
SYLVAN

The tree remembers.

[ STORY CONTENT PLACEHOLDER ]

The Yggdrasill narrative will eventually
contain its complete story and lore.

LISTEN TO ALBUM

[ AUDIO PLAYER PLACEHOLDER ]
        `
    },

    diner: {
        type: "SIDE STORY — VINCENT",
        title: "PERILOUS DINER",

        content: `
VINCENT

WELCOME TO THE DINER.

Your table is waiting.

Your order has already been placed.

[ STORY CONTENT PLACEHOLDER ]

A side story outside the primary album sequence,
but still part of the HN-DN universe.

LISTEN TO SIDE STORY

[ AUDIO PLAYER PLACEHOLDER ]
        `
    }

};


/* =========================================================
   MEMBER DATABASE
========================================================= */

const members = {

    Ezra:
        "PROTAGONIST — DREAMWEAVER",

    Daniel:
        "PROTAGONIST — SCHMETTERLING",

    Sally:
        "PROTAGONIST — REBIS",

    Sylvan:
        "PROTAGONIST — YGGDRASILL",

    Riya:
        "PROTAGONIST — TMI",

    Vincent:
        "HN-DN MEMBER — SINCE DEBUT"

};


/* =========================================================
   ELEMENTS
========================================================= */

const modal = document.getElementById("modal");
const modalType = document.getElementById("modal-type");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const closeButton = document.getElementById("close-modal");


/* =========================================================
   OPEN STORY
========================================================= */

function openStory(id) {

    const story = stories[id];

    if (!story) return;

    modalType.textContent = story.type;
    modalTitle.textContent = story.title;
    modalContent.textContent = story.content;

    modal.classList.add("active");
}


/* =========================================================
   OPEN MEMBER
========================================================= */

function openMember(name) {

    modalType.textContent = "MEMBER FILE";
    modalTitle.textContent = name.toUpperCase();

    modalContent.textContent = `
${members[name]}

[ MEMBER INFORMATION ]

Biography, personality, relationships,
story appearances, and lore connections
can be added here.

HN-DN MEMBER SINCE DEBUT.
    `;

    modal.classList.add("active");
}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {
    modal.classList.remove("active");
}


/* =========================================================
   ALBUM CLICK EVENTS
========================================================= */

document.querySelectorAll(".album[data-story]")
    .forEach(album => {

        album.addEventListener("click", () => {
            openStory(album.dataset.story);
        });

    });


/* =========================================================
   SIDE STORY
========================================================= */

document.querySelector(".diner-card")
    .addEventListener("click", () => {
        openStory("diner");
    });


/* =========================================================
   MEMBER EVENTS
========================================================= */

document.querySelectorAll(".member")
    .forEach(member => {

        member.addEventListener("click", () => {
            openMember(member.dataset.member);
        });

    });


/* =========================================================
   CLOSE EVENTS
========================================================= */

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});