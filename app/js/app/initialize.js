var activePopupFlag = false;
var app = {
    init: function() {

        app.history = Backbone.history.start();
        app.layout = new LayoutView();
        app.router = new Router();
        app.lastRoutes = ['',''];
        database.runListeners();
        app.layout.render();
        app.layout.renderHome();

        app.router.on('route', function() {
            app.lastRoutes.push(Backbone.history.fragment);
            app.lastRoutes.splice(0,1);
            //console.log();
        })
    }
};

$(function() {
    app.init();
});
