/*
Exercice 3 — Objets imbriqués et copie superficielle

1. Créer un objet "utilisateur1" avec les propriétés :
   - "nom"
   - "age"
   - "adresse" contenant :
     - "ville"
     - "pays"

2. Afficher le nom de "utilisateur1".

3. Afficher la ville de "utilisateur1".

4. Créer "utilisateur2" comme une copie superficielle de "utilisateur1".

5. Modifier le "nom" de "utilisateur2" en "Ali".

6. Modifier la ville de "utilisateur2" en "Kara".

7. Afficher "utilisateur1".

8. Afficher "utilisateur2".

9. Observer le comportement de l'objet "adresse".

10. Créer ensuite une copie indépendante de l'objet "adresse" avec le spread operator.

Objectif :
Comprendre la différence entre une copie superficielle et une copie
indépendante d'un objet imbriqué.
*/

const utilisateur1 = {
  nom: "Mohamed",
  age: 27,
  adresse: {
    ville: "Lomé",
    pays: "Togo",
  },
};

console.log(utilisateur1.nom);

console.log(utilisateur1.adresse.ville);

const utilisateur2 = {
  ...utilisateur1,
  adresse: {
    ...utilisateur1.adresse,
  },
};

utilisateur2.nom = "Ali";

utilisateur2.adresse.ville = "Kara";

console.log(utilisateur1);

console.log(utilisateur2);

console.log(utilisateur1.adresse.ville);

console.log(utilisateur2.adresse.ville);
