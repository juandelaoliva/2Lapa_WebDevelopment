'use strict';

$(document).ready(function () {
    const header = $('header.header');
    const shortcutsContactButton = $('.shortcuts-contact');
    const phoneIcon = $('.shortcuts-phone');

    // Initializing...
    shortcutsContactButton.hide();

    header.sticky(
        {
            topSpacing: 0,
            zIndex: 100
        }
    );

    // Changes to elements that need to be different when the header gets sticky:
    header.on('sticky-start', function () {
        // hide the phone icon
        phoneIcon.hide();

        shortcutsContactButton.css('display', 'flex');
    });

    // Changes to elements when the header stops being sticky:
    header.on('sticky-end', function () {
        // show the phone icon
        phoneIcon.show();

        shortcutsContactButton.hide();
    });

    // This updates the sticky header on resize the window.
    $(window).on('resize', function () {
        header.sticky('update');
    });
});
