
$(document).ready(function(){
    $('.baner').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slider-two').slick({
        dots: true,
        arrows: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.sm-butt-menu').click(function(){
        $('.header__bott').slideDown(300);
    });
    
    $('.header__close-menu').click(function(){
        $('.header__bott').slideUp(300);
    });

});