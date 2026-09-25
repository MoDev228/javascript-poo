# Encapsulation en JavaScript

## 1. Pourquoi l'encapsulation ?

L'encapsulation consiste à regrouper les données et les comportements d'un objet tout en contrôlant la manière dont son état interne peut être consulté ou modifié.

Sans encapsulation, une propriété publique peut être modifiée directement :

```js
compte.solde = -5000;
```

La classe ne contrôle alors plus les modifications.

L'objectif est donc de définir une **interface publique** permettant d'utiliser l'objet tout en protégeant son état interne.

## 2. Champs privés

JavaScript permet de déclarer un champ privé avec le préfixe `#` :

```js
class Compte {
  #solde;

  constructor(soldeInitial) {
    this.#solde = soldeInitial;
  }
}
```

`#solde` n'est accessible que depuis le corps de la classe.

Une tentative comme :

```js
console.log(compte.#solde);
```

provoque une erreur de syntaxe.

## 3. Modifier l'état avec une méthode

Au lieu de permettre une modification directe, on peut fournir une méthode :

```js
deposer(montant) {
  if (montant <= 0) {
    return;
  }

  this.#solde += montant;
}
```

La classe contrôle ainsi les valeurs qui peuvent modifier son état.

## 4. Lire un champ privé

Un champ privé ne peut pas être lu directement depuis l'extérieur.

On peut exposer une méthode :

```js
getSolde() {
  return this.#solde;
}
```

ou utiliser un getter :

```js
get solde() {
  return this.#solde;
}
```

Le getter permet ensuite :

```js
console.log(compte.solde);
```

## 5. Encapsulation et validation

L'encapsulation permet notamment de placer les règles métier au bon endroit.

Exemple :

```js
deposer(montant) {
  if (montant <= 0) {
    console.log("Montant invalide.");
    return;
  }

  this.#solde += montant;
}
```

Le code extérieur demande simplement :

```js
compte.deposer(500);
```

La classe décide elle-même si cette opération est autorisée.

## 6. Interface publique et état interne

Dans une classe correctement encapsulée :

- `#solde` est un détail interne.
- `deposer()` est une opération publique.
- `solde` est une information accessible en lecture.
- les règles de modification restent dans la classe.

On sépare donc ce que l'utilisateur de la classe **peut faire** de la manière dont la classe **fonctionne en interne**.

## 7. Encapsulation ≠ sécurité absolue

Un champ privé JavaScript protège l'accès au niveau du langage, mais cela ne transforme pas une application cliente en coffre-fort.

L'encapsulation sert principalement à :

- protéger l'état interne contre les modifications accidentelles ;
- imposer des règles métier ;
- réduire le couplage ;
- rendre le code plus prévisible ;
- faciliter la maintenance.

Les secrets réels ne doivent jamais être placés dans du code JavaScript exécuté côté client.

## 8. À retenir

```text
État interne
    ↓
Champ privé #
    ↓
Méthodes / getters publics
    ↓
Interface contrôlée
```

L'encapsulation est donc avant tout un **principe de conception**. Les champs privés `#` sont un outil JavaScript permettant de mettre ce principe en pratique.
