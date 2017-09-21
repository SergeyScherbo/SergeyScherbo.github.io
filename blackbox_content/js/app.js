// if ($('.cube-outer').length > 0) {
//     var $cubeOuter = $('.cube-outer');
//
//     $cubeOuter.bind('mousedown', function() {
//         $cubeOuter.bind('mousemove', function(e) {
//             $('.cube').css({
//                 'transform':'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)'
//             })
//         });
//
//         $cubeOuter.bind('mouseup', function() {
//             $cubeOuter.unbind('mousemove');
//         })
//     })
// }

if ($('.plus').length > 0) {

    $('.services__el-toggle').click(function() {
        if ($(this).parent().hasClass('services__el_show')) {
            $(this).next().slideToggle(500);
            $(this).find('.plus').removeClass('plus_minus');
            $(this).parent().removeClass('services__el_show');
        } else {
            $(this).parent().siblings().removeClass('services__el_show');
            $(this).parent().siblings().find('.services__el-content').slideUp(500);
            $(this).parent().siblings().find('.plus').removeClass('plus_minus');
            $(this).find('.plus').toggleClass('plus_minus');

            $(this).parent().addClass('services__el_show')
            $(this).next().slideToggle(500);
        }
    })
}

if ($('.gallery').length > 0) {
    $('.gallery__el').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            preload: [0, 8]
        }
    });
}

$('.search__btn, .mobile__btn').click(function() {
    $('.main-modal').toggleClass('main-modal_show');
});

$('.mobile__btn').click(function() {
    $(this).toggleClass('mobile__btn_active');

    if ($(this).hasClass('mobile__btn_active')) {
        $('body').css('overflow-y', 'hidden');
    } else {
        $('body').css('overflow-y', 'scroll');
    }
});

$('.search__btn').click(function() {
    $(this).toggleClass('search__btn_active');

    if ($(this).hasClass('search__btn_active')) {
        $('body').css('overflow-y', 'hidden');
    } else {
        $('body').css('overflow-y', 'scroll');
    }
});

function initMap() {
    var location = {lat: 53.204889, lng: 50.167324};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

$('.animsition').animsition({
    inClass: 'zoom-in-sm',
    outClass: 'zoom-out-sm',
    inDuration: 1500,
    outDuration: 1500,
    linkElement: '.animsition-link',
})
