var EditStickerLayoutView = Backbone.Marionette.View.extend({

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

    events: {
        'click @ui.addButton': 'addSticker'
    },

    onRender: function() {
        $('#sticker-description-input').html(this.model.attributes.content);
    },

    addSticker: function() {
        if (!this.ui.title.val()) {
            return console.error('Please fill sticker name field!');
            //TODO: change this error for backbone validate method
        } else {
            database.saveSticker({
                title: this.ui.title.val() || '',
                link: this.ui.link.val() || '',
                linkDesc: this.ui.linkDesc.val() || '',
                content: this.ui.content.val() || '',
                id: this.model.id
            }, this.ui.pictureSrc[0].files[0]);
            app.popupView.closePopup();
        }
    }
});
