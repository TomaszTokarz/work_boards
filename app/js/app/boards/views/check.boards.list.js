var CheckBoardsListView = Backbone.Marionette.CompositeView.extend( {
    el: '.js-popup-content',
    template: _.template( $('#boards-list-template').html()),
    childViewContainer: '.js-boards-list',
    childView: CheckBoardsItemView,
    collection: boardList,

    ui: {
        boardBtn: '.js-check-board-title',
        newBoardBtn: '.js-add-board-btn',
        title: '.js-new-board-name'
    },

    events: {
        'click @ui.boardBtn': 'toggleBoard',
        'click @ui.newBoardBtn': 'addNewBoard'
    },

    addNewBoard: function(){
        //FIXME: this function is doubled in list.js (boards)
        if (!this.ui.title.val()) {
            return console.error('Please fill board name field!');
            //TODO: change this error for backbone validate method
        } else {
            var data = {
                title: this.ui.title.val()
                //NOTE: it is just an initial sticker-array, it should be changed soon
            };
            database.saveBoard(data);
        }
    }
});
