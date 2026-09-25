# Champs privés en JavaScript

## 1. Déclaration

Un champ privé se déclare avec le préfixe `#` :

```js
class Utilisateur {
  #nom;
  #age;
}
```

Ces champs appartiennent à l'instance, mais leur accès est limité au corps de la classe.

## 2. Initialisation

Les champs privés peuvent être initialisés dans le constructeur :

```js
class Utilisateur {
  #nom;
  #age;

  constructor(nom, age) {
    this.#nom = nom;
    this.#age = age;
  }
}
```

## 3. Accès depuis la classe

Une méthode de la classe peut utiliser les champs privés :

```js
afficherInformations() {
  console.log(this.#nom);
  console.log(this.#age);
}
```

Le mot-clé `this` désigne ici l'instance courante.

## 4. Accès depuis l'extérieur

Un champ privé ne peut pas être utilisé directement depuis l'extérieur :

```js
const utilisateur = new Utilisateur("Mohamed", 27);

utilisateur.#nom; // Erreur de syntaxe
```

En revanche, une méthode publique peut utiliser le champ privé et exposer uniquement l'information prévue par la classe.

## 5. Champ privé et propriété publique

`#nom` et `nom` ne désignent pas la même chose.

Si la classe contient :

```js
#nom;
```

cela ne crée pas une propriété publique accessible avec :

```js
utilisateur.nom;
```

Cette expression chercherait une propriété publique appelée `nom`.

## 6. Pourquoi utiliser les champs privés ?

Les champs privés permettent notamment de :

- protéger l'état interne d'un objet ;
- empêcher les modifications directes ;
- imposer une interface publique contrôlée ;
- réduire les dépendances entre le code extérieur et l'implémentation interne.

## 7. À retenir

```text
#nom
  ↓
champ privé
  ↓
accessible dans la classe
  ↓
pas d'accès direct depuis l'extérieur
```

Le caractère `#` est donc une véritable syntaxe de confidentialité du langage JavaScript, et pas simplement une convention de nommage.
