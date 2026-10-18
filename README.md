# Préparer le déploiement — NEXORA HUB

## Ce qui peut être fait maintenant
- Importer le ZIP dans un environnement cloud de développement depuis le navigateur Android.
- Installer les dépendances et tester le démarrage.
- Faire des essais avec des données fictives uniquement.

## Avant un déploiement public
1. Choisir un hébergeur Node.js et une base PostgreSQL persistante.
2. Migrer SQLite vers PostgreSQL et définir `DATABASE_URL` fourni par l'hébergeur.
3. Générer un `SESSION_SECRET` fort dans les variables secrètes de l'hébergeur; ne jamais le placer dans le code.
4. Configurer `NODE_ENV=production`, HTTPS et `APP_ORIGIN`.
5. Vérifier que le stockage des sessions est persistant et adapté à plusieurs instances. Le magasin SQLite inclus est réservé au développement et ne doit pas être utilisé comme solution de production sans validation de l'architecture.
6. Configurer sauvegardes, journalisation, surveillance et procédure de restauration.
7. Lancer `npm run db:generate`, les migrations de production selon les procédures Prisma, puis `npm start`.
8. Depuis un terminal avec le serveur accessible, lancer `npm run test:smoke`.
9. Réaliser des tests de sécurité et une revue indépendante avant l'ouverture au public.

## Limites actuelles
Le backend ne dispose pas encore de vérification d'e-mail, de réinitialisation du mot de passe, de modération complète, ni d'intégration réelle Airtel Money/Visa. N'annonce pas les paiements comme opérationnels tant que le prestataire marchand n'a pas fourni les identifiants API et que les webhooks n'ont pas été testés en environnement de test puis en production.
