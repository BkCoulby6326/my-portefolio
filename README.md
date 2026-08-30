# Portfolio Professionnel — Bakary Coulibaly

> **Développeur Full Stack Web & Mobile**  
> Double formation : Licence Programmation & Dév (INTEC Sup) • Licence Informatique de Gestion (IUG)  
> Bamako, Mali • coulibaly.bakary6326@gmail.com • +223 77 20 66 76

---

## 🚀 À Propos du Projet

Ce portfolio professionnel a été conçu avec une attention particulière à l'élégance visuelle, à la performance, au responsive design et aux attentes des recruteurs et clients IT.

### Stack Technique du Portfolio :
- **React 19** + **TypeScript**
- **Vite** (Build ultra-rapide)
- **Tailwind CSS v4**
- **Lucide Icons** (Icônes vectorielles cohérentes)
- **GitHub Actions** (Pipeline CI/CD automatisé pour GitHub Pages)

---

## 🛠️ Lancement Local & Développement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement en local
npm run dev

# 3. Compiler pour la production
npm run build
```

---

## ✏️ Guide de Personnalisation des Placeholders

Toutes les données réelles de Bakary sont centralisées dans le fichier :  
📁 `src/data/portfolioData.ts`

### 1. Liens vers vos profils sociaux & GitHub :
Dans `profileData.socials`, remplacez :
- `"https://github.com/"` par votre vrai pseudo GitHub (ex: `https://github.com/bakary-coulibaly`)
- `"https://linkedin.com/in/"` par votre URL LinkedIn personnalisée

### 2. Liens des dépôts de vos 5 projets :
Dans `projectsData`, personnalisez le champ `githubUrl` ou `demoUrl` pour chaque projet :
1. `Plateforme de Gestion Scolaire` (Laravel, Livewire, PostgreSQL)
2. `Gestion d'Atelier de Couture` (Flutter, Dart, Symfony)
3. `API Centralisée Pharmacies` (Spring Boot, Flutter, PostgreSQL)
4. `Plateforme VPS & VPN` (Laravel, React, Inertia.js, Tailwind)
5. `Portfolio Collaboratif` (Workflow GitHub Actions & Pages)

### 3. Connexion du formulaire de contact :
Le formulaire dans `src/components/Contact.tsx` est prêt. Vous pouvez facilement le relier à :
- **EmailJS** (gratuit, sans backend)
- **Formspree** (action direct vers `https://formspree.io/f/VOTRE_ID`)
- **Resend** ou votre propre API Laravel.

---

## 🌐 Déploiement Automatique sur GitHub Pages

Un workflow CI/CD est déjà configuré dans `.github/workflows/deploy.yml` :

1. Créez un dépôt sur votre compte GitHub (ex: `portfolio` ou `bakary-coulibaly.github.io`).
2. Poussez votre code :
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit portfolio Bakary Coulibaly"
   git branch -M main
   git remote add origin https://github.com/VOTRE_PSEUDO/NOM_DU_REPO.git
   git push -u origin main
   ```
3. Sur GitHub, rendez-vous dans les **Settings** > **Pages** :
   - Sous **Build and deployment** > **Source**, sélectionnez **GitHub Actions**.
4. Chaque nouveau `git push` sur `main` déclenchera automatiquement le build et le déploiement sur GitHub Pages.

---

## 📄 Licence
Sous licence Apache 2.0. Réalisé pour **Bakary Coulibaly**.
