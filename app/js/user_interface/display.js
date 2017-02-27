$(function() {
    var activePopupFlag = false;

    console.log('User interface module is ready for action');

    $('.add--new-sticker-btn').click( function() {
        popups.close();
        $('.new-sticker').css( {
            'display': 'flex'
        });
    });

    $('.change--board-btn').click( function() {
        popups.close();
        $('.change-board').css( {
            'display': 'flex'
        });
    });


    $('.active--popup').hover( function() {
        activePopupFlag = true;
    }, function() {
        activePopupFlag = false;
    });

    $('.popup').click( function() {
        if ( !activePopupFlag ) {
            popups.close();
        };
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
