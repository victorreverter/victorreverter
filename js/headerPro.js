const HTMLTag = document.querySelector("html");
const BodyTag = document.querySelector("body");

const menuBtn = document.querySelector('#menuContainer');
const menuOptionsPro = document.querySelector('#menuOptionsPro');
let menuOpen = false;

// Header Activation
menuOptionsPro.innerHTML = `
    <div class="links-container">
        <a href="../../index.html" class="link-menu">Home</a>
        <a href="../../portfolio.html" class="link-menu">Portfolio</a>
        <a href="../../uxui.html" class="link-menu">UX-UI</a>
        <a href="../../graphic.html" class="link-menu">Graphic</a>
        <a href="../../branding.html" class="link-menu">Branding</a>
        <a href="../../webdev.html" class="link-menu">Web Dev</a>
        <a href="../../about.html" class="link-menu">About</a>
        <a href="../../contact.html" class="link-menu">Contact</a>
    </div>
`;

// Open Menu
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOptionsPro.classList.add('menu-mobile-open');
        HTMLTag.style.overflow = "hidden";
        BodyTag.style.overflow = "hidden";
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOptionsPro.classList.remove('menu-mobile-open');
        HTMLTag.style.overflow = "initial";
        BodyTag.style.overflow = "initial";
        menuOpen = false;
    }
});