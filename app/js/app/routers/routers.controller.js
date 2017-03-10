var Controller = Marionette.Object.extend({
    initialize: function(){
        //console.log('router controller initialized')
    },
    boardlist: function() {
        //console.log('router boardlist activated')
        // popups.close();
        // $('.change-board').css( {
        //     'display': 'flex'
        // });
        app.layout.showPopup('chuj');
    },

    boardName: function(name){
        Stickers = Stickers.workBoard(name);
        sticker.collection = Stickers
        console.log(sticker);
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
        //console.log(app);
        //app.layout.renderHome();
    }
});
