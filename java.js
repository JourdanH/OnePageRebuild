
$( document ).ready(function(){
	$('.main-image').mouseover(function(){
		$(this).animate({opacity: "1.0", paddingBottom:"20px"}).mouseleave(function(){
			$(this).animate({opacity: ".2", paddingBottom:"0px"});
	});
	});

});