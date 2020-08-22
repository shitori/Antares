
$("#dl").click(function (){
    console.log("dl")
    console.log($("#inputFormat").val())
    console.log($("#inputURL").val())

    var monExpressionReguliere = /\b(\w*playlist\w*)\b/g;
    var monTableau = monExpressionReguliere.exec($("#inputURL").val());
    console.log("La valeur de lastIndex est " + monExpressionReguliere.lastIndex);




});