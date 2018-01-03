jQuery( document ).ready(function( $ ) {
	
	$(window).on("resize load",function(e){	
		/* Size margin for navigation bar height */
		var navHeight = $('.site-navigation').height();
		$('#main').css({"margin-top": navHeight + 'px'});

	}).trigger('resize, load');

});