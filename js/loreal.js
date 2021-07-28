/* 슬라이드 */
$(document).ready(function(){

$(".slide-group").slick({
	dots:true,			
	autoplay:true,		
	autoplaySpeed:2100,
	speed:500,			
	infinite:true,		
	fade:true,
	cssEase:'linear'
});

$(".sch").on("click",function(){
	event.preventDefault();
	$("input").css("display","block");
});




$(".content").hide();
$(".content").first().show();
$(".tabs li").first().addClass("select");

$(".tabs li").on("click",function(){
	event.preventDefault();
	var active=$(this).find("a").attr("href");
	$(".content").hide();
	$(active).show();
	$(".tabs li").removeClass("select");
	$(this).addClass("select");
});


/* 박스 */
$(window).on("scroll",function(){
	var pos=$(window).scrollTop();
	//alert(pos);
	$(".section1-box")[pos>50?"addClass":"removeClass"]("animate__fadeInUp");
	$(".story-box")[pos>1050?"addClass":"removeClass"]("animate__fadeInLeft");
});




/* fixed */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	$(".header-top")[pos>=40?"addClass":"removeClass"]("headfix");
});


});

/* 네비게이션 */
function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


/* 브랜드 슬라이드 */
$(function (){
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow:1.64,
		slidesToScroll: 1,
		arrows:true,
		centerMode:true,
		autoplay:true,
		autoplaySpeed:2800,
		centerPadding:'60px'
	});
});


