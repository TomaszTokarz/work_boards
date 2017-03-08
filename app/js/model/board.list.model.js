var Board = Backbone.Model.extend({
    defaults: {
        title: '',
        stickers: ''
    },
    initialize: function(){
        console.log('New board added');
    }
});
