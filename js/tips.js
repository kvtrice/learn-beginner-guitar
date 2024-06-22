const tips = document.querySelectorAll(".tip");

tips.forEach(tip => {
	tip.querySelector(".tip__title").addEventListener("click", () => {
		const content = tip.querySelector(".tip__content");
		content.style.display =
			content.style.display === "block" ? "none" : "block";
	});
});
