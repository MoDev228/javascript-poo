/*
Exercice 5 — Fonctions constructrices et prototype

1. Créer une fonction constructrice "Utilisateur" qui reçoit :
   - "nom"
   - "age"

2. Utiliser "this" pour enregistrer "nom" et "age" dans l'instance.

3. Ajouter une méthode "sePresenter()" à "Utilisateur.prototype".

4. La méthode doit afficher :
   "Je m'appelle Mohamed et j'ai 27 ans."
   en utilisant "this".

5. Créer deux utilisateurs avec "new Utilisateur(...)".

6. Appeler "sePresenter()" sur les deux utilisateurs.

7. Vérifier que le prototype du premier utilisateur est
   "Utilisateur.prototype".

8. Vérifier que le prototype du deuxième utilisateur est
   "Utilisateur.prototype".

9. Vérifier que les deux utilisateurs utilisent exactement
   la même fonction "sePresenter".

Objectif :
Comprendre le rôle d'une fonction constructrice, de "new",
de "Utilisateur.prototype" et du partage des méthodes.
*/

function Utilisateur(nom, age) {
  this.nom = nom;
  this.age = age;
}

Utilisateur.prototype.sePresenter = function () {
  console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
};

const utilisateur1 = new Utilisateur("Mohamed", 27);

const utilisateur2 = new Utilisateur("Ali", 30);

utilisateur1.sePresenter();

utilisateur2.sePresenter();

console.log(Object.getPrototypeOf(utilisateur1) === Utilisateur.prototype);

console.log(Object.getPrototypeOf(utilisateur2) === Utilisateur.prototype);

console.log(utilisateur1.sePresenter === utilisateur2.sePresenter);
