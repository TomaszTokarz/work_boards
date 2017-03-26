var StickerCollectionView = Backbone.Marionette.CollectionView.extend( {
    el: '.js-sticker-container',
    tagName: 'div',

    childView:  StickerLayoutView,
    initialize: function() {
    }
});
