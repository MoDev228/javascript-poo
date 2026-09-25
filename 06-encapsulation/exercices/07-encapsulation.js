/*
Exercice 7 — Première encapsulation

1. Créer une classe "Compte".

2. Ajouter un champ privé "#solde".

3. Le constructeur reçoit "soldeInitial"
   et initialise "#solde".

4. Créer une méthode "deposer(montant)".

5. Refuser un montant inférieur ou égal à 0.

6. Si le montant est valide, l'ajouter au solde.

7. Créer une méthode "getSolde()"
   qui retourne le solde actuel.

8. Créer un compte avec un solde initial de 1000.

9. Déposer 500.

10. Afficher le solde.

11. Essayer de déposer -200.

12. Afficher à nouveau le solde.

Objectif :

Comprendre pourquoi une donnée peut être privée
et comment une classe peut contrôler les modifications
de son état interne.
*/

class Compte {
  #solde;

  constructor(soldeInitial) {
    this.#solde = soldeInitial;
  }

  deposer(montant) {
    if (montant <= 0) {
      console.log("Montant invalide.");
      return;
    }

    this.#solde += montant;
  }

  get solde() {
    return this.#solde;
  }
}

const compte = new Compte(1000);

compte.deposer(500);

console.log(compte.solde);

compte.deposer(-200);

console.log(compte.solde);
