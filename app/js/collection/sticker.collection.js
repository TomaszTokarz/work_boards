var StickerCollection = Backbone.Collection.extend({
  model: Sticker,

  workBoard: function(boardName){
     // filter to show items on board. //TODO
  }

});

Stickers = new StickerCollection;      //all stickers
