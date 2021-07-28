$(document).ready(function(){

/* fixed */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	$(".header-top")[pos>=40?"addClass":"removeClass"]("headfix");
	//$(".header-top").css("transition","all .5s");
});

/*
$(window).ready(function(){
	$(".overlay-content a").eq(0).addClass("active");
});
*/

$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	//alert(pos);
	$(".section2-txt")[pos>100?"addClass":"removeClass"]("animate__slideInUp");
	$(".section3-txt")[pos>750?"addClass":"removeClass"]("animate__slideInUp");
	$(".dl-left")[pos>1400?"addClass":"removeClass"]("animate__fadeInLeft");
	$(".dl-right")[pos>1400?"addClass":"removeClass"]("animate__fadeInRight");
	$(".section5-img")[pos>2200?"addClass":"removeClass"]("animate__fadeInDown");
});

$(".sch").on("click",function(){
	event.preventDefault();
	$("input").css("display","block");
	//$("input").fadeIn(500);
});


});


/* 네비게이션 */
function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}




