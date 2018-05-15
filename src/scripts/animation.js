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
        translateY: [-30, 0],
        scale: [0.95, 1],
        duration: 1000,
        offset: '-=1000',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#what-we-do .main-row',
        translateY: [200, 0],
        duration: function (el, i, l) {
            return 1500 + (i * 1500);
        },
        offset: '-=500',
        easing: 'easeInOutQuad',
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
        translateY: [200, 0],
        duration: function (el, i, l) {
            return 1000 + (i * 500);
        },
        offset: '-=1500',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#our-customers img',
        opacity: [0, 1],
        easing: 'linear',
        duration: function (el, i, l) {
            return 500 + (i * 250);
        },
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
        scale: [0.95, 1],
        duration: 1000,
        easing: 'linear',
    })
    .add({
        targets: '#footer',
        translateY: [200, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
    })
    .pause()

let h   = $(document).height()
let pos = 0
let y   = 0

$(window).on('scroll', function () {
    y   = $(this).scrollTop()
    pos = y / h
    timeline.seek(timeline.duration * pos)
})
