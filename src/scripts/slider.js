import 'owl.carousel'

$('#slider').each(function () {

    // Создаем карусель
    const owl = $(this).find('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dotClass: 'slider-nav-container__point',
        dotsClass: 'slider-nav-container',

    })

    // При клике по кнопке Влево
    $(this).find('.slider-btn-container__prev').on('click', function () {
        // Перематываем карусель назад
        owl.trigger('prev.owl.carousel')
    })

    // При клике по кнопке Вправо
    $(this).find('.slider-btn-container__next').on('click', function () {
        // Перематываем карусель вперед
        owl.trigger('next.owl.carousel')
    })
})

$('#customers-slider').each(function () {

    const owl = $(this).find('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dotClass: 'customers-nav-container__point',
        dotsClass: 'customers-nav-container',
    })

    $(this).find('.customers-slider-btns__prev').on('click', function () {
        owl.trigger('prev.owl.carousel')
    })

    $(this).find('.customers-slider-btns__next').on('click', function () {
        owl.trigger('next.owl.carousel')
    })
})

$('#reviews-slider').each(function () {

    const owl = $(this).find('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dotClass: 'reviews-nav-container__point',
        dotsClass: 'reviews-nav-container',
    })

    $(this).find('.reviews-slider-btns__prev').on('click', function () {
        owl.trigger('prev.owl.carousel')
    })

    $(this).find('.reviews-slider-btns__next').on('click', function () {
        owl.trigger('next.owl.carousel')
    })
})