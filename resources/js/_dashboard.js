import $ from 'jquery';

$(document).ready(function() {
    if ($(window).width() <= 992) {
        $('.dashboard').addClass('sidebar-collapse');
    }else{
        $('.dashboard').removeClass('sidebar-collapse');
    }

    $('.sideMenuToggler').on('click', function() {
        if ($(window).width() <= 992) {
            if ($('.dashboard').hasClass('sidebar-collapse')) {
                $('.dashboard').addClass('sidebar-open');
                $('.dashboard').removeClass('sidebar-collapse');
            }
        }else{
            if ($('.dashboard').hasClass('sidebar-open')) {
                $('.dashboard').removeClass('sidebar-open');
            }
            $('.dashboard').toggleClass('sidebar-collapse');
        }
    });

    $('.sidebar-overlay').on('click', function() {
        if ($('.dashboard').hasClass('sidebar-open')) {
            $('.dashboard').addClass('sidebar-collapse');
            $('.dashboard').removeClass('sidebar-open');
        }
    });

    $('.has-list').on('click', function() {
        $('.has-list').toggleClass('open');
    });
});
