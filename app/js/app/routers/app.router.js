var Router = Marionette.AppRouter.extend({
    controller: new Controller(),
    appRoutes: {
        'boards': 'boardlist',
        'board/:id': 'boardId',
        'newsticker': 'newSticker',
        '': 'home'
    }
});
