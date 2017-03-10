var BoardItemView = Backbone.Marionette.View.extend({
    tagName: 'li',
    template: _.template( $('#board-item-template').html())
});
