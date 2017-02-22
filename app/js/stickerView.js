var StickersView = Backbone.View.extend( {

    el: '#sticker-container',

    initialize: function() {
        this.render();
        console.log("StickersView - initialized")
    },

    render: function() {
        this.$el.html('');

        Stickers.each(function(model) {
            var sticker = new StickerView({
                model: model
            });

            this.$el.append(sticker.render().el);
        }.bind(this));

        return this;
    }
});

var StickerView = Backbone.View.extend({

    tagName: 'div',
    className: 'sticker',

    template: _.template($('#sticker-template').html()),

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
