# Argent Bank API

Cette Base de code contient le code nécessaire pour éxécuter le backend Argent Bank.

## Getting Started

### Prerequisites

Argent Bank utilise la pile technologique suivante:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Veuillez vous assurer que vous disposez des bonnes versions et téléchargez les deux packages. Vous pouvez le vérifier en utilisant les commandes suivantes dans votre Terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Forkez ce depôt
1. Clonez le dépôt sur votre Ordinateur
1. Ouvrez une fenêtre de Terminal dans le projet cloné
1. Exécutez les commandes suivantes:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Votre serveur devrait maintenant fonctionner sur http://locahost:3001 et vous aurez deux utilisateurs dans votre base de données MongoDB !

## Populated Database Data

Une fois que vous avez exécuté le script `populate-db`, vous devriez avec deux utilisateurs dans votre base de données :

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

Pour en savoir plus sur le fonctionnement de l'API, une fois que vous avez démarré votre environnement local, vous pouvez visiter : http://localhost:3001/api-docs

## Design Assets
Du HTML et CSS statiques ont été créés pour la majeure partie du site et se trouvent dans : `/designs`.

Pour certaines fonctionnalités dynmiques, comme le basculement de l'édition utilisateur, il existe une maquette dans `/designs/wireframes/edit-user-name.png`.

Et pour le modèle API que vous proposerez pour les transactions, le wireframe se trouve dans `/designs/wireframes/transactions.png`.
