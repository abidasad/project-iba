/* -------------------------------------------------
RESPONSIVE HEADER - Dynamic Responsive Header
------------------------------------------------- */
/* 
Tall Header - with header content
------------------------------------------------- */
jQuery( document ).ready(function( $ ) {
	var percent = 100,
		ratio   = 2.6;
	$(window).bind('resize', function () {
		var $this = $('.container'),
		width = $this.width(),
		height = Math.floor(width / ratio);
		$('#tall-header-image').css({
			width        : Math.floor(width * (percent / 100)),
			height       : Math.floor(height * (percent / 100))
		});	
	
	}).trigger('resize');
});

/* 
Short Header - with header content
------------------------------------------------- */
jQuery( document ).ready(function( $ ) {
	var percent = 100,
		ratio   = 4.1;
	$(window).bind('resize', function () {
		var $this = $('.container'),
		width = $this.width(),
		height = Math.floor(width / ratio);
		$('#short-header-image').css({
			width        : Math.floor(width * (percent / 100)),
			height       : Math.floor(height * (percent / 100))
		});	
	
	}).trigger('resize');
});