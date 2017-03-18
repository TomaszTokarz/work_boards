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

// You can retrieve services via the defaultApp variable...
var defaultDatabase = defaultApp.database();

var database = {
    saveSticker: function(data) {
        firebase.database().ref('id').once('value', function(snapshot){
            var id = parseInt(snapshot.val());
            data.id = id;
            firebase.database().ref('Stickers/' + id).set(data);
            firebase.database().ref('id').set(id+1);
        });
    },

    toggleBoard: function(sticker, boardId) {
        var boards = sticker.model.attributes.boards;
        var position = $.inArray(boardId, boards);
        if (position !== -1) {
            boards.splice(position,1);
        } else {
            boards.push(boardId);
        }
        boards.sort();
        firebase.database().ref('Stickers/' + sticker.model.id + '/boards').set(boards);
    },

    saveBoard: function(data) {
        firebase.database().ref('board-id').once('value', function(snapshot) {
            var id = parseInt(snapshot.val());
            data.id = id;
            firebase.database().ref('Boards/' + id).set(data);
            firebase.database().ref('board-id').set(id+1);
        });
    },

    runListeners: function() {
        firebase.database().ref('Stickers').on('child_added', function(snapshot) {
            stickerCollection.add(snapshot.val());
        })

        firebase.database().ref('Boards').on('child_added', function(snapshot) {
            boardList.add(snapshot.val());
        })

        firebase.database().ref('Stickers').on('child_removed', function(snapshot) {
            stickerCollection.remove(snapshot.val());
        })
    },

    deleteSticker: function(id) {
        var confirm = window.confirm('Do you want to delete this sticker?');
        if (confirm == true) {
            firebase.database().ref('Stickers/' + id).remove();
        } else {
            return false;
        }
    }
};
