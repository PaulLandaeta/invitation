let isVisible = true;
var container = document.getElementById("container");
container.hidden = true;
function toggleSlides() {
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");

    if (isVisible) {
        slide1.style.opacity = "0";
        slide2.style.opacity = "1";
    } else {
        slide1.style.opacity = "1";
        slide2.style.opacity = "0";
    }

    isVisible = !isVisible;
    setTimeout(toggleSlides, 2000); // Cambia cada 2 segundos
}

toggleSlides();
function audioClick(id, clip) {
    var audio = document.getElementById("audio1"); 
    audio.play();
}

function onHeartButtonClick() {
    var div = document.getElementById("card2");
    div.hidden = true;
    container.hidden = false;
    audioClick();
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("heartButton").addEventListener("click", onHeartButtonClick);
});

window.addEventListener('scroll', audioClick);
