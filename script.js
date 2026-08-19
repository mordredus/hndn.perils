/* =========================================
   LOADING SCREEN
   ========================================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 900);

});


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    const isOpen =
        mobileMenu.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove(
                "open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


/* =========================================
   ALBUM DATA
   ========================================= */

const albums = {

    leafless: {

        number:
            "ALBUM 01",

        title:
            "Leafless Tea",

        release:
            "May 14",

        genre:
            "Alternative Pop",

        concept:
            "Wuxing",

        description:
            "HN-DN's debut concept release explores absence, memory, transformation, and the relationship between the five elemental forces."
    },


    afterimage: {

        number:
            "ALBUM 02",

        title:
            "Afterimage",

        release:
            "TBA",

        genre:
            "Experimental Pop",

        concept:
            "Memory",

        description:
            "A future HN-DN release centered around the traces left behind after something disappears."
    },


    fivefold: {

        number:
            "ALBUM 03",

        title:
            "Fivefold",

        release:
            "TBA",

        genre:
            "Alternative / Electronic",

        concept:
            "Five Elements",

        description:
            "Five forces. Five perspectives. One world. Fivefold expands the Wuxing concept into a larger HN-DN universe."
    }

};


/* =========================================
   ALBUM MODAL
   ========================================= */

const albumModal =
    document.getElementById("albumModal");

const closeModal =
    document.getElementById("closeModal");

const modalNumber =
    document.getElementById("modalNumber");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalRelease =
    document.getElementById("modalRelease");

const modalGenre =
    document.getElementById("modalGenre");

const modalConcept =
    document.getElementById("modalConcept");


document
    .querySelectorAll(".album-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            const albumID =
                card.dataset.album;

            const album =
                albums[albumID];

            if (!album) return;


            modalNumber.textContent =
                album.number;

            modalTitle.textContent =
                album.title;

            modalDescription.textContent =
                album.description;

            modalRelease.textContent =
                album.release;

            modalGenre.textContent =
                album.genre;

            modalConcept.textContent =
                album.concept;


            albumModal.classList.add(
                "open"
            );

            albumModal.setAttribute(
                "aria-hidden",
                "false"
            );

        });

    });


closeModal.addEventListener(
    "click",
    closeAlbumModal
);


function closeAlbumModal() {

    albumModal.classList.remove(
        "open"
    );

    albumModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================
   MEMBER DATA
   ========================================= */

const members = {

    wood: {

        element:
            "WOOD",

        symbol:
            "木",

        name:
            "Member One",

        nationality:
            "HN-DN MEMBER",

        attribute:
            "Growth",

        bio:
            "Wood represents growth, renewal, flexibility, and beginnings. This member embodies the forward movement of HN-DN."
    },


    fire: {

        element:
            "FIRE",

        symbol:
            "火",

        name:
            "Member Two",

        nationality:
            "HN-DN MEMBER",

        attribute:
            "Passion",

        bio:
            "Fire represents intensity, expression, transformation, and energy. This member carries the group's emotional heat."
    },


    earth: {

        element:
            "EARTH",

        symbol:
            "土",

        name:
            "Member Three",

        nationality:
            "HN-DN MEMBER",

        attribute:
            "Stability",

        bio:
            "Earth represents grounding, patience, balance, and endurance. This member acts as a stabilizing force."
    },


    metal: {

        element:
            "METAL",

        symbol:
            "金",

        name:
            "Member Four",

        nationality:
            "HN-DN MEMBER",

        attribute:
            "Precision",

        bio:
            "Metal represents clarity, discipline, structure, and determination. This member represents the sharpest edge of HN-DN."
    },


    water: {

        element:
            "WATER",

        symbol:
            "水",

        name:
            "Member Five",

        nationality:
            "HN-DN MEMBER",

        attribute:
            "Adaptation",

        bio:
            "Water represents movement, intuition, adaptability, and depth. This member embodies change without losing identity."
    },


    /*
     * VINCENT OSTULANES
     *
     * Wuxing has five traditional elements.
     * Vincent therefore exists outside the five
     * rather than being given an invented element.
     */

    vincent: {

        element:
            "THE SIXTH",

        symbol:
            "六",

        name:
            "Vincent Ostulanes",

        nationality:
            "FILIPINO",

        attribute:
            "Beyond Wuxing",

        bio:
            "Vincent Ostulanes is the sixth member of HN-DN. As a Filipino member positioned outside the traditional five Wuxing forces, he represents the element that cannot be classified — an identity that exists beyond the established system."
    }

};


/* =========================================
   MEMBER MODAL
   ========================================= */

const memberModal =
    document.getElementById(
        "memberModal"
    );

const closeMemberModal =
    document.getElementById(
        "closeMemberModal"
    );

const memberModalSymbol =
    document.getElementById(
        "memberModalSymbol"
    );

const memberModalElement =
    document.getElementById(
        "memberModalElement"
    );

const memberModalName =
    document.getElementById(
        "memberModalName"
    );

const memberModalNationality =
    document.getElementById(
        "memberModalNationality"
    );

const memberModalBio =
    document.getElementById(
        "memberModalBio"
    );

const memberModalAttribute =
    document.getElementById(
        "memberModalAttribute"
    );


document
    .querySelectorAll(".member")
    .forEach(member => {

        member.addEventListener("click", () => {

            const memberID =
                member.dataset.member;

            const data =
                members[memberID];

            if (!data) return;


            memberModalSymbol.textContent =
                data.symbol;

            memberModalElement.textContent =
                data.element;

            memberModalName.textContent =
                data.name;

            memberModalNationality.textContent =
                data.nationality;

            memberModalBio.textContent =
                data.bio;

            memberModalAttribute.textContent =
                data.attribute;


            memberModal.classList.add(
                "open"
            );

            memberModal.setAttribute(
                "aria-hidden",
                "false"
            );

        });

    });


closeMemberModal.addEventListener(
    "click",
    closeMemberInfo
);


function closeMemberInfo() {

    memberModal.classList.remove(
        "open"
    );

    memberModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================
   BACKDROP CLICK
   ========================================= */

albumModal.addEventListener(
    "click",
    event => {

        if (
            event.target === albumModal
        ) {

            closeAlbumModal();

        }

    }
);


memberModal.addEventListener(
    "click",
    event => {

        if (
            event.target === memberModal
        ) {

            closeMemberInfo();

        }

    }
);


/* =========================================
   ESCAPE KEY
   ========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeAlbumModal();

            closeMemberInfo();

            mobileMenu.classList.remove(
                "open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================
   PRE-SAVE
   ========================================= */

const unlockButton =
    document.getElementById(
        "unlockButton"
    );

const teaser =
    document.getElementById(
        "teaser"
    );


let unlocked =
    false;


unlockButton.addEventListener(
    "click",
    () => {

        if (unlocked) return;

        unlocked = true;


        teaser.classList.add(
            "unlocked"
        );


        const buttonText =
            unlockButton.querySelector(
                "span:first-child"
            );

        const buttonIcon =
            unlockButton.querySelector(
                "span:last-child"
            );


        buttonText.textContent =
            "TEASER UNLOCKED";

        buttonIcon.textContent =
            "✓";


        unlockButton.style.pointerEvents =
            "none";

    }
);


/* =========================================
   SCROLL REVEAL
   ========================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .intro"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold:
                0.08
        }
    );


revealElements.forEach(element => {

    element.style.opacity =
        "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(
        element
    );

});