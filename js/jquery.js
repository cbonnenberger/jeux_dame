$(document).ready(function(){
    $("body").append(creationDamier());
    survolSouris();
    jeuxPossible();
});

function creationDamier() {
    var html = "<table>";
    var compteur = 0;

    for (var i = 0; i < 10 ; i++){
        html += "<tr>";

        for(var j = 0; j < 10 ; j++){

            if ((i + j) % 2 == 0) {
                html += "<td id='cell-l" + i + "-c" + j + "'>";
            }
            else{
                if(i == 0 || i == 1 || i == 2 || i == 3) {
                    html += "<td class='caseNoire' id='cell-l" + i + "-c" + j + "'><img class=vert id=vert" + compteur + " src='images/vert.png' alt='image'>";
                }
                else if(i == 6 || i == 7 || i == 8 || i == 9){
                    html += "<td class='caseNoire' id='cell-l" + i + "-c" + j + "'><img class=rose id=rose" + compteur + " src='images/rose.png' alt='image'>";
                }
                else{
                    html += "<td class='caseNoire' id='cell-l" + i + "-c" + j + "'>";
                }
                compteur++;
            }
        }
    }

    html +="</table>";

    return html;
}


function survolSouris(){
    $(".vert").on("mouseover", function () {
       $(this).parent().css("background", "red");
    })
        .on("mouseout", function () {
        $(this).parent().css("background", "");
    });

    $(".rose").on("mouseover", function () {
        $(this).parent().css("background", "red");
    })
        .on("mouseout", function () {
        $(this).parent().css("background", "");

    });
}

function jeuxPossible(){
  $(".vert").on("click", function () {
      console.log($(this).attr("id"));
  });

}
