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

       var svgs = [
           'svg-one', 
           'svg-two', 
           'svg-three', 
           'svg-browser', 
           'svg-phone1',
           'svg-phone2',
           'svg-phone3'
        ]

       for(var i = 0; i < svgs.length; i++) {
        new Vivus(
            svgs[i],
            {
              type: 'delayed',
              duration: 400,
              animTimingFunction: Vivus.EASE,
              start: 'inViewport'
            },
          );
       }

    })
})(jQuery);