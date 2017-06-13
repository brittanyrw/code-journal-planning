
$(function() {

	$('.hamburger-navigation-menu').click(function() {
		$( ".side-navigation").addClass( "open-side-navigation");
	});

	$('.close-button').click(function() {
		$( ".side-navigation").removeClass( "open-side-navigation");
	});

});
