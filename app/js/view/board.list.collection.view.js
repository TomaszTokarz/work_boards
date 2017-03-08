var BoardListCollectionView = Backbone.Marionette.CollectionView.extend( {
    el: '#change-board--available-boards',
    tagName: 'ul',

    childView:  BoardListView
});

var board = new BoardListCollectionView( {
    collection: boardList
});
