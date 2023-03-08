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

var Madivtest = document.getElementById("test");

Madiv.addEventListener("click", changement);

function changement(evenement)
{
  evenement.target.innerHTML ="on m'a cliqué dessus";
}



var compteur = 0;
var compteur2 = 0;

var MaDivtest2 = document.getElementById("Methode1");
MaDiv2.addEventListener("click", clic);

var MaDivtest2 = document.getElementById("Methode2");
MaDiv2.addEventListener("mouseover", survole);

var MaDivtest2 = document.getElementById("Methode3");
MaDiv2.addEventListener("keydown", ecriture);



function ecriture(evenement) {
    evenement.target.innerHTML = "On a écrit : "+evenement.key+" fois !";
}

function clic(evenement) {
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus "+compteur+" fois !";
}

function survole(evenement) {
    compteur2++;
    evenement.target.innerHTML = "On m'a survolé "+compteur2+" fois !";
}



// Exercices


var MaDiv4 = document.getElementById("Methode4");
MaDiv4.addEventListener("click", changementDiv);

var MaDiv5 = document.getElementById("Methode5");
MaDiv5.addEventListener("mouseover", visibilite);


function changementDiv(evenement) {
    if (evenement.target.className === "testclass1") {
        evenement.target.className = "testclass2";
    } else {
        evenement.target.className = "testclass1";
    }
}

function visibilite(evenement) {
    MaDiv5.style.backgroundColor = 'rgba(255, 255, 255, .4)';
    MaDiv5.innerHTML = '';
}