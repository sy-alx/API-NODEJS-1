//10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

const string = "bonjour je suis syrill";
const ConsoneMaj = string.replace(/[bcdfghjklmnpqrstvwxs]/gi, function (match) {
     return match.toLocaleUpperCase();
});

console.log(ConsoneMaj);