var StickerLayoutView = Backbone.Marionette.View.extend({
    tagName: 'div',
    className: 'sticker',

    template: _.template( $('#sticker-template').html()),

    ui: {
        editBtn: '.js-edit-sticker',
        deleteBtn: '.js-delete-sticker',
        addToBoardBtn: '.js-add-to-board'
    },

    events: {
        'click @ui.editBtn': 'editSticker',
        'click @ui.deleteBtn': 'deleteSticker',
        'click @ui.addToBoardBtn': 'chooseBoards'
    },

    onDomRefresh: function() {
        setTimeout(function() {
            this.$el.addClass('animated');
        }.bind(this), 100 * this._index);
    },

    editSticker: function() {
        app.popupView.showContent('editSticker', this);
    },

    chooseBoards: function() {
        app.popupView.showContent('chooseBoards', this);
    },

    deleteSticker: function() {
        database.deleteSticker(this.model.id);
    }
});
