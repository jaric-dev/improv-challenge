# Solo Improv Games

Un générateur minimaliste de défis d’improvisation solo, inspiré de la simplicité de *can‑i‑get‑a.com*.  
Chaque clic génère un nouvel exercice, en français ou en anglais.
Un générateur de défis d’impro solo, pensé pour l’entraînement personnel et les sessions créatives rapides.  
Le site tire automatiquement des défis depuis une feuille Google Sheets, ce qui permet d’ajouter ou modifier du contenu sans toucher au code.

👉 **Site en ligne :** https://jaric-dev.github.io/improv-challenge  
👉 **Source des défis :** Google Sheets + OpenSheet
👉 **Source des références** : Google Sheets + OpenSheet

## 🎯 Fonctionnalités

Le site charge les défis depuis un onglet Google Sheets nommé `banque_defis`, via l’API publique d’OpenSheet.

Chaque défi contient :
- `lang` — langue du défi (`fr` ou `en`)
- `type` — catégorie du défi (Qui permet à l'utilisateur d'identifier rapidement le focus de l'exercice)
- `description` — texte principal du défi
- `trucs` — conseils ou variations

- Génération aléatoire de défis d’impro (FR/EN)
- Interface centrée, épurée et responsive
- Défi affiché dans un encadré lisible
- Animation *fade‑in* à chaque nouveau défi
- Sélecteur de langue avec état actif
- Section « Références » dépliable sous le bouton principal
- Références enrichies :
plusieurs sites web
plusieurs livres
citation optionnelle
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
Sous le bouton « Nouveau défi », un toggle Sources & inspirations permet d’afficher ou masquer la liste des références.

Chaque référence peut contenir :
un nom 
un ou plusieurs sites web
un ou plusieurs livres
une citation optionnelle.

### 4. Voir la section Contact
Un toggle Contact me permet d’afficher un formulaire simple (UseBasin).

### 5. Modifier ou ajouter des défis

Les défis sont gérés dans une feuille Google Sheets publique.

1. Ouvrir la feuille :  
   https://docs.google.com/spreadsheets/d/1O5s4jXXwkGsxuRX8Tq1D1t3Iu6_wH9R208M6P02UBCk

2. Modifier ou ajouter des lignes dans l’onglet `banque_defis`

3. Les changements sont automatiquement visibles sur le site (pas besoin de déployer)

Format attendu :

| lang | type | description | trucs |
|------|------|-------------|--------|
| fr   | Personnage | Choisi un Objet… | Inspire toi de.. Attention à... |
| en   | Character | Pick an Object… | Draw inspiration from, Be careful with... |
| fr   | Corps | Interpète un duel entre … | Essai différents type d'armes, époques, genres |
| en   | Body| Play a duel between… | Try multiple type of weapons, period, genres... |

Mettre les versions traduites directement une sous l'autre, pour s'assurer d'avoir tout les défis dans toute les langues disponibles. 

### 6. Modifier ou ajouter des Références
Les références proviennent de l’onglet banque_references de la même feuille.

Format attendu :
| Nom           | Website          | Book                            | Quote                           |
|---------------|------------------|---------------------------------|---------------------------------|
| Robert Gravel | robertgravel.com |Impro I : réflexions et analyses | Tout ce que l'on fait parle de liberté au fond. |

Website : plusieurs sites séparés par des virgules
Book : plusieurs livres séparés par des virgules
Quote : optionnelle

Le script gère automatiquement :

la découpe des listes
l’affichage conditionnel

---

## 🎨 Personnalisation

Le fichier `style.css` contrôle :
- la carte du défi  
- la taille de la description  
- l’espacement entre les sections  
- le centrage via #container
- les toggles Références / Contact
- l’animation fade-in

Le fichier `script.js` contrôle :
- le chargement des données (défis + références)
- la sélection aléatoire
- la logique anti-répétition
- l’affichage dynamique
- la gestion multi-sites / multi-livres / quotes
- 
---

## ✨ Animation du défi

Le texte du défi bénéficie d’une animation *fade‑in* subtile à chaque mise à jour.  
Elle est déclenchée via une classe CSS (`.fade-in`) appliquée dynamiquement dans `script.js`.

---

🌐 Déploiement
Le site est automatiquement publié via GitHub Pages.
La version en ligne est accessible à l’adresse :

https://jaric-dev.github.io/improv-challenge/

## Licences

- Le code source (HTML, CSS, JS) est sous licence MIT (voir fichier LICENSE).
- Le contenu créatif (textes, phrases, listes) est sous licence CC BY-NC 4.0 (voir fichier LICENSE-CONTENT).

## 💬 Contact

Créé par Janne 
Contributions, idées ou suggestions bienvenues. 
