// initialize and configuration for wow js - animations
wow = new WOW({
    animateClass: 'animated',
    offset: 150,
    mobile: false,
    callback: function(box) {
        //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();

// initialize tooltips and popovers
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle=popover]').popover();
})

// js counters
$('#about-counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
    if (visible) {
        $(this).find('.timer').each(function() {
            var $this = $(this);
            $({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        $(this).unbind('inview');
    }
});


//initialize swipers
//home slider
var swiper = new Swiper('.home-slider', {
    pagination: '.home-pagination',
    paginationClickable: true,
    nextButton: '.home-slider-next',
    prevButton: '.home-slider-prev'
});

//about slider
var swiper = new Swiper('.about-slider', {
    pagination: '.about-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    nextButton: '.about-slider-next',
    prevButton: '.about-slider-prev'
});

//testimonials slider
var swiper = new Swiper('.testimonials-slider', {
    pagination: '.testimonials-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 30,
    nextButton: '.testimonials-slider-next',
    prevButton: '.testimonials-slider-prev'
});

//clients slider
var swiper = new Swiper('.clients-slider', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    pagination: '.clients-pagination',
    paginationClickable: true,
    nextButton: '.clients-slider-next',
    prevButton: '.clients-slider-prev',
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});

// featured product list
var swiper = new Swiper('.featured-list-slider', {
    slidesPerView: 3,
    pagination: '.featured-list-pagination',
    paginationClickable: true,
    nextButton: '.featured-list-slider-next',
    prevButton: '.featured-list-slider-prev',
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        420: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});

// product list
var swiper = new Swiper('.product-list-slider', {
    slidesPerView: 3,
    pagination: '.product-list-pagination',
    paginationClickable: true,
    nextButton: '.product-list-slider-next',
    prevButton: '.product-list-slider-prev',
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        420: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});


//post slider
var swiper = new Swiper('.post-slider', {
    pagination: '.post-pagination',
    paginationClickable: true,
    nextButton: '.post-slider-next',
    prevButton: '.post-slider-prev',
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});

//post portfolio slider
var swiper = new Swiper('.post-slider-portfolio', {
    pagination: '.post-portfolio-pagination',
    paginationClickable: true,
    nextButton: '.post-portfolio-slider-next',
    prevButton: '.post-portfolio-slider-prev',
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});

// swiper config for each product slider (listings, product page etc)
var swiper = new Swiper('.product-slider', {          
        spaceBetween: 30
});


$(".product-slider").each(function(index, element){
    var $this = $(this);
    $this.addClass("instance-" + index);
    $this.find(".product-pagination-prev").addClass("btn-prev-" + index);
    $this.find(".product-pagination-next").addClass("btn-next-" + index);
    var swiper = new Swiper(".instance-" + index, {
        // your settings ...
        nextButton: ".btn-next-" + index,
        prevButton: ".btn-prev-" + index,
        spaceBetween: 30
    });
});

// smooth scroll
$(".navbar-nav li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

// Google maps configuration
// set your latitude, longitude and address of any point on Google Maps - http://www.gps-coordinates.net/
// Google maps reference - https://developers.google.com/maps/
// You need API key - https://developers.google.com/maps/documentation/javascript/get-api-key
// place your api key in link to script  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
var map;
var mapAddress = new google.maps.LatLng(35.870959, 14.513122);
var mapCenter = new google.maps.LatLng(48.32954203517551, 14.371673025000064);

function initialize() {

    var roadAtlasStyles = [{
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
            "saturation": -100
        }, {
            "lightness": -8
        }, {
            "gamma": 1.18
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "saturation": -100
        }, {
            "gamma": 1
        }, {
            "lightness": -24
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "administrative",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "transit",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "road",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "administrative",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "landscape",
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "poi",
        "stylers": [{
            "saturation": -100
        }]
    }, {}]


    var mapOptions = {
        zoom: 4,
        scrollwheel: false,
        center: mapCenter,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
        }
    };




    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var styledMapOptions = {

    };

    var marker = new google.maps.Marker({
        position: mapAddress,
        map: map,
    });

    var usRoadMapType = new google.maps.StyledMapType(
        roadAtlasStyles, styledMapOptions);

    map.mapTypes.set('usroadatlas', usRoadMapType);
    map.setMapTypeId('usroadatlas');
}

google.maps.event.addDomListener(window, 'load', initialize);

$(function(){

    $('.remote-modal').on('click', function(e){
        
        e.preventDefault();
        var $destination = $($(this).data('target'));

        $destination.find('.remote-destination')
                .html('<div class="logo-dots">'+
                            '<span class="dot-1"></span>'+
                            '<span class="dot-2"></span>'+
                            '<span class="dot-3"></span>'+
                        '</div>');
        
        $destination.modal();
setTimeout(function(){
        $.get($(this).attr('href'), function(response){

            var postHtml = $(response).find('.remote-content');
            $destination.find('.remote-destination').html(postHtml.html());
        });
    }, 5000)
    });

    $('.filtr-container').filterizr();
})
