$(document).ready(function(){

/* fixed */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	$(".header-top")[pos>=40?"addClass":"removeClass"]("headfix");
});


$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	//alert(pos);
	$(".row")[pos>200?"addClass":"removeClass"]("animate__slideInUp");
	$(".row2")[pos>800?"addClass":"removeClass"]("animate__fadeInUp");
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