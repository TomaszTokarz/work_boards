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

    onDomRefresh: function() {
        setTimeout(function(){
            this.$el.children().addClass('popup-active');
        }.bind(this), 100);
    },

    showContent: function(content, sticker) {
        this.render();

        switch(content) {
            case 'boards':
                this.currentView = new BoardsListView();
            break;

            case 'chooseBoards':
                if (!sticker.model.id && sticker.model.id != '0') {
                    console.error('There is no defined sticker at the choose board module');
                    debugger;
                };

                this.currentView = new CheckBoardsListView({
                    model: sticker.model,
                    childViewOptions: {
                        sticker: sticker
                    }
                });
            break;

            case 'newSticker':
                this.currentView = new NewStickerLayoutView();
            break;

            case 'editSticker':
                if (!sticker.model.id && sticker.model.id != '0') {
                    console.error('There is no defined sticker at the edit sticker module');
                    debugger;
                };

                this.currentView = new EditStickerLayoutView({
                    model: sticker.model
                });
            break;

            case 'loading':
                this.currentView = new LoadingView();
            break;

            default:
                return console.error('Wrong popup name!')
        };
        this.currentView.render();
    },

    closePopup: function() {        
        this.$el.children().addClass('popup-close');
        Backbone.history.navigate(app.lastRoutes[0], {trigger: true});
        setTimeout(function(){
            this.$el.html('');
            this.currentView.destroy();
        }.bind(this), 500);

    }
});
