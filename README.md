# CDAProject
### README pour l'application A2 RunAlliance

---

## Table des matières

1. [Introduction](#introduction)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies utilisées](#technologies-utilisées)
4. [Installation](#installation)
    - [Backend](#backend)
    - [Frontend](#frontend)
5. [Utilisation](#utilisation)
6. [Routes de l'application](#routes-de-lapplication)
7. [Contributions](#contributions)
8. [Auteurs](#auteurs)
9. [License](#license)

---

## Introduction

A2 RunAlliance est une application pour les amateurs de course à pied, leur permettant de suivre leurs statistiques, s'inscrire à des courses, et bien plus encore. Elle comprend des fonctionnalités tant pour les utilisateurs que pour les administrateurs.

## Fonctionnalités

### Utilisateurs
- Inscription et connexion
- Affichage des statistiques de course
- Inscription à des événements de course
- Édition du profil
- Visualisation des courses passées et à venir

### Administrateurs
- Gestion des utilisateurs (CRUD)
- Gestion des événements de course (CRUD)

## Technologies utilisées

### Backend
- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- MySQL
- Lombok
- Maven

### Frontend
- Angular
- TypeScript
- HTML
- SCSS

## Installation

### Backend

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/votre-utilisateur/a2-runalliance-backend.git
   cd a2-runalliance-backend
   ```

2. **Configurer la base de données :**

   Assurez-vous d'avoir MySQL installé et configurez les paramètres dans `src/main/resources/application.properties` :

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/a2_runalliance
   spring.datasource.username=votre-username
   spring.datasource.password=votre-password
   spring.jpa.hibernate.ddl-auto=update
   ```

3. **Construire et exécuter l'application :**

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/votre-utilisateur/a2-runalliance-frontend.git
   cd a2-runalliance-frontend
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Démarrer l'application :**

   ```bash
   ng serve
   ```

   L'application sera accessible à l'adresse `http://localhost:4200`.

## Utilisation

Après avoir démarré le backend et le frontend, vous pouvez accéder à l'application via votre navigateur à l'adresse `http://localhost:4200`.

## Routes de l'application

### Utilisateur
- **Page d'accueil (`/`) :**
    - Contient le titre, une description, les valeurs de l'association (values-card), et le calendrier pour choisir une course.
- **Page de profil (`/profile`) :**
    - Contient deux menus de profil (tab-profil-menu) :
        - Onglet 1 : Statistiques sous forme de rectangle reprenant les moyennes globales pour tous les paramètres (km, allure, distance, etc.) de toutes les courses effectuées.
        - Onglet 2 : Courses à venir auxquelles l'utilisateur est inscrit.
        - Onglet 3 : Courses passées auxquelles l'utilisateur était inscrit.
        - Onglet 4 : Édition du profil.
- **Page de l'association (`/association`) :**
    - Explique l'association et contient les détails des professeurs.
- **Page des courses régionales (`/regional-runs`) :**
    - Contient les liens des courses de la région.

### Administrateur
- **Gestion des utilisateurs (`/admin/users`) :**
    - Routes pour créer, lire, mettre à jour et supprimer des utilisateurs (CRUD).
- **Gestion des courses (`/admin/runs`) :**
    - Routes pour créer, lire, mettre à jour et supprimer des courses (CRUD).

## Contributions

Les contributions sont les bienvenues ! Veuillez soumettre un pull request ou ouvrir une issue pour discuter des modifications que vous souhaitez apporter.

## Auteurs

- Julie Raymond - Développeuse unique

## License

Ce projet est sous licence MIT.