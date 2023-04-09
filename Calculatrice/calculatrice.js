
//calculatrice

let ecran = document.querySelector("#ecran");
let boutons = document.querySelector("#boutons");
boutons.addEventListener("click", value);
egal.addEventListener("click", retard);

// fonction pour récupérer chaque valeur de bouton

function value(e){
 let a = e.target.value;
 let affichage = ecran.innerText += a;
 console.log(affichage);
} 

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
//fonction pour retarder et afficher. Si pas de retard, alors on obtient le résultat suivis d'un égal. Affichaghe méthode Math.round pour afficher deux chiffres après la virgule.

function retard(){
setTimeout(resultat, 0);
let res = (eval(ecran.innerHTML));
function resultat(){
let affiche = ecran.innerHTML = Math.round(res*100)/100;
console.log(affiche);
}
}

// Changement couleur aléatoire, fond de la calculatrice----------------------------------------------------------------------------------------------------------------------------------------------------

document.querySelector("#CYB").addEventListener("click", CC);
document.querySelector("#background");

function CC () {
  let valeur1 = Math.floor(Math.random()*255);
  let valeur2= Math.floor(Math.random()*255);
  let valeur3 = Math.floor(Math.random()*255);
  let codeCouleur = ("rgb("+ valeur1 + "," + valeur2 + "," + valeur3 + ")");
  background.style.backgroundColor = codeCouleur;
}

function reset(){
ecran.innerText = "";
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
// Fonction ci-dessous. Les variables sont stockées en dehors de la fonction pour obenir une portéee globale. Sinon, la fonction rechargerait à chaque fois les images, donc ,elle afficherait toujours l'image 1:
// Pour réinitialiser, on passe par inner.html, comme pour réinitialiser l'écran de la calculatrice. Sinon, appenchild recrer une image et le simages s'assemblent prenant de l'espace, sans que l'une laisse la place à l'autre.



  let image = document.createElement("img");
image.src = "/img/pngegg (32).png";
image.style.height="1000px";
let image1 = document.createElement("img");
image1.src = "/img/pngegg (33).png";
image1.style.height="1000px";
let image2= document.createElement("img");
image2.src = "/img/pngegg (34).png";
image2.style.height="1000px";
let image3 = document.createElement("img");
image3.src = "/img/pngegg (35).png";
image3.style.height="1000px";
let image4 = document.createElement("img");
image4.src = "/img/pngegg (36).png";
image4.style.height="1000px";
let image5 = document.createElement("img");
image5.src = "/img/pngegg (37).png";
image5.style.height="1000px";
let index = 0;
 let tableau = [image, image1, image2, image3, image4, image5];
function R () {
  document.querySelector("#image1").innerHTML ="";
 document.querySelector("#image1").appendChild(tableau[index++]);
 if(index===5)
 index=0;
}

document.querySelector("#backBody").addEventListener("click", R);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// fonction M+

document.querySelector("#Mplus" ).addEventListener("click", Memory);

function Memory(){
  // setTimeout(ecran.innerHTML, 0);
  let res = (eval(ecran.innerHTML));
  let retour = ecran.innerHTML = Math.round(res*100)/100;  
  }
  