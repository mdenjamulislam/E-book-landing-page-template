// Testimonial Slider

"use strict";

var slider = tns({
    container: '.my-slider',
    items: 3,
    mouseDrag: true,
    autoplay: true, 
    autoplayButton: false,
    autoplayButtonOutput: false,
    controlsContainer: '#custom-control',
    autoplayTimeout: 4000,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        },
        1440: {
            items: 3
        }
    }
});