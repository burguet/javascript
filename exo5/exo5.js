MaDiv= document.getElementById("button");

MaDiv.addEventListener("click", boucle);

function boucle() {
    var tableau = [];
    for (var i = 0; i < 3; i++) {
      tableau.push(i*i);
    }
    alert(tableau);
  }
  
  MaDiv= document.getElementById("button2");

    MaDiv.addEventListener("click", boucle2);
  
    function boucle2() {
    var longueur = prompt("Entrez la longueur souhaitée du tableau :");
    var tableau = [];
    for (var i = 0; i < longueur; i++) {
      tableau.push(i*i);
    }
    alert(tableau);
  }