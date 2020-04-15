$('.another-owl-carousel').owlCarousel({
    // loop:true,
    margin:10,
    nav:false,
    // callbacks: false,
    rewind: true,
    autoplay: 100,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$('.first-owl-carousel').owlCarousel({
// $('.test').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: 100,
    responsive:{
        0:{
            items:0
        },
        500:{
            items:0
        },
        1000:{
            items:1
        }
    }
})