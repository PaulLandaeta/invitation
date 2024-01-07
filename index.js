let isVisible = true;

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
