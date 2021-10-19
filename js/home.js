// Animation  Home
const veilLayer = document.querySelector('.veil-layer');
const logoVeil = document.querySelector('.logo-veil');
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');

const headContainer = document.querySelector('.head-container');
const mainContainer = document.querySelector('.main-container');

setTimeout(() => {
    logoVeil.classList.add('logoVeilOut');
    // leftPanel.classList.add('leftPanelOut');
    // rightPanel.classList.add('rightPanelOut');
    
    setTimeout(() => {
        headContainer.classList.add('headContainerIn');
        mainContainer.classList.add('mainContainerIn');
    }, 100);

    setTimeout(() => {
        veilLayer.classList.add('veilLayerOut');
    }, 3000);
}, 2000);