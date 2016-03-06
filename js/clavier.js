     //// Les interactions avec le clavier
     //// FICHIERS TEMPORAIRE !!!!
     //// RASSEMBLEMENT NECESSAIRE AVEC LE RESTE A LA FIN




     $(document).ready(function () {

         //// Là ont crée un event à chaque touche appuyée
         $('body').keypress(function (event) {

             // console.log('Yay');

             //// 32 = Barre espace
             if (event.which == 32) {

                 var playerPlaying = DZ.player.isPlaying();
                 if (playerPlaying == true) {
                     pauseMusic();
                 } else {
                     playMusic();
                 };
             };



             if (playerKeyConfig == true) {
                 console.log('Element actif OK, touche appuyée : ' + event.which);
                 //var idTemp2 = $(".playerTouche#id").is(":active");
                 //    idClick2 = idTemp2.charAt(6);


                 ///RETOURNE L'ID DE LA ZONE CLIQUéE
                 console.log('idTemp =' + activePlayerId);
                 $('#fenetreModale').modal('toggle');



                 $('#player' + activePlayerId + 'Touche').replaceWith('<em  id="player' + activePlayerId + 'Touche" data-toggle="modal" href="#fenetreModale" class="playerTouche" id="player' + activePlayerId + 'Touche"> ' + String.fromCharCode(event.which) + '</em>');

                 Joueurs[activeJoueur].keyAssigned = event.which;

                 playerKeyConfig = false;
             };




             for (var i = 0; i < Joueurs.length; i++) {

                 var JoueurKey = Joueurs[i].keyAssigned;
                 var keyPresss = event.which;


                 if (JoueurKey == keyPresss) {
                     // console.log( Joueurs[i].keyAssigned +'  :  '+event.which );
                     console.log('valeure trouvée dans le tableau des joueurs à l\'index : ' + i);


                     var playerPlaying = DZ.player.isPlaying();

                     if (playerPlaying == true) {

                         activePlayerId = Joueurs[i].id;
                         pauseMusic();
                         playSound();
                         // wait(10);
                         //var idJoueur = Joueurs[i].id;

                         
                         $('#validationPoints').modal('toggle');

                         var toto = $('#circlePlayer' + activePlayerId + '').circleProgress('value');
                         $('#circlePlayer' + activePlayerId + '').circleProgress('value', (toto + 0.1));
                         Joueurs[i].score = Joueurs[i].score + 1;
                         $('#player' + activePlayerId + ' .playersTexts .playerScore').replaceWith('<em class="playerScore">' + Joueurs[i].score + '</em>');


                     };
                 };
             };





             //// Fin de l'event KeyPress général et puis de la boucle jQuery
         });
     });