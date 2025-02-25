document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".swiper", {
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		setWrapperSize: true,
		slidesPerView: 2, // Количество отображаемых слайдов
		spaceBetween: 24, // Расстояние между слайдами
		
		navigation: {
		nextEl: ".swiper__next",
		prevEl: ".swiper__prev",
		},
	});
});
