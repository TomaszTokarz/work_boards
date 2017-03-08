var BoardListCollection = Backbone.Collection.extend({
  model: Board

});

boardList = new BoardListCollection;      //all boards
