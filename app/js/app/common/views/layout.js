var LayoutView = Backbone.Marionette.View.extend({

    el: '.js-layout-container',
    template: _.template( $('#layout-template').html()),

    renderHome: function() {
        app.stickersView = new StickerCollectionView({
            collection: Stickers
        });

        app.stickersView.render();
    }

});
