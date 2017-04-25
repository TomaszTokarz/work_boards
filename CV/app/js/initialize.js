app = {
    sliders: [],
    isMobile: false,
    init: function() {
        if (window.innerWidth < 1000) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
        }
        this.sliders.push(new Slider('.js_top_slider', 1200, this.isMobile));
        this.sliders.push(new Slider('.js_screens_slider', 1000, this.isMobile));
    },

    checkMobile: function() {
        for (var i = 0; i < app.sliders.length; i++) {
            if (window.innerWidth < 1000) {
                app.sliders[i].isMobile = true;
            } else {
                app.sliders[i].isMobile = false;
            }
        }
    }
};

$(function() {
    app.init();

    $( window ).resize(function() {
        app.checkMobile();
  });
});
