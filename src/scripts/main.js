import './jquery-global';
import './animation';
import 'bootstrap';
import 'owl.carousel';

$(document).ready(function(){

    $('#footer-gap').height($('#footer').outerHeight())

    $('.carousel-image').owlCarousel({
        responsive:{
            0:{
                items: 1,
                loop: true,
                dots: false
            }
        }
    });
    $('.carousel-info').owlCarousel({
        responsive:{
            0:{
                items: 1,
                nav: true,
                loop: true,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']
            }
        }
    });
});
