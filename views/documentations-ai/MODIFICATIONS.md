# Guide des Modifications Courantes

Ce document fournit des instructions directes pour les modifications les plus fréquentes. Chaque section inclut le fichier à modifier, l'emplacement et le code exact.

## Modifications des styles

### Changer la couleur primaire

**Fichier** : `views/styles/theme.{nom}.css`

**Localisation** : Variables CSS dans `:root`

```css
/* Trouver ces lignes et modifier les valeurs */
--primary: #2563eb;        /* Couleur principale */
--primary-hover: #3b82f6;  /* Survol */
--primary-focus: rgba(59, 130, 246, 0.15); /* Focus ring */
```

**Exemple** : Changer en violet
```css
--primary: #7c3aed;
--primary-hover: #8b5cf6;
--primary-focus: rgba(124, 58, 237, 0.15);
```

### Modifier les couleurs d'état

**Fichier** : `views/styles/theme.{nom}.css`

```css
/* Success - Vert */
--success: #10b981;
--success-hover: #059669;
--success-bg: #d1fae5;

/* Warning - Orange */
--warning: #f59e0b;
--warning-hover: #d97706;
--warning-bg: #fef3c7;

/* Danger - Rouge */
--danger: #ef4444;
--danger-hover: #dc2626;
--danger-bg: #fee2e2;
```

### Changer le rayon des bordures

**Fichier** : `views/styles/theme.{nom}.css`

```css
--radius: 4px;      /* Standard (8px pour ocean) */
--radius-lg: 16px;  /* Grand */
```

### Modifier les ombres

**Fichier** : `views/styles/theme.{nom}.css`

