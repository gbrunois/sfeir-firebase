# Sfeir Firebase

Application pour référencer et noter les bières !

:arrow_forward: `git checkout -f project-01-readme`.

## Step 1

- On commence par créer un nouveau projet à l'aide de la console Firebase (https://console.firebase.google.com)
- On ajoute la configuration du projet dans `src/api/index.js`
- Installer [Firebase] `npm install firebase --save`
- Lancer le projet avec `npm run serve`.

Ensuite:

- :sos: `git checkout -f project-01-solution`.
- :fast_forward: `git checkout -f project-02-readme`.

## Step 2

- Compléter le service d'authentification `src/api/auth.service.js`

```js
async function authenticate(provider, credentials) {
}

sync function logout() {
}

function getAuth() {
}
```

Ensuite:

- :sos: `git checkout -f project-02-solution`.
- :fast_forward: `git checkout -f project-03-readme`.

## Step 3

- Compléter les méthodes accès aux données `src/api/database.service.js`

```js
function getBeers() {}

function addNewBeer() {}

function rateBeer() {}
```

Ensuite:

- :sos: `git checkout -f project-03-solution`.
- :fast_forward: `git checkout -f project-04-readme`.

## Step 4

- Compléter la méthode `store` du fichier `src/api/storage.service.js`
- On stockera les images dans le dossier distant `images`
- L'url de téléchargement de l'image sera stockée dans l'objet `beer`

```js
function store() {}
```

Ensuite:

- :sos: `git checkout -f project-04-solution`.
- :fast_forward: `git checkout -f project-05-readme`.

## Step 5

On va déployer une cloud function pour calculer les notes moyennes

- On commence par installer les [firebase-tools](npm install -g firebase-tools)
- Puis on initialise une application firebase `firebase init`
- On ne cochera que [Cloud Functions] et on codera en javascript

Cloud function

- On va modifier le fichier `./functions/index.js`
- On utilisera le trigger `write`sur la référence `/users-rates/{beerKey}/{userId}/rate` pour mettre à jour la note d'une bière
- Exécuter `firebase deploy --only functions`pour déployer la cloud function
- Exécuter `firebase functions:log`pour consulter les logs

Ensuite:

- :sos: `git checkout -f project-05-solution`.
- :fast_forward: `git checkout -f project-06-readme`.

## Step 6

Ensuite:

- :sos: `git checkout -f project-06-solution`.
- :fast_forward: `git checkout -f project-07-readme`.
