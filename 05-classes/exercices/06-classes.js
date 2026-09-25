/*
Exercice 6 — Les classes JavaScript

1. Créer une classe "Utilisateur".

2. Créer un constructeur qui reçoit :
   - "nom"
   - "age"

3. Enregistrer ces deux informations dans l'instance
   avec "this".

4. Ajouter une méthode "sePresenter()".

5. La méthode doit afficher :
   "Je m'appelle Mohamed et j'ai 27 ans."

   Elle doit utiliser "this.nom" et "this.age".

6. Créer deux instances :
   - utilisateur1 : Mohamed, 27 ans
   - utilisateur2 : Ali, 30 ans

7. Appeler "sePresenter()" sur les deux utilisateurs.

8. Vérifier que "utilisateur1" est une instance de
   la classe "Utilisateur" avec "instanceof".

9. Vérifier la même chose pour "utilisateur2".

10. Vérifier que les deux utilisateurs utilisent
    exactement la même fonction "sePresenter".

11. Vérifier que le prototype de "utilisateur1"
    est bien "Utilisateur.prototype".

Objectif :

Comprendre la syntaxe "class", le constructeur, "new",
"this", les méthodes de classe et le lien entre une classe
et son prototype.
*/

class Utilisateur {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  sePresenter() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

const utilisateur1 = new Utilisateur("Mohamed", 27);
const utilisateur2 = new Utilisateur("Ali", 30);

utilisateur1.sePresenter();
utilisateur2.sePresenter();

console.log(utilisateur1 instanceof Utilisateur);
console.log(utilisateur2 instanceof Utilisateur);

console.log(utilisateur1.sePresenter === utilisateur2.sePresenter);

console.log(Object.getPrototypeOf(utilisateur1) === Utilisateur.prototype);
