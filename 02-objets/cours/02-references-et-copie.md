# Cours 02 — Références, copie d'objets et valeur vs référence

## 1. Pourquoi ce concept est important

En JavaScript, une variable qui contient un objet contient une **référence vers cet objet**.

C'est essentiel à comprendre avant d'aller plus loin en POO.

---

## 2. Deux variables peuvent référencer le même objet

```js
const personne1 = {
    nom: "Mohamed"
};

const personne2 = personne1;

personne2.nom = "Ali";

console.log(personne1.nom);
console.log(personne2.nom);
```

Résultat :

```text
Ali
Ali
```

Pourquoi ?

Parce que :

```js
const personne2 = personne1;
```

ne crée pas un nouvel objet.

Les deux variables référencent le même objet :

```text
personne1 ──┐
            ├──> { nom: "Ali" }
personne2 ──┘
```

Lorsque l'objet est modifié via `personne2`, la modification est donc visible via `personne1`.

---

## 3. Créer une copie avec le spread operator

Pour créer un nouvel objet à partir des propriétés d'un autre objet, on peut utiliser le spread operator :

```js
const personne1 = {
    nom: "Mohamed"
};

const personne2 = { ...personne1 };

personne2.nom = "Ali";

console.log(personne1.nom);
console.log(personne2.nom);
```

Résultat :

```text
Mohamed
Ali
```

Cette fois, les deux variables référencent des objets différents :

```text
personne1 ──> { nom: "Mohamed" }

personne2 ──> { nom: "Ali" }
```

---

## 4. Référence vs copie

### Référence

```js
const utilisateur2 = utilisateur1;
```

Les deux variables pointent vers le même objet.

### Copie superficielle

```js
const utilisateur2 = { ...utilisateur1 };
```

Un nouvel objet est créé avec les propriétés de `utilisateur1`.

---

## 5. Attention : le spread fait une copie superficielle

Le spread operator ne fait pas automatiquement une copie profonde de tous les objets imbriqués.

```js
const utilisateur1 = {
    nom: "Mohamed",
    adresse: {
        ville: "Lome"
    }
};

const utilisateur2 = { ...utilisateur1 };

utilisateur2.adresse.ville = "Kara";

console.log(utilisateur1.adresse.ville);
```

Résultat :

```text
Kara
```

L'objet extérieur a été copié, mais `adresse` reste une référence vers le même objet imbriqué.

Nous étudierons les différentes techniques de copie profonde plus tard.

---

## 6. Valeurs primitives et objets

JavaScript distingue notamment les **types primitifs** des **objets**.

Exemple avec une valeur primitive :

```js
let age1 = 27;
let age2 = age1;

age2 = 30;

console.log(age1); // 27
console.log(age2); // 30
```

Ici, modifier `age2` ne modifie pas `age1`.

Avec un objet :

```js
const utilisateur1 = {
    age: 27
};

const utilisateur2 = utilisateur1;

utilisateur2.age = 30;

console.log(utilisateur1.age); // 30
console.log(utilisateur2.age); // 30
```

---

## 7. `const` ne rend pas un objet immuable

Ceci est parfaitement valide :

```js
const utilisateur = {
    nom: "Mohamed"
};

utilisateur.nom = "Ali";
```

`const` empêche de réassigner la variable :

```js
utilisateur = {};
```

Mais il n'empêche pas de modifier les propriétés de l'objet.

---

## 8. À retenir

```js
objet2 = objet1;
```

➡️ Les deux variables référencent le même objet.

```js
objet2 = { ...objet1 };
```

➡️ Un nouvel objet est créé : c'est une **copie superficielle**.

> **Copier un objet et copier une référence ne sont pas la même chose.**

---

## 9. Sécurité et robustesse

Les objets peuvent contenir des données provenant de sources externes : formulaire, API, fichier JSON, stockage local, etc.

Créer une copie d'un objet ne rend pas automatiquement les données fiables ou sûres.

La validation et la protection des données doivent toujours être traitées séparément.

---

## Prochain concept

Nous approfondirons les **objets imbriqués**, les références partagées et les techniques de copie avant de poursuivre vers les prototypes.
