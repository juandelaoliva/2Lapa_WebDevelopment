'use strict';

(function ($) {
    jQuery(document).ready(function () {
        console.log('AD19_FindInsurWiz component ready...');

        const steps = ['step-1', 'step-2'];
        const finals = [
            'final-step-1-option-1',
            'final-step-2-option-1',
            'final-step-2-option-2',
            'final-step-2-option-3',
            'final-step-2-option-4',
        ];
        const relationships = {
            'step-1-option-1': 'final-step-1-option-1',
            'step-2-option-1': 'final-step-2-option-1',
            'step-2-option-2': 'final-step-2-option-2',
            'step-2-option-3': 'final-step-2-option-3',
            'step-2-option-4': 'final-step-2-option-4',
        };

        // Hide all steps except the first one.
        for (let i = 1; i < steps.length; i++) {
            $('.AD19_FindInsurWiz.' + steps[i]).hide();
        }

        // Hide all the finals
        for (let i = 0; i < finals.length; i++) {
            $('#' + finals[i]).hide();
        }

        // Get the cta links:
        const ctaLinks = $('a.AD19_FindInsurWiz-cta');

        $(ctaLinks).each(function (index, link) {

            $(link).on('click', function (e) {
                e.preventDefault();

                const classes = $(this).attr("class").split(' ');

                // The last class is the step
                const step = classes[1];

                // Get the options defined in that step
                const options = $('input[type="radio"][name="' + step + '"]');

                //console.log(options);

                $(options).each(function (index, option) {
                    const optionId = $(option).attr('id');

                    // get the radio.
                    const radio = $("#" + optionId);

                    if ($(radio).is(':checked')) {
                        const value = $(radio).attr('value');

                        console.log("val: " + value);

                        // With this value, if it is a key on the relationships object, show the final.
                        // Otherwise, show next step.
                        let final = relationships[value];

                        if (final !== undefined) {
                            // Show final
                            $('#' + final).show();

                            // hide step 1
                            $('.AD19_FindInsurWiz.step-1').hide();

                            // hide step 2
                            $('.AD19_FindInsurWiz.step-2').hide();

                        } else {
                            // hide step 1
                            $('.AD19_FindInsurWiz.step-1').hide();

                            // show step 2
                            $('.AD19_FindInsurWiz.step-2').show();
                        }

                        console.log("final: " + final);
                    }
                });
            });
        });

    });
})(jQuery);
