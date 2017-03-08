var BoardListView = Backbone.Marionette.View.extend({

    tagName: 'ul',
    className: 'change-board--available-boards--list',
    template: _.template( $('#board-list--template').html())  

});
