let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 15,
    speed: 300,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1.05,
});
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})