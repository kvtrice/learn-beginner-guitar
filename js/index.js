// Header Scroll Effect

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

// Contact Form Submission

const contactForm = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const contactFormHeading = document.getElementById("contactFormHeading");

contactForm.addEventListener("submit", event => {
	event.preventDefault();
	contactForm.classList.add("hidden");
	contactFormHeading.classList.add("hidden");
	thankYouMessage.style.display = "block";
	contactForm.reset();
});

// Hamburger Menu Open & Close

const hamburger = document.querySelector(".header__hamburger");
const mobileOverlay = document.querySelector(".mobile-overlay");
const mobileLinks = document.querySelectorAll(".header__mobile-link");

const toggleMobileMenu = () => {
	mobileOverlay.classList.toggle("mobile-overlay--open");
	hamburger.classList.toggle("header__hamburger--open");
};

hamburger.addEventListener("click", () => {
	toggleMobileMenu();
});

mobileLinks.forEach(link => {
	link.addEventListener("click", () => {
		toggleMobileMenu();
	});
});
