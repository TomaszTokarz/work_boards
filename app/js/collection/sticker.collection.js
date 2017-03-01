var StickerCollection = Backbone.Collection.extend({
  model: Sticker,

  //localStorage: new Backbone.LocalStorage('stickers-collection'), //TODO: local storage

  workBoard: function(boardName){
     // filter to show items on board. //TODO
  }

});

Stickers = new StickerCollection;      //all stickers
