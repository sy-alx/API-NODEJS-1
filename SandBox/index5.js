//5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. 
//  Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".

var numberToWords = require('number-to-words');
const Nombre = "388";
const Mots = numberToWords.toWords(Nombre);
console.log(Mots);