const livre = {

  titre: "JavaScript POO",

  auteur: "MoDev",

  annee: 2025,

  disponible: true,

};

console.log(livre.titre);

console.log(livre.auteur);

console.log(livre.annee);

console.log(livre.disponible);

livre.disponible = false;

console.log(livre.disponible);

livre.genre = "Programmation";

console.log(livre.genre);

delete livre.annee;

const propriete = "titre";

console.log(livre[propriete]);
