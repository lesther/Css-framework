// material
// side nav
$(document).ready(function(){
	$('.panel_left').sidenav();
});




// material
// side nav
$(document).ready(function(){
	$('.panel_right').sidenav({
		edge: 'right', // Choose the horizontal origin
	});

});





// collapsible
$(document).ready(function(){
	$('.collapsible').collapsible();
});





// dropdown
$('.dropdown-trigger').dropdown();




// input
$(document).ready(function() {
	M.updateTextFields();
});



// modal
$(document).ready(function(){
	$('.modal').modal();
});




// select
$(document).ready(function(){
	$('select').formSelect();
});



// autocomplete
$(document).ready(function(){
	$('input.autocomplete').autocomplete({
		data: {
		"sugerencia": null,
		"omaigash": null,
		"omaigosh": null
		},
		limit: 2,
		minLength: 3
	});
});