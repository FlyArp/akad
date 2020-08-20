$(function() {
// Подключаемые модули ===================================================================================================================================================================================================
	// @include('smoothScroll.js')
	// @include('owlCarousel.js')
	@@include('burger.js')
	// @include('aosAnimation.js')
	// @include('langDetect.js')
	// @include('scrollSpy.js')

// Глобальные Переменные ===================================================================================================================================================================================================

	// var scrollOffset = $(window).scrollTop() + $(window).height(),

// Активный код ================================================================================================================================================================

	// $(window).on('scroll', function(event) {
	// 	scrollOffset = $(window).scrollTop() + $(window).height();	
	// });

	// $(document).on('click', function(event) {
	// 	if (!event.target.closest('.lang-switch')) {
	// 		$('.lang-switch__choice').removeClass('active');
	// 	}
	// });
	$('.dropdown-slide').hover(
	 function() {
	 	if ($(window).innerWidth()>991) {
	 		$(this).find('.dropdown-slide__menu').slideDown(250);
	 	}
	  }, function() {
	  	if ($(window).innerWidth()>991) {
	  		$(this).find('.dropdown-slide__menu').slideUp(250);
	  	} 
	  }
	);
})