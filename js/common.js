head.ready(function() {

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

	$('.js-number').inputmask("mask", {"mask": "+ 9(999) 999-99-99"});


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

	var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
	  slideshows.not(this).cycle('goto', opts.currSlide);
	});

	$('.gallery__pager .slide').click(function() {
	  var index = $('.gallery__pager').data('cycle.API').getSlideIndex(this);
	  console.log(index);
	  slideshows.cycle('goto', index);
	});

	$('.js-awards').flickity({
	  cellAlign: 'left',
	  wrapAround: true,
	  contain: true
	});

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