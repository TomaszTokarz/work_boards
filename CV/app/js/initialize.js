console.log('initialize.js');

app = {
    sliders: [],
    init: function() {
        this.sliders.push(new Slider('.js_top_slider', 1200));
    }
};

$(function() {
    app.init();
});
