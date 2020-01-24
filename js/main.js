$(document).ready(function() {
	var	openPopupWD = document.querySelector('.webdevPopup'),
		openPopupGr = document.querySelector('.groomingPopup'),
		openPopupPortfolio = document.querySelector('.portfolioPopup');
	
	/* Call plugins hrere ...*/

        //ID блока с ссылками #prime_nav
	$("#nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
 
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
 
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	// Grooming maket

	$('#grooming').on('click', function (event) {
		event.preventDefault();
		openPopupGr.classList.add('modal--show');
		console.log('popup');
	});
	// WebDev maket

	$('#webdev').on('click', function (event) {
		event.preventDefault();
		
		
		openPopupWD.classList.add('modal--show');
	});

	// Макет портфолио

	$('#portfolioMaket').on('click', function (event) {
		event.preventDefault();
		
		
		openPopupPortfolio.classList.add('modal--show');
	});

	// Закрытие макетов

	$('.modal__button').on('click', function() {

		// var closePopup = document.querySelector('.modal');
		openPopupWD.classList.remove('modal--show');
		openPopupGr.classList.remove('modal--show');
		openPopupPortfolio.classList.remove('modal--show');

	});
	
});