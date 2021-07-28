$(document).ready(function(){

/* fixed */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	$(".header-top")[pos>=40?"addClass":"removeClass"]("headfix");
});


$(".content").hide();
$(".content").eq(3).show();
$(".tabs li").eq(3).addClass("select");

$(".tabs li").on("click",function(){
	event.preventDefault();
	var active=$(this).find("a").attr("href");
	$(".content").hide();
	$(active).show();
	$(".tabs li").removeClass("select");
	$(this).addClass("select");
});


$(".sch").on("click",function(){
	event.preventDefault();
	$("input").css("display","block");
});

/* more 버튼 */

$("#btn01").on("click",function(){
	$(".section2-box3").fadeIn(500),
	$(".section2-box4").fadeIn(500),
	$("#btn01").css("display","none"),
	$("footer").css("margin-top","950px");
});
$("#btn02").on("click",function(){
	$(".section2-box14").fadeIn(500),
	$(".section2-box15").fadeIn(500),
	$("#btn02").css("display","none"),
	$("footer").css("margin-top","1000px");
});



$("ul.tabs li:nth-child(1)").on("click",function(){
	$(".section2-box3").fadeOut(0),
	$(".section2-box4").fadeOut(0),
	$("#btn01").css("display","block"),
	$("footer").css("margin-top","0px");
});

$("ul.tabs li:nth-child(2)").on("click",function(){
	$(".section2-box14").fadeOut(0),
	$(".section2-box15").fadeOut(0),
	$("#btn01").css("display","block"),
	$("footer").css("margin-top","0px");
});
$("ul.tabs li:nth-child(3)").on("click",function(){
	$("footer").css("margin-top","0px");
});

$("ul.tabs li:nth-child(4)").on("click",function(){
	$("footer").css("margin-top","0px");
});

$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	//alert(pos);
	$(".section2-box1")[pos>100?"addClass":"removeClass"]("animate__fadeIn");
	$(".section2-box16")[pos>1050?"addClass":"removeClass"]("animate__fadeIn");
	$(".section2-box5")[pos>100?"addClass":"removeClass"]("animate__fadeIn");
	$(".section2-box7")[pos>1050?"addClass":"removeClass"]("animate__fadeIn");
	$(".section2-box8")[pos>100?"addClass":"removeClass"]("animate__fadeIn");
	$(".section2-box10")[pos>1050?"addClass":"removeClass"]("animate__fadeIn");
	$(".section2-box11")[pos>100?"addClass":"removeClass"]("animate__fadeIn");
	$(".section2-box13")[pos>1050?"addClass":"removeClass"]("animate__fadeIn");
});

});




/* 네비게이션 */
function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
