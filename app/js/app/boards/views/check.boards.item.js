var CheckBoardsItemView = Backbone.Marionette.View.extend({
    tagName: 'li',
    className: 'boards-list-item js-check-boards-list-item',
    template: _.template( $('#board-item-template').html()),

    events: {
        'click': 'toggleBoard'
    },

    initialize: function() {
        if ($.inArray(this.model.id, this.options.sticker.model.attributes.boards) !== -1) {
            this.$el.addClass('activeBoard');
        } else {
            this.$el.removeClass('activeBoard');
        };
        $('.js-sticker-id').html('('+ this.options.sticker.model.attributes.id +') '+this.options.sticker.model.attributes.title)
    },

    toggleBoard: function() {
        this.$el.toggleClass('activeBoard');
        database.toggleBoard(this.options.sticker, this.model.id);
    },
});
