const hamburger = document.querySelector(".mobile-nav");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active")
    navmenu.classList.toggle("active")
})

document.querySelectorAll(".item").forEach(n=> n.addEventListener("click",() => {
    hamburger.classList.remove("active")
    navmenu.classList.remove("active")
}))