$(document).ready(function () {
    $('.header-content__burger').click(function (e) {
        $('.header-content__burger,.header-content__nav').toggleClass('active')
        $('body').toggleClass('lock')
    })
})

$('.header-content__nav-list__item').click(function(event) {
    $('.header-content__burger,.header-content__nav').removeClass('active')
    $('body').removeClass('lock')
})