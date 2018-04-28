let anime = require('animejs');

var timeline = anime.timeline();

timeline
    .add({
        targets: 'nav.fixed-top',
        backgroundColor: '#000',
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
        translateY: [-50, 0],
        scale: [0.9, 1],
        duration: 500,
        offset: '-=500',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#what-we-do .block',
        translateY: [200, 0],
        duration: function (el, i, l) {
            return 1000 + (i * 1000);
        },
        offset: '-=500',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '.hwd-header',
        translateY: [50, 0],
        opacity: [0.8, 1],
        duration: 500,
        offset: '-=3500',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#how-we-do .block',
        translateY: [200, 0],
        duration: function (el, i, l) {
            return 1000 + (i * 300);
        },
        offset: '-=4000',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#our-customers img',
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear',
        offset: '-=3000',
        duration: function (el, i, l) {
            return 300 + (i * 300);
        },
    })
    .add({
        targets: '#our-cases .cases-header',
        translateY: [50, 0],
        opacity: [0.8, 1],
        duration: 1000,
        offset: '-=2500',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#our-cases .block',
        translateY: [200, 0],
        duration: function (el, i, l) {
            return 1000 + (i * 300);
        },
        offset: '-=4000',
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '#testimonials',
        opacity: [0, 1],
        duration: 1000,
        offset: '-=3000',
        easing: 'linear',
    })
    .add({
        targets: '#footer',
        translateY: [200, 0],
        duration: 1000,
        offset: '+=1000',
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
