'use strict';

/**
 * Check if site is currently on a mobile screen.
 *
 * @returns {boolean} true if not on mobile (like tablet or desktop)
 */
function isNotMobile() {
    return !window.matchMedia("(max-width: 767px)").matches
}

/**
 * Fade out elements when user scrolls down.
 */
window.addEventListener('scroll', function () {
    if (isNotMobile()) {
        var scrollTop = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;

        var fadingElements = document.getElementsByClassName("fade");
        for (var i = 0; i<fadingElements.length; i++) {
            var fadingElement = fadingElements[i];
            fadingElement.style.opacity = 1 - scrollTop / 250;
        }
    }
});
