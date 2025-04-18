# Re_pair

Bienvenue dans **Re_pair**, une application web mobile-first permettant de scanner un article textile ou chaussure, d'enregistrer ses détails de réparation, et de recevoir des tutoriels personnalisés.

Conçu pour encourager la réparation plutôt que le jetable, Re_pair est un outil destiné à sensibiliser les 15-25 ans à des gestes simples, à des savoir-faire durables, et aux métiers liés à la réparation textile.

> ✨ Ce projet a été réalisé en **24h** lors d'un **hackathon à Digital Campus** sur la thématique de la réparation textile, en partenariat avec **Refashion**.

## 🌐 Stack technique

| Outil         | Version  | Description                     |
| ------------- | -------- | ------------------------------- |
| Next.js       | 15.3.0   | Framework React pour le SSR/SSG |
| React         | ^19.1.0  | Librairie UI principale         |
| TypeScript    | ^5       | Superset de JavaScript          |
| TailwindCSS   | ^4       | Utilitaire de style CSS         |
| Lucide React  | ^0.488.0 | Icônes SVG modernes             |
| Framer Motion | ^12.7.4  | Animations fluides pour React   |
| next-pwa      | ^5.6.0   | Ajout du support PWA            |
| react-youtube | ^10.1.0  | Intégration des vidéos YouTube  |
| ESLint        | ^9       | Linting pour JS/TS              |
| PostCSS       | ^8       | Tailwind postcss plugin         |
| Vercel        | -        | Déploiement en continu          |

## 🚀 Fonctionnalités

- Scan via l’appareil photo (mode PWA ou fichier sur desktop)
- Formulaires interactifs en 3 étapes
- Tutoriels vidéos adaptés
- Historique des réparations
- Ajout possible à l'écran d'accueil (PWA)
- Sauvegarde des données via `sessionStorage`

## 📂 Structure du projet

```
/app
  /add        -> Parcours en 3 étapes : scan, infos, réparation
  /profile    -> Page profil avec historique
  /tutorials  -> Page de recherche de tutoriels
  /community  -> Communauté (placeholder)
  /components -> Composants réutilisables
  /public     -> Assets (icônes, manifest, images, etc)
```

## 🎨 Design

- Couleurs personnalisées via Tailwind config :
  ```css
  --primary: #ff6235;
  --secondary: #d2edff;
  --tertiary: #ffc3c3;
  --quaternary: #2bb673;
  --quinary: #fef232;
  --cream: #faf4f2;
  ```
- Mobile-first (responsive, PWA-friendly)
- Icônes : Lucide React

## ⏻ Lancer le projet (développement)

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

> Le mode développement **n’active pas** le mode PWA (service worker désactivé).

## ⭕ Lancer en mode production avec la PWA

```bash
# Générer les fichiers de build
npm run build

# Lancer le serveur local avec service worker + manifest
npm start
```

## 🙏 Crédit

Projet créé par **Elena FERREIRA**

- Hackathon 24h @ Digital Campus
- Avril 2025

Merci à **Refashion** pour ce challenge !

## ⚠️ Disclaimer

Ce projet est un **prototype POC** créé dans le cadre d’un hackathon et peut contenir du code simplifié ou non exhaustif. Pour un déploiement réel, des optimisations de performance, sécurité et accessibilité sont à prévoir.
