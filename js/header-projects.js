const HTMLTag = document.querySelector("html");
const BodyTag = document.querySelector("body");

const menuBtn = document.querySelector('#menuContainer');
const menuOptions = document.querySelector('#menuOptions');
// const menuDesktop = document.querySelector('#menuDesktop');
const logoHome = document.querySelector('#logoHome svg');
const menuBubble = document.querySelector('#menuBubble');

let menuOpen = false;

// Header Activation
menuOptions.innerHTML = `
    <div class="links-container">
        <a href="../../work.html" id="work-m-link" class="link-menu">Work</a>
        <a href="../../about.html" id="about-m-link" class="link-menu">About</a>
    </div>
    <div class="menu-footer">
        <p>© Victor Reverter Devs 2022</p>
        <div class="menu-footer-container-links">
            <a href="https://www.instagram.com/victorreverter/">Instagram</a>
            <a href="https://www.behance.net/VictorReverter">Behance</a>
            <a href="https://www.linkedin.com/in/victor-manuel-herrera-reverter-a9312348/">LinkedIn</a>
        </div>
    </div>
`;

// Desktop Header Activation
// menuDesktop.innerHTML = `
//     <a href="../../work.html" id="work-d-link" class="link-menu-desktop">Work</a>
//     <a href="../../about.html" id="about-d-link" class="link-menu-desktop">About</a>
//     <a href="../../contact.html" id="contact-d-link" class="link-menu-desktop">Contact</a>
// `;

// Open Menu
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOptions.classList.add('menu-mobile-open');
        logoHome.classList.add('svg-menu-open');
        HTMLTag.style.overflow = "hidden";
        BodyTag.style.overflow = "hidden";
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOptions.classList.remove('menu-mobile-open');
        logoHome.classList.remove('svg-menu-open');
        HTMLTag.style.overflow = "initial";
        BodyTag.style.overflow = "initial";
        menuOpen = false;
    }
});