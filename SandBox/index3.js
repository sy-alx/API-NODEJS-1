//3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères 
//  dont toutes les voyelles ont été supprimées. AEIOUY

const string = "Bonjour je suis Syrill";

const SansVoyelle = string.replace(/[aeiou]/gi, '');
console.log(SansVoyelle);