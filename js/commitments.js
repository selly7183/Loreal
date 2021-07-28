$(document).ready(function(){

/* fixed */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	$(".header-top")[pos>=40?"addClass":"removeClass"]("headfix");
});


$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	//alert(pos);
	$(".section2-txt1")[pos>100?"addClass":"removeClass"]("animate__fadeInDown");
	$(".section2-txt2")[pos>100?"addClass":"removeClass"]("animate__fadeInDown");
	$(".section3-txt1")[pos>1100?"addClass":"removeClass"]("animate__fadeInRight");
	$(".section4-txt1")[pos>1800?"addClass":"removeClass"]("animate__fadeInLeft");
	$(".section5-txt1")[pos>2900?"addClass":"removeClass"]("animate__fadeInRight");
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
