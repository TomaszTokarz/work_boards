var PopupView = Backbone.Marionette.View.extend({
    el: '.js-popup-wrapper',
    template: _.template( $('#popup-template').html()),
    currentView: null,

    ui: {
        closeBtn: '.js-popup-close'
    },

    events: {
        'click @ui.closeBtn': 'closePopup'
    },

    showContent: function(content, sticker) {
        this.render();

        switch(content) {
            case 'boards':
                this.currentView = new BoardsListView();
            break;

            case 'chooseBoards':
                this.currentView = new CheckBoardsListView({
                    childViewOptions: {
                        sticker: sticker
                    }
                });

                //database.checkChoosenBoards(stickerId);
            break;

            case 'newSticker':
                this.currentView = new NewStickerLayoutView();
            break;

            default:
                return console.error('Wrong popup name!')
        }

        this.currentView.render();
    },

    closePopup: function() {
        this.$el.html('');
        this.currentView.destroy();
        this.currentView = null;
        Backbone.history.navigate('', {trigger: true});
    }
});
