'use strict';

$(document).ready(function () {
    // This updates the slider by removing it for Desktop.
    $(window).on('load resize', function () {
        const productTitleContainer = $('#AD19_ProductTitleSlider-example');
        if (window.innerWidth < 1024) {
            // Mobile...
            productTitleContainer.addClass('flexslider');
            productTitleContainer.addClass('carousel');
            productTitleContainer.find('ul').addClass('slides');
            productTitleContainer.flexslider({
                animation: "slide",
                carousel: false,
                minItems: 1,
                maxItems: 1,
                startAt: 1,
                start: function(){
                    productTitleContainer.find('ul.slides').css('transform', 'translate3d(-600px, 0px, 0px)');
                }
            });
        } else {
            // Desktop...
            productTitleContainer.removeClass('flexslider');
            productTitleContainer.removeClass('carousel');
            productTitleContainer.find('ul.slides').removeClass('slides');
        }
    });
});
