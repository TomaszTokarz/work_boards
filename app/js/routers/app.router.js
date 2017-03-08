var Router = Marionette.AppRouter.extend({
    controller: new Controller(),
    appRoutes: {
        'board': 'boardlist',
        'board/:name': 'boardName',
        'newsticker': 'newSticker',
        '': 'home'
    }

});
