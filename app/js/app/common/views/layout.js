var LayoutView = Backbone.Marionette.View.extend({

    el: '.js-layout-container',
    template: _.template( $('#layout-template').html()),
    ui: {
        newStickerBtn: '.js-add-sticker-btn',
        changeBoardBtn: '.js-change-board-btn'
    },

    events: {
        'click @ui.newStickerBtn': 'newStickerView',
        'click @ui.changeBoardBtn': 'boardsListView'
    },

    initialize: function() {
        app.popupView = new PopupView();
    },

    showPopup: function(content) {
        app.popupView.showContent(content);
    },

    renderHome: function() {
        app.stickersView = new StickerCollectionView({
            collection: stickerCollection
        });
        app.stickersView.render();
    },

    renderBoard: function() {
        //console.log(stickerCollection)
        stickerCollection = stickerCollection.workBoard(name);
        app.stickersView = new StickerCollectionView({
            collection: stickerCollection
        });
        app.stickersView.render();
    },

    newStickerView: function() {
        Backbone.history.navigate('/newsticker', {trigger: true});
    },

    boardsListView: function() {
        Backbone.history.navigate('/boards', {trigger: true});
    }

});
