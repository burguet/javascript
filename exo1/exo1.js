MaDiv= document.getElementById("button");

MaDiv.addEventListener("click", click);

function click(evenement)
{
    var long = window.prompt("saisir une longeur :");
    var larg = window.prompt("saisir une largeur : ");
    var aire = long*larg;
    var perimetre =long*2+larg*2;
    alert("aire :"+aire+"perimetre :"+perimetre+".");
}