const HTMLTag = document.querySelector("html");
const BodyTag = document.querySelector("body");

const menuBtn = document.querySelector('#menuContainer');
const menuOptions = document.querySelector('#menuOptions');
const menuDesktop = document.querySelector('#menuDesktop');

let menuOpen = false;

// Header Activation
menuOptions.innerHTML = `
    <div class="links-container">
        <a href="work.html" id="work-m-link" class="link-menu">Work</a>
        <a href="about.html" id="about-m-link" class="link-menu">About</a>
        <a href="contact.html" id="contact-m-link" class="link-menu">Contact</a>
    </div>
`;

// Desktop Header Activation
menuDesktop.innerHTML = `
    <a href="work.html" id="work-d-link" class="link-menu-desktop">Work</a>
    <a href="about.html" id="about-d-link" class="link-menu-desktop">About</a>
    <a href="contact.html" id="contact-d-link" class="link-menu-desktop">Contact</a>
`;

// Open Menu
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOptions.classList.add('menu-mobile-open');
        HTMLTag.style.overflow = "hidden";
        BodyTag.style.overflow = "hidden";
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOptions.classList.remove('menu-mobile-open');
        HTMLTag.style.overflow = "initial";
        BodyTag.style.overflow = "initial";
        menuOpen = false;
    }
});