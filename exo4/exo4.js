MaDiv= document.getElementById("button");

MaDiv.addEventListener("click", affichagescore);
var tab = [-2 ,1 ,4];

function calcul(x)
{
    return x+2
}

function affichagescore(evenement)
{
    for(var i=0; i<tab.length; i++)
    {
        alert("le résultat de l'addition est "+calcul(tab[i]));
    }
}