// JS code for sub-sections

//transition from  main page to any sub-sections
function home_to_section(des){
	$('#home').fadeOut(1000);
	$(des).fadeIn(2000);
};

//transition from sub -section to home page

function section_to_home(src){
	$(src).fadeOut(1000);
	$('#home').fadeIn(2000);
}