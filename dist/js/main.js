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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICQoJy5fX2RkX19jYXJvdXNlbF9fc2xpZGVzX19saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuX19kZF9fY2Fyb3VzZWxfX3NsaWRlc19fY29udHJvbHMgYnV0dG9uLmlzLS1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLl9fZGRfX2Nhcm91c2VsX19zbGlkZXNfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTUwMCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgIH0pXHJcblxyXG4gICAgICAgdmFyIHN2Z3MgPSBbXHJcbiAgICAgICAgICAgJ3N2Zy1vbmUnLCBcclxuICAgICAgICAgICAnc3ZnLXR3bycsIFxyXG4gICAgICAgICAgICdzdmctdGhyZWUnLCBcclxuICAgICAgICAgICAnc3ZnLWJyb3dzZXInLCBcclxuICAgICAgICAgICAnc3ZnLXBob25lMScsXHJcbiAgICAgICAgICAgJ3N2Zy1waG9uZTInLFxyXG4gICAgICAgICAgICdzdmctcGhvbmUzJ1xyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3Zncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG5ldyBWaXZ1cyhcclxuICAgICAgICAgICAgc3Znc1tpXSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdkZWxheWVkJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxyXG4gICAgICAgICAgICAgIGFuaW1UaW1pbmdGdW5jdGlvbjogVml2dXMuRUFTRSxcclxuICAgICAgICAgICAgICBzdGFydDogJ2luVmlld3BvcnQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
