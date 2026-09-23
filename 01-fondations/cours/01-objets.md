# 01 — Les objets en JavaScript

## Objectifs

À la fin de ce cours, tu dois être capable de :

- expliquer ce qu'est un objet JavaScript ;
- distinguer une variable, une propriété, une clé et une valeur ;
- accéder à une propriété avec la notation pointée ;
- accéder à une propriété avec la notation entre crochets ;
- modifier une propriété ;
- ajouter et supprimer une propriété ;
- expliquer pourquoi les objets sont importants en POO JavaScript.

---

## 1. Qu'est-ce qu'un objet ?

Un objet JavaScript permet de regrouper plusieurs informations liées à une même entité sous forme de **propriétés**.

Exemple :

```js
const utilisateur = {
    nom: "Mohamed",
    age: 27
};
```

Ici :

- `utilisateur` est le **nom de la variable** qui contient une référence vers l'objet ;
- l'objet est la valeur créée par les accolades `{ ... }` ;
- `nom` et `age` sont des **propriétés** ;
- `"Mohamed"` et `27` sont les **valeurs** associées à ces propriétés.

### Vocabulaire

Dans :

```js
const utilisateur = {
    nom: "Mohamed",
    age: 27
};
```

on peut représenter les données ainsi :

| Élément | Rôle |
|---|---|
| `utilisateur` | variable qui référence l'objet |
| `nom` | propriété / clé |
| `"Mohamed"` | valeur de la propriété `nom` |
| `age` | propriété / clé |
| `27` | valeur de la propriété `age` |

> En JavaScript, on emploie souvent « clé » et « propriété » dans ce contexte. Pour apprendre correctement, retiens surtout qu'une propriété associe un nom à une valeur.

---

## 2. Lire une propriété

### Notation pointée

La manière la plus courante est :

```js
console.log(utilisateur.nom);
console.log(utilisateur.age);
```

Résultat :

```text
Mohamed
27
```

La structure est :

```js
objet.propriete
```

---

## 3. La notation entre crochets

On peut également écrire :

```js
console.log(utilisateur["nom"]);
console.log(utilisateur["age"]);
```

Le résultat est le même :

```text
Mohamed
27
```

Pour une propriété connue à l'avance, ces deux écritures donnent ici la même valeur :

```js
utilisateur.nom
utilisateur["nom"]
```

### Pourquoi avoir deux syntaxes ?

La notation entre crochets devient particulièrement utile lorsque le nom de la propriété est contenu dans une variable.

```js
const propriete = "nom";

console.log(utilisateur[propriete]);
```

Résultat :

```text
Mohamed
```

Attention :

```js
console.log(utilisateur.propriete);
```

ne signifie pas la même chose.

Ici JavaScript cherche une propriété qui s'appelle littéralement `propriete`.

Avec :

```js
utilisateur[propriete]
```

JavaScript utilise la valeur de la variable `propriete`, ici `"nom"`.

C'est une différence fondamentale entre la notation pointée et la notation entre crochets.

---

## 4. Modifier une propriété

Une propriété peut être modifiée après la création de l'objet.

```js
const utilisateur = {
    nom: "Mohamed",
    age: 27
};

utilisateur.age = 28;

console.log(utilisateur.age);
```

Résultat :

```text
28
```

Il est plus précis de dire :

> L'instruction `utilisateur.age = 28` affecte la valeur `28` à la propriété `age`.

Elle ne fait pas simplement que « récupérer » l'âge : elle le **modifie**.

---

## 5. Ajouter une propriété

On peut ajouter une nouvelle propriété :

```js
utilisateur.email = "mohamed@example.com";
```

L'objet contient maintenant :

```js
{
    nom: "Mohamed",
    age: 28,
    email: "mohamed@example.com"
}
```

On peut aussi utiliser les crochets :

```js
utilisateur["ville"] = "Lomé";
```

---

## 6. Supprimer une propriété

Le mot-clé `delete` permet de supprimer une propriété :

```js
delete utilisateur.email;
```

Après cette instruction, la propriété `email` n'existe plus dans cet objet.

---

## 7. Une méthode est aussi une propriété

Un objet peut contenir une fonction.

On appelle généralement cette fonction une **méthode** lorsqu'elle appartient à un objet.

```js
const utilisateur = {
    nom: "Mohamed",

    sePresenter() {
        console.log(`Je suis ${this.nom}`);
    }
};

utilisateur.sePresenter();
```

Nous reviendrons en détail sur `this`.

Pour l'instant, retiens simplement qu'un objet peut contenir :

- des données ;
- des fonctions permettant de travailler avec ces données.

C'est une idée fondamentale de la programmation orientée objet.

---

## 8. Les objets sont au cœur de JavaScript

JavaScript utilise les objets dans de nombreuses parties du langage.

On rencontre des objets avec :

- les données d'une application ;
- les réponses d'une API ;
- les éléments du DOM ;
- les objets `Date` ;
- les objets `Array` ;
- les objets `Promise` ;
- les instances de classes.

La POO JavaScript repose donc sur une compréhension solide des objets.

---

## 9. Point important : `const` ne rend pas l'objet immuable

Cette déclaration :

```js
const utilisateur = {
    nom: "Mohamed"
};
```

n'empêche pas la modification des propriétés :

```js
utilisateur.nom = "Ali";
```

Cela fonctionne.

Ce que `const` empêche ici, c'est de réaffecter la variable à un autre objet :

```js
const utilisateur = {
    nom: "Mohamed"
};

utilisateur = {
    nom: "Ali"
};
```

Cette réaffectation provoque une erreur.

Il faut donc distinguer :

- **modifier le contenu de l'objet** ;
- **réaffecter la variable**.

---

## 10. Sécurité

Un objet n'est pas une frontière de sécurité.

Si les données contenues dans un objet viennent d'un utilisateur, d'un formulaire ou d'une API, elles doivent être considérées comme **non fiables**.

Exemple :

```js
const utilisateur = {
    nom: donneesExternes.nom
};
```

Le fait de placer une donnée dans un objet ne la rend pas sûre.

Plus tard, nous verrons notamment :

- la validation des données ;
- les risques XSS lors de l'affichage ;
- pourquoi `innerHTML` doit être utilisé avec prudence ;
- la pollution de prototype ;
- la séparation entre données utilisateur et logique de l'application.

---

## À retenir

```js
const utilisateur = {
    nom: "Mohamed",
    age: 27
};
```

À retenir :

1. `utilisateur` est une variable qui référence l'objet.
2. `nom` et `age` sont des propriétés.
3. `"Mohamed"` et `27` sont les valeurs de ces propriétés.
4. `utilisateur.nom` utilise la notation pointée.
5. `utilisateur["nom"]` utilise la notation entre crochets.
6. La notation entre crochets permet notamment d'utiliser une propriété dont le nom est stocké dans une variable.
7. Une propriété peut être modifiée, ajoutée ou supprimée.
8. Une méthode est une fonction associée à un objet.
9. `const` n'empêche pas de modifier les propriétés d'un objet.
10. Les objets ne remplacent pas la validation et les contrôles de sécurité.

---

## Prochaine étape

Le prochain cours portera sur :

**les références, la copie des objets et la différence entre valeur et référence.**

Cette notion est indispensable avant d'aller plus loin dans la POO JavaScript.
