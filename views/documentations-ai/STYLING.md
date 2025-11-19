# Guide des Styles CSS

## Système de thèmes

L'application utilise un système de variables CSS pour permettre plusieurs thèmes. Le thème est chargé dynamiquement via le paramètre `theme` passé au template EJS.

### Thèmes disponibles

| Fichier | Nom | Description |
|---------|-----|-------------|
| `views/styles/theme.default.css` | Default | Thème clair avec couleurs bleues |
| `views/styles/theme.ocean.css` | Ocean | Thème sombre style marine |

### Variables CSS principales

#### Couleurs de base

```css
--bg                 /* Fond de page */
--text               /* Texte principal */
--text-secondary     /* Texte secondaire */
--muted              /* Texte atténué */
--placeholder        /* Placeholder des inputs */
```

#### Couleur primaire

```css
--primary            /* Couleur principale (boutons, liens) */
--primary-hover      /* Survol de la couleur principale */
--primary-focus      /* Ombre de focus (rgba) */
```

#### Cartes

```css
--card               /* Fond des cartes */
--card-border        /* Bordure des cartes */
--card-special       /* Fond carte spéciale (demande collecteur) */
--card-special-hover /* Survol carte spéciale */
```

#### États

Chaque état a 3 variables : base, hover, et background

```css
/* Success - Vert */
--success, --success-hover, --success-bg

/* Warning - Orange */
--warning, --warning-hover, --warning-bg

/* Danger - Rouge */
--danger, --danger-hover, --danger-bg

/* Info - Bleu */
--info, --info-hover, --info-bg
```

#### Formulaires

```css
--input-bg           /* Fond des inputs */
--input-border       /* Bordure des inputs */
--disabled-bg        /* Fond des inputs désactivés */
```

#### Ombres

```css
--shadow             /* Ombre normale */
--shadow-hover       /* Ombre au survol */
--shadow-lg          /* Grande ombre (modales) */
```

#### Rayons de bordure

```css
--radius             /* Rayon standard (8px ocean, 4px default) */
--radius-lg          /* Grand rayon (16px) */
--radius-full        /* Cercle (9999px) */
```

## Créer un nouveau thème

1. Dupliquer `theme.default.css` ou `theme.ocean.css`
2. Renommer en `theme.{nom}.css`
3. Modifier les valeurs des variables dans `:root`
4. Ajuster les filtres SVG si nécessaire (voir section Icônes)

### Exemple : Thème sombre personnalisé

```css
:root {
  --bg: #121212;
  --text: #ffffff;
  --primary: #bb86fc;
  /* ... autres variables ... */
}
```

## Classes CSS par composant

### Conteneur principal

```css
.ic-container        /* Conteneur scrollable avec padding */
.ic-header           /* En-tête avec titre */
.ic-header-title     /* Titre H1 */
.ic-header-subtitle  /* Sous-titre */
```

### Grille

```css
.ic-grid             /* Grille responsive (1/2/3 colonnes) */
```

Breakpoints :
- < 750px : 1 colonne
- 750px-1024px : 2 colonnes
- > 1024px : 3 colonnes

### Cartes

```css
.ic-card             /* Carte standard */
.ic-card--special    /* Carte spéciale (bordure pointillée) */
.ic-card-header      /* En-tête avec logo et titre */
.ic-card-logo        /* Logo 48x48 */
.ic-card-title       /* Titre de la carte */
.ic-card-body        /* Corps de la carte */
.ic-card-description /* Description (2 lignes max) */
.ic-card-footer      /* Pied avec métadonnées */
.ic-card-meta        /* Informations méta */
```

### Badges

```css
.ic-badge            /* Badge de base */
.ic-badge--stable    /* Vert - Production */
.ic-badge--beta      /* Orange - Beta */
.ic-badge--alpha     /* Rouge - Alpha */
.ic-badge--info      /* Bleu - Info */
```

### Boutons

```css
.ic-button           /* Bouton de base */
.ic-button--primary  /* Bouton principal (fond coloré) */
.ic-button--secondary /* Bouton secondaire (bordure) */
.ic-button--ghost    /* Bouton fantôme (transparent) */
.ic-button--danger   /* Bouton danger (rouge) */
.ic-button--icon     /* Bouton icône seule (34x34) */
```

### Formulaires

```css
.ic-form-group       /* Groupe de champ */
.ic-label            /* Label */
.ic-label--required  /* Label avec astérisque rouge */
.ic-input            /* Input texte */
.ic-textarea         /* Zone de texte */
.ic-input-helper     /* Texte d'aide sous l'input */
.ic-input-error      /* Message d'erreur */
.ic-input-wrapper    /* Wrapper pour input avec icône */
.ic-input-icon       /* Icône dans l'input */
```

