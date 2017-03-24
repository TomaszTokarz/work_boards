var LayoutView = Backbone.Marionette.View.extend({

    el: '.js-layout-container',
    template: _.template( $('#layout-template').html()),
    ui: {
        newStickerBtn: '.js-add-sticker-btn',
        changeBoardBtn: '.js-change-board-btn',
        homeBtn: '.js-main-page-btn'
    },

    events: {
        'click @ui.newStickerBtn': 'newStickerView',
        'click @ui.changeBoardBtn': 'boardsListView',
        'click @ui.homeBtn': 'renderHome'
    },

    initialize: function() {
        app.popupView = new PopupView();
    },

    showPopup: function(content) {
        app.popupView.showContent(content);
    },

    renderHome: function() {
        this.clearView();
        app.stickersView = new StickerCollectionView({
            collection: stickerCollection
        });
        app.stickersView.render();
        Backbone.history.navigate('', {trigger: true});
    },

    renderBoard: function(id) {
        this.clearView();
        stickerCollectionFiltered = stickerCollection.workBoard(id);
        app.stickersView = new StickerCollectionView({
            collection: stickerCollectionFiltered
        });
        app.stickersView.render();
    },

    newStickerView: function() {
        Backbone.history.navigate('/newsticker', {trigger: true});
    },

    boardsListView: function() {
        Backbone.history.navigate('/boards', {trigger: true});
    },

    clearView: function() {
        if (app.stickersView) {
            app.stickersView.$el.html('');
        };
    }

});
