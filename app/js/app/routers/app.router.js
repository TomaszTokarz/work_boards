var Router = Marionette.AppRouter.extend({
    controller: new Controller(),
    appRoutes: {
        'boards': 'boardlist',
        'board/:name': 'boardName',
        'newsticker': 'newSticker',
        '': 'home'
    }

});
