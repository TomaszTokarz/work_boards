var activePopupFlag = false;
var app = {
    init: function() {
        app.layout = new LayoutView();
        app.router = new Router();
        app.history = Backbone.history.start();

        app.layout.render();
        database.runListeners();
        app.layout.renderHome();
    }
};

$(function() {
    app.init();
});




// test = {
//     run: function(){
//         new NewStickerLayoutView().render();
//         new ChangeBoardLayoutView().render();
//         new HeaderLayoutView().render();
//         //console.log( 'test is done!' );
//     }
// }
//
// test.run();
