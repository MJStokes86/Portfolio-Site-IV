
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
                    enabled: true, 
                    duration: 300, 
                    easing: 'ease-in-out', 

               
                    opener: function (openerElement) {
                       
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        
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