var Slider = function(el, width, height) {
    this.$el = $(el);
    this.width = width;
    this.$items = this.$el.find('.js_slider_item');
    this.$itemContainer = this.$el.find('.js_slider_items');
    this.$listItems = this.$el.find('.js_slider_list_item');
    this.height = 0;
    this.currentSlide = 0;
    this.autoTime = 3000;
    this.clickTime = 10000;

    this.slide = function(id, time) {
        window.clearTimeout(this.timeout);
        for (var i = 0; i < this.$items.length; i++) {
            this.$items.eq(i).css({
                right: (id - i) * width
            });
            this.$listItems.removeClass('active');
            this.$listItems.eq(this.currentSlide).addClass('active');
        };
        this.timeout = window.setTimeout( function() {
            if (this.currentSlide++ >= this.$items.length - 1) {
                this.currentSlide = 0;
            }
            this.slide(this.currentSlide, this.autoTime);
        }.bind(this), time);
    }.bind(this);

    for (var i = 0; i < this.$items.length; i++) {
        this.height = Math.max( this.height, this.$items.eq(i).height())
    };

    this.$itemContainer.css({
        height: Math.max( parseInt(this.height) )
    });

    this.$listItems.click(function(e) {
        this.currentSlide = $(e.currentTarget).index()
        this.slide( this.currentSlide,  this.clickTime);
    }.bind(this));

    this.slide(this.currentSlide, this.autoTime);
};
