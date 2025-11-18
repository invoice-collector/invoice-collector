/**
 * Datepicker vanilla JavaScript
 * Calendrier élégant sans dépendances externes
 */

class Datepicker {
  constructor(inputElement, options = {}) {
    this.input = inputElement;
    
    // Utiliser les traductions de i18n global ou fallback
    this.i18n = (window.i18n && window.i18n.datepicker) ? window.i18n.datepicker : {
      months: [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ],
      weekdays: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      clear: 'Effacer',
      placeholder: 'Sélectionnez une date'
    };
    
    this.options = {
      format: options.format || 'yyyy-MM-dd',
      minDate: options.minDate || null,
      maxDate: options.maxDate || null,
      onChange: options.onChange || null,
      placeholder: options.placeholder || this.i18n.placeholder,
    };

    this.selectedDate = null;
    this.currentMonth = new Date().getMonth();
    this.currentYear = new Date().getFullYear();
    this.isOpen = false;

    this.init();
  }

  init() {
    // Créer la structure HTML
    this.createStructure();
    
    // Rendre l'input readonly
    this.input.readOnly = true;
    this.input.placeholder = this.options.placeholder;
    
    // Ajouter les événements
    this.addEventListeners();
    
    // Parser la valeur initiale si elle existe
    if (this.input.value) {
      this.selectedDate = this.parseDate(this.input.value);
      if (this.selectedDate) {
        this.currentMonth = this.selectedDate.getMonth();
        this.currentYear = this.selectedDate.getFullYear();
      }
    }
    
    // Render initial
    this.render();
  }

  createStructure() {
    // Wrapper principal
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'ic-datepicker-wrapper';
    
    // Input group
    const inputGroup = document.createElement('div');
    inputGroup.className = 'ic-datepicker-input-group';
    
    // Bouton clear
    this.clearButton = document.createElement('button');
    this.clearButton.className = 'ic-datepicker-clear';
    this.clearButton.innerHTML = '×';
    this.clearButton.type = 'button';
    this.clearButton.title = this.i18n.clear;
    
    // Icône calendrier
    const icon = document.createElement('span');
    icon.className = 'ic-datepicker-icon';
    icon.innerHTML = '<img src="/views/styles/icons/calendar.svg" alt="Calendar">';
    
    // Modal overlay
    this.modalOverlay = document.createElement('div');
    this.modalOverlay.className = 'ic-datepicker-modal-overlay';
    
    // Modal
    this.modal = document.createElement('div');
    this.modal.className = 'ic-datepicker-modal';
    
    // Assembler
    this.input.parentNode.insertBefore(this.wrapper, this.input);
    this.wrapper.appendChild(inputGroup);
    inputGroup.appendChild(this.input);
    inputGroup.appendChild(this.clearButton);
    inputGroup.appendChild(icon);
    
    // Ajouter la modale au body pour éviter les problèmes de z-index
    document.body.appendChild(this.modalOverlay);
    this.modalOverlay.appendChild(this.modal);
    
    // Mettre à jour la classe has-value
    this.updateHasValueClass();
  }

