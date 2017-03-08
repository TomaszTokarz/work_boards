var StickerLayoutView = Backbone.Marionette.View.extend({
    tagName: 'div',
    className: 'sticker',

    template: _.template( $('#sticker-template').html()),

    events: {
        'click': 'editSticker'
    },

    editSticker: function(){
        console.log(this);
    }
});
