MaDiv= document.getElementById("button");

MaDiv.addEventListener("click", affichagescore);
var a= 3
var b =2;

function calcul(x=8)
{
    return x*3
}

function affichagescore(evenement)
{
    alert("le résultat de A est "+calcul(a));
    alert("le résultat de B est "+calcul(b));
    alert("le résultat de X est "+calcul());
}