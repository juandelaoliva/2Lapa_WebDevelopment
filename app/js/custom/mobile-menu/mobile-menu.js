'use strict';

$(document).ready(function () {
    $('#mobile_menu_trigger').on('click', function () {
        // Changes the icon.
        $(this).toggleClass('mobile-open');

        // Menu items container.
        $('.menu-container').toggleClass('mobile-open');
        $('body').toggleClass('no-scroll');
    });
});
