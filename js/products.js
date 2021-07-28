$(document).ready(function(){

/* fixed */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	$(".header-top")[pos>=40?"addClass":"removeClass"]("headfix");
});

$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	//alert(pos);
	$(".section2-img1")[pos>400?"addClass":"removeClass"]("animate__pulse");
	$(".dl-left")[pos>600?"addClass":"removeClass"]("animate__fadeInLeft");
	$(".dl-right")[pos>600?"addClass":"removeClass"]("animate__fadeInRight");
	$(".section3-txt1")[pos>1000?"addClass":"removeClass"]("animate__fadeInUp");
	$(".section3-txt2")[pos>1000?"addClass":"removeClass"]("animate__fadeInUp");
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
