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


	var speed = 600;//滚动速度

	var h=document.body.clientHeight;

    //回到顶部

    $("#toTop").click(function () {

	  	$('html,body').animate({

			scrollTop: '0px'

		},

		speed);			

    });

    $(document).scroll(function(){
        var top = $(document).scrollTop();
        if(top > 500)
            $("#toTop").show();
        else{
        	$("#toTop").hide();
        }
    });
	
});