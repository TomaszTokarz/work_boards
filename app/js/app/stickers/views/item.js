var StickerLayoutView = Backbone.Marionette.View.extend({
    tagName: 'div',
    className: 'sticker',

    template: _.template( $('#sticker-template').html()),

    ui: {
        deleteBtn: '.js-delete-sticker',
        addToBoardBtn: '.js-add-to-board',
        boardBtn: '.boards-list-item'
    },

    events: {
        'click': 'editSticker',
        'click @ui.deleteBtn': 'deleteSticker',
        'click @ui.addToBoardBtn': 'chooseBoards',
        'click @ui.boardBtn': 'toggleBoard'
    },

    editSticker: function() {
    },

    chooseBoards: function(content) {
        app.popupView.showContent('chooseBoards', this.model.id);
    },

    deleteSticker: function() {
        //console.log(this.$('.js-sticker-id').html())
        var stickerId = this.$('.js-sticker-id').html()
        database.deleteSticker(stickerId);
    }
});
