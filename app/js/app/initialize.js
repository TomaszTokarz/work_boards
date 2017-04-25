
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
    }
};

$(function() {
    app.init();
});
