const topnav = document.getElementsByClassName("topnav");
function ToggleDarkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    topnav.classList.toggle("topnav-dark");
    topnav.classList.toggle("topnav-light");

   

  }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ToggleDarkMode();
}
