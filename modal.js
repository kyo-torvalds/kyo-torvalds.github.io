// Simple toggle script
let toggle = true;
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuBtn = document.querySelector(".hamburger-menu-button")
hamburgerMenuBtn.addEventListener("click", () => { toggleMenu() })

const toggleMenu = () => {
    console.log("hi")
    hamburgerMenu.classList.toggle("open")
}


// // Thumbnail settings
// if (CodePen.isThumbnail) {
//     root.style.setProperty('--width', '150px');
//     setInterval(toggleMenu, 1250);
// }
