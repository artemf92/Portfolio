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
	
});