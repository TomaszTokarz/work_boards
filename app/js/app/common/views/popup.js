var PopupView = Backbone.Marionette.View.extend({
    el: '.js-popup-wrapper',
    template: _.template( $('#popup-template').html()),
    currentView: null,
    ui: {
        closeBtn: '.js-popup-close'
    },

    events: {
        'click @ui.closeBtn': 'closePopup'
    },


    showContent: function() {
        this.render();
    },

    closePopup: function() {
        this.$el.html('');
    }


});
