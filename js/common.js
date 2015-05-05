head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	function scrollFixedElements() {
	    var scroll_left = $(this).scrollLeft();
	    $(".fixed-element").css({
	        left: -scroll_left
	    });
	}
	scrollFixedElements();
	$(window).scroll(function(){
	    scrollFixedElements()
	});
	// function Time() {
	//     mytime = setTimeout(function(){ 
	// 		$('body').addClass('is-animate');
	//     },1000);
	// };

	//input mask
	$('.js-number').inputmask("mask", {"mask": "+ 9(999) 999-99-99"});

	//advantages
	// $('.advantages').on('click', function() {
	// 	$(this).toggleClass('is-active');
	// });
	// $('.advantages').addClass('is-active');

	function visibility(){
		var window_top = $(window).scrollTop();
		var window_height = $(window).height();
		var start_visibility = window_top + window_height;
	  
		$(".visibility").each(function(){
		
			var block_position = $(this).offset().top;

			if(start_visibility >= block_position){
				$(this).addClass('is-visible');
			}
		});
	}
	visibility();
	$(window).scroll(function(){
		visibility();
	});
	$(window).load(function(){
		visibility();
	});

	//galleries synchronize (ITEM)
	var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
	  slideshows.not(this).cycle('goto', opts.currSlide);
	});

	$('.gallery__pager .slide').click(function() {
	  var index = $('.gallery__pager').data('cycle.API').getSlideIndex(this);
	  console.log(index);
	  slideshows.cycle('goto', index);
	});

	$('.js-awards').flickity({
	  // options
	  cellAlign: 'left',
	  wrapAround: true,
	  contain: true
	});

	//popup
	$('.js-popup-open').on('click', function() {
		$('.js-popup').addClass('is-active');
		return false;
	});
	$('.js-popup-close').on('click', function() {
		$('.js-popup').removeClass('is-active');
		return false;
	});
	$('.js-popup').on('click', function() {
		$('.js-popup').removeClass('is-active');
		return false;
	});
	$('.popup__form').on('click', function(event) {
		event.stopPropagation();
	});
});