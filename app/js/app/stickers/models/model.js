var Sticker = Backbone.Model.extend({
    defaults: {
        title: '',
        pictureSrc: '',
        link: '',
        linkDesc: '',
        content: '',
        tags: '',
        boards: []
    },
    
    initialize: function(){
        console.log('New sticker added');
    }
});
