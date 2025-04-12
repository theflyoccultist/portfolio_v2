<h2 style="text-align:center;">Pwatgres CLI</h2>

#### Une interface de ligne de commande Ruby magique, basée sur un terminal, pour **automatiser la configuration des utilisateurs, des bases de données et des schémas PostgreSQL** avec style. Dites adieu à la saisie manuelle des commandes « psql » comme en 2011.

#### [Lien vers le dépôt GitHub](https://github.com/theflyoccultist/systems_integration_projects/tree/main/pwatgres)

Ce script :

- Crée un nouvel utilisateur PostgreSQL avec un mot de passe sécurisé.
- Crée une nouvelle base de données appartenant à cet utilisateur.
- Configure un schéma personnalisé et accorde les privilèges appropriés.
- Journalise chaque exécution de requête pour faciliter le débogage.
- Affiche les identifiants et les informations de connexion dans un terminal coloré.

![Capture d'écran CLI](https://storage.googleapis.com/theflyoccultist/public/images/cli/pwatgres.png)

---

### ✨ Fonctionnalités

- 🔐 Génération de mots de passe sécurisés avec `SecureRandom`
- 🧙‍♀️ Journalisation élégante avec l'assistant `run_query` pour localiser les erreurs SQL
- 🎨 Sortie optimisée pour le terminal avec `colorize`
- 🎭 Art ASCII pour un maximum de style
- 📜 Chaîne de connexion Postgres (sortie facultative)

---

### 🔧 Configuration requise

- Ruby (2.7+ recommandé)
- Bibliothèques clientes PostgreSQL (libpq-dev)
- Gems `pg`, `dotenv`, `readline` et `colorize`

Installation Dépendances :

```bash
bundle install
```

---

### 🧪 Exécution du script

Assurez-vous d'avoir un fichier .env contenant :

```
PG_CLI_USER=votre_utilisateur_administrateur
PG_CLI_PASS=votre_mot_de_passe_administrateur
```

Exécutez le script d'installation :

```
bundle exec ruby ​​pg_user.rb
```

Vous serez invité à saisir :

- Le nouveau **nom d'utilisateur** PostgreSQL
- Le **nom de la base de données**
- Le **nom du schéma**

À la fin, le script affichera le mot de passe généré et, éventuellement, une URL de base de données prête à l'emploi.

---

### 🛡 Note sur les autorisations

Votre utilisateur PG_CLI_USER doit :

- Être capable de créer un rôle et une base de données
- Il n’est **pas** nécessaire d’être superutilisateur, mais des autorisations temporaires `GRANT` sont requises pour créer des bases de données appartenant à d’autres utilisateurs.

Si vous voyez des erreurs telles que :

```
ERREUR : doit être membre du rôle « nom d’utilisateur »
```

Vous devrez probablement :

```
GRANT votre_nouvel_utilisateur TO votre_utilisateur_administrateur ;
```

---

### 💀 Limitations connues

- Ne prend pas en charge les configurations de bases de données distantes (suppose un socket Unix local `/var/run/postgresql`)

> Essayez d’exécuter la requête SQL `SHOW unix_socket_directories;` pour confirmer la configuration de votre base de données. 

- Ne révoque pas les privilèges spécifiques au niveau de la table (géré par la logique des privilèges par défaut)
- Ne prend en charge que PostgreSQL (évidemment)

---

### 🧙 Notes de l'auteur

Ceci fait partie du **programme TSSR et de la pratique d'intégration système**. Initialement développé comme un projet de crash-test pour transformer la configuration de la base de données, autrefois redoutée, en une simple ligne de code.

Nous vous encourageons à le personnaliser et à le modifier.