### Alertes

```css
.ic-alert            /* Alert de base */
.ic-alert--error     /* Rouge - Erreur */
.ic-alert--success   /* Vert - Succès */
.ic-alert--info      /* Bleu - Information */
.ic-alert--warning   /* Orange - Avertissement */
.ic-alert-icon       /* Icône de l'alert */
```

### Progression

```css
.ic-progress         /* Conteneur progression */
.ic-progress-label   /* Label de progression */
.ic-progress-bar     /* Fond de la barre */
.ic-progress-fill    /* Remplissage animé */
```

### Loader

```css
.ic-loader           /* Conteneur du spinner */
.ic-spinner          /* Spinner animé */
.ic-spinner--small   /* Petit (20px) */
.ic-spinner--large   /* Grand (60px) */
```

### Écran de progression

```css
.ic-progress-screen  /* Conteneur centré */
.ic-progress-card    /* Carte de progression */
.ic-progress-divider /* Séparateur horizontal */
.ic-progress-card-title /* Titre */
.ic-progress-card-subtitle /* Sous-titre */
```

### Icônes de réponse

```css
.ic-response-icon-large           /* Cercle 80px */
.ic-response-icon-large--success  /* Fond vert */
.ic-response-icon-large--warning  /* Fond orange */
.ic-response-icon-large--danger   /* Fond rouge */
```

### Canvas plein écran

```css
.ic-canvas-fullscreen     /* Conteneur fixed */
.ic-canvas-toolbar        /* Barre d'outils */
.ic-canvas-toolbar-back   /* Bouton retour */
.ic-canvas-toolbar-icon   /* Icône centrale */
.ic-canvas-toolbar-text   /* Texte d'instruction */
.ic-canvas-toolbar-actions /* Actions (OK/Cancel) */
.ic-canvas-content        /* Zone du canvas */
```

### Datepicker

```css
.ic-datepicker-wrapper    /* Wrapper principal */
.ic-datepicker-modal-overlay /* Overlay sombre */
.ic-datepicker-modal      /* Modal du calendrier */
.ic-datepicker-header     /* Navigation mois/année */
.ic-datepicker-calendar   /* Grille du calendrier */
.ic-datepicker-day        /* Jour individuel */
.ic-datepicker-footer     /* Boutons d'action */
```

## Classes utilitaires

### Texte

```css
.ic-text-center      /* text-align: center */
.ic-text-muted       /* color: var(--muted) */
```

### Marges

```css
.ic-mb-1 à .ic-mb-4  /* margin-bottom */
.ic-mt-1 à .ic-mt-4  /* margin-top */
```

### Flexbox

```css
.ic-flex             /* display: flex */
.ic-flex-center      /* flex centré */
.ic-flex-between     /* space-between */
```

### Gap

```css
.ic-gap-1 à .ic-gap-3 /* gap: 0.5rem à 1.5rem */
```

### Affichage

```css
.ic-hidden           /* display: none */
```

## Gestion des icônes SVG

Les icônes sont colorées via des filtres CSS car les SVG sont chargés via `<img>`.

### Filtres par thème

**Theme Default (clair)** :
```css
filter: brightness(0) saturate(100%);  /* Noir */
```

**Theme Ocean (sombre)** :
```css
filter: brightness(0) invert(1);  /* Blanc */
```

### Filtres pour alertes colorées

Les icônes dans les alertes utilisent des filtres spécifiques pour matcher la couleur de l'alerte :

```css
/* Danger - Rouge */
filter: invert(27%) sepia(94%) saturate(2255%) 
        hue-rotate(347deg) brightness(91%) contrast(93%);

/* Success - Vert */
filter: invert(48%) sepia(79%) saturate(382%) 
        hue-rotate(93deg) brightness(95%) contrast(92%);
```

## Animations

### Shimmer (barre de progression)

```css
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

### Spin (spinner)

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Fade In (modal)

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Slide Up (modal content)

```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Responsive Design

### Breakpoints

- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px

### Adaptations mobiles

- Container : padding réduit à 1rem
- Titres : taille réduite
- Cards : padding réduit
- Modal footer : boutons empilés
- Canvas toolbar : texte masqué, icônes seules
- Datepicker : boutons empilés

## Bonnes pratiques

1. **Toujours utiliser les variables CSS** - Ne jamais coder de couleurs en dur
2. **Respecter le préfixe `ic-`** - Pour éviter les conflits
3. **Utiliser les classes utilitaires** - Plutôt que du CSS inline
4. **Tester les deux thèmes** - Après chaque modification
5. **Vérifier le responsive** - Surtout pour les nouveaux composants