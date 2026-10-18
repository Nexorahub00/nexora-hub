# Checklist de vérification avant lancement

- [ ] Inscription : e-mail invalide, doublon, nom trop long, mot de passe faible.
- [ ] Connexion : mauvais mot de passe, utilisateur inconnu, limitation de tentatives.
- [ ] Session : cookie HttpOnly/SameSite, régénération après connexion, déconnexion effective.
- [ ] CSRF : requête de modification sans jeton ou avec jeton incorrect rejetée.
- [ ] Autorisations : un membre ne peut pas modifier le profil d'un autre ni supprimer les publications d'autrui.
- [ ] Validation : contenus vides, très longs, JSON invalide, valeurs inattendues.
- [ ] XSS : les contenus sont affichés comme texte, jamais injectés en HTML brut.
- [ ] Campus : cours non publiés invisibles; double inscription sans doublon.
- [ ] Données : sauvegarde et restauration testées; secrets exclus du dépôt.
- [ ] Production : HTTPS, secrets uniques, base de production, stockage de sessions partagé et persistant.
- [ ] Dépendances : `npm audit` examiné et vulnérabilités corrigées avant publication.
- [ ] Vérification indépendante avant d'ouvrir le service au public.
