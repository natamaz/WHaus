$(document).ready(function () {
    $('.btn_menu').on('click', function(){
        $('.sub_menu').toggleClass('active');
    });
    $('.phone_mask').mask('+7 (925) 000 00 00');
    $(function(){
        $('.banner_slider').slick({
            arrows:false,
            dots: true,
            dotsClass: "my-dots",
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow:true,
        });

        $(".banner_slider").on('afterChange', function(event, slick, currentSlide){
            $("#cp").text(currentSlide + 1);
        });
    });

    $('.team_slider').slick({

        draggable:true,
        arrows:false,
        variableWidth: true,
        variableHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1260,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1024,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.reviews_slider').slick({

        draggable:true,
        dots: true,
        dotsClass: "reviews-dots",
        arrows:false,
        variableWidth: true,
        variableHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1260,
                settings: {

                    centerMode:true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1024,
                settings: {

                    centerMode:true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.articles_slider').slick({

        draggable:true,
        arrows:false,
        variableWidth: true,
        variableHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1260,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1024,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.work_slider').slick({

        draggable:true,
        arrows:false,
        variableWidth: true,
        variableHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1260,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1024,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    const targetElement = $('.overlayPopup');
    $('.open-signIn').on("click", function () {
        $('.overlay-signIn').addClass('active');

    });
    $('.overlay-signIn .closeBtn, .overlay-signIn .close').on("click", function () {
        $('.overlay-signIn').removeClass('active');
    });

    $('.overlay-valid .closeBtn, .overlay-valid .close').on("click", function () {
        $('.overlay-valid').removeClass('active');
    });

    $('.open_heading').on("click", function () {
        $('.heading').toggleClass('active');
    });

    $('.open-personneldata').on("click", function () {
        $('.overlay-personneldata').addClass('active');

    });
    $('.overlay-personneldata .closeBtn, .overlay-personneldata .close').on("click", function () {
        $('.overlay-personneldata').removeClass('active');
    });

    $('.open-form').on("click", function () {
        $('.overlay-form').addClass('active');

    });
    $('.overlay-form .closeBtn, .overlay-form .close').on("click", function () {
        $('.overlay-form').removeClass('active');
    });

    $('.open-cost').on("click", function () {
        $('.overlay-cost').addClass('active');

    });
    $('.overlay-cost .closeBtn, .overlay-cost .close').on("click", function () {
        $('.overlay-cost').removeClass('active');
    });

    $(".modalbox").fancybox();


});

