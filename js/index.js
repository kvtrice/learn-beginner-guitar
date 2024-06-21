document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".header__container");
	const linkText = document.querySelectorAll(".header__nav a");
	const titleText = document.querySelector(".header__logo a");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 60) {
			header.classList.add("scrolled");
			titleText.classList.add("scrolled--text");

			linkText.forEach(link => {
				link.classList.add("scrolled--text");
			});
		} else {
			header.classList.remove("scrolled");
			titleText.classList.remove("scrolled--text");
			linkText.forEach(link => {
				link.classList.remove("scrolled--text");
			});
		}
	});
});
