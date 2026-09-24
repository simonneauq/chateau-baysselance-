# Château Baysselance

Site vitrine bilingue (FR/EN) du Château Baysselance, domaine viticole en AOC Graves à Landiras.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · next-intl v4

## Démarrer

Nécessite Node 20+ :

```bash
export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 20

npm install
npm run dev      # http://localhost:3000
```

Autres commandes : `npm run build`, `npm run lint`.

## Formulaire de contact

Le formulaire (`app/actions/contact.ts`) envoie un email via [Resend](https://resend.com) à l'adresse définie dans `CONTACT_TO_EMAIL`. Variables requises (fichier `.env.local`, non commité) :

```bash
RESEND_API_KEY=...
CONTACT_TO_EMAIL=...
```

Sans `RESEND_API_KEY`, les messages sont seulement journalisés côté serveur (mode dégradé pour le développement local). Voir `.env.local.example` pour la variable optionnelle `CONTACT_FROM_EMAIL` et la note sur la vérification de domaine Resend nécessaire pour envoyer à une adresse autre que celle du compte Resend.

## Documentation

Voir `CLAUDE.md` pour le détail de l'architecture, des pages, des tokens de design et des conventions du projet.
