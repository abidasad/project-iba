jQuery(document).ready(function($){

	/* Load Tab 1 
	------------------------------------------------- */
	$(window).on("load",function(e){
		$("#tab1").css('height', 'auto').fadeTo(900, 1);
	}).trigger('load');

	/* DD Tab
	--------------------------------------------------*/
	$("#tabs li").click(function() {
		//	First remove class "active" from currently active tab
		$("#tabs li").removeClass('active');

		//	Now add class "active" to the selected/clicked tab
		$(this).addClass("active");

		//	Hide all tab content
		$(".tab_content").css({"height": 0, "opacity": 0});

		//	Here we get the href value of the selected tab
		var selected_tab = $(this).find("a").attr("href");

		//	Show the selected tab content
		$(selected_tab).css('height', 'auto').fadeTo(900, 1);

		//	At the end, we add return false so that the click on the link is not executed
		return false;
	});
	
});