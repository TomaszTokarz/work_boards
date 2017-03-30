var EditStickerLayoutView = Backbone.Marionette.View.extend({

    el: '.js-popup-content',
    template: _.template( $('#new-sticker-template').html()),

    ui: {
        title: '#sticker-title-input',
        //pictureSrc: '',
        link: '#sticker-link-input',
        linkDesc: '#sticker-link-description-input',
        content: '#sticker-description-input',
        //tags: '',
        addButton: '.js-add-new-sticker'
    },

    events: {
        'click @ui.addButton': 'addSticker'
    },

    onRender: function() {
        $('#sticker-description-input').html(this.model.attributes.content);
    },

    addSticker: function() {
        var data = {
            title: this.ui.title.val() || '',
            //pictureSrc: this.checkUndefined(this.ui.pictureSrc.val()),
            link: this.ui.link.val() || '',
            linkDesc: this.ui.linkDesc.val() || '',
            content: this.ui.content.val() || '',
            //tags: this.checkUndefined(this.ui.tags.val()),
            //workBoard: this.checkUndefined(this.ui.workBoard.val())
            id: this.model.id
        };
        database.saveSticker(data);
        app.popupView.closePopup();
    }
});
