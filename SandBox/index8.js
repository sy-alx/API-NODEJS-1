//8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

const string = "bonjour je suis syrill";
const VoyellesMaj = string.replace(/[aeiouy]/gi, function (match) {
     return match.toLocaleUpperCase();
});

console.log(VoyellesMaj);