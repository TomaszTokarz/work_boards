$(function() {
    test = {
        run: function() {
            this.addEntry();
            console.log( "addEntry succesfully executed" );
            console.log("first sticker title:"+ sticker1.get('title') +", content:"+ sticker1.get('content'));

            this.testView();
            //console.log("View test stickerView.el: "+ stickerView.el);
            // test ends
            console.log( "test is done!" );
        },
        addEntry: function() {
            // title: '',
            // pictureSrc: '',
            // link: '',
            // linkDesc: '',
            // content: '',
            // tags: ''
            sticker1 = new Sticker();
            sticker1.set({
                title: "first sticker",
                pictureSrc: '',
                link: '',
                linkDesc: '',
                content: "this is a first sticker to rule them all",
                tags: ''
            });

            sticker2 = new Sticker();
            sticker2.set({
                title: "secound sticker",
                content: "this is a secound sticker"
            });

            sticker3 = new Sticker();
            sticker3.set({
                title: "Facebook",
                pictureSrc: 'images/fb-icon.png',
                link: 'http://facebook.com',
                linkDesc: 'Facebook',
                content: "It is just a sticker with a facebook link",
                tags: ''
            });
            sticker4 = new Sticker();
            sticker4.set({
                title: "Sticker with a quite long title",
                content: "This is an another sticker with some description, bla bla bla, this description should be a little longer to better fill a content box"
            });
            sticker5 = new Sticker();
            sticker5.set({
                title: "another sticker",
                content: "This is an another sticker with some description, bla bla bla, this description should be a little longer to better fill a content box"
            });
            sticker6 = new Sticker();
            sticker6.set({
                title: "another sticker",
                content: "This is an another sticker with some description, bla bla bla, this description should be a little longer to better fill a content box"
            });
            sticker7 = new Sticker();
            sticker7.set({
                title: "another sticker",
                content: "This is an another sticker with some description, bla bla bla, this description should be a little longer to better fill a content box"
            });
            sticker8 = new Sticker();
            sticker8.set({
                title: "another sticker",
                content: "This is an another sticker with some description, bla bla bla, this description should be a little longer to better fill a content box"
            });
            sticker9 = new Sticker();
            sticker9.set({
                title: "another sticker",
                content: "This is an another sticker with some description, bla bla bla, this description should be a little longer to better fill a content box"
            });
            sticker10 = new Sticker();
            sticker10.set({
                title: "another sticker",
                content: "This is an another sticker with some description, bla bla bla, this description should be a little longer to better fill a content box"
            });

            Stickers = new StickerCollection;
            Stickers.add(sticker1);
            Stickers.add(sticker2);
            Stickers.add(sticker3);
            Stickers.add(sticker4);
            Stickers.add(sticker5);
            Stickers.add(sticker6);
            Stickers.add(sticker7);
            Stickers.add(sticker8);
            Stickers.add(sticker9);
            Stickers.add(sticker10);
        },
        testView: function() {
            //stickerView = new StickerView();
            var app = new StickersView();
        }
    }
    test.run();
});
