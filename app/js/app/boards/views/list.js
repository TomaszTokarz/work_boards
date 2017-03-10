var BoardsListView = Backbone.Marionette.CompositeView.extend( {
    el: '.js-popup-content',
    template: _.template( $('#boards-list-template').html()),

    childViewContainer: '.js-boards-list',
    childView: BoardItemView
});

// var board = new BoardListCollectionView( {
//     collection: boardList
// });
