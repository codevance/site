let anime = require('animejs');

var timeline = anime.timeline();

timeline
    .add({
        targets: 'nav.fixed-top',
        backgroundColor: '#005b7f',
        duration: 1000,
        easing: 'linear',
    })
    .add({
        targets: '.hero .container',
        translateY: 200,
        scale: 0.95,
        opacity: 0,
        duration: 1000,
        offset: '-=1000',
        easing: 'linear',
    })
    .add({
        targets: '.hero-img',
        translateY: 150,
        duration: 1000,
        offset: '-=1000',
        easing: 'linear',
    })
    .add({
        targets: '.wwd-header',
        translateY: [150, 0],
        duration: 1000,
        offset: '-=1000',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#what-we-do .main-row',
        translateY: [300, 0],
        duration: function (el, i, l) {
            return 1500 + (i * 1500);
        },
        offset: '-=1000',
        easing: 'linear',
    })
    .add({
        targets: '.hwd-header',
        translateY: [50, 0],
        opacity: [0.8, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        offset: '-=1000',
    })
    .add({
        targets: '#how-we-do .block',
        translateY: [100, 0],
        duration: function (el, i, l) {
            return 1000 + (i * 500);
        },
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#our-cases .cases-header',
        translateY: [50, 0],
        opacity: [0.8, 1],
        duration: 1000,
        offset: '-=3000',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#our-cases .block',
        translateY: [200, 0],
        duration: function (el, i, l) {
            return 1000 + (i * 1000);
        },
        offset: '-=3000',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#testimonials',
        scale: [0.9, 1],
        duration: 1000,
        easing: 'linear',
    })
    .add({
        targets: '#talk-to-us .ttu-title',
        translateY: [50, 0],
        opacity: [0.8, 1],
        duration: 1000,
        offset: '-=3000',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#talk-to-us .social a',
        translateY: [200, 0],
        opacity: [0, 1],
        duration: function (el, i, l) {
            return 1000 + (i * 1000);
        },
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#footer',
        translateY: [200, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#footer ul li',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: function (el, i, l) {
            return 200 + (i * 200);
        },
        offset: '-=1000',
        easing: 'easeInOutQuad',
    })
    .pause()

// Scroll timeline
let h   = $(document).height()
let pos = 0
let y   = 0

$(window).on('scroll', function () {
    y   = $(this).scrollTop()
    pos = y / h
    timeline.seek(timeline.duration * pos)
})
