<h2 style="text-align:center;">Plateforme de blogging</h2>

### Application web Full Stack

### Projet autonome

![This has been replaced](https://storage.googleapis.com/theflyoccultist/public/images/portfolio-blogging/blogging-platform.png "Blogging Platform")

#### Cette plateforme de blogging a été conçue pour documenter mon parcours de codeur, partager mes apprentissages et mes réussites, et enrichir mon expérience en développement et déploiement web.

**Fonctionnalités**

**Authentification utilisateur** : La plateforme permet aux utilisateurs de créer un compte et de se connecter en toute sécurité grâce à un système de rafraîchissement par jeton.

**Gestion des publications (CRUD)** : Les utilisateurs peuvent créer une nouvelle publication, la consulter dans leur portfolio, la modifier ultérieurement ou la supprimer. Toutes les modifications sont visibles instantanément.

**Éditeur de texte personnalisé (Markdown)** : Pour la création et la modification des publications, après avoir essayé React Quill, j'ai opté pour un éditeur de texte Markdown simple, offrant plus de flexibilité et de simplicité d'écriture, tout en réduisant le temps de débogage.

**Responsive Design** : La plateforme s'adapte automatiquement pour offrir une expérience optimale, que ce soit sur mobile ou sur ordinateur.

**Déploiement robuste** : Ce projet a également été déployé sur Google Cloud, comme le portfolio, mais j'ai également dû apprendre à déployer et configurer une instance PostgreSQL.

**Affichage public/privé** : Une fonctionnalité permet d'enregistrer un brouillon et de le publier ultérieurement.

---

**Défis rencontrés**

**Réécriture complète de la plateforme en HTML et Ruby** : Ce projet, qui était auparavant un projet React, souhaitait une interface de type Windows 98, comme une navigation dans un cybercafé louche des années 90. C'était indispensable si je voulais être fier de ce projet.

---

**Diagramme d'architecture**

![Diagramme de merde](https://storage.googleapis.com/theflyoccultist/public/images/portfolio-blogging/diagramme-architecture.webp "Diagramme d'architecture de la plateforme de blogs")

Un diagramme illustrant la relation entre les différents composants de la plateforme.

---

**Processus de déploiement**

- Création d'une interface utilisateur avec HTMX et CSS.
- Configuration d'un backend avec Ruby, Sinatra et Rack.
- Configuration de modèles ERB pour le rendu dynamique côté serveur.
- Configuration d'une base de données PostgreSQL pour la persistance des publications.
- Configuration d'un pipeline CI/CD pour des mises à jour rapides via GitHub Actions et Google Cloud Services.

---

**Captures d'écran**

![Has been replaced](https://storage.googleapis.com/theflyoccultist/public/images/portfolio-blogging/article.png "Post Edit Page")

---

**Contrôleur backend pour la création d'un article**

```ruby
  post '/api' do
    is_public = params[:is_public] == 'true' ? 1 : 0

    db.execute(
      "INSERT INTO posts (title, thumbnail, content, author, is_public)
      VALUES (?, ?, ?, ?, ?)",
      [params[:title], params[:thumbnail], params[:content], params[:author], is_public]
    )

    hx_redirect
  end
```

---

**Leçons apprises**

Ce projet m'a permis de comprendre les subtilités du déploiement d'une application full-stack en environnement professionnel. Il m'a également appris à résoudre des problèmes complexes liés au déploiement et à la configuration du serveur.

Commencer par un déploiement de version rudimentaire était une approche stratégique, car cela me permettait d'identifier les dysfonctionnements de manière ciblée tout en présentant une version fonctionnelle de l'application. L'utilisation de GitHub pour gérer les sauvegardes s'est avérée précieuse lors de la restauration de fichiers suite à des erreurs.

---

**Conclusion**

À mesure que mes compétences en développement s'améliorent, cette plateforme continuera d'évoluer. Elle répondra à mes besoins croissants et constituera une vitrine de mes compétences techniques. J'ai confiance en ce projet, car il ne s'agit pas d'un simple exercice de codage, mais d'une application que j'utilise activement pour documenter mon parcours et enrichir mon portfolio.
