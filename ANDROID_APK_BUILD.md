# NEXORA APP — compilation APK depuis Android

Ce projet contient maintenant la configuration Capacitor et un workflow GitHub Actions pour générer un APK debug sur un runner Android/Linux distant. Le ZIP n'est pas lui-même un APK.

## Générer l'APK sans ordinateur
1. Téléverser le contenu de ce dossier dans un dépôt GitHub **privé** nommé `nexora-app` (ne jamais téléverser `.env`, mots de passe ou clés privées).
2. Dans GitHub, ouvrir l'onglet **Actions**.
3. Sélectionner **Build NEXORA APP APK**, puis **Run workflow**.
4. Attendre que le workflow soit vert.
5. Dans la page du workflow, télécharger l'artefact `NEXORA-APP-debug-apk`.
6. Extraire l'archive téléchargée : elle contient `app-debug.apk`. Ouvrir le fichier sur Android et confirmer l'installation si Android le demande.

## Limites importantes
- Ce workflow produit un APK **debug**, non signé pour une distribution publique. Une version de production doit être signée avec une clé privée conservée hors du dépôt.
- L'interface web est embarquée dans l'APK. Les routes `/api/...` ont besoin du serveur NEXORA HUB. Tant que le backend n'est pas déployé et que l'URL de l'API n'est pas configurée, la connexion, les publications et les données distantes ne fonctionneront pas dans l'APK autonome.
- Le compte administrateur n'est pas créé par la compilation. Il faut d'abord déployer/configurer la base de données puis exécuter le processus `npm run admin:create` de façon sécurisée sur le serveur.
- Le workflow n'a pas été exécuté depuis cet environnement; la compilation doit être confirmée par GitHub Actions avant de considérer l'APK comme généré.
