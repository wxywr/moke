$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.9+"px"});
});

$(function(){
	$('html').css({'font-size':$(window).width()/3.9+"px"});

	$('.fold').click(function(){
		$('.accordion').slideToggle();
	})
	$('.submenu li').click(function(){
		$(this).parent().parent().parent().css('display','none');
	})

	
});