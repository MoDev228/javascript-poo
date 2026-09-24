# Cours 03 — Objets imbriqués et copie superficielle

## 1. Qu'est-ce qu'un objet imbriqué ?

Un objet imbriqué est un objet placé à l'intérieur d'un autre objet.

```js
const utilisateur = {
  nom: "Mohamed",
  age: 27,
  adresse: {
    ville: "Lomé",
    pays: "Togo"
  }
};
```

Ici, `utilisateur` contient un autre objet appelé `adresse`.

## 2. Accéder aux propriétés imbriquées

On peut accéder à une propriété avec la notation point :

```js
console.log(utilisateur.adresse.ville);
```

Ou avec la notation entre crochets :

```js
console.log(utilisateur["adresse"]["ville"]);
```

## 3. Modifier une propriété imbriquée

```js
utilisateur.adresse.ville = "Kara";
```

## 4. Le problème avec le spread operator

Le spread operator permet de créer une copie superficielle :

```js
const utilisateur2 = { ...utilisateur1 };
```

Les propriétés du premier niveau sont copiées, mais les objets imbriqués ne sont pas clonés.

Par exemple :

```js
const utilisateur1 = {
  nom: "Mohamed",
  adresse: {
    ville: "Lomé"
  }
};

const utilisateur2 = { ...utilisateur1 };

utilisateur2.adresse.ville = "Kara";

console.log(utilisateur1.adresse.ville); // Kara
```

Les deux variables partagent ici le même objet `adresse`.

## 5. Pourquoi ?

Le spread copie la référence de l'objet imbriqué.

On peut représenter la situation ainsi :

```text
utilisateur1 ───┐
                ├──→ adresse
utilisateur2 ───┘
```

Modifier `utilisateur2.adresse` modifie donc également l'objet référencé par `utilisateur1.adresse`.

## 6. Créer une copie indépendante de l'objet imbriqué

On peut également utiliser le spread au niveau de l'objet imbriqué :

```js
const utilisateur2 = {
  ...utilisateur1,
  adresse: {
    ...utilisateur1.adresse
  }
};
```

On obtient alors deux objets `adresse` différents.

```text
utilisateur1 ───→ adresse A

utilisateur2 ───→ adresse B
```

Modifier l'un ne modifie plus l'autre.

## 7. Attention aux objets plus profondément imbriqués

Le spread reste une copie superficielle.

Avec :

```js
const utilisateur = {
  adresse: {
    details: {
      quartier: "Agoè"
    }
  }
};
```

copier seulement `adresse` ne clone pas automatiquement `details`.

Pour les structures profondément imbriquées, il existe d'autres stratégies de copie, notamment `structuredClone()`.

## 8. Valeurs primitives et objets

Les valeurs primitives comme les chaînes, nombres et booléens sont copiées comme des valeurs.

Les objets, eux, sont manipulés via des références.

C'est pourquoi il faut distinguer :

- copie de valeur ;
- copie de référence ;
- copie superficielle.

## 9. À retenir

```js
const copie = { ...objet };
```

effectue une copie superficielle.

Pour copier également un objet imbriqué à un niveau donné :

```js
const copie = {
  ...objet,
  adresse: {
    ...objet.adresse
  }
};
```

Le spread ne clone pas récursivement toute la structure.

## 10. Pourquoi c'est important

Ce comportement est fréquent dans les applications JavaScript : données utilisateur, réponses d'API, configurations, paniers d'achat et états d'application.

Comprendre les références et les copies permet d'éviter des modifications involontaires.

Ce concept sera également important lorsque nous étudierons React et la gestion de l'état.

## 11. Sécurité et robustesse

Les données provenant d'une API, d'un formulaire ou d'une autre source externe doivent toujours être considérées comme des données non fiables.

La copie d'un objet ne valide ni ne sécurise son contenu. La validation et la protection contre les données malveillantes sont des sujets distincts.

## 12. Prochain concept

Le prochain cours introduira les **prototypes JavaScript**, qui permettent de comprendre plus profondément le fonctionnement des objets et de la chaîne de prototypes.
