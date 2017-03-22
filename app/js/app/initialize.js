var activePopupFlag = false;
var app = {
    init: function() {

        app.history = Backbone.history.start();
        app.layout = new LayoutView();
        app.router = new Router();
        database.runListeners();
        app.layout.render();        
        app.layout.renderHome();
    }
};

$(function() {
    app.init();
});
