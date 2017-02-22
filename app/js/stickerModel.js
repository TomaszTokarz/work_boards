var Sticker = Backbone.Model.extend( {
    defaults: {
        title: '',
        pictureSrc: '',
        link: '',
        linkDesc: '',
        content: '',
        tags: ''
    },
    initialize: function() {
        console.log('Backbone Model has been initialized')
    }

});

var StickerCollection = Backbone.Collection.extend({
  model: Sticker
});
