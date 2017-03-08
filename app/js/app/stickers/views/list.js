var StickerCollectionView = Backbone.Marionette.CollectionView.extend( {
    el: '.js-sticker-container',
    tagName: 'div',

    childView:  StickerLayoutView,
    initialize: function() {
        console.log(this.collection);
    }
});

//Sticker should be names stickerCollectionView - same way as constructor but starting from lowercase
// var sticker = new StickerCollectionView( {
//     collection: Stickers
// });
