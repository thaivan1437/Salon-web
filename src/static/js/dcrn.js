import * as $ from 'jquery'

export function menuIcon() {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
};

export function stickyTop() {
    if ($(window).scrollTop()) {
        $('.sticky-top').addClass('black');
    }

    else {
        $('.sticky-top').removeClass('black');
    }
}