var StickerCollection = Backbone.Collection.extend({
  model: Sticker,

  workBoard: function(id) {
      var filtered = this.filter(function(sticker){
          return _.contains(sticker.attributes.boards, parseInt(id));
      });
      return new StickerCollection(filtered);
  }
});

stickerCollection = new StickerCollection;      //all stickers
