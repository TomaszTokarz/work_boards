var StickerCollection = Backbone.Collection.extend({
  model: Sticker,

  workBoard: function(boardName){
    //console.log('workBoard filter initialized')
    //var boardMatrix = boardList.toJSON()]

    var stickerList;
    boardList.find(function(model){
        if (model.get('title') === boardName){
            return stickerList = model.toJSON().stickers
        };
    })

    var filtered = this.filter(function(Sticker){
        return _.contains(stickerList, Sticker.get('id'));
    });

    return new StickerCollection(filtered);
  }

});

Stickers = new StickerCollection;      //all stickers
