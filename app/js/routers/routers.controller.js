var Controller = Marionette.Object.extend({
    initialize: function(){
        //console.log('router controller initialized')
    },
    boardlist: function() {
        //console.log('router boardlist activated')
        popups.close();
        $('.change-board').css( {
            'display': 'flex'
        });
    },
    boardName: function(name){
        Stickers = Stickers.workBoard(name);
        console.log(Stickers)
        sticker.render();
    },
    newSticker: function() {
        console.log('router newsticker activated')
        popups.close();
        $('.new-sticker').css( {
            'display': 'flex'
        });
    },
    home: function() {
        popups.close();
    }
});
