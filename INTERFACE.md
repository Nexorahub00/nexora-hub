# Carte de l'interface Nexora Hub

## Rubriques disponibles dans le prototype
- Vue d'ensemble : aperçu des piliers, accès rapides et dernières publications.
- Fil d'actualité : création et affichage de publications connectées à l'API existante.
- Découvrir : cartes de démonstration pour profils et organisation.
- Messagerie : écran de présentation, intégration à développer.
- Nexora Campus : cours chargés depuis l'API si disponibles, catégories de démonstration.
- Projets & incubation : parcours de présentation d'un projet.
- Marketplace : cartes de démonstration, aucune commande réelle.
- Services : catégories de services professionnels.
- Médias & podcasts : bibliothèque de démonstration.
- Événements : écran d'annonce de futurs événements.
- Premium : écran de présentation de campagnes de visibilité.
- Rendez-vous : formulaire de préparation uniquement, sans réservation/paiement.
- Mon profil : aperçu de profil lié à la session courante.
- Connexion / inscription : formulaires connectés aux routes d'authentification existantes.
- Contacter Nexora : formulaire de démonstration, pas d'envoi d'e-mail.

## À terminer avant lancement public
1. Connecter les modules aux modèles et routes de base de données appropriés.
2. Construire les écrans d'administration protégés et les permissions par rôle.
3. Implémenter messagerie, likes, commentaires, suivis, notifications et recherche.
4. Implémenter les commandes, vendeurs, commissions, remboursements et litiges.
5. Intégrer un prestataire de paiement autorisé et ses notifications serveur.
6. Ajouter confirmation e-mail/téléphone, récupération de compte et protections supplémentaires.
7. Ajouter tests automatiques, sauvegardes, observabilité, politique de confidentialité et conditions.
8. Tester l'accessibilité, les performances et les parcours sur mobile et ordinateur.

Les fonctionnalités de paiement ne doivent jamais afficher un faux statut de succès. Un abonnement ou une commande payante ne peut être confirmé qu'après validation fiable du prestataire côté serveur.
