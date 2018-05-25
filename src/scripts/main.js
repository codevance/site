import './jquery-global';
import './animation';
import 'bootstrap';
import 'owl.carousel';

function goToByScroll(id) {
    // Remove "link" from the ID
    id = id.replace('link', '')
    // Scroll
    $('html, body').animate({
        scrollTop: $(id).offset().top - 80
    }, 'slow')
}

$(document).ready(function(){

    $('nav.navbar a').click(function (e) {
        e.preventDefault()
        let sectionID = $(this).attr('href')
        goToByScroll(sectionID)
    })

    $('#footer-gap').height($('#footer').outerHeight())

    var $carouselImages = $('.carousel-image');
    $carouselImages.owlCarousel({
        responsive:{
            0: {
                items: 1,
                loop: true,
                dots: false
            }
        }
    });

    var $carouselInfos = $('.carousel-info');
    $carouselInfos.owlCarousel({
        responsive:{
            0: {
                items: 1,
                nav: true,
                loop: true,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']
            }
        }
    });

    $carouselInfos.on('changed.owl.carousel', function (event) {
        $carouselImages.trigger('to.owl.carousel', event.item.index)
    });

    $carouselImages.on('changed.owl.carousel', function (event) {
        $carouselInfos.trigger('to.owl.carousel', event.item.index)
    });

    // customers
    var $carouselCustomers = $('.oc-items');
    $carouselCustomers.owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        autoWidth: true,
        margin: 30,
        autoplay: true,
        center: true,
    });
});
