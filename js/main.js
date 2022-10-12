
const close_icon = document.querySelector("#close_icon");
const header_list = document.querySelector(".header_list");
const navbar_toggler_icon = document.querySelector(".navbar-toggler-icon");


close_icon.addEventListener('click', () => {
	header_list.classList.remove("active");
})

navbar_toggler_icon.addEventListener('click', () => {
	header_list.classList.add("active");
})