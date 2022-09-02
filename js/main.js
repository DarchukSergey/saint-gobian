$(function () {
    $('.bascket__item-delete').on('click', function () {
        $(this).parent().toggleClass('delete');
    });

    $('.bascket__minus-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
        $input.val(value);
    });

    $('.bascket__plus-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }

        $input.val(value);
    });

    $('.bascket, .bascket__head-btn ').on('click', function () {
        $('.bascket__container').toggleClass('bascket--active');
        $(this).next().slideToggle();
    });

    $('.slider__wrapper').slick({
        arrows: false,
        dots: true,
        infinite: true,
    });


    const slider = $('.products-slider__items').slick({
        dots: false,
        slidesToShow: 6,
        infinite: true,
        prevArrow: '<button id="prev" type="button" class="banner-section__slider slider-btnprev"><img src="../../images/slider-arrow.svg"></img></button>',
        nextArrow: '<button id="next" type="button" class="banner-section__slider slider-btnnext"><img src="../../images/slider-arrow.svg"></img></button>'
    });


    $('.tab').on('click', function (e) {
        e.preventDefault();
        const id = $(this).attr('href');

        $('.tab').removeClass('tab--active');
        $('.tabs-content').removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $(id).addClass('tabs-content--active');

        slider.each((i, e) => {
            if ($(e).hasClass('tabs-content--active')) $(e).slick('refresh');
        });

    });


    $('.spotlight-slider__items').slick({
        dots: false,
        slidesToShow: 5,
        infinite: true,
        prevArrow: '<button id="prev" type="button" class="spotlight__slider spotlight__slider-btnprev"><img src="../../../images/slider-arrow.svg"></img></button>',
        nextArrow: '<button id="next" type="button" class="spotlight__slider spotlight__slider-btnnext"><img src="../../../images/slider-arrow.svg"></img></button>'
    });

    $('.header-bottom__btn-img').on('click', function () {
        $('.header-bottom__input').slideDown().toggleClass('bottom-item--active');
        
    });

   


    new SimpleBar(document.getElementById('bascket__items'), {
        autoHide: false
    });

    $('.catalog-filter__select').styler();
    $('.mode-item-lang ').styler();
    
  
    //Range Slider
    let rangeSlider = document.getElementById('range-slider');

    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            // стартовые значения полосы выбора
            start: [9900, 9999950],
            connect: true,
            // Шаг 
            step: 100,
            // минимальное и максимальные значения в input
            range: {
                'min': [9900],
                'max': [19999900]
            }
        });
      

        const input0 = document.getElementById('input-slider0');
        const input1 = document.getElementById('input-slider1');
        const inputs = [input0, input1];

        rangeSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;

            rangeSlider.noUiSlider.set(arr);
        };

        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }

    $('#toggle-more').click(function () {
        let elem = $("#toggle-more").text();
        if (elem == "Read More") {
            $(this).text("Read Less").addClass('toggle-active');
            $("#text").slideDown();
        } else {
            $(this).text("Read More").removeClass('toggle-active');
            $("#text").slideUp();
        }
    });


});