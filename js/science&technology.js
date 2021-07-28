$(document).ready(function(){

/* fixed */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	$(".header-top")[pos>=40?"addClass":"removeClass"]("headfix");
});


$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	//alert(pos);
	$(".section2-box")[pos>200?"addClass":"removeClass"]("animate__fadeIn");
	$(".section3-left")[pos>900?"addClass":"removeClass"]("animate__fadeInLeft");
	$(".section3-right")[pos>900?"addClass":"removeClass"]("animate__fadeInRight");
	$(".section4-txt")[pos>1800?"addClass":"removeClass"]("animate__fadeIn");
	$(".section4-img2")[pos>1800?"addClass":"removeClass"]("animate__fadeIn");
	$(".section5-txt2")[pos>2350?"addClass":"removeClass"]("animate__fadeIn");
	$(".section5-txt4")[pos>2600?"addClass":"removeClass"]("animate__fadeIn");
});

$(".sch").on("click",function(){
	event.preventDefault();
	$("input").css("display","block");
});


});

/* 네비게이션 */
function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
