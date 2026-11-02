//Entrée : récupère une valeur fournise par l'utilisateur  ou un dispositif
//Une seule instruction

//Affiche une popup avec un message
alert("message");

//Affiche un popup avec un message et un champ de saisie
prompt("Quel est votre nom ?");

//Récupérer la valeurs saisie par l'utilisateur
let nom = prompt("Quel est votre nom ?");
console.log(nom);

//prompt() retourne toujours un string
let nombre1 = prompt("Veuillez entrer un nombre :");
console.log(typeof"nombre1");

let nombre2 = prompt(Number("Veuillez entrer un nombre :"));
console.log(typeof"nombre2");