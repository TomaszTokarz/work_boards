var NewStickerLayoutView = Backbone.Marionette.View.extend( {

    el: '#new-sticker--form',

    template: false,

    ui: {
        title: '#sticker-title-input',
        pictureSrc: '',
        link: '#sticker-link-input',
        linkDesc: '#sticker-link-description-input',
        content: '#sticker-description-input',
        tags: '',
        workBoard: 'main',
        addButton: '.new-sticker--button--add'
    },

    events: {
        'click @ui.addButton': 'addSticker'
    },

    addSticker: function() {
        console.log('add sticker - button has been clicked');
        Stickers.add({
            title: this.ui.title.val(),
            pictureSrc: this.ui.pictureSrc.val(),
            link: this.ui.link.val(),
            linkDesc: this.ui.linkDesc.val(),
            content: this.ui.content.val(),
            tags: this.ui.tags.val(),
            workBoard: this.ui.workBoard.val()
        })
        sticker.render()
    },

    editSticker: function() {
        console.log(this);
    }
});
