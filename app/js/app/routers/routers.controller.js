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

    editSticker: function(id) {
    },

    chooseBoards: function(id) {
    },

    home: function() {
        app.layout.renderHome();
    }
});
