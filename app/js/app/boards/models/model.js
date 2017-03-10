var BoardModel = Backbone.Model.extend({
    defaults: {
        title: '',
        stickers: ''
    },
    initialize: function(){
        console.log('New board added');
    }
});
