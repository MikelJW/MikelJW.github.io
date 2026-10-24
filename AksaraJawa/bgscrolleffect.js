const overlay = document.getElementById("bg-overlay");
const maxopacity = 0.75;

function updateoverlay() {
    const progress = Math.min(window.scrollY / (window.innerHeight * 2), 1);
    overlay.style.opacity = progress * maxopacity;
}

window.addEventListener("scroll", updateoverlay, {passive: true});
window.addEventListener("resize", updateoverlay);
updateoverlay();