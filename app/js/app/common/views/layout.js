var LayoutView = Backbone.Marionette.View.extend({

    el: '.js-layout-container',
    template: _.template( $('#layout-template').html()),

    initialize: function() {
        app.popupView = new PopupView();
    },

    showPopup: function(content) {
        app.popupView.showContent(content);
    },

    renderHome: function() {
        app.stickersView = new StickerCollectionView({
            collection: Stickers
        });

        app.stickersView.render();
    }



});
