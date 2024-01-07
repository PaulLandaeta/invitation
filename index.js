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
    var letter = document.getElementById("letter");
    letter.remove();
    container.hidden = false;
    audioClick();
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("heartButton").addEventListener("click", onHeartButtonClick);
});

function iniciarContadorRegresivo(fechaObjetivo) {
    const diasElem = document.getElementById('dias');
    const horasElem = document.getElementById('horas');
    const minutosElem = document.getElementById('minutos');
    const segundosElem = document.getElementById('segundos');

    function actualizarContador() {
        const ahora = new Date();
        const diferencia = fechaObjetivo - ahora;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        diasElem.textContent = dias < 10 ? '0' + dias : dias;
        horasElem.textContent = horas < 10 ? '0' + horas : horas;
        minutosElem.textContent = minutos < 10 ? '0' + minutos : minutos;
        segundosElem.textContent = segundos < 10 ? '0' + segundos : segundos;

        if (diferencia <= 0) {
            clearInterval(intervalo);
            // Acciones adicionales cuando el contador llega a cero
        }
    }

    const intervalo = setInterval(actualizarContador, 1000);
}

// Configura la fecha de finalización para el contador regresivo
const fechaObjetivo = new Date('Jan 13, 2024 15:00:00').getTime();
iniciarContadorRegresivo(fechaObjetivo);

