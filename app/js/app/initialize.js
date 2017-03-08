var activePopupFlag = false;


var app = {};

app.layout = new LayoutView();
app.router = new Router();
app.history = Backbone.history.start();

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
app.layout.render();
