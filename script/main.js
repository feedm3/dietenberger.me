/**
 * @author Fabian Dietenberger
 */

'use strict';

// floating out elements on page scroll
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;

    var fadingElements = document.getElementsByClassName("fade");
    for (var i = 0; i<fadingElements.length; i++) {
        var fadingElement = fadingElements[i];
        fadingElement.style.opacity = 1 - scrollTop / 250;
    }
});
 
 
// generic google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-64173212-2', 'auto');
ga('send', 'pageview');
