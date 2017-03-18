var BoardModel = Backbone.Model.extend({
    defaults: {
        title: ''
    },
    initialize: function(){
        console.log('New board added');
    }
});
