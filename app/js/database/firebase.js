// Initialize Firebase

var defaultAppConfig = {
  apiKey: "AIzaSyBVadETtEr9UZ2C6rAnX_5PU2Zl5BIx3rs",
  authDomain: "work-boards.firebaseapp.com",
  databaseURL: "https://work-boards.firebaseio.com",
  storageBucket: "work-boards.appspot.com",
  messagingSenderId: "1036702528745"
};

// Initialize the default app
var defaultApp = firebase.initializeApp(defaultAppConfig);

console.log('firebase initialized');

// You can retrieve services via the defaultApp variable...
var defaultDatabase = defaultApp.database();

var database = {
    saveSticker: function(data){
        firebase.database().ref('id').once('value', function(snapshot){
            var id = parseInt(snapshot.val());
            firebase.database().ref('Stickers/' + id).set(data);
            firebase.database().ref('id').set(id+1);
        });
    }
};

firebase.database().ref('Stickers').on('child_added', function(snapshot){
    Stickers.add(snapshot.val())
    console.log(snapshot.val())
})
