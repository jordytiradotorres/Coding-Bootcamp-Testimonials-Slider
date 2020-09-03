const buttonPrev = document.querySelector(".button-prev"),
	buttonNext = document.querySelector(".button-next"),
	sliderContent = document.querySelector(".slider-content");

buttonPrev.addEventListener("click", () => changeItem(1));
buttonNext.addEventListener("click", () => changeItem(2));

let item = 0;
function changeItem(n) {
	if (n == 1) {
		if (item == 0) {
			item = 1;
		} else {
			item--;
		}
	} else {
		if (item == 1) {
			item = 0;
		} else {
			item++;
		}
	}

	for (let i = 0; i < document.querySelectorAll(".testimonial").length; i++) {
		// document.querySelectorAll(".testimonial")[i].style.display = "none";
		sliderContent.style.left = `-${i * 100}%`;
	}
	// document.querySelectorAll(".testimonial")[item].style.display = "flex";
	sliderContent.style.left = `-${item * 100}%`;
}
