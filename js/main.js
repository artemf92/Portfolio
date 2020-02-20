$(document).ready(function() {
	let portfolioItems = document.querySelectorAll('.owl-item'); //Элементы корусели



// Появление кнопки "Посмотреть" при наведении на элемент

	for (let i = 0; i < portfolioItems.length; i++) {
		portfolioItem = portfolioItems[i];
		let btnShow = portfolioItem.querySelector('#btnShow');

		portfolioItem.addEventListener('mouseover', function () {
		btnShow.classList.add('unhidden');
		});

		portfolioItem.addEventListener('mouseout', function() {
			btnShow.classList.remove('unhidden');
		})
	}


	// Плавная прокрутка до резюме из шапки

		$("#nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();
 
		//забираем идентификатор блока с атрибута href
			var id  = $(this).attr('href'),
 
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

});