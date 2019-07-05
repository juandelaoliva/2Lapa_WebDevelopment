'use strict';

$(document).ready(function () {
    const header = $('header.header');
    const shortcutsTariffButton = $('.shortcuts-tariff');
    const phoneIcon = $('.shortcuts-phone');

    // Initializing...
    shortcutsTariffButton.hide();

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

        shortcutsTariffButton.css('display', 'flex');
    });

    // Changes to elements when the header stops being sticky:
    header.on('sticky-end', function () {
        // show the phone icon
        phoneIcon.show();

        shortcutsTariffButton.hide();
    });

    // This updates the sticky header on resize the window.
    $(window).on('resize', function () {
        header.sticky('update');
    });
});
