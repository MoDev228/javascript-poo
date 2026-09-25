# Classes JavaScript

## 1. Pourquoi les classes ?

Les classes offrent une syntaxe plus lisible pour créer des objets partageant une structure et des méthodes.

Elles reposent toujours sur le système de prototypes de JavaScript.

## 2. Déclarer une classe

```js
class Utilisateur {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  sePresenter() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}
```

## 3. Le constructeur

`constructor()` est exécuté lorsqu'une instance est créée avec `new`.

```js
const utilisateur = new Utilisateur("Mohamed", 27);
```

Dans le constructeur, `this` représente l'instance en cours de création.

## 4. Les méthodes

Une méthode définie dans une classe est disponible sur les instances.

```js
utilisateur.sePresenter();
```

Les méthodes de classe sont placées sur le prototype de la classe et sont donc partagées entre les instances.

## 5. Classe, instance et prototype

```js
Object.getPrototypeOf(utilisateur) === Utilisateur.prototype;
```

Cette expression retourne `true`.

Deux instances partagent donc la même fonction de méthode :

```js
utilisateur1.sePresenter === utilisateur2.sePresenter;
```

## 6. `instanceof`

```js
utilisateur1 instanceof Utilisateur;
```

permet de vérifier qu'un objet appartient à la chaîne de prototypes de `Utilisateur`.

## 7. Plusieurs instances

Une même classe peut produire plusieurs objets indépendants :

```js
const utilisateur1 = new Utilisateur("Mohamed", 27);
const utilisateur2 = new Utilisateur("Ali", 30);
```

Chaque instance possède ses propres données (`nom`, `age`), tandis que les méthodes sont partagées via le prototype.

## 8. Classe = syntaxe au-dessus des prototypes

Les classes ne remplacent pas les prototypes.

Elles fournissent une syntaxe plus pratique pour utiliser le mécanisme de prototypes de JavaScript.

## 9. Attention à `this`

La valeur de `this` dépend de la manière dont une méthode est appelée. Ce comportement deviendra particulièrement important avec les callbacks et les méthodes passées comme fonctions.

## 10. À retenir

- `class` définit une classe.
- `constructor()` initialise une instance.
- `new` crée une instance.
- `this` désigne l'instance dans ce contexte.
- Les méthodes de classe sont partagées via le prototype.
- `instanceof` permet de vérifier la relation avec une classe.
- Les classes utilisent toujours le système de prototypes de JavaScript.

## Suite

La prochaine étape est l'encapsulation : contrôler l'accès aux données et aux comportements d'un objet.
