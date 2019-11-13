$(document).ready(function(){
	console.log("the page is ready!");

	$('.thumbnail-content').click(function(){
		$(this).toggleClass("large");
	});

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass ('active')
	});

var hideAll= function(){
	$('.thumbnail-content').addClass("hide");
}

$('.btn-cheap').click(function(){
	hideAll(); 
	$('.cheap') .removeClass('hide');
});

$('.btn-quick') .click(function(){
	hideAll();
	$('.quick').removeClass('hide');
});

$('.btn-easy') .click(function(){
	hideAll();
	$('.easy').removeClass('hide');
});

});


// NEED HELP CONNECTING found AND EXTINCT TOGETHER

});