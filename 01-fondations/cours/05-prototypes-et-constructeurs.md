# 05 — `.prototype`, `[[Prototype]]` et les fonctions constructrices

## 1. Deux notions à ne pas confondre

JavaScript utilise deux notions différentes :

- `[[Prototype]]` : le lien interne d'un objet vers son prototype.
- `.prototype` : une propriété principalement présente sur les fonctions constructrices.

### Exemple

```js
function Utilisateur(nom) {
  this.nom = nom;
}

console.log(Utilisateur.prototype);
```

Ici, `Utilisateur.prototype` est l'objet qui servira de prototype aux objets créés avec `new Utilisateur(...)`.

Pour une instance :

```js
const utilisateur = new Utilisateur("Mohamed");

console.log(Object.getPrototypeOf(utilisateur) === Utilisateur.prototype);
```

Le résultat est `true`.

## 2. Le rôle de `new`

Lorsque l'on écrit :

```js
const utilisateur = new Utilisateur("Mohamed", 27);
```

JavaScript réalise notamment les opérations suivantes :

1. crée un nouvel objet ;
2. lui associe `Utilisateur.prototype` comme `[[Prototype]]` ;
3. appelle `Utilisateur` avec `this` correspondant au nouvel objet ;
4. retourne l'objet créé.

On peut donc retenir :

```text
Utilisateur
    │
    │ .prototype
    ↓
Utilisateur.prototype
    │
    │ [[Prototype]]
    ↓
utilisateur
```

## 3. Mettre les méthodes sur le prototype

Une méthode peut être ajoutée directement au prototype :

```js
Utilisateur.prototype.sePresenter = function () {
  console.log(`Je m'appelle ${this.nom}.`);
};
```

Tous les objets créés avec `new Utilisateur(...)` peuvent alors utiliser cette méthode.

La fonction n'est pas recréée pour chaque instance.

```js
const utilisateur1 = new Utilisateur("Mohamed");
const utilisateur2 = new Utilisateur("Ali");

console.log(utilisateur1.sePresenter === utilisateur2.sePresenter);
// true
```

C'est l'un des intérêts importants des prototypes : partager les méthodes entre les instances.

## 4. Recherche d'une propriété

Lorsque JavaScript rencontre :

```js
utilisateur.sePresenter()
```

il cherche d'abord `sePresenter` dans `utilisateur`.

Si la propriété n'existe pas directement, JavaScript remonte la chaîne des prototypes et cherche dans `Utilisateur.prototype`.

C'est le même mécanisme que celui observé avec `Object.create()` dans l'exercice précédent.

## 5. Vérifier le prototype

On peut utiliser :

```js
Object.getPrototypeOf(utilisateur)
```

Pour vérifier qu'une instance utilise bien le prototype du constructeur :

```js
Object.getPrototypeOf(utilisateur) === Utilisateur.prototype
```

Le résultat attendu est `true`.

## 6. La propriété `constructor`

Le prototype créé pour une fonction constructrice possède généralement une propriété `constructor` qui pointe vers la fonction constructrice :

```js
Utilisateur.prototype.constructor === Utilisateur
// true
```

Cela permet notamment d'identifier le constructeur associé au prototype.

## 7. Pourquoi cette distinction est importante

Ces notions sont fondamentales pour comprendre ensuite :

- les classes JavaScript ;
- `extends` ;
- `super` ;
- `instanceof` ;
- l'héritage prototypal ;
- le partage des méthodes entre instances.

Les classes JavaScript utilisent elles-mêmes le système de prototypes sous le capot.

## 8. Robustesse

Les prototypes sont puissants, mais il faut éviter de modifier globalement les prototypes natifs comme `Object.prototype`, `Array.prototype`, etc., sans raison précise.

Une modification globale peut affecter de nombreux morceaux d'une application et provoquer des comportements difficiles à prévoir.

## À retenir

- `[[Prototype]]` est le lien interne d'un objet vers son prototype.
- `.prototype` est une propriété utilisée notamment par les fonctions constructrices.
- `new` crée une instance dont le `[[Prototype]]` pointe vers `Constructeur.prototype`.
- Les méthodes placées sur le prototype peuvent être partagées par toutes les instances.
- `Object.getPrototypeOf(instance)` permet d'observer le prototype d'une instance.
