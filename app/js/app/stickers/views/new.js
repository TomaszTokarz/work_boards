var NewStickerLayoutView = Backbone.Marionette.View.extend({

    el: '.js-popup-content',
    template: _.template( $('#new-sticker-template').html()),

    ui: {
        title: '#sticker-title-input',
        //pictureSrc: '',
        link: '#sticker-link-input',
        linkDesc: '#sticker-link-description-input',
        content: '#sticker-description-input',
        //tags: '',
        //workBoard: 'main',
        addButton: '.new-sticker--button--add'
    },

    events: {
        'click @ui.addButton': 'addSticker'
    },

    addSticker: function() {
        console.log('Add sticker - clicked');
        var data = {
            title: this.checkUndefined(this.ui.title.val()),
            //pictureSrc: this.checkUndefined(this.ui.pictureSrc.val()),
            link: this.checkUndefined(this.ui.link.val()),
            linkDesc: this.checkUndefined(this.ui.linkDesc.val()),
            content: this.checkUndefined(this.ui.content.val()),
            //tags: this.checkUndefined(this.ui.tags.val()),
            //workBoard: this.checkUndefined(this.ui.workBoard.val())
        };
        database.saveSticker(data);
        app.popupView.closePopup();
    },

    checkUndefined: function(value) {
        if (!value) {
            return null
        } else {
            return value
        }
    }
});
