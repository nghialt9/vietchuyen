(function ($) {

    "use strict";


    function preloader() {
        $('.preloader').hide();
        /*if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500);
        }*/
    }


    // Wow Animation
    //new WOW().init();


    // Video banner bg
    // $('#video-bg').YTPlayer({
    //     fitToBackground: true,
    //     autoplay: true,
    //     videoId: 'dOVDuohr43k',
    //     start: 0,
    //     mute: true
    // });

    $('.news-list li li').click(function () {
        var page = $(this).data('page');
        $('.news-content-box').removeClass('active');
        $('.news-content-box.' + page).addClass('active');
    });

    $('.news-list > li').click(function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $('.news-list > li').removeClass('active');
        $(this).addClass('active');
    });

    $('.footer-menu .menu-item-has-children > a').click(function (e) {
        e.preventDefault();
        $(this).parent('li').find('ul').stop().slideToggle();
    });

    initPortfolioSwiper();

    function initPortfolioSwiper() {

        if ($('.portfolio-slide').length) {
            if (typeof portSwiper == 'object') {
                portSwiper.destroy();
            }
            var portSwiper = new Swiper('.portfolio-slide .swiper-container', {
                pagination: '.swiper-pagination',
                effect: 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
                initialSlide: 3,
                spaceBetween: 1,
                coverflow: {
                    rotate: 0,
                    stretch: 32,
                    depth: 320,
                    modifier: 1,
                    slideShadows: false
                },
                nextButton: '.portfolio-slide .next-btn',
                prevButton: '.portfolio-slide .prev-btn'
            });
        }
    }

    // Navbar Fixed Top On Scroll
    var affixElement = '#navbar-main';

    // $(affixElement).affix({
    //     offset: {
    //         // Distance of between element and top page
    //         top: function () {
    //             return (this.top = $(affixElement).offset().top)
    //         }
    //     }
    // });

    setTimeout(function () {
        $('.nav-tabs-same-height li').each(function () {
            var _this = $(this);
            console.log(_this.find('i').height() + _this.find('span').height());
            var _marginTop = (_this.height() - 20 - (_this.find('i').height() + _this.find('span').height())) / 2;
            _this.find('i').css('margin-top', _marginTop + 'px');
        });
    }, 500);

    $('.tab-content-head span').click(function () {
        if ($(this).hasClass('active')) {
            return;
        }
        var _class = $(this).data('ref');
        $(this).parents('.tab-content-head').find('span').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tab-pane').find('.tab-content-ct').removeClass('active');
        $(this).parents('.tab-pane').find('.' + _class).addClass('active');
    });

    // CounterUp
    // $('.count').counterUp({
    //     delay: 10, // the delay time in ms
    //     time: 2000 // the speed time in ms
    // });

    // Scroll to top
    // $(function () {
    //     $.scrollUp({
    //         scrollName: 'scrollUp',      // Element ID
    //         scrollDistance: 300,         // Distance from top/bottom before showing element (px)
    //         scrollFrom: 'top',           // 'top' or 'bottom'
    //         scrollSpeed: 300,            // Speed back to top (ms)
    //         easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
    //         animation: 'fade',           // Fade, slide, none
    //         animationSpeed: 200,         // Animation speed (ms)
    //         scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
    //         scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
    //         scrollText: 'Scroll to top', // Text for element, can contain HTML
    //         scrollTitle: false,          // Set a custom <a> title if required.
    //         scrollImg: true,            // Set true to use image
    //         activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    //         zIndex: 2147483647           // Z-Index for the overlay
    //     });
    // });



    // // owl-carousel for main-slider
    // $('.main-slider').owlCarousel({
    //     loop: false,
    //     nav: true,
    //     dots: false,
    //     margin: 0,
    //     autoplay: true,
    //     autoplayTimeout: 4500,
    //     autoplayHoverPause: false,
    //     autoplaySpeed: 1200,
    //     navText: [
    //         '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
    //         '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    //     ],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // });


    // // owl-carousel for testimonial
    // $('.testimonial-carousel').owlCarousel({
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     margin: 15,
    //     autoplay: true,
    //     autoplayTimeout: 4000,
    //     autoplayHoverPause: false,
    //     autoplaySpeed: 1000,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 1,
    //         },
    //         1000: {
    //             items: 1,
    //         },
    //     }
    // });

    // // discount carousel
    // $('.discount-carousel').owlCarousel({
    //     loop: true,
    //     nav: true,
    //     dots: false,
    //     margin: 50,
    //     autoplay: true,
    //     autoplayTimeout: 4000,
    //     autoplayHoverPause: false,
    //     autoplaySpeed: 1000,
    //     navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 2,
    //         },
    //         1000: {
    //             items: 3,
    //         },
    //     }
    // });



    // // owl-carousel for client
    // $('.client-carousel').owlCarousel({
    //     loop: true,
    //     nav: true,
    //     dots: false,
    //     margin: 30,
    //     navText: [
    //         '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
    //         '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    //     ],
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: false,
    //     autoplaySpeed: 1000,
    //     responsive: {
    //         0: {
    //             margin: 10,
    //             items: 2
    //         },
    //         480: {
    //             margin: 10,
    //             items: 3
    //         },
    //         600: {
    //             margin: 20,
    //             items: 3
    //         },
    //         1000: {
    //             items: 5
    //         }
    //     }
    // });

    // $('.product-carousel').owlCarousel({
    //     loop: true,
    //     nav: true,
    //     navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    //     dots: false,
    //     margin: 50,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: false,
    //     autoplaySpeed: 1000,
    //     responsive: {
    //         0: {
    //             margin: 10,
    //             items: 2
    //         },
    //         480: {
    //             margin: 10,
    //             items: 3
    //         },
    //         600: {
    //             margin: 20,
    //             items: 3
    //         },
    //         1000: {
    //             items: 5
    //         }
    //     }
    // });



    // // testimonial carousel-two
    // $('.testimonial-carousel-two').owlCarousel({
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     margin: 50,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: false,
    //     autoplaySpeed: 1000,
    //     responsive: {
    //         0: {
    //             margin: 10,
    //             items: 1
    //         },
    //         480: {
    //             margin: 10,
    //             items: 1
    //         },
    //         600: {
    //             margin: 20,
    //             items: 1
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // });



    // // testimonial carousel-three
    // $('.testimonial-carousel-three').owlCarousel({
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     margin: 50,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: false,
    //     autoplaySpeed: 1000,
    //     responsive: {
    //         0: {
    //             margin: 10,
    //             items: 1
    //         },
    //         480: {
    //             margin: 10,
    //             items: 1
    //         },
    //         600: {
    //             margin: 20,
    //             items: 2
    //         },
    //         1000: {
    //             items: 2
    //         }
    //     }
    // });


    // // testimonial carousel-four
    // $('.testimonial-carousel-four').owlCarousel({
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     margin: 50,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: false,
    //     autoplaySpeed: 1000,
    //     responsive: {
    //         0: {
    //             margin: 10,
    //             items: 1
    //         },
    //         480: {
    //             margin: 10,
    //             items: 1
    //         },
    //         600: {
    //             margin: 20,
    //             items: 2
    //         },
    //         1000: {
    //             items: 3
    //         }
    //     }
    // })

    // // testimonial carousel-five
    // $('.testimonial-carousel-five').owlCarousel({
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     margin: 50,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: false,
    //     autoplaySpeed: 1000,
    //     responsive: {
    //         0: {
    //             margin: 10,
    //             items: 1
    //         },
    //         480: {
    //             margin: 10,
    //             items: 1
    //         },
    //         600: {
    //             margin: 20,
    //             items: 2
    //         },
    //         1000: {
    //             items: 3
    //         }
    //     }
    // })


    // // lightbox
    // lightbox.option({
    //     'resizeDuration': 200,
    //     'wrapAround': true
    // });


    // // Parallax
    // $('.parallax').jarallax({
    //     // parallax effect speed. 0.0 - 1.0
    //     speed: 0.5
    // });

    // function setCookie(cname, cvalue, exdays) {
    //     var d = new Date();
    //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //     var expires = 'expires=' + d.toUTCString();
    //     document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    // }

    // function getCookie(cname) {
    //     var name = cname + '=';
    //     var decodedCookie = decodeURIComponent(document.cookie);
    //     var ca = decodedCookie.split(';');
    //     for (var i = 0; i < ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return '';
    // }

    // if (getCookie('ccmsg')) {
    //     $('.cc-wrapper').hide();
    // } else {
    //     $('.cc-wrapper').show();
    // }

    // $('.cc-btn').click(function () {
    //     setCookie('ccmsg', 'dismiss', 10);
    //     $('.cc-wrapper').hide();
    // });


    // // Video popup
    // jQuery("a.demo").YouTubePopUp();

    // //Setup Filterizr
    // if ($('.filtr-container').length) {
    //     $('.filtr-container').imagesLoaded(function () {
    //         var filterizr = $('.filtr-container').filterizr();
    //     });
    // }

    // if ($('[data-toggle="datepicker"]').length) {
    //     $('[data-toggle="datepicker"]').datepicker({
    //         autoHide: true
    //     });
    // }

    // $('.endDate').change(function () {
    //     if ($('.startDate').val() != '') {
    //         $(this).parents('form').submit();
    //     }
    // })


    // ----------- Ajax Contact script -----------//
    $(function () {
        // Get the form.
        var form = $('#ajax-contact');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function (event) {
            // Stop the browser from submitting the form.
            event.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function (response) {
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#name').val('');
                    $('#subject').val('');
                    $('#email').val('');
                    $('#message').val('');
                })

                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });

    function main() {
        $("a.page-scroll").on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({ scrollTop: target.offset().top - 95 }, 900);
                    return false;
                }
            }
        });

        $('.navbar-nav li').click(function () {
            var _this = $(this);
            var _class = _this.attr('class').split(' ')[0];
            _this.toggleClass('active');
            $('.navbar-nav li').not(_this).removeClass('active');
            $('.sub-menu .container').not('.' + _class).removeClass('active');
            $('.sub-menu .container.' + _class).toggleClass('active');
        });
    }

    main();


    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function () {
        // add your functions
        preloader();
    });

    jQuery(document).ready(function($){
        var offset = 100;
        var speed = 250;
        var duration = 500;
            $(window).scroll(function(){
                if ($(this).scrollTop() < offset) {
                          $('.gototop') .fadeOut(duration);
                } else {
                          $('.gototop') .fadeIn(duration);
                }
            });
         $('.gototop').on('click', function(){
                $('html, body').animate({scrollTop:0}, speed);
                return false;
                });
    });

})(window.jQuery);