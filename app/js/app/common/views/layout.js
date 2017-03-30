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
        this.loadStickersList(stickerCollection);
        Backbone.history.navigate('', {trigger: true});
    },

    renderBoard: function(id) {
        this.loadStickersList(stickerCollection.workBoard(id));
    },

    newStickerView: function() {
        Backbone.history.navigate('/newsticker', {trigger: true});
    },

    boardsListView: function() {
        Backbone.history.navigate('/boards', {trigger: true});
    },

    loadStickersList: function(collection) {
        if (app.stickersView) {
            app.stickersView.collection = collection;
        } else {
            app.stickersView = new StickerCollectionView({
                collection: collection
            });
        }
        app.stickersView.render();
    }

});
