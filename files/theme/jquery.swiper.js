jQuery( document ).ready(function( $ ) {

	/* -------------------------------------------------
	SWIPER
	------------------------------------------------- */

	/* append image src as background
	------------------------------------------------- */
    $(".swiper-slide").each(function(){
        var src = $('.bg-image img', this).attr('src');
        $('.bg-image', this).parent().css('background-image', 'url(' + src + ')');
    });
	
	/* Adjust content height for mobile view
	------------------------------------------------- */
	$(window).on("resize",function(e){
	  if ($(window).width() < 767) {
	  		/* Set Variables */	
			var devHeight = $(window).height(),
				moNavHeight = 49,
				siteNavHeight = $('.site-navigation').outerHeight() + $('#site-navigation').outerHeight(),
				swiperContentHeight = devHeight - moNavHeight - siteNavHeight + 'px',
				fixNavContentHeight =  devHeight - moNavHeight + 'px',
				fixNavPadding =  siteNavHeight + 'px';
			/* Check if it is fixed navigation bar */
			if(document.getElementById("fixed-navigation") !== null){
				/* If fixed navigation bar exist */
				$(".swiper-wrapper, .swiper-slide").css({
					"max-height": fixNavContentHeight
				});
				$(".swiper-slide .content").css({
					"padding-top": fixNavPadding
				});
			} else {
				/* If fixed navigation bar DOES NOT exist */
				$(".swiper-wrapper, .swiper-slide").css({
				"max-height": swiperContentHeight
				});
			}
	  }
	}).trigger('resize');      
});	