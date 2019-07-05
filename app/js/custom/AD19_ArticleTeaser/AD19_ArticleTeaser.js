'use strict';

$(document).ready(function () {
  // This updates the slider by removing it for Desktop.
  $(window).on('load resize', function () {
    const productTitleContainer = $('#AD19_ArticleTeaser_slider');
    if (window.innerWidth < 1024) {
      // Mobile...
      productTitleContainer.addClass('flexslider');
      productTitleContainer.addClass('carousel');
      productTitleContainer.find('ul').addClass('slides');
      productTitleContainer.flexslider({
        animation: "slide",
        itemWidth: 400,
        directionNav: false
      });
    } else {
      // Desktop...
      productTitleContainer.removeClass('flexslider');
      productTitleContainer.removeClass('carousel');
      productTitleContainer.find('ul.slides').removeClass('slides');
    }
  });
});
