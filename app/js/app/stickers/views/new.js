var NewStickerLayoutView = Backbone.Marionette.View.extend({

    el: '.js-popup-content',
    template: _.template( $('#new-sticker-template').html()),

    ui: {
        title: '#sticker-title-input',
        pictureSrc: '#fileupload',
        link: '#sticker-link-input',
        linkDesc: '#sticker-link-description-input',
        content: '#sticker-description-input',
        addButton: '.js-add-new-sticker'
    },

    initialize: function() {

    },

    events: {
        'click @ui.addButton': 'addSticker'
    },

    addSticker: function() {
        database.saveSticker({
            title: this.ui.title.val() || '',
            link: this.ui.link.val() || '',
            linkDesc: this.ui.linkDesc.val() || '',
            content: this.ui.content.val() || '',
        }, this.ui.pictureSrc[0].files[0]);
        app.popupView.closePopup();
    }
});
