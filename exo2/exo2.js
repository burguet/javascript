MaDiv= document.getElementById("button");

MaDiv.addEventListener("click", click);

function click(evenement)
{
    var long = window.prompt("saisir une longeur :");
    var perimetre =2*Math.PI*long;
    var aire = Math.PI*Math.pow(long, 2);
    alert("aire :"+aire+"perimetre :"+perimetre+".");
}