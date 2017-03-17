var Controller = Marionette.Object.extend({
    initialize: function(){
        //console.log('router controller initialized')
    },
    boardlist: function() {
        app.layout.showPopup('boards');
    },

    boardName: function(name){
        app.layout.renderBoard(name);
        // stickerCollection = stickerCollection.workBoard(name);
        // sticker.collection = stickerCollection
        // sticker.render();
    },

    newSticker: function() {
        app.layout.showPopup('newSticker');
    },

    home: function() {
        //console.log(app);
        //app.layout.renderHome();
    }
});
