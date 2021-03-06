var BoardItemView = Backbone.Marionette.View.extend({
    tagName: 'li',
    className: 'boards-list-item js-board-list-item',
    template: _.template( $('#board-item-template').html()),

    events: {
        'click': 'changeBoard'
    },

    onRender: function() {
        this.$('.js-check-board-counter').html(function() {
            return database.countStickers(this.model.id);
        }.bind(this));
    },

    changeBoard: function() {
        app.popupView.closePopup();
        Backbone.history.navigate('board/' + this.model.attributes.id, {trigger: true});
    }
});
