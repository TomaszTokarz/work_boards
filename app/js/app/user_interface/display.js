$(function() {
    $('.active--popup').hover( function() {
        activePopupFlag = true;
    }, function() {
        activePopupFlag = false;
    });

    $('.new-sticker--button--add').click( function(event) {
        event.preventDefault();
    })
});


var popups = {
    close: function() {
        $('.popup').css( {
            'display': 'none'
        });
    }
};
