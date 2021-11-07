

const burger = document.querySelector(".burger");
const list = document.querySelector(".list");
const navbar = document.querySelector("navbar_menu");

burger.addEventListener("click",() => {


list.classList.toggle("is_active");
burger.classList.toggle("transform");

})