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
