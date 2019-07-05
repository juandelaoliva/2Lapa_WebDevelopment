$(document).ready(function () {
    const sliderContainer = $('#AD19_FeatureTeaser-example');
    if (sliderContainer.hasClass('flexslider')) {
        $(window).on('load resize', function () {
            sliderContainer.flexslider({
                animation: "slide",
                carousel: false,
                minItems: 1,
                maxItems: 1,
                startAt: 1,
                controlsContainer: ".has-slider",
                start: function () {
                    sliderContainer.find('ul.slides').css('transform', 'translate3d(-600px, 0px, 0px)');
                }
            });
        });
    }
});
