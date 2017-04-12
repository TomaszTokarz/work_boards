var StickerCollection = Backbone.Collection.extend({
  model: Sticker,

  workBoard: function(id) {
      var filtered = this.filter(function(sticker) {
          return _.contains(sticker.attributes.boards, parseInt(id));
      });
      return new StickerCollection(filtered);
  },

  searchStickers: function(phrase) {
      var filtered = this.filter(function(sticker) {
          phrase = phrase.toUpperCase();
          var attributes = {
              title: sticker.attributes.title.toUpperCase(),
              content: sticker.attributes.content.toUpperCase()
          };
          return attributes.title.includes(phrase) || attributes.content.includes(phrase);
      });
      return new StickerCollection(filtered);
  }

});

stickerCollection = new StickerCollection();
