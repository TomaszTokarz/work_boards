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

    updateBoards: function(stickerId, boardId) {
        firebase.database().ref('Stickers/' + stickerId + '/boards').once('value', function(snapshot){
            var boards = snapshot.val();
            var isDuplicated = false;

            if (boards == null){
                boards = [];
                //NOTE: there is an error in case of lack of definied board's list, in feature this problem shouldn't occur.
                //TODO: add main board with ID: 0 to each sticker
            };

            for (var i=0; i<boards.length; i++){
                if ( boards[i] == parseInt(boardId)){
                    //console.log(boards[i] +', '+ parseInt(boardId))
                    boards.splice(i,1)
                    isDuplicated = true;
                };
            };

            if (isDuplicated) {
                firebase.database().ref('Stickers/' + stickerId + '/boards').set(boards);
            } else {
                boards.push(parseInt(boardId));
                boards.sort();
                firebase.database().ref('Stickers/' + stickerId + '/boards').set(boards);
            }
        });
        database.checkChoosenBoards(stickerId);
    },

    checkChoosenBoards: function(stickerId) {
        firebase.database().ref('Stickers/' + stickerId + '/boards').once('value', function(snapshot) {
            var boards = snapshot.val();
            var boardsList = $('.js-check-boards-list-item').children();
            var board = [];

            $('.js-check-boards-list-item').children().removeClass('activeBoard');

            if (boards == null) {
                boards = [];
                //NOTE: there is an error in case of lack of definied board's list, in feature this problem shouldn't occur.
                //TODO: add main board with ID: 0 to each sticker
            };

            //FIXME: it's not working, it should compare a real id, not a position
            for (var i=0; i<boardsList.length; i++) {
                for (var j=0; j<boards.length; j++) {
                    if (i == boards[j]) {
                        var childId = i+1;
                        $('.js-check-boards-list-item:nth-child('+ childId +')').children().addClass('activeBoard');
                    } else {
                    };
                };
            };
        });
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
