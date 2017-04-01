var Router = Marionette.AppRouter.extend({
    controller: new Controller(),
    appRoutes: {
        'boards': 'boardlist',
        'board/:id': 'boardId',
        'newsticker': 'newSticker',
        'editsticker/:id': 'editSticker',
        'chooseboards': 'chooseBoards',
        '*path': 'home'
    }
});
