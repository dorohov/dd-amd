(function($) {
    "use strict"
    $(function() {

       $('.__dd__carousel__slides__list').slick({
            nextArrow: '.__dd__carousel__slides__controls button.is--next',
            prevArrow: '.__dd__carousel__slides__controls button.is--prev',
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 1500,
                    }
                }
            ]
       })

    })
})(jQuery);