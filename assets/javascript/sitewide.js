
$(document).ready(function(){

	console.log("Hello World!");
	
	//disable the link for 'disabled-link' class
	if($('.disabled_link').length){
		$('.disabled_link').on('click', function(event){
			event.preventDefault();
		});	
	}

	//stick footer to the bottom of window if the content is too short
	if($('body').height() < window.innerHeight){
		$('footer').addClass('fixed-bottom');
	}

});

