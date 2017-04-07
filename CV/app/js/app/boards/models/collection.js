var BoardsListCollection = Backbone.Collection.extend({
    model: BoardModel
});

boardList = new BoardsListCollection;
