/*
Exercice 2 — Références et copie d'objets

1. Créer un objet "utilisateur1" avec les propriétés :
   - "nom"
   - "age"

2. Créer "utilisateur2" comme une vraie copie de "utilisateur1" avec le spread operator.

3. Modifier le "nom" de "utilisateur2" en "Ali".

4. Modifier l'"age" de "utilisateur2" en 30.

5. Afficher "utilisateur1".

6. Afficher "utilisateur2".

Objectif :
Vérifier que la modification de "utilisateur2" ne modifie pas "utilisateur1".
*/

const utilisateur1 = {

  nom: "Mohamed",

  age: 27

}

const utilisateur2 = {...utilisateur1}

console.log(utilisateur1)

console.log(utilisateur2)

utilisateur2.nom = "Ali"

utilisateur2.age = 30

console.log(utilisateur1)

console.log(utilisateur2)
