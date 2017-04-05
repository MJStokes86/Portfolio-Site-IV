/*
* ----------------------------------------------------------------------------------------
Author       : Creativepersonal
Template Name: Designer - Personal Portfolio Template
Version      : 1.0
* ----------------------------------------------------------------------------------------
*/
(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS
         * ----------------------------------------------------------------------------------------
         */

        var prealoaderOption = $(window);
        prealoaderOption.on("load", function () {
            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });




        /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND JS
         * ----------------------------------------------------------------------------------------
         */

        var headertopoption = $(window);
        var headTop = $('.header-top-area');

        headertopoption.on('scroll', function () {
            if (headertopoption.scrollTop() > 200) {
                headTop.addClass('menu-bg');
            } else {
                headTop.removeClass('menu-bg');
            }
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  MENU JS
         * ----------------------------------------------------------------------------------------
         */
        $(".toggle-btn").on("click", function () {
            $(this).toggleClass("active");
            $(".site-header").toggleClass("active");
        });



   // $(window).scroll(function(){
   //      if ($(this).scrollTop() > 200 && $('.body').css('background-color', '#fff')) {
   //          $('.logo').fadeOut(500).css('display', 'none');
   //      } else {
   //           $('.logo').fadeIn(500).css('display', 'block');

   //      }
   //  }); 

   // $(window).scroll(function(){
   //      if ($(this).scrollTop() > 200 && $('.body').css('background-color', '#fff')) {
   //          $('.icon-bar').css('background-color', 'pink');
   //      } else {
   //           $('.icon-bar').css('background-color', '#fafafa');

   //      }
   //  });

   // $(window).scroll(function(){
   //      if ($(this).scrollTop() > 200 && $('.body').css('background-color', '#fff')) {
   //          $('.mainmenu .navbar-nav li a').css('background-color', '#000');
   //      } else {
   //           $('.mainmenu .navbar-nav li a').css('background-color', 'transparent');

   //      }
   //  }); 

   // $(window).scroll(function(){
   //      if ($(this).scrollTop() > 200) {
   //          $('.toggle-btn').fadeIn(500).css('background-color', '#000');
   //      } else {
   //           $('.toggle-btn').css('background-color', 'transparent');

   //      }
   //  });

        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL JS
         * ----------------------------------------------------------------------------------------
         */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  PARALLAX JS
         * ----------------------------------------------------------------------------------------
         */

        var parallaxeffect = $(window);
        parallaxeffect.stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  COUNTER UP JS
         * ----------------------------------------------------------------------------------------
         */

        $('.counter-num').counterUp();


        /*
         * ----------------------------------------------------------------------------------------
         *  WORK JS
         * ----------------------------------------------------------------------------------------
         */

        $('.work-inner').mixItUp();



        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */

        var magnifPopup = function () {
            $('.work-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();





        /*
         * ----------------------------------------------------------------------------------------
         *  TESTIMONIAL JS
         * ----------------------------------------------------------------------------------------
         */

        $(".project-list").owlCarousel({
            items: 3,
            autoPlay: true,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
            navigation: true,
            navigationText : [ '<span class="project-link"> < <span>', '<span class="project-link">></span>' ]

            
        });

        $('.header-text').typed({
                strings:[" <h2>Hello. <br> I'm Michael J. Stokes. <br> I'm your developer. <br> Let's build something together!</h2>"], 
                typeSpeed:100,
                loop:false,
                cursorChar: "|",
                showCursor: true
            });





        /*
         * ----------------------------------------------------------------------------------------
         *  EXTRA JS
         * ----------------------------------------------------------------------------------------
         */
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */
        new WOW().init();







    });


        

})(jQuery);