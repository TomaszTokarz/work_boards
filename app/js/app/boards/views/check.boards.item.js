var CheckBoardsItemView = Backbone.Marionette.View.extend({
    tagName: 'li',
    className: 'boards-list-item js-check-boards-list-item',
    template: _.template( $('#check-boards-list-template').html())
});
