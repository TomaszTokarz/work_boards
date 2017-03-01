var StickerFirebaseCollection = Backbone.Firebase.Collection.extend({
  model: Sticker,
  url: "https://work-boards.firebaseio.com/",
  autoSync: true
});

var realtimeList = new RealtimeList();

realtimeList.on('sync', function(collection) {
  console.log('collection is loaded', collection);
});
