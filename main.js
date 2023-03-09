//var toto = "titi";
//alert (toto);

//var MavariableString ="toto";
//var MavariableNumerique = 100;
//var Mavariabletableau = ['pomme', 'banana'];
//var Mavariableobjet = window;

//alert (MavariableNumerique + MavariableString + Mavariableobjet.location.pathname + Mavariabletableau[0]);


//var Mavariablestring2 = "toto";

//var MavariableNumerique2 = prompt("entrez un nombre", 100);

//if (Mavariablestring2 == "toto" && MavariableNumerique2 !=200 || MavariableNumerique2 <=100 )
//{
  //  alert("je suis le cas 1");
//}else{
  //  alert("je suis le cas 2");
//}

//var largeur = innerWidth;

//if (largeur<=300)
//{
  //  alert("votre pasge est trop petite");
//}

//var nombre = prompt("entrez un nombre", 100);
//var resultat=1;

//for (var i=1; i<=nombre; i++)
//{
  //  resultat= i*resultat;
//}

//alert("resultat :" + resultat);

//function ModifText()
//{
  //alert ("je vais changer la div");

  //var Madiv = document.getElementsByName("test");

  //Madiv.forEach(function(element) 
  //{
    
   // element.innerHTML = "Hello";

  //});

//}


//function ModifText2() {
 // alert(" modifier la div !");
  //var Madiv = document.getElementsByTagName("div");

 // for (var i = 0; i < Madiv.length; i++) {
   // Madiv[i].innerHTML = "Hello2";
 // }
//}


//function ModifText3() {
  //alert("Je vais modifier la div !");
  //var Madiv = document.getElementsByClassName("test");
  
  //for (var i = 0; i < Madiv.length; i++) {
  //  Madiv[i].innerHTML = "Hello3";
 // }
//}

var MaDiv = document.getElementById("MaDiv1");
MaDiv.addEventListener("click", cliquer);

function cliquer(evenement)
{
  evenement.target.innerHTML = "on m'a cliqué dessus"
}

var competeur = 0;
var compteur2 = 0;

MaDiv = document.getElementById("Methode1");
MaDiv.addEventListener("click", cliquer2);

MaDiv = document.getElementById("Methode2");
MaDiv.addEventListener("mouseover", survole);

MaDiv = document.getElementById("Methode3");
MaDiv.addEventListener("keydown", clavier);

function cliquer2(evenement)
{
  competeur++;
  evenement.target.innerHTML = "on m'a cliqué dessus"+competeur+"fois";
}

function survole(evenement)
{
  compteur2++;
  evenement.target.innerHTML = "on m'a survoler"+compteur2+"fois";
}

function clavier(evenement)
{
  evenement.target.innerHTML = "on a appuyer sur :"+evenement.key;
}


MaDiv = document.getElementById("Methode4");
MaDiv.addEventListener("click", couleur);

MaDiv = document.getElementById("Methode5");
MaDiv.addEventListener("mouseover", vue);


function couleur(evenement) {
    if (evenement.target.className === "changementcouleur1") {
        evenement.target.className = "changementcouleur2";
    } else {
        evenement.target.className = "changementcouleur1";
    }
}

function vue(evenement) {
  evenement.target.className = "disparition";
    MaDiv.innerHTML = '';
}
