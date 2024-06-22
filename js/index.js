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
