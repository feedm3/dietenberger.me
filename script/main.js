/**
 * @author Fabian Dietenberger
 */

'use strict';

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;

    var fadingElements = document.getElementsByClassName("fade");
    for (var i = 0; i<fadingElements.length; i++) {
        var fadingElement = fadingElements[i];
        console.log('set', 1 - scrollTop / 250);
        fadingElement.style.opacity = 1 - scrollTop / 250;
    }
});
 
 
