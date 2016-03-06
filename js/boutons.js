        $(document).ready(function () {



            ///////////// LES BOUTONS //////////////////



            //// Le gros Start
            $('#StartMain').click(
                function () {
                    console.log("playlist actuelle : " + currentPlaylist);
                    var plalistACharger = parseInt(currentPlaylist);
                    DZ.player.playPlaylist(plalistACharger);
                    console.log(DZ.player.playPlaylist(currentPlaylist));
                    return false;
                });




            //// Debug 1
            $('#buttonDebug1').click(
                function () {
                    DZ.player.playTracks[(67929419)];
                    return false;
                });

            //// Debug 2
            $('#buttonDebug2').click(
                function () {
                    var currentTrack = DZ.player.getCurrentTrack();
                    var titou2 = DZ.player.getCurrentIndex();
                    var titou = ("ID : " + currentTrack.id + " , Position playlist : " + titou2 + " , Titre : " + currentTrack.title + " ,  Artiste : " + currentTrack.artist.name + " , Shuffle :  " + (DZ.player.getShuffle()));
                    console.log(titou);
                    /// Affiche les infos de la piste chargée dans le lecteur.
                    return false;
                });

            //// Debug 3
            $('#buttonDebug3').click(

            function () {

            });


        //// Créer un joueur
        $('#summitPlayer').click(
            function () {

                nouveauPerso = "perso" + playerId;
                var nomNouveauPerso = $('#playerName').val(); //On charge le nom

                console.log('nom de la variable :' + nouveauPerso);
                console.log('nomPerso :' + nomNouveauPerso);


                nouveauPerso = Object.create(Personnage);
                nouveauPerso.init(playerId, nomNouveauPerso);

                nouveauPerso.decrire;
                console.log(nouveauPerso);
                console.log(nouveauPerso.nom + " : " + nouveauPerso.id + " : PlayerId actuel : " + playerId);


                // $('#player1').before(' Le nouveau perso est l\'id (' + nouveauPerso.id + ') et porte le nom de '+
                //    nouveauPerso.nom+'<br>');

                Joueurs.push(nouveauPerso);

                var dernierDuTableau = Joueurs.length - 1;

                var joueur = Joueurs[dernierDuTableau];

                var crisDeGuerre = '<br> <strong>Cris de guerre :</strong> <select class="playerSound"> <option></option> <option>Ane</option> <option>Chat</option> </select>';


                $('#slider_seek').before('<div id="player' + joueur.id + '" class="player draggable"> <button type="button" id="player' + joueur.id + 'Kill" class="close" data-dismiss="modal">x</button><div id="circlePlayer' + joueur.id + '" class="circle playerCircle" data-value="' + joueur.score + '" data-size="100" data-thickness="10" data-animation-start-value="0" data-reverse="false"></div><div class="playersTexts"><strong>ID :</strong> <em class="playerID">' + joueur.id + '</em><br><strong>Nom :</strong> <em class="playerName"> ' + joueur.nom + '</em> <br> <strong>Score :</strong> <em class="playerScore"> ' + joueur.score + '</em><br><strong>Touche assignée :</strong> <em  data-toggle="modal" href="#fenetreModale" class="playerTouche" id="player' + joueur.id + 'Touche"> unassigned</em> ' + crisDeGuerre + '</div></div><br>');
                initPlayer();

                playerId = playerId + 1;

            });





        //// LA DIFFERERENCE AVEC CLICK. => C'est dynamique même en ajoutant
        //// des nouveaux trucs dans le DOM

        //// On detecte lorsque l'ont clique sur un bloc "playerTouche
        //// on récupère son vrai ID et on le remplace par un form

        $('body').on('click', '.playerTouche', function () {
            var idTemp = this.id,
                idClick = idTemp.charAt(6);

            activePlayerId = idClick;

            for (var i = 0; i < Joueurs.length; i++) {
                var JoueurId = Joueurs[i].id;
                if (JoueurId == idClick) {
                    activeJoueur = i;
                };
            };



            ///RETOURNE L'ID DE LA ZONE CLIQUéE
            console.log(idClick);
            playerKeyConfig = true;

            //   $('#player' + idClick + 'Touche').replaceWith('<input id="player' + Joueurs[idClick].id + 'Touche" class="playerTouche" type="text" name="playertouche">');
        });


            
        $('body').on('click', '.close', function () {

            if (confirm('Etes vous sûr de vouloir supprimer ce joueur ?')) {
                var idTemp = this.id,
                    idClick = idTemp.charAt(6);
                ///RETOURNE L'ID DE LA ZONE CLIQUéE

                //     activePlayerId = idClick;
                console.log("Kill the player" + idClick);
                $('#player' + idClick + '').remove();


                for (var i = 0; i < Joueurs.length; i++) {
                    var JoueurId = Joueurs[i].id;
                    if (JoueurId == idClick) {
                        /// Là on sort le joueur du tableau Joueurs
                        Joueurs.splice(1, i);
                    };
                };
            };
            //  else() {
            //       return false;
            //   };
        });




        //// On surveille que l'ont ne ferme pas la fenetre modale
        $('body').on('click', '#fenetreModale', function () {
            playerKeyConfig = false;
        }); $('body').on('click', '.close', function () {
            playerKeyConfig = false;
        });




        //// Charger des playlists Deezer
        $('#summitPlaylist').click(
            function () {

                currentPlaylist = $('#playlistNumber').val(); //On charge la playlist
                ///// FAIRE DES VERIFS COMME QUOI C'EST BIEN UNE PLAYLIST ///////

                DZ.player.playPlaylist(currentPlaylist, false);

                var shuffleState = $('#playlistShuffle').val();
                console.log("là je clique");
                DZ.player.setShuffle(0);

                if ($('#playlistShuffle').is(":checked")) {
                    DZ.player.setShuffle(1);
                    console.log("c'est coché");
                } else {
                    DZ.player.setShuffle(0);
                    console.log("c'est pas coché");
                }
                return false;
            });




        });