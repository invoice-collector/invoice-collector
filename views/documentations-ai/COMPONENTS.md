# Guide des Composants UI

Ce document détaille tous les composants UI disponibles avec leur HTML, leurs classes CSS et leurs variantes.

## Cartes (Cards)

### Carte standard

```html
<div class="ic-card">
    <div class="ic-card-header">
        <img src="logo.png" alt="Logo" class="ic-card-logo">
        <div>
            <label class="ic-card-title">Titre</label>
        </div>
    </div>
    <div class="ic-card-body">
        <p class="ic-card-description">Description du collecteur</p>
    </div>
    <div class="ic-card-footer">
        <div class="ic-card-meta">
            <span>2 champs requis</span>
        </div>
        <span class="ic-badge ic-badge--stable">Active</span>
    </div>
</div>
```

### Carte spéciale (demande nouveau collecteur)

```html
<div class="ic-card ic-card--special">
    <div class="ic-card-header">
        <img src="/views/icons/plus.svg" alt="Add" class="ic-card-logo">
        <div>
            <label class="ic-card-title">Collecteur introuvable ?</label>
        </div>
    </div>
    <div class="ic-card-body">
        <p class="ic-card-description">Faites-nous savoir</p>
    </div>
    <div class="ic-card-footer">
        <div class="ic-card-meta">
            <span>Demander</span>
        </div>
    </div>
</div>
```

## Badges

### Variantes disponibles

```html
<!-- Production -->
<span class="ic-badge ic-badge--stable">Active</span>

<!-- Beta -->
<span class="ic-badge ic-badge--beta">Maintenance</span>

<!-- Alpha / Danger -->
<span class="ic-badge ic-badge--alpha">Alpha</span>

<!-- Information -->
<span class="ic-badge ic-badge--info">Development</span>
```

## Boutons

### Bouton principal

```html
<button class="ic-button ic-button--primary">
    Ajouter le collecteur
</button>
```

### Bouton secondaire

```html
<button class="ic-button ic-button--secondary">
    Annuler
</button>
```

### Bouton fantôme

```html
<button class="ic-button ic-button--ghost">
    Retour
</button>
```

### Bouton danger

```html
<button class="ic-button ic-button--danger">
    Supprimer
</button>
```

### Bouton avec icône

```html
<button class="ic-button ic-button--primary">
    <img src="/views/icons/check.svg" alt="OK" class="ic-canvas-btn-icon">
    <span>Confirmer</span>
</button>
```

### Bouton icône seule

```html
<button class="ic-button ic-button--icon ic-button--ghost">
    <img src="/views/icons/x.svg" alt="Fermer">
</button>
```

### État désactivé

```html
<button class="ic-button ic-button--primary" disabled>
    Chargement...
</button>
```

## Formulaires

### Groupe de champ standard

```html
<div class="ic-form-group">
    <label class="ic-label">Email</label>
    <input type="email" class="ic-input" placeholder="exemple@email.com">
</div>
```

### Champ obligatoire

```html
<div class="ic-form-group">
    <label class="ic-label ic-label--required">Mot de passe</label>
    <input type="password" class="ic-input" required>
</div>
```

### Champ avec texte d'aide

```html
<div class="ic-form-group">
    <label class="ic-label">Date de début</label>
    <input type="text" class="ic-input">
    <span class="ic-input-helper">
        Les factures seront récupérées à partir de cette date
    </span>
</div>
```

### Champ avec erreur

```html
<div class="ic-form-group error">
    <label class="ic-label ic-label--required">Email</label>
    <input type="email" class="ic-input" value="invalid">
    <span class="ic-input-error">Format d'email invalide</span>
</div>
```

### Input avec icône

```html
<div class="ic-form-group">
    <div style="position: relative;">
        <img src="/views/icons/search.svg" alt="Search" class="ic-input-icon">
        <input type="text" class="ic-input" style="padding-left: 3rem;">
    </div>
</div>
```

### Zone de texte

```html
<div class="ic-form-group">
    <label class="ic-label">Description</label>
    <textarea class="ic-textarea" rows="4"></textarea>
</div>
```

## Alertes

### Alert erreur

```html
<div class="ic-alert ic-alert--error">
    <img src="/views/icons/x.svg" alt="Error" class="ic-alert-icon">
    <div>
        <strong>Erreur</strong> Les champs requis ne sont pas remplis.
    </div>
</div>
```

### Alert succès

```html
<div class="ic-alert ic-alert--success">
    <img src="/views/icons/check.svg" alt="Success" class="ic-alert-icon">
    <div>Votre demande a été envoyée avec succès.</div>
</div>
```

### Alert information

```html
<div class="ic-alert ic-alert--info">
    <img src="/views/icons/circle-question-mark.svg" alt="Info" class="ic-alert-icon">
    <div>
        <strong>Instructions :</strong>
        <p>Connectez-vous avec vos identifiants.</p>
    </div>
</div>
```

### Alert avertissement

```html
<div class="ic-alert ic-alert--warning">
    <img src="/views/icons/alert-triangle.svg" alt="Warning" class="ic-alert-icon">
    <div>Cette action est irréversible.</div>
</div>
```

## Barre de progression

```html
<div class="ic-progress">
    <div class="ic-progress-label">
        <span id="progress-text">Connexion en cours...</span>
    </div>
    <div class="ic-progress-bar">
        <div class="ic-progress-fill" style="width: 40%"></div>
    </div>
</div>
```

## Spinner / Loader

### Taille normale

```html
<div class="ic-loader">
    <div class="ic-spinner"></div>
</div>
```

### Petit spinner

```html
<div class="ic-spinner ic-spinner--small"></div>
```

### Grand spinner

```html
<div class="ic-spinner ic-spinner--large"></div>
```

