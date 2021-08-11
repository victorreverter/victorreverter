// Animate Dark / Light Mode


// Footer Activation

const FOOTER = document.querySelector("#footer");
// const div = document.createElement('div');

FOOTER.innerHTML = `<div class="container-links">
                <a href="https://www.instagram.com/victorreverter/">Instagram</a>
                <a href="https://www.behance.net/VictorReverter">Behance</a>
                <a href="https://www.linkedin.com/in/victor-manuel-herrera-reverter-a9312348/">LinkedIn</a>
            </div>
            <div class="copyright">© Victor Reverter Devs 2021</div>`;

// Animate Fade In Elements
let elements;
let windowHeight;

function init () {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
}

function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = elements[i].getBoundingClientRect().top;

        // console.log(positionFromTop);
        console.log(positionFromTop - windowHeight);
        // console.log(-(windowHeight + 120));

        // console.log(positionFromBottom - windowHeight);

        if(positionFromTop - windowHeight <= -80) {
            element.classList.remove('fade-out-element');
            element.classList.add('fade-in-element');
            element.classList.remove('hidden');
        }

        if(positionFromTop - windowHeight >= -81) {
            element.classList.remove('fade-in-element');
            // element.classList.add('fade-out-element');
            element.classList.add('hidden');
        }
    }
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();
checkPosition();