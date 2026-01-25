# Improv Challenge

Un générateur minimaliste de défis d’improvisation solo, inspiré de la simplicité de *can‑i‑get‑a.com*.  
Chaque clic génère un nouvel exercice, en français ou en anglais.

## 🎯 Fonctionnalités

- Génération aléatoire de défis d’impro (FR/EN)
- Interface centrée, épurée et responsive
- Défi affiché dans un encadré lisible
- Animation *fade‑in* à chaque nouveau défi
- Sélecteur de langue avec état actif
- Section « Références » dépliable sous le bouton principal
- Déploiement automatique via GitHub Pages

---

## 🧱 Structure du projet
improv-challenge/
│
├── index.html           # Structure principale de la page
├── style.css            # Styles, encadré du défi, animation fade-in
├── script.js            # Logique : défis, langues, animation, références
├── challenges.json      # Liste des défis FR/EN
└── README.md            # Documentation

## 🚀 Utilisation
### 1. Charger un défi
Un clic sur **Nouveau défi** génère un exercice aléatoire dans la langue active.

### 2. Changer de langue
Le sélecteur FR/EN en bas de page permet de basculer instantanément.  
Le bouton actif est visuellement mis en évidence.

### 3. Voir les références
Sous le bouton « Nouveau défi », un lien **Références** permet d’afficher ou masquer une courte liste de sources d’inspiration.

---

## ✨ Animation du défi

Le texte du défi bénéficie d’une animation *fade‑in* subtile à chaque mise à jour.  
Elle est déclenchée via une classe CSS (`.fade-in`) appliquée dynamiquement dans `script.js`.

---

## 📚 Références & inspirations

Les exercices et l’approche pédagogique sont inspirés par :

- Katy Schutte – https://www.katyschutte.co.uk/
- Jill Bernard – https://payhip.com/JillBernardImprov
- Site web : https://www.can-i-get-a.com/

---

## 🛠 Développement

### Installation locale
Aucune dépendance.  
Il suffit d’ouvrir `index.html` dans un navigateur.

### Modifier les défis
Les listes se trouvent dans :

challenges.json

Format :

```json
{
  "fr": ["Défi 1", "Défi 2"],
  "en": ["Challenge 1", "Challenge 2"]
}

Animation
Définie dans style.css :

.fade-in {
  animation: fadeIn 0.4s ease;
}

Déclenchée dans script.js :

challengeEl.classList.remove("fade-in");
void challengeEl.offsetWidth;
challengeEl.classList.add("fade-in");

🌐 Déploiement
Le site est automatiquement publié via GitHub Pages.
La version en ligne est accessible à l’adresse :

https://jaric-dev.github.io/improv-challenge/

## Licences

- Le code source (HTML, CSS, JS) est sous licence MIT (voir fichier LICENSE).
- Le contenu créatif (textes, phrases, listes) est sous licence CC BY-NC 4.0 (voir fichier LICENSE-CONTENT).
