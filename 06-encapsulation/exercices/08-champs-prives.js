/*
Exercice 8 — Les champs privés

1. Créer une classe "Utilisateur".

2. Ajouter deux champs privés :
   - "#nom"
   - "#age"

3. Le constructeur reçoit :
   - "nom"
   - "age"

4. Initialiser les deux champs privés.

5. Créer une méthode "afficherInformations()".

6. Cette méthode doit afficher :
   "Nom : Mohamed"
   "Age : 27"

7. Créer une instance avec :
   nom = "Mohamed"
   age = 27

8. Appeler "afficherInformations()".

9. Essayer ensuite d'afficher directement "#nom"
   depuis l'extérieur de la classe.

Objectif :

Comprendre qu'un champ privé avec "#"
n'est accessible que depuis la classe qui le possède.
*/

class Utilisateur {
  #nom;
  #age;

  constructor(nom, age) {
    this.#nom = nom;
    this.#age = age;
  }

  afficherInformations() {
    console.log(`Nom : ${this.#nom}`);
    console.log(`Age : ${this.#age}`);
  }
}

const utilisateur = new Utilisateur("Mohamed", 27);

utilisateur.afficherInformations();

console.log(utilisateur.nom);
