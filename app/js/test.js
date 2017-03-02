$(function(){
    test = {
        run: function(){

            console.log( 'test is done!' );
        }
    }
    test.run()
    sticker.render()
    new NewStickerLayoutView().render();
});
