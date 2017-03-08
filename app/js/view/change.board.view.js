var ChangeBoardLayoutView = Backbone.Marionette.View.extend({

    el: '.change-board',
    template: false,

    ui: {
        closePopupField: '.closePopup',
        newBoardBtn: '#add--new-board-btn',
        title: '#new-board-name',
        boardBtn: '.change-board--available-boards--list'
    },

    events: {
        'click @ui.closePopupField': 'closePopup',
        'click @ui.newBoardBtn': 'addNewBoard',
        'click @ui.boardBtn': 'activeBoard'
    },

    closePopup: function(){
        if ( !activePopupFlag ) {
            Backbone.history.navigate('', {trigger: true});
        };
    },
    addNewBoard: function(){
        console.log('new board btn clicked')
        var data = {
            title: this.ui.title.val(),
            stickers: [1,3,5,7]
        }
        database.saveBoard(data);
    },
    activeBoard: function(board){
        Backbone.history.navigate('board/' + board.target.innerHTML, {trigger: true});
    }
});
