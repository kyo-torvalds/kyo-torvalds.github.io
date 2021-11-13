// Simple toggle script
let toggle = true;
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuBtn = document.querySelector(".hamburger-menu-button")
const navigator = document.querySelector('.navigator')
const overlay = document.querySelector(".overlay")
hamburgerMenuBtn.addEventListener("click", () => { toggleMenu() })

const toggleMenu = () => {
    setTimeout(() => { navigator.classList.toggle("none") }, 100);
    hamburgerMenu.classList.toggle("open")
    navigator.classList.toggle("slideleft")
    navigator.classList.toggle("slideright")
    overlay.classList.toggle('appear')
    overlay.classList.toggle('none')
}


