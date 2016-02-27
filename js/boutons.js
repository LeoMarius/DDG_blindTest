        $(document).ready(function () {



            ///////////// LES BOUTONS //////////////////


            $('#StartMain').click(
                function () {
                    console.log("playlist actuelle : " + currentPlaylist);
                    var plalistACharger = parseInt(currentPlaylist);
                    DZ.player.playPlaylist(plalistACharger);
                    console.log(DZ.player.playPlaylist(currentPlaylist));
                    return false;
                });


            $('#buttonDebug1').click(
                function () {

                    DZ.player.playTracks[(67929419)];

                    return false;
                });

            $('#buttonDebug2').click(
                function () {

                    var currentTrack = DZ.player.getCurrentTrack();

                    var titou2 = DZ.player.getCurrentIndex();

                    var titou = ("ID : " + currentTrack.id + " , Position playlist : " + titou2 + " , Titre : " + currentTrack.title + " ,  Artiste : " + currentTrack.artist.name + " , Shuffle :  " + (DZ.player.getShuffle()));

                    console.log(titou);
                    /// Affiche les infos de la piste chargée dans le lecteur.
                    return false;
                });

            $('#buttonDebug3').click(
                function () {

                    pisteMusicale.init(67929419);
                    console.log("toto");
                    console.log(pisteMusicale.title);
                    return false;
                });
            
        });



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

