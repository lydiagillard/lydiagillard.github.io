$(document).ready(function(){
	console.log("the page is ready!");

	$('.research-item').click(function(){
		$(this).toggleClass("large");
	});

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass ('active')
	});

var hideAll= function(){
	$('.research-item').addClass("hide");
}

$('.btn-repurposed').click(function(){
	hideAll(); 
	$('.repurposed') .removeClass('hide');
});

$('.btn-funky') .click(function(){
	hideAll();
	$('.funky').removeClass('hide');
});

$('.btn-extinct') .click(function(){
	hideAll();
	$('.extinct').removeClass('hide');
});

$('.btn-found') .click(function(){
	hideAll();
	$('.found').removeClass('hide');
});


// NEED HELP CONNECTING found AND EXTINCT TOGETHER

});