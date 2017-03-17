var PopupView = Backbone.Marionette.View.extend({
    el: '.js-popup-wrapper',
    template: _.template( $('#popup-template').html()),
    currentView: null,

    ui: {
        closeBtn: '.js-popup-close',
        boardBtn: '.js-board-list-item'
    },

    events: {
        'click @ui.closeBtn': 'closePopup',
        'click @ui.boardBtn': 'changeBoard'
    },

    showContent: function(content, stickerId) {
        switch(content) {

            case 'boards':
                this.render();
                currentView = new BoardsListView();
                currentView.render();
            break;

            case 'chooseBoards':
                this.render();
                currentView = new CheckBoardsListView();
                currentView.stickerId = stickerId;
                currentView.render();
                database.checkChoosenBoards(stickerId);
            break;

            case 'newSticker':
                this.render();
                currentView = new NewStickerLayoutView();
                currentView.render();
            break;

            default:
                return console.error('Wrong popup name!')
        }
    },

    changeBoard: function(ev) {
        Backbone.history.navigate('board/' + ev.target.innerHTML, {trigger: true});
        //TODO: it should be probably changed, this function takes board name from span, not from object
    },

    closePopup: function() {
        this.$el.html('');
        currentView = null;
        //TODO: current view remove/destroy to clear it from RAM
        //currentView.remove();
        Backbone.history.navigate('', {trigger: true});
    }
});
