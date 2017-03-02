var StickerFirebaseCollection = Backbone.Firebase.Collection.extend({
  model: Sticker,
  url: "https://work-boards.firebaseio.com/",
  autoSync: true,
  initialize: {
      console.log('collection is loaded');
  }
});

var realtimeList = new RealtimeList();

realtimeList.on('sync', function(collection) {
  console.log('collection is loaded', collection);
});
