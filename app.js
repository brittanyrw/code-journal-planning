
$(function() {

	$('.hamburger-navigation-menu').click(function() {
		$( ".side-navigation").addClass( "open-side-navigation");
	});

	$('.close-button').click(function() {
		$( ".side-navigation").removeClass( "open-side-navigation");
	});

	$(".subject-select").select2();

});


//tweet when something is completed
//variable for page
//take height off squares
//breadcrumbs - dashboard category details