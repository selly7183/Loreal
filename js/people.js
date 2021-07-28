$(document).ready(function(){

/* fixed */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	$(".header-top")[pos>=40?"addClass":"removeClass"]("headfix");
});

$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	//alert(pos);
	$(".story-box")[pos>1200?"addClass":"removeClass"]("animate__fadeInLeft");
	$(".section2-img1")[pos>300?"addClass":"removeClass"]("animate__fadeInLeft");
	$(".section2-txt")[pos>300?"addClass":"removeClass"]("animate__fadeInRight");
	$(".section3-img1")[pos>700?"addClass":"removeClass"]("animate__fadeInLeft");
	$(".section3-txt")[pos>700?"addClass":"removeClass"]("animate__fadeInRight");
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
