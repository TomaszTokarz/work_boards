var LoadingView = Backbone.Marionette.CompositeView.extend( {

    el: '.js-loading-screen',
    template: _.template( $('#loading-template').html())
});
