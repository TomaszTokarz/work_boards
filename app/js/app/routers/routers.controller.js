var Controller = Marionette.Object.extend({
    
    boardlist: function() {
        app.layout.showPopup('boards');
    },

    boardId: function(id) {
        app.layout.renderBoard(id);
    },

    newSticker: function() {
        app.layout.showPopup('newSticker');
    },

    home: function() {
        console.log('home route')
        if (app.stickersView) {
            app.stickersView.$el.html('');
        };
        app.layout.renderHome();
    }
});
