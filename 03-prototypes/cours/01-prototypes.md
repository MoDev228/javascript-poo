# Cours 04 — Les prototypes JavaScript

## 1. Pourquoi les prototypes existent-ils ?

En JavaScript, plusieurs objets peuvent avoir besoin des mêmes méthodes. Les prototypes permettent de partager des propriétés et des méthodes sans créer une copie de chaque fonction dans chaque objet.

## 2. Chaque objet possède un prototype

Un objet possède un lien interne appelé `[[Prototype]]`.

On peut consulter ce prototype avec :

```js
Object.getPrototypeOf(objet);
```

La relation peut être représentée ainsi :

```text
objet
  ↓ [[Prototype]]
prototype
  ↓
...
  ↓
null
```

## 3. La chaîne de prototypes

Lorsqu'on demande une propriété à un objet, JavaScript cherche d'abord dans l'objet lui-même.

S'il ne trouve pas la propriété, il continue dans son prototype, puis dans le prototype du prototype, jusqu'à trouver la propriété ou atteindre `null`.

Exemple :

```js
const utilisateur = {
  nom: "Mohamed",
};

console.log(utilisateur.toString());
```

`toString()` n'est pas défini directement dans `utilisateur`. JavaScript le trouve dans sa chaîne de prototypes.

## 4. Object.prototype

Les objets classiques ont généralement `Object.prototype` dans leur chaîne de prototypes.

Il contient notamment des méthodes comme `toString()` et `hasOwnProperty()`.

## 5. Créer un objet avec un prototype

`Object.create()` permet de créer un objet avec un prototype précis :

```js
const animal = {
  manger() {
    console.log("Je mange.");
  },
};

const chat = Object.create(animal);
```

La relation est :

```text
chat
  ↓
animal
  ↓
Object.prototype
  ↓
null
```

Ainsi :

```js
chat.manger();
```

fonctionne même si `manger` n'est pas une propriété directe de `chat`.

## 6. Comment JavaScript recherche une propriété

Pour :

```js
chat.manger();
```

JavaScript cherche conceptuellement :

1. `manger` dans `chat` ;
2. si elle n'existe pas, dans le prototype de `chat` ;
3. puis dans le prototype suivant ;
4. jusqu'à trouver la propriété ou atteindre `null`.

C'est la **chaîne des prototypes** (*prototype chain*).

## 7. Propriété directe et propriété héritée

On peut vérifier si une propriété appartient directement à un objet avec :

```js
Object.hasOwn(objet, "propriete");
```

Exemple :

```js
const animal = {
  manger() {
    console.log("Je mange.");
  },
};

const chat = Object.create(animal);

console.log(Object.hasOwn(chat, "manger")); // false
console.log(Object.getPrototypeOf(chat) === animal); // true
```

`manger` est héritée du prototype et n'est donc pas une propriété directe de `chat`.

## 8. Redéfinir une propriété

Une propriété présente dans le prototype peut être masquée par une propriété directe :

```js
const animal = {
  nom: "Animal",
};

const chat = Object.create(animal);

chat.nom = "Mimi";
```

Maintenant, `chat.nom` vaut `"Mimi"`. La propriété directe de `chat` est utilisée avant celle du prototype.

Ce phénomène est souvent appelé **shadowing**.

## 9. Modifier un prototype

On peut récupérer un prototype avec :

```js
Object.getPrototypeOf(objet);
```

Et le modifier avec :

```js
Object.setPrototypeOf(objet, prototype);
```

Cependant, dans le code courant, il vaut mieux réfléchir soigneusement avant de modifier dynamiquement le prototype d'un objet.

## 10. Pourquoi éviter de privilégier __proto__

On peut rencontrer :

```js
objet.__proto__
```

Mais pour apprendre et manipuler explicitement les prototypes, on privilégie :

```js
Object.getPrototypeOf()
Object.setPrototypeOf()
Object.create()
```

## 11. Pourquoi les prototypes sont importants pour la POO

La syntaxe moderne `class` de JavaScript repose sur le système de prototypes.

Comprendre les prototypes permet donc de mieux comprendre ensuite :

- `class`
- `extends`
- `super`
- `instanceof`
- l'héritage en JavaScript.

## 12. À retenir

Un objet peut déléguer la recherche de propriétés à son prototype.

```text
objet
 ↓
prototype
 ↓
prototype du prototype
 ↓
...
 ↓
null
```

Les points essentiels sont :

```js
Object.getPrototypeOf(objet);
Object.setPrototypeOf(objet, prototype);
Object.create(prototype);
Object.hasOwn(objet, "propriete");
```

Le prototype est donc au cœur du mécanisme d'héritage de JavaScript.
