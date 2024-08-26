//to disable right click and inspect element
// document.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
// });

// //to disable F12 key,specific keyboard shortcuts
// document.addEventListener("keydown", function (event) {
//   // Prevent F12, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+C
//   if (event.key === "F12" || 
//       (event.ctrlKey && event.key === "u") || 
//       (event.ctrlKey && event.shiftKey && event.key === "I") || 
//       (event.ctrlKey && event.shiftKey && event.key === "C")) {
//     event.preventDefault();
//   }
// });

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }