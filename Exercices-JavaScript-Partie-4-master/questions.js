/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieurs façons de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ') ;
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
// les tableaux commencent à 0
var afficher9Car = function (texte) {
    return texte.substring(0,9);
}
// slice fonctionne aussi
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return typeof texte === 'string';
}
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
// pop permet d'enlever le dernier morceau d'une chaine. Le pop supprime l'extension.
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    for(var i = 0; i < array.length; i++){
    array[i]= Math.abs(array[i]);
  }
    return array;
// correction return array.map(Math.abs);


}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI *(rayon * rayon));
}
// correction return Math.ceil(Math.PI *Math.pow(rayon,2rayon));
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab,ac);
}
var calculIMC = function (poids, taille) {
    return Math.round((poids / (taille * taille))*100)/100;
}
// parseFloat((poids / (taille * taille)).toFixed(2))
// toFixed retourne en string, convertit le résultat en chaine de caractère
// parseFloat le convertit en décimal.
