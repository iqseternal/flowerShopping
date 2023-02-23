(function ($) {
    "use strict";
    
        
	/*--
		Header Search
    -----------------------------------*/
	function sticky() {
		$(window).on('scroll', function(event) {    
			var scroll = $(window).scrollTop();
			if (scroll < 350) {
				$(".header-section, .header-mobile").removeClass("sticky");
			} else{
				$(".header-section, .header-mobile").addClass("sticky");
			}
		});
	}
	sticky();

        
	/*--
		Header top Notification
    -----------------------------------*/
	function notificationClose() {
		$('.notification-close-btn').on('click', function () {			
			$('.top-notification-bar').slideUp();
		});		
	}
	notificationClose();
		
	
	/*--
		Slider
    -----------------------------------*/
		
	var swiper = new Swiper('.slider-active', {
		speed: 800,
		loop: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		effect: "fade",
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	
	/*--
		tooltip
	-----------------------------------*/
	
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-tooltip="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	
	/*--
		Product Active
    -----------------------------------*/

	var swiper = new Swiper('.product-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		speed: 800,
		loop: true,
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
			  slidesPerView: 2,
			},
			768: {
			  slidesPerView: 3,
			},
			992: {
			  slidesPerView: 4,
			},
		}
	});

	
	/*--
		Product Countdown
    -----------------------------------*/

	function countdown() {
		$('[data-countdown]').each(function() {
			var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
			  $this.html(event.strftime('<div class="single-count"><span class="count">%D</span><p>Days</p></div><div class="single-count"><span class="count">%H</span><p>Hour</p></div><div class="single-count"><span class="count">%M</span><p>mint</p></div><div class="single-count"><span class="count">%S</span><p>Sec</p></div>'));
			});
		});	
	}
	countdown();


	/*--
		Testimonial
    -----------------------------------*/
		
	var swiper = new Swiper('.testimonial-active', {
		speed: 300,
		loop: true,
		slidesPerView: 1,
		navigation: {
		  nextEl: '.swiper-next',
		  prevEl: '.swiper-prev',
		},
	});


	/*--
		Blog
    -----------------------------------*/
		
	var swiper = new Swiper('.blog-active', {
		speed: 800,
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
		  nextEl: '.swiper-next',
		  prevEl: '.swiper-prev',
		},
		breakpoints: {
			0: {
			  slidesPerView: 1,
			},
			576: {
			  slidesPerView: 1,
			},
			768: {
			  slidesPerView: 2,
			},
			992: {
			  slidesPerView: 3,
			},
		}
	});


	/*--
		Brand Active
    -----------------------------------*/
		
	var swiper = new Swiper('.brand-active', {
		speed: 800,
		loop: true,
		slidesPerView: 6,
		spaceBetween: 30,
		navigation: {
		  nextEl: '.swiper-next',
		  prevEl: '.swiper-prev',
		},
		breakpoints: {
			0: {
			  slidesPerView: 2,
			},
			576: {
			  slidesPerView: 3,
			},
			768: {
			  slidesPerView: 5,
			},
			992: {
			  slidesPerView: 6,
			},
		}
	});

	
	/*--
		Color Script
	-----------------------------------*/
	
	function color() {
		$('.color-list li span').each(function() {
			var get_color = $(this).attr('data-color');
			$(this).css("background-color", get_color);
		});
		
		$('.color-list li').on("click", function() {
			$(this).siblings(this).removeClass('active').end().addClass('active');
		});
	
	
		// Shop Color
		$('.color-list li .color-radio label').each(function() {
			var get_color = $(this).attr('data-color');
			$(this).css("background-color", get_color);
		});
	}
 	color();
	
	/*--
		Size Script
	-----------------------------------*/

	function size() {
		$('.size-list li').on("click", function() {
			$(this).siblings(this).removeClass('active').end().addClass('active');
		});
	}
	size();
	 

	
	/*--
		Product Zoom Script
	-----------------------------------*/

	function productZoom() {
		$(".product-zoom").elevateZoom({
			gallery:'gallery_01',
			cursor: "crosshair",
			galleryActiveClass: 'active',
			easing : true, 
			imageCrossfade: true,
			zoomType: "inner"
		}); 
	
		//pass the images to Fancybox
		$(".product-zoom").bind("click", function(e) {  
		var ez =   $('.product-zoom').data('elevateZoom');	
			$.fancybox(ez.getGalleryList());
		return false;
		});
	}
	productZoom();
	

	/*--
		Shop Thumb Active Script
	-----------------------------------*/

	var swiper = new Swiper('.shop-thumb-active', {
		speed: 300,
		loop: false,
		slidesPerView: 3,
		spaceBetween: 20,
		navigation: {
		  nextEl: '.swiper-thumb-next',
		  prevEl: '.swiper-thumb-prev',
		},		
	});
	

	/*--
		Blog Gallery Active Script
	-----------------------------------*/

	var swiper = new Swiper('.blog-gallery', {
		speed: 300,
		loop: false,
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
		  nextEl: '.blog-gallery-next',
		  prevEl: '.blog-gallery-prev',
		},
	});

	
	/*--
		product quantity Script
	-----------------------------------*/

	function quantity() {
		$('.add').on('click', function () {
			if ($(this).prev().val()) {
				$(this).prev().val(+$(this).prev().val() + 1);
			}
		});
		$('.sub').on('click', function () {
			if ($(this).next().val() > 1) {
				if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
			}
		});
	}
	quantity();
	

	/*--
		Checkout Button Disabled
	-----------------------------------*/
	
	function btnDisabled() {
		$('#disabled').on('click', function(){
			if( $('#disabled:checked').length > 0 ) {
				$('.dynamic-checkout-button').removeClass('disabled');
			} else {
				$('.dynamic-checkout-button').addClass('disabled');
			}
		});
	}
	btnDisabled();

	
	/*--
		Rating Script
	-----------------------------------*/

	$("#rating li").on('mouseover', function(){
		var onStar = parseInt($(this).data('value'), 10);
		var siblings = $(this).parent().children('li.star');
		Array.from(siblings, function(item){
			var value = item.dataset.value;
			var child = item.firstChild;
			if(value <= onStar){
				child.classList.add('hover')
			} else {
				child.classList.remove('hover')
			}
		})
	})

	$("#rating").on('mouseleave', function(){
		var child = $(this).find('li.star i');
		Array.from(child, function(item){
			item.classList.remove('hover');
		})
	})

	
	$('#rating li').on('click', function(e) {
		var onStar = parseInt($(this).data('value'), 10);
		var siblings = $(this).parent().children('li.star');
		Array.from(siblings, function(item){
			var value = item.dataset.value;
			var child = item.firstChild;
			if(value <= onStar){
				child.classList.remove('hover', 'fa-star-o');
				child.classList.add('fa-star')
			} else {
				child.classList.remove('fa-star');
				child.classList.add('fa-star-o')
			}
		})
	}) 

	
	/*--
		select2 Active
	-----------------------------------*/

	 
	function select2() {
		$(".select2").select2({
			tags: true
		}); 
	}
	select2();

	
	/*--
		Checkout Account Active
	-----------------------------------*/

	 
	function checkoutAccount() {
		$('#account').on('click', function () {
			if ($('#account:checked').length > 0) {
				$('.checkout-account').slideDown();
			} else {
				$('.checkout-account').slideUp();
			}
		});
	}
	checkoutAccount();

	
	/*--
		Checkout Shipping Active
	-----------------------------------*/

	 
	function checkoutShipping() {
		$('#shipping').on('click', function () {
			if ($('#shipping:checked').length > 0) {
				$('.checkout-shipping').slideDown();
			} else {
				$('.checkout-shipping').slideUp();
			}
		});
	}
	checkoutShipping();

	
	/*--
		Checkout Payment Active
	-----------------------------------*/

	 
	function checkoutPayment() {
		var checked = $('.payment-radio input:checked')
		if (checked) {
			$(checked).siblings('.payment-details').slideDown(500);
		};
		$('.payment-radio input').on('change', function() {
			$('.payment-details').slideUp(500);
			$(this).siblings('.payment-details').slideToggle(500);
		});
	}
	checkoutPayment();
	
	
	/*--
		Back to top Script
	-----------------------------------*/

	function backTop() {
		// Show or hide the sticky footer button
		$(window).on('scroll', function (event) {
			if ($(this).scrollTop() > 600) {
				$('.back-to-top').fadeIn(200)
			} else {
				$('.back-to-top').fadeOut(200)
			}
		});


		//Animate the scroll to yop
		$('.back-to-top').on('click', function (event) {
		event.preventDefault();

			$('html, body').animate({
				scrollTop: 0,
			}, 1500);
		});
	}
	backTop();

	
	/*--
		Menu Script
	-----------------------------------*/
	
	function menuScript() {
		$('#menu-trigger').on('click', function(){
			$('.header-mobile-menu').addClass('open')
			$('.overlay').addClass('open')
		});
		
		$('.mobile-menu-close').on('click', function(){
			$('.header-mobile-menu').removeClass('open')
			$('.overlay').removeClass('open')
		});
		
		$('.overlay').on('click', function(){
			$('.header-mobile-menu').removeClass('open')
			$('.overlay').removeClass('open')
		});
			
		
		/*Variables*/
		var $offCanvasNav = $('.navbar-mobile-wrapper'),
			$offCanvasNavSubMenu = $offCanvasNav.find('ul ');
	
		/*Add Toggle Button With Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');
	
		/*Close Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.slideUp();
	
		/*Category Sub Menu Toggle*/
		$offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
			var $this = $(this);
			if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
				e.preventDefault();
				if ($this.siblings('ul:visible').length) {
					$this.parent('li').removeClass('active-expand');
					$this.siblings('ul').slideUp();
				} else {
					$this.parent('li').addClass('active-expand');
					$this.closest('li').siblings('li').find('ul:visible').slideUp();
					$this.closest('li').siblings('li').removeClass('active-expand');
					$this.siblings('ul').slideDown();
				}
			}
		});
		
		$( ".sub-menu, .mega-sub-menu, .mega-item" ).parent( "li" ).addClass( "menu-item-has-children" );

		$( ".mega-sub-menu" ).parent( "li" ).css( "position", "static" );
	}
	menuScript();
    
    
})(jQuery);