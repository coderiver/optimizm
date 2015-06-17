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

	 $('input[name="name"]').on('keyup', function(){
	    	var value = $(this).val();
		    var reg = /[^\sa-zA-Zа-яА-Я]$/i;
		    var regFinal = /([a-zA-Zа-яА-Я]{2,})$/i;
		    if (reg.test(value)) {
		        value = value.replace(reg, '');
		        $(this).val(value);
		    }
		    if (regFinal.test(value)) {
		    	$(this).removeClass('has-error');
		    } else {
	    	    $(this).addClass('has-error');
		    }
	    });


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

	$('.js-nav-link[href^="#"]').on('click', function (e) {
	    e.preventDefault();
	    $(document).off("scroll");
	    
	    $('.nav__link').each(function () {
	        $(this).removeClass('is-active');
	    })
	    $(this).addClass('is-active');
	  
	    var target = this.hash,
	        menu = target;
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-95}, 500, 'swing', function () {
	        window.location.hash = target;
	        $(document).on("scroll", onScroll);
	    });
	});
	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.js-nav-link').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top-100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.js-nav-link').removeClass("is-active");
	            currLink.addClass("is-active");
	        }
	        else{
	            currLink.removeClass("is-active");
	        }
	    });
	}
	//steps
	$('.step').on('click', function() {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.step').removeClass('is-active');
		}
		else {
			$('.step').removeClass('is-active');
			$(this).addClass('is-active');
		};		
	});
});