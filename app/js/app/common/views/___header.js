var HeaderLayoutView = Backbone.Marionette.View.extend({

    el: '#header',
    template: false,

    ui: {
        newStickerBtn: '.js-add-sticker-btn',
        changeBoardBtn: '.js-change-baord-btn'
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
