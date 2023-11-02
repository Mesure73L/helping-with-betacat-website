const topnav = document.getElementById("nav");
const body = document.body;
function ToggleDarkMode() {
    body.classList.toggle("dark-mode");
    topnav.classList.toggle("topnavDark");
    topnav.classList.toggle("topnavLight");
}
/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ToggleDarkMode();
}
*/
