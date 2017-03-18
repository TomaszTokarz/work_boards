var CheckBoardsItemView = Backbone.Marionette.View.extend({
    tagName: 'li',
    className: 'boards-list-item js-check-boards-list-item',
    template: _.template( $('#check-boards-list-template').html()),

    events: {
        'click': 'toggleBoard'
    },

    initialize: function() {
        if ($.inArray(this.model.id, this.options.sticker.model.attributes.boards) !== -1) {
            this.$el.addClass('activeBoard');
        }
    },

    toggleBoard: function() {
        this.$el.toggleClass('activeBoard');
        database.toggleBoard(this.options.sticker, this.model.id);
    },
});
