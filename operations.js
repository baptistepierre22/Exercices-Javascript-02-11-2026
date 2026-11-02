let n1 =12;
let n2=45;
let n3=2.3;



console.log(n1 + n2); //addition
console.log(n1 - n2); //soustraction
console.log(n1 * n2); //multiplication
console.log(n1 / n2); //division
console.log(n1 % n2); //modulo

console.log("n1 vaut " + n1);

//l'adition dans différents cas
12+12 =>24 //number +number =number
"12" +"12"=1212 //"12" +"12" le number est converti en string + concaténation
"5"*6 =30 //le string "5*6" est converti en number

//concaténation = collage de 2 string
console.log("Bonjour" + " " les amis"); //Bonjour les amis")

//(Accesoires) Gabarit de chaîne (avec back tick)
console.log(`la valeur de n1 est ${n1}`);
console.log("la valeur de n1 est "+n1);