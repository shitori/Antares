$(".dl").hide()
$(".finish").hide()


$("#dl").click(function () {
    console.log($("#inputFormat").val())
    console.log($("#inputURL").val())

    var monExpressionReguliere = /\b(\w*playlist\w*)\b/g;
    var monTableau = monExpressionReguliere.exec($("#inputURL").val());
    console.log("La valeur de lastIndex est " + monExpressionReguliere.lastIndex);

    $(".dl").show();
    $(".finish").hide()
    var newprogress = 0;
    window.setInterval(function () {
        $('#theprogressbar').attr('aria-valuenow', newprogress).css('width', newprogress + '%');
        if (newprogress == 0) {
            newprogress = 25;
        } else if (newprogress == 25) {
            newprogress = 50;
        } else if (newprogress == 50) {
            newprogress = 75;
        } else if (newprogress == 75) {
            newprogress = 100;
        } else {
            newprogress = 0;
        }

    }, 1000);

    if (monExpressionReguliere.lastIndex == 0) {
        $("#dl-titre").text("Téléchargement de la vidéo en cours ... ")
        var isPlaylist = false;

    } else {
        $("#dl-titre").text("Téléchargement de la playlist en cours ... ")
        var isPlaylist = true;
    }

    console.log("opération ajax")

    $.ajax({
        type: 'get',
        contentType: 'text/html',
        url: '/',

        data: {url: $("#inputURL").val(), format: $("#inputFormat").val()},
        success: function (data) {
            console.log(data)
            $(".dl").hide()
            if (data == "") {
                $("#finish").text("Une erreur est survenue, veuillez saisir une url youtube valide.")
            } else {
                $("#finish").text("Téléchargment terminé avec succès")
            }
            $(".finish").show()
        }
    });

    //$.post("/game/" + id_game);


});