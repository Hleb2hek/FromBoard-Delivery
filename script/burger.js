// Событие для клика на бургер, при нажатии добавляется класс active
document.querySelector('.burger__btn').addEventListener('click', function() {
	this.classList.toggle('active');
	document.querySelector('.header').classList.toggle('active');
	document.querySelector('.header__price-down').classList.toggle('active');
	document.querySelector('.header__navigation').classList.toggle('active');
	document.querySelector('.header__container').classList.toggle('active');
});

// Функция для того чтобы при масштабировании
// бургер сворачивался, а не оставался открытым
// после уменьшения масштаба
function handleResize() {

	const burgerCheckbox = document.querySelector('.burger__checkbox');
	const headerNavigation = document.querySelector('.header__navigation');
	const headerPriceDown = document.querySelector('.header__price-down');

	if (window.innerWidth > 880) {
		// Убираем класс active у навигации и нижнего прайса
		headerNavigation.classList.remove('active');
		headerPriceDown.classList.remove('active');
		// Снимаем чекбокс бургера
		if (burgerCheckbox) {
			burgerCheckbox.checked = false;
		}
	}
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);