var activePopupFlag = false;
var app = {
    init: function() {
        app.history = Backbone.history.start();
        app.layout = new LayoutView();
        app.router = new Router();
        app.lastRoutes = ['',''];
        app.layout.renderLoadingView();

        app.router.on('route', function() {
            app.lastRoutes.push(Backbone.history.fragment);
            app.lastRoutes.splice(0,1);
        });
        $(".footer").click(function() {
            console.log('shieet')
        })
    }
};

$(function() {
    app.init();
    //if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    //
    //}
});
