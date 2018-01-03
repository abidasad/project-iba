jQuery( document ).ready(function( $ ) {

	/* -------------------------------------------------
	STANDARD THEME CODES
	------------------------------------------------- */

	/* Remove Weebly Footer	
	--------------------------------------------------*/
	$( "#weebly-footer-signup-container" ).remove();

	/* Search
	--------------------------------------------------*/
	$( "#search-button" ).click(function() {
	  $( "#search-bar" ).slideToggle( 400 );
	});

	/* Pretty FadeIn onLoad
	--------------------------------------------------*/
	$( ".onload" ).delay(250).fadeTo(1500, 1);	
	$( ".first-load" ).delay(450).fadeTo(1500, 1);
	$( ".second-load" ).delay(650).fadeTo(1500, 1);
	$( ".third-load" ).delay(950).fadeTo(1500, 1);
	$( ".forth-load" ).delay(1400).fadeTo(1500, 1);

	/* Hide Search Button if search bar is not active
	--------------------------------------------------*/
	if(document.getElementById("wsite-header-search-form") !== null){
		$('#search-button').show();		
		/* Check if social icon is in header */
		var grandParent = document.querySelector('.site-navigation'),
			parent = grandParent.querySelector('.social-frame');
		if (grandParent.contains(parent)) { 
			/* check if social icon are turned on */
			var child = document.querySelector('.wsite-social');
			if (parent.contains(child)) { 
				$("#search-button").removeClass("table-content").appendTo(".social-frame .wsite-social").addClass("wsite-social-item");
			} else {
			
				$(".social-frame").remove();
			}
		}
	} else {
		$('#search-button').hide();
		/* Center social icon for responsive themes */
		$(window).on("resize",function(e){
		  if ($(window).width() < 414) {	
			 $(".social-frame .wsite-social").css({
			 	"float": "none",
			 	"display": "block",
			 	"text-align": "center"
			 });
		  }
		}).trigger('resize');
	}
	
});


jQuery( document ).ready(function( $ ) {	

	/* Mobile Setting - Center button
	--------------------------------------------------*/	
	$(window).on("resize",function(e){
	  if ($(window).width() < 767) {	
		 $(".wsite-button").parent().css({"text-align": "center"});
	  }
	}).trigger('resize');
	
	/* Mobile Setting - Decrease Spacer
	--------------------------------------------------*/
	$(window).on("load",function(e){
	  if ($(window).width() < 600) { 
		 $(".wsite-spacer").each(function () {
			var spacerHeight = $(this).height();
			var maxspacerHeight = spacerHeight * 0.30;
			$(this).css({"height": maxspacerHeight + 'px'});
		});			
	  } else if ($(window).width() < 767) {	
		 $(".wsite-spacer").each(function () {
			var spacerHeight = $(this).height();
			var maxspacerHeight = spacerHeight * 0.5;
			$(this).css({"height": maxspacerHeight + 'px'});
		});	
	  } else if ($(window).width() < 1025) {
		 $(".wsite-spacer").each(function () {
			var spacerHeight = $(this).height();
			var maxspacerHeight = spacerHeight * 0.6;
			$(this).css({"height": maxspacerHeight + 'px'});
		});		
	  } 
	}).trigger('load');
	
});