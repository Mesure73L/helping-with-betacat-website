function ToggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var div = document.getElementsByClassName("topnav");
    div.classList.toggle("topnav-dark");

   

  }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    ToggleDarkMode();
}