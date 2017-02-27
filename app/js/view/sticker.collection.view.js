var StickerCollectionView = Backbone.Marionette.CollectionView.extend( {
    el: '#sticker-container',
    tagName: 'div',

    childView:  StickerLayoutView    
});

var sticker = new StickerCollectionView( {
    collection: Stickers
});
