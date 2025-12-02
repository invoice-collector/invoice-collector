# Guide JavaScript

Ce document détaille toutes les fonctions JavaScript, leur rôle et comment les modifier.

## Variables globales

### Configuration

```javascript
const token = new URLSearchParams(window.location.search).get('token');
```
Token d'authentification récupéré de l'URL. Utilisé pour toutes les requêtes API.

### État de l'application

```javascript
let companies = [];          // Liste des collecteurs chargés
let hit = [];                // IDs des collecteurs "sketch" déjà cliqués
let datepickerSince = null;  // Instance du datepicker actif
let isSubmitting = false;    // Flag anti-double soumission
let currentWebSocket = null; // WebSocket actif
```

## Fonctions API

### getCollectors()

**Rôle** : Récupère la liste des collecteurs disponibles

```javascript
async function getCollectors() {
    const response = await fetch(`collectors?locale=${locale}&token=${token}`);
    return await response.json();
}
```

**Retour** : Array d'objets collecteur

```javascript
{
    id: 'collector-id',
    name: 'Nom du collecteur',
    description: 'Description',
    logo: '/path/to/logo.png',
    state: 'active' | 'development' | 'maintenance',
    type: 'default' | 'sketch',
    instructions: 'Instructions optionnelles',
    params: {
        email: {
            name: 'Email',
            type: 'text',
            placeholder: 'exemple@email.com',
            mandatory: true
        },
        password: {
            name: 'Mot de passe',
            type: 'password',
            placeholder: '••••••••',
            mandatory: true
        }
    }
}
```

### post_send_feedback(body)

**Rôle** : Envoie un feedback (demande de nouveau collecteur)

```javascript
async function post_send_feedback(body) {
    return await fetch(`feedback?token=${token}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    });
}
```

**Paramètre body** :
```javascript
{
    type: 'new_collector' | 'sketch',
    message: 'URL ou ID',
    email: '' // Optionnel
}
```

### deleteCredential(id)

**Rôle** : Supprime un credential existant

```javascript
async function deleteCredential(id) {
    await fetch(`credential/${id}?token=${token}`, {
        method: 'DELETE'
    });
}
```

## Fonctions de navigation

### closeIframe()

**Rôle** : Ferme l'iframe en envoyant un message au parent

```javascript
function closeIframe() {
    window.parent.postMessage({ type: 'ic-close' }, '*');
}
```

**Usage** : Appelée après succès ou erreur pour fermer l'interface.

### showCompanies()

**Rôle** : Affiche la liste des collecteurs (écran principal)

```javascript
async function showCompanies() {
    // Affiche companies-container
    // Masque form-container, progress-container, feedback-container
    // Réinitialise la recherche
    // Appelle renderCompanies(companies)
}
```

### showFeedback(type)

**Rôle** : Affiche le formulaire de feedback

```javascript
function showFeedback(type) {
    // type: 'new_collector' | 'sketch'
    // Affiche feedback-container
    // Masque les autres containers
    // Réinitialise le formulaire
}
```

## Fonctions de recherche

### filterCompanies(searchTerm)

**Rôle** : Filtre et affiche les collecteurs selon la recherche

```javascript
function filterCompanies(searchTerm) {
    const filteredCompanies = searchCollectorsWithScore(companies, searchTerm);
    renderCompanies(filteredCompanies);
}
```

**Appelée depuis** : `oninput` de l'input de recherche

### searchCollectorsWithScore(collectors, searchTerm)

**Rôle** : Algorithme de recherche avec scoring

```javascript
function searchCollectorsWithScore(collectors, searchTerm) {
    // Si pas de terme: retourne les 100 premiers
    // Score basé sur:
    //   - Match exact: +8
    //   - Commence par: +4
    //   - Contient: +2
    // Retourne les résultats triés par score (max 100)
}
```

**Personnalisation** : Modifier les poids pour ajuster la pertinence.

### renderCompanies(companiesToRender)

**Rôle** : Génère le HTML de la grille de collecteurs

```javascript
function renderCompanies(companiesToRender) {
    // Vide #companies-list
    // Pour chaque collecteur:
    //   - Crée une carte avec logo, titre, description
    //   - Ajoute le badge d'état
    //   - Attache l'événement click -> showForm(company)
    // Ajoute la carte spéciale "demander un collecteur"
}
```

**Structure de la carte générée** :
```html
<div class="ic-card">
    <div class="ic-card-header">...</div>
    <div class="ic-card-body">...</div>
    <div class="ic-card-footer">...</div>
