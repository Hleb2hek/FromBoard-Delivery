new Swiper('.reviews__container', {
	// Navigation arrows
	simulateTouch: false,
	spaceBetween: 24,
	navigation: {
		nextEl: '.reviews__btn-next',
		prevEl: '.reviews__btn-prev ',
	},
	breakpoints: {
		570: {
			slidesPerView: 1,
		},
		1110: {
			slidesPerView: 2,
		},
	},
});
