jQuery(function($){
	/* Function cleanAttributes
	 * This is a custom basic jQuery plugin that strips ID, class and style
	 * attributes from jQuery object.
	 * */
	$.fn.cleanAttributes = function() {
		this.removeAttr("id").removeAttr("class").removeAttr("style");
		return this;
	}
	
	/* Function buildResponsiveNav
	 * This is where all magic happen, when you need to convert your navigation
	 * to a dropdown menu with toggle button on small screens.
	 * */
	function buildResponsiveNav() {
		// Prepare new placeholder for responsive navigation.
		var $responsiveNav = $('<div id="custom-responsive-nav"><button class="toggle-responsive">&#8801;</button><ul></ul></div>');
		// Get the current navigation block.
		var $nav = $("#navigation > ul");
		// And clone it, so the original will stay unchanged.
		var $clone = $nav.clone();
		// Now, in cloned object, find all child tags and clean default attributes.
		// The list of child tags is hardcoded, based on manually inspected values.
		$clone.find("ul, li, a, div, span").cleanAttributes();
		// Find all div tags, because they are sub-menu holders.
		var $nestedNav = $clone.find("div");
		// Get their content appended to parent element, then remove them.
		$nestedNav.each(function() {
			var $this = $(this);
			$this.parent().append($this.html());
			$this.remove();
		});
		// Now, our clone object is clean and with valid syntax,
		// so we can add it to responsive navigation.
		$responsiveNav.find("ul").append($clone.html());
		// Add newly created responsive navigation to the top of page.
		$("body").find("#custom-responsive-nav").remove();
		$("body").prepend($responsiveNav);
		// Finally, assign a click event to open dropdown when clicking on button.
		$("#custom-responsive-nav > button").click(function(){
			$("#custom-responsive-nav > ul").toggleClass("show");
		});
		// Remove unwanted arrows.
		$("#custom-responsive-nav > ul").find("span").each(function(){
			if ($(this).text() === ">") {
				$(this).remove();
			}
		});
	}
	
	/* Initiate Responsive Navigation
	-------------------------------------------------- */
	$(function() {
		// Turn on your responsive navigation!
		buildResponsiveNav();
		
		// CART HACK
		var checkCartCounter = 0;
		var checkCartCounterLimit = 10;      // How many times to check if cart is set?
		var checkCartCounterInterval = 1000; // Interval = 1 second
		// Start checking if cart exists
		var checkCart = setInterval(function(){
			var url = $('#wsite-mini-cart > div.wsite-cart-bottom a').attr('href');
			if (typeof url !== 'undefined') {
				if ($(".wsite-nav-cart")[0]){
					clearInterval(checkCart);
					var cart = '<li><a href="' + url + '">Cart</a></li>';
					$("#custom-responsive-nav > ul").append(cart);
				} else {
				  // do nothing
				}
			} else if (checkCartCounter > checkCartCounterLimit) {
				clearInterval(checkCart);
			} else {
				checkCartCounter++;
			}
		}, checkCartCounterInterval);
		
		
		// LOGIN HACK
		// Check if log in exist
		if(document.getElementById("membership-tpl-login") !== null){

			// clone menu
			var url = window.location.href;
			var login = '<li><a href="' + url + '" class="ajax-link">Login</a></li>';
			$("#custom-responsive-nav > ul").append(login);
			
			// click event listener
			$('.ajax-link').click(function(event) {
	
				// get the id
				var clickedLink = $(this).attr('id');
	
				// push it into the url
				location.hash = "login";
				
				// close menu
				$("#custom-responsive-nav > ul").removeClass("show");
	
				// stop the regular href
				event.preventDefault();
			});
		}		
		
		
	});/* DOCUMENT.READY */
	
});