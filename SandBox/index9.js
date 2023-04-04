//9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

const string = "bonjour je suis syrill";
const comptage = string.replace(/[^aeiouy]/gi, "").length

console.log(comptage);