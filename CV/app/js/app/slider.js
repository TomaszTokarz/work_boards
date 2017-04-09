var Slider = function(el, width) {
    this.$el = $(el);
    this.width = width;
    this.$items = this.$el.find('.js_slider_item');
    this.$listItems = this.$el.find('.js_slider_list_item');

    this.slide = function(id) {
        this.$items.closest('active').removeClass('active');
        this.$items.eq(id).addClass('active');
        for (var i = 0; i < this.$items.length; i++) {
            this.$items.eq(i).css({
                right: (id - i) * width
            });
        };
    }.bind(this);

    this.$listItems.click(function(e) {
        this.slide($(e.currentTarget).index());
    }.bind(this));

    this.slide(0);
};
