var HeaderLayoutView = Backbone.Marionette.View.extend({

    el: '#header',
    template: false,

    ui: {
        newStickerBtn: '#add--new-sticker-btn',
        changeBoardBtn: '#change--board-btn'
    },

    events: {
        'click @ui.newStickerBtn': 'newStickerView',
        'click @ui.changeBoardBtn': 'boardListView'
    },
    newStickerView: function(){
        Backbone.history.navigate("/newsticker", {trigger: true});
    },
    boardListView: function(){
        Backbone.history.navigate("/board", {trigger: true});
    }
});
