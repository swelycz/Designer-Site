$(document).ready(function(){
	$(".activator").hover(function(){
		$(document.getElementById("tileContainer")).stop().animate({height: "82vh"},500);
		$(document.getElementById("theDesignerContainer")).stop().animate({height: "82vh"},500);
		$(document.getElementById("arrow")).css({"-webkit-transform": "translate3d(0, -120%, 0)"});
		$(document.getElementById("arrow")).css({transform: "translate3d(0, -120%, 0)"});
		$(document.getElementById("arrow")).stop().animate({opacity: "0"},750);
	} , function(){
		$(document.getElementById("tileContainer")).stop().animate({height: "88vh"},500);
		$(document.getElementById("theDesignerContainer")).stop().animate({height: "88vh"},500);
		$(document.getElementById("arrow")).css({"-webkit-transform": "translate3d(0, 0, 0)"});
		$(document.getElementById("arrow")).css({transform: "translate3d(0, 0, 0)"});
		$(document.getElementById("arrow")).stop().animate({opacity: "1"},750);
	});
	$(".PPLink").hover(function(){
		$(document.getElementById("PPLink")).css({"text-decoration": "underline"});
	}, function(){
		$(document.getElementById("PPLink")).css({"text-decoration": "none"});
	});
	$(".topBarRightMenu").hover(function(){
		$(document.getElementById("topBarRightMenuTitle")).css({opacity: 0});
	}, function(){
		$(document.getElementById("topBarRightMenuTitle")).css({opacity: 1});
	});
	$(".topBarLeftMenu").hover(function(){
		$(document.getElementById("topBarLeftMenuTitle")).css({opacity: 0});
	}, function(){
		$(document.getElementById("topBarLeftMenuTitle")).css({opacity: 1});
	});
});