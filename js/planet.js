$(document).ready(function(){

/* fixed */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	$(".header-top")[pos>=40?"addClass":"removeClass"]("headfix");
});

$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	//alert(pos);
	$(".section2-txt")[pos>300?"addClass":"removeClass"]("animate__fadeInUp");
	$(".section3-img1")[pos>850?"addClass":"removeClass"]("animate__fadeInLeft");
	$(".section3-img2")[pos>850?"addClass":"removeClass"]("animate__fadeInRight");
	$(".story-box")[pos>1800?"addClass":"removeClass"]("animate__fadeInLeft");
	
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