  addEventListeners() {
    // Ouvrir/fermer le calendrier
    this.input.addEventListener('click', () => this.toggle());
    
    // Bouton clear
    this.clearButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.clear();
    });
    
    // Fermer en cliquant sur l'overlay
    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) {
        this.close();
      }
    });
    
    // Fermer avec ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  render() {
    // Générer les options pour le sélecteur de mois/année
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let y = currentYear - 10; y <= currentYear + 10; y++) {
      years.push(y);
    }
    
    const monthOptions = this.i18n.months.map((month, index) => 
      `<option value="${index}" ${index === this.currentMonth ? 'selected' : ''}>${month}</option>`
    ).join('');
    
    const yearOptions = years.map(year => 
      `<option value="${year}" ${year === this.currentYear ? 'selected' : ''}>${year}</option>`
    ).join('');
    
    const html = `
      <div class="ic-datepicker-header">
        <button type="button" class="ic-datepicker-nav-button" data-action="prev-month">‹</button>
        <div class="ic-datepicker-month-year-select">
          <select data-action="change-month">${monthOptions}</select>
        </div>
        <div class="ic-datepicker-month-year-select">
          <select data-action="change-year">${yearOptions}</select>
        </div>
        <button type="button" class="ic-datepicker-nav-button" data-action="next-month">›</button>
      </div>
      
      <div class="ic-datepicker-calendar">
        <div class="ic-datepicker-weekdays">
          ${this.i18n.weekdays.map(day => `<div class="ic-datepicker-weekday">${day}</div>`).join('')}
        </div>
        <div class="ic-datepicker-days">
          ${this.generateDays()}
        </div>
      </div>
      
      <div class="ic-datepicker-footer">
        <button type="button" class="ic-datepicker-footer-button clear" data-action="clear">${this.i18n.clear}</button>
      </div>
    `;
    
    this.modal.innerHTML = html;
    
    // Ajouter les événements sur les boutons et selects
    this.modal.querySelectorAll('[data-action]').forEach(element => {
      if (element.tagName === 'SELECT') {
        element.addEventListener('change', (e) => {
          e.stopPropagation();
          const action = element.dataset.action;
          if (action === 'change-month') {
            this.currentMonth = parseInt(element.value);
            this.render();
          } else if (action === 'change-year') {
            this.currentYear = parseInt(element.value);
            this.render();
          }
        });
      } else {
        element.addEventListener('click', (e) => {
          e.stopPropagation();
          this.handleAction(element.dataset.action, element.dataset.date);
        });
      }
    });
  }

  generateDays() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const prevLastDay = new Date(this.currentYear, this.currentMonth, 0);
    
    // Lundi = 1, Dimanche = 0 -> convertir pour que Lundi soit le premier jour
    let firstDayOfWeek = firstDay.getDay();
    firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    
    const daysInMonth = lastDay.getDate();
    const prevDaysInMonth = prevLastDay.getDate();
    
    let html = '';
    
    // Jours du mois précédent
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = prevDaysInMonth - i;
      const date = new Date(this.currentYear, this.currentMonth - 1, day);
      html += this.renderDay(day, date, true);
    }
    
    // Jours du mois actuel
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(this.currentYear, this.currentMonth, day);
      html += this.renderDay(day, date, false);
    }
    
    // Jours du mois suivant pour compléter la grille
    const totalCells = firstDayOfWeek + daysInMonth;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    
    for (let day = 1; day <= remainingCells; day++) {
      const date = new Date(this.currentYear, this.currentMonth + 1, day);
      html += this.renderDay(day, date, true);
    }
    
    return html;
  }

  renderDay(day, date, isOtherMonth) {
    const isSelected = this.selectedDate && date.getTime() === this.selectedDate.getTime();
    const isDisabled = this.isDateDisabled(date);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    
    const classes = [
      'ic-datepicker-day',
      isOtherMonth && 'other-month',
      isSelected && 'selected',
      isWeekend && 'weekend',
    ].filter(Boolean).join(' ');
    
    const dateStr = this.formatDateForData(date);
    
    return `
      <button 
        type="button" 
        class="${classes}" 
        data-action="select-day" 
        data-date="${dateStr}"
        ${isDisabled ? 'disabled' : ''}
      >
        ${day}
      </button>
    `;
}

  isDateDisabled(date) {
    if (this.options.minDate && date < this.options.minDate) {
      return true;
    }
    if (this.options.maxDate && date > this.options.maxDate) {
      return true;
    }
    return false;
  }

  handleAction(action, data) {
    switch (action) {
      case 'prev-month':
        this.prevMonth();
        break;
      case 'next-month':
        this.nextMonth();
        break;
      case 'clear':
        this.clear();
        this.close();
        break;
      case 'select-day':
        this.selectDate(this.parseDate(data));
        break;
    }
  }

  prevMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.render();
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.render();
  }

  selectDate(date) {
    if (!date || this.isDateDisabled(date)) return;
    
    this.selectedDate = date;
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    
    // Mettre à jour l'input
    this.input.value = this.formatDate(date);
    this.updateHasValueClass();
    
    // Callback
    if (this.options.onChange) {
      this.options.onChange(date, this.formatDate(date));
    }
    
    // Fermer le calendrier
    this.close();
  }

  clear() {
    this.selectedDate = null;
    this.input.value = '';
    this.updateHasValueClass();
    
    if (this.options.onChange) {
      this.options.onChange(null, '');
    }
    
    this.render();
  }

  open() {
    this.isOpen = true;
    this.modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Si une date est sélectionnée, naviguer vers ce mois
    if (this.selectedDate) {
      this.currentMonth = this.selectedDate.getMonth();
      this.currentYear = this.selectedDate.getFullYear();
      this.render();
    }
  }

  close() {
    this.isOpen = false;
    this.modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  updateHasValueClass() {
    if (this.input.value) {
      this.wrapper.classList.add('has-value');
    } else {
      this.wrapper.classList.remove('has-value');
    }
  }

  formatDate(date) {
    if (!date) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return this.options.format
      .replace('yyyy', year)
      .replace('MM', month)
      .replace('dd', day);
  }

  formatDateForData(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  parseDate(dateStr) {
    if (!dateStr) return null;
    
    const parts = dateStr.split('-');
    if (parts.length !== 3) return null;
    
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const day = parseInt(parts[2]);
    
    const date = new Date(year, month, day);
    date.setHours(0, 0, 0, 0);
    
    return isNaN(date.getTime()) ? null : date;
  }

  getValue() {
    return this.selectedDate;
  }

  setValue(date) {
    if (typeof date === 'string') {
      date = this.parseDate(date);
    }
    
    if (date instanceof Date && !isNaN(date.getTime())) {
      this.selectDate(date);
    }
  }

  destroy() {
    // Retirer la modale du DOM
    if (this.modalOverlay && this.modalOverlay.parentNode) {
      this.modalOverlay.remove();
    }
    
    // Remettre l'input en place
    if (this.wrapper && this.wrapper.parentNode) {
      this.wrapper.parentNode.insertBefore(this.input, this.wrapper);
      this.wrapper.remove();
    }
    
    // Restaurer le overflow du body
    document.body.style.overflow = '';
  }
}

/**
 * Fonction helper pour initialiser facilement un datepicker
 * @param {string|HTMLElement} selector - Sélecteur CSS ou élément HTML
 * @param {Object} options - Options du datepicker
 * @returns {Datepicker|Datepicker[]} Instance(s) de Datepicker
 */
function createDatepicker(selector, options = {}) {
  if (typeof selector === 'string') {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return null;
    if (elements.length === 1) return new Datepicker(elements[0], options);
    return Array.from(elements).map(el => new Datepicker(el, options));
  } else if (selector instanceof HTMLElement) {
    return new Datepicker(selector, options);
  }
  return null;
}

window.Datepicker = Datepicker;
window.createDatepicker = createDatepicker;