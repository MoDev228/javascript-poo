/*
Exercice 1 — Les objets JavaScript

1. Créer un objet "livre" avec les propriétés :
   - "titre"
   - "auteur"
   - "annee"
   - "disponible"

2. Afficher chaque propriété dans la console.

3. Modifier "disponible" pour indiquer que le livre n'est plus disponible.

4. Ajouter une propriété "genre".

5. Supprimer la propriété "annee".

6. Créer une constante "propriete = "titre"" et utiliser la notation
   entre crochets pour afficher le titre.
*/

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
