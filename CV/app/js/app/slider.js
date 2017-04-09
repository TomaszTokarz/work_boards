console.log('slider.js');

slider = {

    slide: function(slide) {

        for ( i = 0; i < $('.slider--list-item').length; i++) {
            if (slide == i) {
                $('.slider--list-item').eq(i).addClass('slider--list-item-active');
            } else {
                $('.slider--list-item').eq(i).removeClass('slider--list-item-active');
            };
            $('.slider--item').eq(i).css({
                'right': (slide - i) * 1200
            });
        };
    }
};

$('.slider--list-item').click(function(){
    slider.slide($('.slider--list-item').index(this));
})