</div>
```

## Fonctions du formulaire

### showForm(company)

**Rôle** : Affiche et configure le formulaire pour un collecteur

```javascript
function showForm(company) {
    // Affiche form-container
    // Remplit les infos du collecteur (logo, nom, description)
    // Configure le badge d'état
    // Affiche/masque les instructions
    // Génère les champs dynamiques selon company.params
    // Initialise le datepicker
    // Gère le type "sketch" différemment
}
```

**Génération des champs** :
```javascript
Object.keys(company.params).forEach(key => {
    const param = company.params[key];
    // Crée un ic-form-group avec label et input
    // Type: text ou password
    // Required si mandatory
});
```

### addCredential(event)

**Rôle** : Soumet le formulaire de création de credential

```javascript
async function addCredential(event) {
    event.preventDefault();
    
    // Vérifie isSubmitting (anti-double clic)
    // Récupère les données du formulaire
    // Valide le datepicker
    // Valide les champs requis
    // POST vers /credential
    // En cas de succès: showProgress(id, wsPath)
    // En cas d'erreur: alert + showCompanies
}
```

**Payload envoyé** :
```javascript
{
    collector: 'collector-id',
    params: {
        email: 'user@email.com',
        password: 'xxx',
        since: '2024-01-01'
    }
}
```

## Fonctions de feedback

### sendFeedback(event)

**Rôle** : Soumet le formulaire de demande de collecteur

```javascript
async function sendFeedback(event) {
    event.preventDefault();
    
    // Récupère l'URL du site
    // Valide que l'URL n'est pas vide
    // POST via post_send_feedback()
    // Affiche succès ou erreur
}
```

## Fonctions de progression

### showProgress(credential_id, wsPath)

**Rôle** : Gère l'écran de progression et le WebSocket

C'est la fonction la plus complexe du projet. Elle :

1. **Initialise l'UI** :
   - Affiche l'écran de progression
   - Réinitialise tous les états

2. **Établit le WebSocket** :
   ```javascript
   const ws = new WebSocket(wsPath);
   currentWebSocket = ws;
   ```

3. **Configure les événements canvas** :
   - Clics (coordonnées normalisées)
   - Touches clavier
   - Copier-coller (Ctrl+V)

4. **Gère les messages WebSocket** :

   **Message screenshot** :
   ```javascript
   if (parsedData.type === 'screenshot') {
       // Décode base64 -> blob -> image
       // Dessine sur le canvas
       // Affiche le canvas si non terminé
   }
   ```

   **Message state** :
   ```javascript
   if (parsedData.type === 'state') {
       // Met à jour la barre de progression
       // Anime le texte de progression
       // Affiche le formulaire 2FA si index === 3
       // Affiche le résultat final si terminé
   }
   ```

5. **Gère la fermeture** :
   ```javascript
   ws.onclose = () => {
       // Cache le canvas
       // Affiche le résultat final
   };
   ```

**États de progression** :
- `index >= max` : Succès
- `index >= 0` : Erreur inconnue
- `index < 0` : Erreur avec message

## Classe Datepicker

### Constructeur

```javascript
const picker = new Datepicker(inputElement, {
    format: 'yyyy-MM-dd',
    minDate: null,
    maxDate: null,
    onChange: null,
    placeholder: 'Sélectionnez une date'
});
```

### Méthodes publiques

| Méthode | Description |
|---------|-------------|
| `getValue()` | Retourne la Date sélectionnée ou null |
| `setValue(date)` | Définit la date (Date ou string) |
| `clear()` | Efface la sélection |
| `open()` | Ouvre le calendrier |
| `close()` | Ferme le calendrier |
| `toggle()` | Bascule ouvert/fermé |
| `destroy()` | Détruit l'instance et nettoie le DOM |
| `formatDate(date)` | Formate une date selon le format configuré |

### Méthodes privées

| Méthode | Description |
|---------|-------------|
| `init()` | Initialisation complète |
| `createStructure()` | Crée le DOM du datepicker |
| `addEventListeners()` | Attache les événements |
| `render()` | Génère le HTML du calendrier |
| `generateDays()` | Génère la grille des jours |
| `renderDay()` | Génère un jour individuel |
| `isDateDisabled()` | Vérifie si une date est désactivée |
| `handleAction()` | Route les actions utilisateur |
| `prevMonth()` / `nextMonth()` | Navigation mensuelle |
| `selectDate()` | Sélectionne une date |
| `parseDate()` | Parse une string en Date |
| `formatDateForData()` | Format ISO pour data-attributes |
| `updateHasValueClass()` | Met à jour la classe has-value |

### Fonction factory

```javascript
function createDatepicker(selector, options) {
    // Accepte un sélecteur CSS ou un élément
    // Retourne une instance ou un array d'instances
}
```

## Internationalisation

### Objet i18n

Défini dans le template EJS et exposé globalement :

```javascript
const i18n = {
    cantFindCollector: "...",
    letUsKnow: "...",
    requestNew: "...",
    fieldsRequired: "...",
    fieldRequired: "...",
    datepicker: {
        clear: "...",
        placeholder: "...",
        months: [...],
        weekdays: [...]
    }
};
```

### Ajouter une nouvelle traduction

1. Ajouter la clé dans le fichier i18n du serveur
2. Exposer dans le bloc `<script>` du template EJS
3. Utiliser via `i18n.maNouvelleCle` dans le JS

## Patterns courants

### Anti-double soumission

```javascript
if (isSubmitting) return;
isSubmitting = true;
submitButton.disabled = true;

try {
    // ... appel API ...
} finally {
    isSubmitting = false;
    submitButton.disabled = false;
}
```

### Gestion des erreurs API

```javascript
try {
    const response = await fetch(...);
    if (!response.ok) {
        // Afficher alert d'erreur
        return;
    }
    const data = await response.json();
    // Traiter succès
} catch (error) {
    console.error('Error:', error);
    // Afficher message générique
}
```

### Animation de transition

```javascript
// Fade out
element.classList.add('fade');
await new Promise(r => setTimeout(r, 500));

// Changer le contenu
element.textContent = newText;

// Fade in
element.classList.remove('fade');
```

## Événements personnalisés

### Message vers le parent

```javascript
window.parent.postMessage({ 
    type: 'invoice-collector-close' 
}, '*');
```

### Écouter les messages du canvas

Le canvas envoie des événements au WebSocket :
- `click` : Clic utilisateur
- `keydown` : Touche clavier
- `type` : Texte collé
- `twofa` : Code 2FA
- `close` : Fermeture

## Dépendances externes

Le code est vanilla JavaScript sans dépendances externes. Tout est inclus dans le fichier script.js.

## Bonnes pratiques

1. **Toujours vérifier `isSubmitting`** avant les soumissions
2. **Utiliser `try/catch`** pour les appels API
3. **Nettoyer les ressources** (WebSocket, Datepicker) quand plus nécessaire
4. **Utiliser les classes `ic-hidden`** pour afficher/masquer
5. **Logger les erreurs** avec `console.error`