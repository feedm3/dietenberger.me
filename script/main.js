/**
 * @author Fabian Dietenberger
 */

'use strict';

$(window).scroll(function(){
    $(".fade").css("opacity", 1-
        $(window).scrollTop() / 250);
});
 
 
