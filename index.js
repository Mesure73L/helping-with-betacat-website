const topnav = document.getElementsByClassName("topnav");
function ToggleDarkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    topnav.classList.toggle("topnavDark");
    topnav.classList.toggle("topnavLight");

   

  }
/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ToggleDarkMode();
}
*/
