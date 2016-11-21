/**
 * Copyright (c) 2016 Scott Fabini (scott.fabini@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */
//jQuery(document).ready(function() {
var initialize_calendar = function() {


    // Initialize fullcalendar
    jQuery('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        eventLimit: 2,
        editable: true,
        selectable: true,

        // Click on a day to generate the popover
        dayClick: function (date, jsEvent, view) {
            jQuery(this).popover({
                html: true,
                placement: 'top',
                container: 'body',
                editable: true,
                selectable: true,
                // create the popover
                title: function () {
                    return jQuery('#popover-head').html();
                },
                content: function () {
                    jQuery('#popover-content').find('#beginDate').attr('value', date.format("YYYY-MM-DD"));
                    jQuery('#popover-content').find('#endDate').attr('value', date.format("YYYY-MM-DD"));
                    return jQuery('#popover-content').html();
                }
            });
            jQuery(this).popover('toggle');
        },

        // Render the event (appointment) to the fullcalendar
        eventRender: function (event, element, view) {
            return element.html(event.start.format("hh:mm a").toUpperCase()
                + "-" + event.end.format("hh:mm a").toUpperCase()
                + ': ' + event.title);
        }
    }); // full calendar initialized
};

$(document).on('turbolinks:load', initialize_calendar);