```css
--shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
--shadow-hover: 0 4px 12px -2px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### Changer le nombre de colonnes de la grille

**Fichier** : `views/styles/theme.{nom}.css`

**Localisation** : Section `.ic-grid`

```css
/* 2 colonnes au lieu de 3 sur desktop */
@media (min-width: 1024px) {
  .ic-grid {
    grid-template-columns: repeat(2, 1fr); /* était 3 */
  }
}
```

### Modifier les breakpoints

**Fichier** : `views/styles/theme.{nom}.css`

```css
/* Grille */
@media (min-width: 750px) { /* Tablet */
@media (min-width: 1024px) { /* Desktop */

/* Responsive général */
@media (max-width: 639px) { /* Mobile */
```

## Modifications du template HTML

### Changer le titre de la page

**Fichier** : `views/ui/ui.ejs`

**Ligne** : ~5

```html
<title>Invoice-Collector - <%= __('i18n.views.manage.my_collectors') %></title>
```

### Modifier l'en-tête de la liste

**Fichier** : `views/ui/ui.ejs`

**Localisation** : Section 1, `#companies-container`

```html
<div class="ic-header">
    <h1 class="ic-header-title"><%= __('i18n.views.manage.add_collectors') %></h1>
    <p class="ic-header-subtitle"><%= __('i18n.views.manage.select_collector') %></p>
</div>
```

### Ajouter un nouveau badge d'état

**Fichier** : `views/ui/script.js`

**Fonction** : `renderCompanies()`

```javascript
// Trouver ce bloc et ajouter un nouveau cas
${company.state === 'development' ? '<span class="ic-badge ic-badge--info">Development</span>' : ''}
${company.state === 'active' ? '<span class="ic-badge ic-badge--stable">Active</span>' : ''}
${company.state === 'maintenance' ? '<span class="ic-badge ic-badge--beta">Maintenance</span>' : ''}
${company.state === 'deprecated' ? '<span class="ic-badge ic-badge--alpha">Deprecated</span>' : ''} /* NOUVEAU */
```

**Aussi dans** : `showForm()` pour le badge du formulaire

### Modifier le texte du bouton de fermeture

**Fichier** : `views/ui/ui.ejs`

**Localisation** : Sections progress-response-*

```html
<button class="ic-button ic-button--primary" onclick="closeIframe()">
    <%= __('i18n.views.manage.close') || 'Close' %>
</button>
```

### Ajouter un champ au formulaire de feedback

**Fichier** : `views/ui/ui.ejs`

**Localisation** : Section 5, `#feedback-form`

```html
<!-- Ajouter avant le bouton submit -->
<div class="ic-form-group">
    <label class="ic-label">Votre email (optionnel)</label>
    <input type="email" name="email" class="ic-input" placeholder="email@exemple.com">
</div>
```

**Fichier** : `views/ui/script.js`

**Fonction** : `sendFeedback()`

```javascript
const feedbackBody = {
    type: 'new_collector',
    message: params.website_url,
    email: params.email || '' // Récupérer le nouveau champ
};
```

## Modifications JavaScript

### Changer le nombre de résultats de recherche

**Fichier** : `views/ui/script.js`

**Fonction** : `searchCollectorsWithScore()`

```javascript
// Dernière ligne de la fonction
.slice(0, 100); // Changer 100 par le nombre souhaité
```

### Modifier l'algorithme de scoring de recherche

**Fichier** : `views/ui/script.js`

**Fonction** : `searchCollectorsWithScore()`

```javascript
// Ajuster les poids
if (name === termLower) score += 8;        // Match exact
else if (name.startsWith(termLower)) score += 4; // Commence par
else if (name.includes(termLower)) score += 2;   // Contient
```

### Changer le format de date du datepicker

**Fichier** : `views/ui/script.js`

**Fonction** : `showForm()`

```javascript
datepickerSince = createDatepicker('#datepicker-since', {
    format: 'dd/MM/yyyy', // Changer le format ici
    placeholder: 'jj / mm / aaaa'
});
```

### Modifier la taille du canvas

**Fichier** : `views/ui/ui.ejs`

**Localisation** : Section 4

```html
<canvas id="canvas" width="1920" height="1080"></canvas>
```

### Ajouter une validation personnalisée

**Fichier** : `views/ui/script.js`

**Fonction** : `addCredential()`

```javascript
// Ajouter après la validation des champs requis
const emailInput = form.querySelector('input[name="email"]');
if (emailInput && !emailInput.value.includes('@')) {
    document.getElementById('form-error').classList.remove('ic-hidden');
    emailInput.focus();
    return;
}
```

### Changer le comportement après succès

**Fichier** : `views/ui/script.js`

**Fonction** : `showProgress()`, dans `showFinalResult()`

```javascript
if (state.index >= state.max) {
    responseSuccess.hidden = false;
    // Ajouter un délai avant fermeture auto
    setTimeout(() => closeIframe(), 3000);
}
```

### Ajouter un nouveau type d'événement WebSocket

**Fichier** : `views/ui/script.js`

**Fonction** : `showProgress()`, dans `ws.onmessage`

```javascript
if (parsedData.type === 'custom_event') {
    // Gérer l'événement personnalisé
    console.log('Custom event:', parsedData.data);
}
```

## Ajout de nouvelles fonctionnalités

### Ajouter une nouvelle section

1. **Dans ui.ejs** : Créer le container
```html
<div id="new-section-container" class="ic-container ic-hidden">
    <!-- Contenu -->
</div>
```

2. **Dans script.js** : Créer la fonction de navigation
```javascript
function showNewSection() {
    // Masquer tous les containers
    document.getElementById('companies-container').classList.add('ic-hidden');
    document.getElementById('form-container').classList.add('ic-hidden');
    document.getElementById('progress-container').classList.add('ic-hidden');
    document.getElementById('feedback-container').classList.add('ic-hidden');
    
    // Afficher le nouveau
    document.getElementById('new-section-container').classList.remove('ic-hidden');
}
```

### Ajouter un nouveau composant datepicker

**Fichier** : `views/ui/script.js`

```javascript
// Dans showForm() ou une autre fonction
const myPicker = createDatepicker('#my-date-input', {
    format: 'yyyy-MM-dd',
    onChange: (date, formatted) => {
        console.log('Date changed:', formatted);
    }
});
```

### Ajouter une modale de confirmation

**Fichier** : `views/ui/ui.ejs`

```html
<div id="confirm-modal" class="ic-modal-overlay ic-hidden">
    <div class="ic-modal">
        <div class="ic-modal-header">
            <h2 class="ic-modal-title">Confirmation</h2>
        </div>
        <div class="ic-modal-body">
            <p>Êtes-vous sûr de vouloir continuer ?</p>
        </div>
        <div class="ic-modal-footer">
            <button class="ic-button ic-button--ghost" onclick="closeModal()">
                Annuler
            </button>
            <button class="ic-button ic-button--primary" onclick="confirmAction()">
                Confirmer
            </button>
        </div>
    </div>
</div>
```

**Fichier** : `views/ui/script.js`

```javascript
function showConfirmModal() {
    document.getElementById('confirm-modal').classList.remove('ic-hidden');
}

function closeModal() {
    document.getElementById('confirm-modal').classList.add('ic-hidden');
}

function confirmAction() {
    closeModal();
    // Exécuter l'action
}
```

## Personnalisation du datepicker

### Changer les jours de la semaine

**Fichier** : `views/ui/ui.ejs` (bloc i18n)

```javascript
weekdays: [
    "L", "M", "M", "J", "V", "S", "D" // Version courte
]
```

### Ajouter une date par défaut

**Fichier** : `views/ui/script.js`

```javascript
datepickerSince = createDatepicker('#datepicker-since', {
    format: 'yyyy-MM-dd'
});
// Définir aujourd'hui - 1 an comme défaut
const oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
datepickerSince.setValue(oneYearAgo);
```

### Limiter les dates sélectionnables

**Fichier** : `views/ui/script.js`

```javascript
datepickerSince = createDatepicker('#datepicker-since', {
    format: 'yyyy-MM-dd',
    minDate: new Date('2020-01-01'),
    maxDate: new Date() // Aujourd'hui
});
```

## Internationalisation

### Ajouter une nouvelle traduction côté client

1. **Fichier** : `views/ui/ui.ejs` (bloc script i18n)

```javascript
const i18n = {
    // ... existant ...
    newKey: "<%= __('i18n.views.manage.new_key') %>"
};
```

2. **Usage dans script.js** :
```javascript
element.textContent = i18n.newKey;
```

### Ajouter une traduction pour le datepicker

**Fichier** : `views/ui/ui.ejs`

```javascript
datepicker: {
    // ... existant ...
    today: "<%= __('i18n.views.manage.datepicker_today') %>"
}
```

## Debugging

### Ajouter des logs de debug

**Fichier** : `views/ui/script.js`

```javascript
// En début de fonction
console.log('[Function Name] called with:', params);

// Pour les WebSocket
ws.onmessage = (event) => {
    console.log('[WS] Received:', JSON.parse(event.data));
    // ...
};
```

### Afficher l'état de l'application

**Fichier** : `views/ui/script.js`

```javascript
// Ajouter en global
window.debugState = () => ({
    companies: companies.length,
    currentWebSocket: !!currentWebSocket,
    isSubmitting,
    datepicker: datepickerSince?.getValue()
});
```

Usage dans la console : `debugState()`

## Checklist avant déploiement

- [ ] Tester les deux thèmes (default et ocean)
- [ ] Vérifier le responsive (mobile, tablet, desktop)
- [ ] Tester la recherche de collecteurs
- [ ] Tester le formulaire avec validation
- [ ] Tester le flux WebSocket complet
- [ ] Vérifier les traductions
- [ ] Tester le datepicker
- [ ] Vérifier les états d'erreur
- [ ] Tester sur différents navigateurs