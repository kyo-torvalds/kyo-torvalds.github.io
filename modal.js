// Simple toggle script
let toggle = true;
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuBtn = document.querySelector(".hamburger-menu-button")
const navigator = document.querySelector('.navigator')
const overlay = document.querySelector(".overlay")
hamburgerMenuBtn.addEventListener("click", () => { toggleMenu() })

const toggleMenu = () => {
    console.log("hi")
    hamburgerMenu.classList.toggle("open")
    navigator.classList.toggle("slideright")
    navigator.classList.toggle("none")
    overlay.classList.toggle('appear')
    overlay.classList.toggle('none')
}


// // Thumbnail settings
// if (CodePen.isThumbnail) {
//     root.style.setProperty('--width', '150px');
//     setInterval(toggleMenu, 1250);
// }
