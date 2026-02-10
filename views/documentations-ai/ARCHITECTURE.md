# Architecture du Projet

## Structure du fichier ui.ejs

Le fichier EJS est organisé en sections clairement délimitées par des commentaires. Chaque section a un rôle spécifique.

### Section 1 : Companies Container (Lignes ~10-35)

**ID** : `companies-container`

**Rôle** : Affiche la grille de collecteurs disponibles avec recherche

**Éléments clés** :
- `.ic-header` - Titre et sous-titre
- `#search-collectors` - Input de recherche avec icône
- `#companies-list` - Grille peuplée dynamiquement par JS

**Comportement** : 
- La fonction `filterCompanies()` est appelée sur `oninput`
- La grille est générée par `renderCompanies()` dans script.js

### Section 2 : Form Container (Lignes ~36-110)

**ID** : `form-container`

**Rôle** : Formulaire de configuration d'un collecteur sélectionné

**Éléments clés** :
- `.ic-back-button` - Retour à la liste
- `.ic-collector-info` - Carte d'info du collecteur sélectionné
- `#add-credential-instructions` - Alert pour instructions spéciales
- `#add-credential-form` - Formulaire principal
- `#add-credential-form-params` - Champs dynamiques générés par JS
- `#datepicker-since` - Sélecteur de date personnalisé
- `#form-error` - Alert d'erreur de validation

**Comportement** :
- Les champs sont générés dynamiquement selon `company.params`
- Le badge affiche l'état du collecteur (development/active/maintenance)

### Section 3 : Progress Container (Lignes ~111-195)

**ID** : `progress-container`

**Rôle** : Affiche la progression de la collecte et les résultats

**Éléments clés** :
- `#progress-loading` - État de chargement avec spinner
- `#progress-bar-section` - Barre de progression animée
- `#send-2fa-container` - Formulaire 2FA inline
- `#progress-response-success` - Écran de succès
- `#progress-response-unknown` - Écran d'erreur inconnue
- `#progress-response-error` - Écran d'erreur avec message

**Comportement** :
- Les états sont contrôlés via WebSocket
- La barre de progression utilise une animation shimmer

### Section 4 : Canvas Container (Lignes ~196-235)

**ID** : `canvas-container`

**Rôle** : Interface plein écran pour l'automatisation navigateur

**Éléments clés** :
- `.ic-canvas-toolbar` - Barre d'outils avec boutons
- `#canvas-back` - Bouton retour
- `#canvas-ok` - Bouton "Je suis connecté"
- `#canvas-cancel` - Bouton annuler
- `#canvas` - Élément canvas (1280x720)

**Comportement** :
- Reçoit des screenshots via WebSocket
- Envoie les clics/touches au serveur
- Gère le copier-coller (Ctrl+V)

### Section 5 : Feedback Container (Lignes ~236-280)

**ID** : `feedback-container`

**Rôle** : Formulaire de demande d'un nouveau collecteur

**Éléments clés** :
- `#feedback-form` - Formulaire avec champ URL
- `#feedback-response-success` - Message de succès
- `#feedback-response-error` - Message d'erreur

### Section 6 : JavaScript (Lignes ~281-fin)

**Rôle** : Configuration i18n et chargement du script principal

**Variables exposées** :
- `locale` - Langue courante
- `i18n` - Objet de traductions pour le JS

## Structure du fichier script.js

### Variables globales (Lignes ~1-10)

```javascript
const token         // Token d'authentification (URL param)
let companies       // Liste des collecteurs
let hit             // IDs des collectors "sketch" déjà cliqués
let datepickerSince // Instance du datepicker
let isSubmitting    // Flag anti-double soumission
let currentWebSocket // WebSocket actif
```

### Organisation des fonctions

| Section | Fonctions | Rôle |
|---------|-----------|------|
| Initialization | DOMContentLoaded | Setup initial |
| API Functions | `getCollectors()`, `post_send_feedback()`, `deleteCredential()` | Appels serveur |
| Navigation | `closeIframe()`, `showCompanies()`, `showFeedback()` | Navigation entre sections |
| Companies | `filterCompanies()`, `searchCollectorsWithScore()`, `renderCompanies()` | Gestion liste collecteurs |
| Form | `showForm()`, `addCredential()` | Gestion formulaire |
| Feedback | `sendFeedback()` | Envoi feedback |
| Progress | `showProgress()` | Gestion WebSocket et états |
| Datepicker | Classe `Datepicker`, `createDatepicker()` | Composant calendrier |

## Structure des fichiers CSS

**Fichiers** : `views/styles/theme.default.css` et `views/styles/theme.ocean.css`

### Variables CSS (début de chaque fichier thème)

Les deux thèmes définissent les mêmes variables avec des valeurs différentes :

```css
:root {
  /* Backgrounds */
  --bg, --text, --text-secondary, --muted, --placeholder
  
  /* Primary */
  --primary, --primary-hover, --primary-focus
  
  /* Secondary */
  --secondary, --secondary-hover
  
  /* Cards */
  --card, --card-border, --card-special, --card-special-hover
  
  /* Status */
  --success, --warning, --danger, --info (+ variants -hover, -bg)
  
  /* Forms */
  --input-bg, --input-border, --disabled-bg
  
  /* Effects */
  --shadow, --shadow-hover, --shadow-lg
  
  /* Spacing */
  --radius, --radius-lg, --radius-full
}
```

### Organisation CSS

1. **Reset & Base** - Styles de base
2. **Layout** - Container, header
3. **Grid** - Système de grille responsive
4. **Cards** - Cartes collecteurs
5. **Badges** - Labels de statut
6. **Buttons** - Tous les types de boutons
7. **Forms** - Inputs, labels, helpers
8. **Alerts** - Messages d'état
9. **Progress** - Barre de progression
10. **Loader** - Spinner animé
11. **Back Button** - Bouton retour
12. **Collector Info** - Bloc info collecteur
13. **Progress Screen** - Écran de progression
14. **Response Icons** - Icônes succès/erreur
15. **Canvas** - Mode plein écran
16. **Modal** - Modales génériques
17. **Datepicker** - Calendrier complet
18. **Utilities** - Classes utilitaires
19. **Responsive** - Media queries

## Communication WebSocket

### Format des messages reçus

```javascript
// Screenshot pour le canvas
{ type: 'screenshot', screenshot: 'base64...' }

// État de progression
{
  type: 'state', 
  state: {
    index: 2,      // Étape courante
    max: 5,        // Nombre total d'étapes
    title: '...',  // Texte de progression
    message: '...' // Message additionnel (2FA instructions)
  }
}
```

### Format des messages envoyés

```javascript
// Clic sur canvas
{ type: 'click', x: 0.5, y: 0.3 }  // Coordonnées normalisées 0-1

// Touche clavier
{ type: 'keydown', key: 'Enter', code: 'Enter' }

// Texte (coller)
{ type: 'type', text: '...' }

// Code 2FA
{ type: 'twofa', twofa: '123456' }

// Fermeture
{ type: 'interactive', reason: 'close' | 'cancel' }
```

## Flux de données

```
Serveur
   ↓ GET /collectors
Companies List
   ↓ Click card
showForm(company)
   ↓ Submit
POST /credential
   ↓ Response {id, wsPath}
showProgress(id, wsPath)
   ↓ WebSocket connect
Progress updates via state messages
   ↓ Complete
Show result screen
```