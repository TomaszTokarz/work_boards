var Sticker = Backbone.Model.extend({
    defaults: {
        title: '',
        pictureSrc: '',
        link: '',
        linkDesc: '',
        content: '',
        tags: '',
        workBoard: 'main'
    },
    initialize: function(){
        console.log('New sticker added');
    }
});
