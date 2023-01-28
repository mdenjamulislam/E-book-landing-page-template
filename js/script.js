/*-------------------------------------------------

    Template name: BookMart E-book Landing Page Template
    Template URI: https://ebookmart.netlify.app/
    Author Name: Enjamul Islam
    Author URI: https://enjamul.me
    Description: Our e-book landing page template is designed to help authors and publishers promote and sell their digital books with a clean, modern, and optimized design that converts visitors into customers. The template includes a prominent call-to-action button, information about the book and author, and space for reviews and testimonials. It's fully customizable and easy to use.
    Version: 1.0

-------------------------------------------------

    JS Index
=======================

    1.0. Testimonial Slider

-------------------------------------------------*/

"use strict";

/*================================================
    1.0. Testimonial Slider
================================================*/

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
