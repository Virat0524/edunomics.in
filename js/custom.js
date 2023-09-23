$(document).ready(function(){
	owl = $('.reviewholder');
	owl.owlCarousel({
	    items:3,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:2000,
	    slideSpeed: 2000,
	    smartSpeed:2000, 
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:2,
	            nav:true
	        },
	        1000:{
	            items:3,
	            nav:true, 
        }
    }
});
	
    new WOW().init();

     
  $(window).scroll(function() {
      stickyHeader();
  });

  function stickyHeader() {
      if ($(this).scrollTop() > 1){  
             $('body').addClass("sticky"); 
      } else {
          $('body').removeClass("sticky");
      }
  }

  $(function(){
    $('#menu').slicknav();
  });
})
