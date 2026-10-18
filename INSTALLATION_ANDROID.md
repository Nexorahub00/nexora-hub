# Nexora App — installation Android

Cette version transforme l'interface Nexora en application web installable (PWA), avec une icône « N » dorée dans un carré bleu. Elle utilise le serveur Node.js du projet pour les fonctions qui nécessitent un compte ou une base de données.

## Important
- Ce ZIP est un projet prêt à être configuré et déployé, **pas un fichier APK déjà compilé**. Aucun SDK Android n'est disponible dans l'environnement de préparation pour signer/compiler un APK ici.
- Pour installer la PWA sur Android, l'application doit être accessible par une adresse HTTPS (ou `localhost` sur le même appareil). Ouvrir les fichiers directement depuis le ZIP ne permet pas l'installation.
- Les écrans de messagerie, notifications push, cours complets et plusieurs autres modules restent des fonctionnalités à développer; l'interface seule ne les rend pas opérationnels.
- Les paiements réels ne sont pas activés.

## Démarrer sur ordinateur Windows
1. Installer Node.js LTS depuis https://nodejs.org/
2. Extraire ce ZIP et ouvrir le dossier `NEXORA_APP_Android` dans Visual Studio Code.
3. Dans un terminal ouvert à la racine du projet, exécuter : `npm install`
4. Copier `.env.example` vers `.env` et vérifier les valeurs de configuration.
5. Exécuter `npm run db:generate`, puis `npm run db:migrate`.
6. Lancer `npm run dev` et ouvrir `http://localhost:3000`.

## Installer sur Android après déploiement HTTPS
1. Déployer le projet sur un hébergement HTTPS compatible avec Node.js et une base de données persistante.
2. Ouvrir l'adresse HTTPS du site dans Chrome sur Android.
3. Ouvrir le menu ⋮ et choisir **Installer l'application** ou **Ajouter à l'écran d'accueil** (le libellé varie selon la version de Chrome).
4. L'icône Nexora App apparaîtra sur l'écran d'accueil.

## Tester sur téléphone pendant le développement
Le téléphone et l'ordinateur doivent être connectés au même Wi-Fi. Utilisez l'adresse IP locale de l'ordinateur, par exemple `http://192.168.1.20:3000`, pour tester l'interface, mais Chrome exige généralement HTTPS pour proposer l'installation PWA hors localhost.

## Contenu
- `public/manifest.webmanifest` : identité installable de l'application.
- `public/sw.js` : cache de l'interface. Les requêtes API ne sont volontairement pas mises en cache.
- `public/icons/` : icônes bleues et dorées Nexora App.
- `server.js`, `prisma/`, `public/` : serveur, schéma de base et interface.

Avant de publier auprès du public, il faudra tester les fonctions, sécuriser la configuration de production, utiliser HTTPS et une base de données persistante, puis réaliser une revue de sécurité.
