# Invoice Collector - Documentation Technique

## Vue d'ensemble

Invoice Collector est une interface web permettant aux utilisateurs de configurer des collecteurs de factures automatisés. L'application est composée de trois fichiers principaux qui fonctionnent ensemble pour offrir une expérience utilisateur complète.

## Structure du projet

```
views/
├── ui/
│   ├── ui.ejs              # Template HTML principal (EJS)
│   └── script.js           # Logique JavaScript côté client
├── styles/
│   ├── theme.default.css   # Thème clair (bleu)
│   └── theme.ocean.css     # Thème sombre (bleu marine)
└── icons/
    └── *.svg               # Icônes SVG utilisées dans l'interface

locales/
├── en.json                 # Traductions anglaises
└── fr.json                 # Traductions françaises
```

## Architecture de l'application

L'application est divisée en **6 sections principales** dans le template EJS :

1. **Companies List** - Liste des collecteurs disponibles
2. **Credential Form** - Formulaire d'ajout de credentials
3. **Progress Screen** - Écran de progression de la collecte
4. **Canvas** - Zone interactive pour l'automatisation navigateur
5. **Feedback Form** - Formulaire de demande de nouveau collecteur
6. **JavaScript** - Configuration i18n et chargement des scripts

## Technologies utilisées

- **EJS** - Templating côté serveur avec internationalisation
- **CSS Variables** - Système de thèmes avec variables CSS
- **Vanilla JavaScript** - Pas de framework, JavaScript natif
- **WebSocket** - Communication temps réel pour la progression
- **Canvas API** - Interaction avec l'automatisation navigateur

## Documents de référence

| Document | Description | Quand l'utiliser |
|----------|-------------|------------------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Structure détaillée du code | Comprendre le fonctionnement global |
| [STYLING.md](./STYLING.md) | Système CSS et thèmes | Modifier les styles ou créer un thème |
| [COMPONENTS.md](./COMPONENTS.md) | Composants UI disponibles | Ajouter ou modifier des éléments UI |
| [JAVASCRIPT.md](./JAVASCRIPT.md) | Fonctions et logique JS | Modifier le comportement de l'app |
| [I18N.md](./I18N.md) | Internationalisation | Ajouter/modifier des traductions |
| [MODIFICATIONS.md](./MODIFICATIONS.md) | Guide des modifications courantes | Effectuer des changements rapides |

## Conventions de nommage

- **Classes CSS** : Préfixe `ic-` (Invoice Collector)
- **Variables CSS** : Format `--nom-variable`
- **Fonctions JS** : camelCase
- **IDs HTML** : kebab-case

## Flux utilisateur principal

```
1. Affichage liste des collecteurs
   ↓
2. Sélection d'un collecteur
   ↓
3. Remplissage du formulaire de credentials
   ↓
4. Soumission et affichage progression
   ↓
5. (Optionnel) Interaction Canvas pour 2FA/login manuel
   ↓
6. Affichage résultat (succès/erreur)
```

## Points d'attention pour les modifications

⚠️ **Important** : 
- Les textes sont internationalisés via `<%= __('i18n.key') %>`
- Les thèmes utilisent des variables CSS - modifier les variables, pas les couleurs directement
- Le WebSocket gère les états de progression - respecter le format des messages
- Le Datepicker est un composant custom intégré dans script.js