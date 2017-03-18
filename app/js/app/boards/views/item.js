var BoardItemView = Backbone.Marionette.View.extend({
    tagName: 'li',
    className: 'boards-list-item js-board-list-item',
    template: _.template( $('#board-item-template').html()),
    
    events: {
        'click': 'changeBoard'
    },

    changeBoard: function() {
        Backbone.history.navigate('board/' + this.model.attributes.id, {trigger: true});
    }
});
