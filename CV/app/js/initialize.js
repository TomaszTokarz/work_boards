app = {
    sliders: [],
    init: function() {
        this.sliders.push(new Slider('.js_top_slider', 1200));
        this.sliders.push(new Slider('.js_screens_slider', 1000));
    }
};

$(function() {
    app.init();
});
