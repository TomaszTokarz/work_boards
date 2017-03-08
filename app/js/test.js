var activePopupFlag = false;
$(function(){
    test = {
        run: function(){

            new Router;
            Backbone.history.start();
            sticker.render();
            board.render();
            new NewStickerLayoutView().render();
            new ChangeBoardLayoutView().render();
            new HeaderLayoutView().render();
            //console.log( 'test is done!' );
        }
    }

    test.run();
});

var mainCollection;
