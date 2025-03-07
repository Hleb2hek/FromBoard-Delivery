// Интегрировал библиотеку Swiper


new Swiper('.reviews__container', {
	/* ключ, который отключает с
	помощью мышки симуляции
	телефонного скролла
	сделанно для того, чтобы в комьютерной версии
	копировать текст
	*/
	simulateTouch: false,
	// расстояние между слайдами
	spaceBetween: 24,
	// Кнопки
	navigation: {
		nextEl: '.reviews__btn-next',
		prevEl: '.reviews__btn-prev ',
	},
	/* На каком масштабе экрана
	менять кол-во слайдов
	*/
	breakpoints: {
		570: {
			slidesPerView: 1,
		},
		1110: {
			slidesPerView: 2,
		},
	},
});
