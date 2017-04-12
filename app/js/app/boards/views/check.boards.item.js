var CheckBoardsItemView = Backbone.Marionette.View.extend({
    tagName: 'li',
    className: 'boards-list-item js-check-boards-list-item',
    template: _.template( $('#board-item-template').html()),

    events: {
        'click': 'toggleBoard'
    },

    onRender: function() {
        this.$('.js-check-board-counter').html(function() {
            return database.countStickers(this.model.id);
        }.bind(this));
    },

    initialize: function() {
        if ($.inArray(this.model.id, this.options.sticker.model.attributes.boards) !== -1) {
            this.$el.addClass('activeBoard');
        } else {
            this.$el.removeClass('activeBoard');
        };
    },

    toggleBoard: function() {
        this.$el.toggleClass('activeBoard');
        database.toggleBoard(this.options.sticker, this.model.id);

        this.$('.js-check-board-counter').html(function() {
            return database.countStickers(this.model.id);
        }.bind(this));
    },
});