## Bouton retour

```html
<a href="#" class="ic-back-button">
    <span class="ic-back-icon">
        <img src="/views/icons/move-left.svg" alt="Back">
    </span>
    Retour
</a>
```

## Bloc info collecteur

```html
<div class="ic-collector-info">
    <img src="logo.png" alt="Logo" class="ic-collector-info-logo">
    <div class="ic-collector-info-content">
        <h3 class="ic-collector-info-name">Nom du collecteur</h3>
        <p class="ic-collector-info-description">Description détaillée</p>
    </div>
    <span class="ic-badge ic-badge--stable">Active</span>
</div>
```

## Écran de progression

### Structure complète

```html
<div class="ic-progress-screen">
    <div class="ic-progress-card">
        <!-- Contenu selon l'état -->
    </div>
</div>
```

### État de chargement

```html
<div class="ic-loader">
    <div class="ic-spinner ic-spinner--large"></div>
</div>
<h1 class="ic-header-title">Ajout du collecteur</h1>
<p class="ic-header-subtitle">Collecte des données en cours...</p>
<div class="ic-progress-divider"></div>
<!-- Barre de progression -->
```

### État succès

```html
<div class="ic-response-icon-large ic-response-icon-large--success">
    <img src="/views/icons/check.svg" alt="Success">
</div>
<h1 class="ic-progress-card-title">Collecte terminée</h1>
<div class="ic-progress-divider"></div>
<p class="ic-progress-card-subtitle">
    Vos factures ont été collectées avec succès
</p>
<button class="ic-button ic-button--primary" style="width: 100%;">
    Fermer
</button>
```

### État erreur

```html
<div class="ic-response-icon-large ic-response-icon-large--danger">
    <img src="/views/icons/x.svg" alt="Error">
</div>
<h1 class="ic-progress-card-title ic-progress-card-title--danger">
    Échec de la collecte
</h1>
<div class="ic-progress-divider"></div>
<p class="ic-progress-card-subtitle">
    Identifiants invalides
</p>
```

## Canvas plein écran

```html
<div class="ic-canvas-fullscreen">
    <!-- Barre d'outils -->
    <div class="ic-canvas-toolbar">
        <button class="ic-canvas-toolbar-back">
            <img src="/views/icons/move-left.svg" alt="Back">
        </button>
        <span class="ic-canvas-toolbar-icon">
            <img src="/views/icons/key-round.svg" alt="Key">
        </span>
        <span class="ic-canvas-toolbar-text">
            Connectez-vous puis cliquez sur "Je suis connecté"
        </span>
        <div class="ic-canvas-toolbar-actions">
            <button class="ic-button ic-button--primary">
                <img src="/views/icons/check.svg" class="ic-canvas-btn-icon">
                <span class="ic-canvas-btn-text">Connecté</span>
            </button>
            <button class="ic-button ic-button--ghost">
                <img src="/views/icons/x.svg" class="ic-canvas-btn-icon">
                <span class="ic-canvas-btn-text">Annuler</span>
            </button>
        </div>
    </div>
    
    <!-- Zone canvas -->
    <div class="ic-canvas-content">
        <canvas id="canvas" width="1280" height="720"></canvas>
    </div>
</div>
```

## Datepicker

### Utilisation en JavaScript

```javascript
// Créer un datepicker
const picker = createDatepicker('#my-input', {
    format: 'yyyy-MM-dd',
    placeholder: 'Sélectionnez une date',
    minDate: new Date('2020-01-01'),
    maxDate: new Date(),
    onChange: (date, formatted) => {
        console.log('Date sélectionnée:', formatted);
    }
});

// Méthodes disponibles
picker.getValue();           // Retourne Date ou null
picker.setValue(new Date()); // Définit une date
picker.clear();              // Efface la sélection
picker.open();               // Ouvre le calendrier
picker.close();              // Ferme le calendrier
picker.destroy();            // Détruit l'instance
picker.formatDate(date);     // Formate une date
```

### Options du Datepicker

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `format` | string | `'yyyy-MM-dd'` | Format de date |
| `placeholder` | string | i18n | Placeholder de l'input |
| `minDate` | Date | null | Date minimum sélectionnable |
| `maxDate` | Date | null | Date maximum sélectionnable |
| `onChange` | function | null | Callback de changement |

### Internationalisation du Datepicker

Le datepicker utilise les traductions définies dans `window.i18n.datepicker` :

```javascript
i18n.datepicker = {
    months: ['Janvier', 'Février', ...],
    weekdays: ['Lun', 'Mar', ...],
    clear: 'Effacer',
    placeholder: 'Sélectionnez une date'
};
```

## Icônes disponibles

Liste des icônes SVG référencées dans le projet :

| Fichier | Usage |
|---------|-------|
| `calendar.svg` | Datepicker |
| `check.svg` | Succès, validation |
| `circle-question-mark.svg` | Information, aide |
| `key-round.svg` | Authentification |
| `move-left.svg` | Retour |
| `plus.svg` | Ajouter |
| `search.svg` | Recherche |
| `x.svg` | Fermer, erreur |

## Afficher/Masquer des éléments

### Via JavaScript

```javascript
// Masquer
element.classList.add('ic-hidden');

// Afficher
element.classList.remove('ic-hidden');

// Toggle
element.classList.toggle('ic-hidden');
```

### Via attribut hidden

```javascript
// Masquer
element.hidden = true;

// Afficher
element.hidden = false;
```

## Grille responsive

```html
<div class="ic-grid">
    <div class="ic-card">...</div>
    <div class="ic-card">...</div>
    <div class="ic-card">...</div>
</div>
```

Comportement automatique :
- Mobile : 1 colonne
- Tablet : 2 colonnes
- Desktop : 3 colonnes