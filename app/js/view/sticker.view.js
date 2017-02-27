
var StickerLayoutView = Backbone.Marionette.View.extend( {
    tagName: 'div',
    className: 'sticker',

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

    template: _.template( $('#sticker-template').html() ),

    events: {
        'click': 'editSticker'
    },

    addSticker: function() {
        alert('add sticker');
        Stickers.add({
            title: this.ui.title.val(),
            pictureSrc: this.ui.pictureSrc.val(),
            link: this.ui.link.val(),
            linkDesc: this.ui.linkDesc.val(),
            content: this.ui.content.val(),
            tags: this.ui.tags.val(),
            workBoard: this.ui.workBoard.val()
        })
    },

    editSticker: function() {
        console.log(this);
    }
});
