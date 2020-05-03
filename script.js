
let left = 0;
function sliderLeft() {
    let polosa = document.querySelector('.polosa');
    left -=100;
    if (left<-400) {
        left = 0
    }
    polosa.style.left = left + 'vw';
}
function sliderRight() {
    let polosa = document.querySelector('.polosa');
    left +=100;
    if (left=0) {
        left = -400
    }
    polosa.style.left = left + 'vw';
}

function sliderLeftBig() {
    let polosaBig = document.querySelector('.polosa-big');
    left -=100;
    if (left<-400) {
        left = 0
    }
    polosaBig.style.left = left + 'vw';
}
function sliderRightBig() {
    let polosaBig = document.querySelector('.polosa-big');
    left +=100;
    if (left=0) {
        left = 0
    }
    polosaBig.style.left = left + 'vw';
}

