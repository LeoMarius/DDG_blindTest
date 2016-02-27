     //// Les interactions avec le clavier
     //// FICHIERS TEMPORAIRE !!!!
     //// RASSEMBLEMENT NECESSAIRE AVEC LE RESTE A LA FIN




     $(document).ready(function () {






         $('body').keypress(function (e) {
             if (e.which == 32) {
                 var playerPlaying = DZ.player.isPlaying();
                 if (playerPlaying == true) {
                     DZ.player.pause();
                 } else {
                     DZ.player.play();
                 };
                 console.log('Yay');
                 return false;
             } else {

                 console.log(e.which);
             }
         });






         $('body').keypress(function (e) {
             if (e.which == 97) {
                 var playerPlaying = DZ.player.isPlaying();
                 if (playerPlaying == true) {
                     DZ.player.pause();
                     var toto = $('.playerCircle').circleProgress('value');
                     $('.playerCircle').circleProgress('value', (toto+ 0.1));

                     console.log('Paused');





                 } else {
                     DZ.player.play();
                     console.log('Play');

                 };
                 return false;
             } else {

                 console.log(e.which);
             }
         });




     });