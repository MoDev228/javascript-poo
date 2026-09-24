/*
Exercice 4 — Premiers pas avec les prototypes

1. Créer un objet "animal" contenant une méthode "manger()"
   qui affiche "Je mange.".

2. Créer un objet "chat" avec Object.create(animal).

3. Appeler chat.manger().

4. Ajouter directement à "chat" une propriété "nom" avec la valeur "Mimi".

5. Afficher le nom.

6. Vérifier que "manger" n'est pas une propriété directe de "chat"
   avec Object.hasOwn().

7. Vérifier que le prototype de "chat" est bien "animal"
   avec Object.getPrototypeOf().

Objectif :
Comprendre pourquoi chat.manger() fonctionne alors que "manger"
n'est pas une propriété directe de "chat".
*/

const animal = {
  manger() {
    console.log("Je mange.");
  },
};

const chat = Object.create(animal);

chat.manger();

chat.nom = "Mimi";

console.log(chat.nom);

console.log(Object.hasOwn(chat, "manger"));

console.log(Object.getPrototypeOf(chat) === animal);
