document.addEventListener("DOMContentLoaded", () => {
	const tips = document.querySelectorAll(".tip");
	const firstTip = document.querySelector(".tip:first-child .tip__content");

	firstTip.classList.add("active");

	tips.forEach(tip => {
		tip.querySelector(".tip__title").addEventListener("click", () => {
			const content = tip.querySelector(".tip__content");
			content.classList.toggle("active");
		});
	});
});
