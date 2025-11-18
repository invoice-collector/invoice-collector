# 📅 Datepicker Vanilla - Invoice Collector

Calendrier élégant sans dépendances externes, entièrement personnalisable avec les thèmes.

## 🚀 Installation

### 1. Inclure les fichiers CSS

```html
<link rel="stylesheet" href="styles/base.css">
<link rel="stylesheet" href="styles/theme.default.css">
<link rel="stylesheet" href="styles/datepicker.css">
```

### 2. Importer le module JavaScript

```javascript
import { createDatepicker, Datepicker } from './utils/datepicker.js';
```

## 📖 Utilisation de base

### Méthode simple

```javascript
// Sélectionner un input et créer le datepicker
const datepicker = createDatepicker('#my-input');
```

### Méthode avec options

```javascript
const datepicker = createDatepicker('#my-input', {
  format: 'yyyy-MM-dd',
  placeholder: 'Sélectionnez une date',
  minDate: new Date(), // Date minimale
  maxDate: null,       // Date maximale (null = pas de limite)
  onChange: (date, formattedDate) => {
    console.log('Date sélectionnée:', date, formattedDate);
  }
});
```

### Instanciation directe

```javascript
const input = document.getElementById('my-input');
const datepicker = new Datepicker(input, {
  format: 'yyyy-MM-dd',
  onChange: (date, formattedDate) => {
    console.log('Nouvelle date:', formattedDate);
  }
});
```

## ⚙️ Options

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `format` | `string` | `'yyyy-MM-dd'` | Format de la date affichée |
| `placeholder` | `string` | `'Sélectionnez une date'` | Placeholder de l'input |
| `minDate` | `Date\|null` | `null` | Date minimale sélectionnable |
| `maxDate` | `Date\|null` | `null` | Date maximale sélectionnable |
| `onChange` | `function\|null` | `null` | Callback appelé lors du changement de date |

## 🎯 Méthodes publiques

### `getValue()`
Retourne la date sélectionnée sous forme d'objet `Date` ou `null`.

```javascript
const selectedDate = datepicker.getValue();
console.log(selectedDate); // Date object or null
```

### `setValue(date)`
Définit la date sélectionnée. Accepte un objet `Date` ou une chaîne au format `yyyy-MM-dd`.

```javascript
datepicker.setValue(new Date());
// ou
datepicker.setValue('2024-01-15');
```

### `clear()`
Efface la date sélectionnée.

```javascript
datepicker.clear();
```

### `open()`
Ouvre le calendrier.

```javascript
datepicker.open();
```

### `close()`
Ferme le calendrier.

```javascript
datepicker.close();
```

### `destroy()`
Détruit le datepicker et restaure l'input d'origine.

```javascript
datepicker.destroy();
```

## 💡 Exemples d'utilisation

### Exemple 1 : Date de collecte optionnelle

```javascript
const datepicker = createDatepicker('#date-since', {
  placeholder: 'Laissez vide pour aujourd\'hui',
  onChange: (date, formattedDate) => {
    if (date) {
      console.log('Collecter à partir de:', formattedDate);
    } else {
      console.log('Collecter à partir d\'aujourd\'hui');
    }
  }
});
```

### Exemple 2 : Date minimale (aujourd'hui)

```javascript
const today = new Date();
today.setHours(0, 0, 0, 0);

const datepicker = createDatepicker('#start-date', {
  minDate: today,
  onChange: (date, formattedDate) => {
    console.log('Date de début:', formattedDate);
  }
});
```

### Exemple 3 : Plage de dates (année en cours)

```javascript
const startOfYear = new Date(new Date().getFullYear(), 0, 1);
const endOfYear = new Date(new Date().getFullYear(), 11, 31);

const datepicker = createDatepicker('#year-date', {
  minDate: startOfYear,
  maxDate: endOfYear,
  onChange: (date, formattedDate) => {
    console.log('Date dans l\'année:', formattedDate);
  }
});
```

### Exemple 4 : Intégration dans un formulaire

```html
<form id="collector-form">
  <div class="ic-form-group">
    <label class="ic-label">Date de collecte (optionnel)</label>
    <input type="text" id="date-picker" class="ic-input">
    <span class="ic-input-helper">
      Choisissez une date pour commencer la collecte.
    </span>
  </div>
  
  <button type="submit" class="ic-button ic-button--primary">
    Ajouter le collecteur
  </button>
</form>

<script type="module">
  import { createDatepicker } from './utils/datepicker.js';
  
  const datepicker = createDatepicker('#date-picker');
  
  document.getElementById('collector-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const selectedDate = datepicker.getValue();
    console.log('Date sélectionnée:', selectedDate);
    
    // Envoyer le formulaire avec la date
    // ...
  });
</script>
```

## 🎨 Personnalisation CSS

Le datepicker utilise les variables CSS des thèmes. Pour personnaliser :

```css
/* Modifier les variables du thème */
html[data-theme="custom"] {
  --primary: #your-color;
  --card: #your-background;
  --text: #your-text-color;
  /* ... */
}

/* Ou surcharger directement les styles */
.ic-datepicker-day.selected {
  background: #custom-color;
}
```

## 🌍 Internationalisation

Pour changer la langue, modifiez les constantes dans `datepicker.js` :

```javascript
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
```

## ✨ Fonctionnalités

- ✅ Aucune dépendance externe
- ✅ Responsive (mobile-friendly)
- ✅ Thèmes personnalisables
- ✅ Support des dates min/max
- ✅ Bouton "Aujourd'hui"
- ✅ Bouton "Effacer"
- ✅ Navigation mois par mois
- ✅ Mise en évidence de la date du jour
- ✅ Accessibilité (ESC pour fermer, click outside)
- ✅ Format de date personnalisable
- ✅ Callback onChange

## 📱 Compatibilité

- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Notes importantes

- L'input devient automatiquement `readonly` pour éviter la saisie manuelle
- Le datepicker se ferme automatiquement après sélection d'une date
- La touche `ESC` ferme le datepicker
- Cliquer en dehors du datepicker le ferme également