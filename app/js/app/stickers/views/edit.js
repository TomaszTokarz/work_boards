var EditStickerLayoutView = Backbone.Marionette.View.extend({

    el: '.js-popup-content',
    template: _.template( $('#new-sticker-template').html()),

    ui: {
        title: '#sticker-title-input',
        pictureSrc: '#input-image',
        link: '#sticker-link-input',
        linkDesc: '#sticker-link-description-input',
        content: '#sticker-description-input',
        addButton: '.js-add-new-sticker',
        fileBtn: '.fileBtn',
        imageMiniature: '.image-miniature'
    },

    events: {
        'click @ui.addButton': 'addSticker',
        'change @ui.pictureSrc': 'fileChanged'
    },

    onRender: function() {
        $(this.ui.content).html(this.model.attributes.content);
        if (this.model.attributes.pictureSrc) {
            $(this.ui.fileBtn).html('Replace a current image');
            $(this.ui.imageMiniature).css({
                display: 'block'
            })
            $(this.ui.imageMiniature).attr('src', this.model.attributes.pictureSrc)
        }
    },

    addSticker: function() {
        if (!this.ui.title.val()) {
            return console.error('Please fill sticker name field!');
            //TODO: change this error for backbone validate method
        } else {
            database.saveSticker({
                title: this.ui.title.val() || '',
                link: this.ui.link.val() || '',
                pictureSrc: this.model.attributes.pictureSrc || '',
                linkDesc: this.ui.linkDesc.val() || '',
                content: this.ui.content.val() || '',
                id: this.model.id,
                boards: this.model.attributes.boards || ''
            }, this.ui.pictureSrc[0].files[0]);
            app.popupView.closePopup();
        }
    },

    fileChanged: function() {
        var miniature = this.ui.imageMiniature;
        var file = new FileReader();
        file.readAsDataURL(this.ui.pictureSrc[0].files[0])
        file.onload = function(e) {
            $(miniature).css({
                display: 'block'
            })
            $(miniature).attr('src', e.target.result)
        }
        $(this.ui.fileBtn).html('file: ' + this.ui.pictureSrc[0].files[0].name)
    }
});
