/**
 * Invoice Collector - Main Application Script
 */

/* ===================================
   GLOBAL VARIABLES
   =================================== */

const token = new URLSearchParams(window.location.search).get('token');
let companies = [];
let hit = [];
let datepickerSince = null;
let isSubmitting = false;
let currentWebSocket = null;


/* ===================================
   INITIALIZATION
   =================================== */

document.addEventListener('DOMContentLoaded', async () => {
    showCompanies();
    
    document.getElementById('add-credential-form').addEventListener('submit', addCredential);
    document.querySelector('#feedback-form select[name="collector_type"]').addEventListener('change', feedbackTypeChanged);
    document.getElementById('feedback-form').addEventListener('submit', sendFeedback);
    
    getCollectors()
        .then(c => {
            companies = c;
            showCompanies();
        })
        .catch(error => {
            console.error('Error getting the companies:', error);
        });
});


/* ===================================
   API FUNCTIONS
   =================================== */

async function getCollectors() {
    const response = await fetch(`collectors?locale=${locale}&token=${token}`);
    return await response.json();
}

async function post_send_feedback(body) {
    return await fetch(`feedback?token=${token}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

async function deleteCredential(id) {
    await fetch(`credential/${id}?token=${token}`, {
        method: 'DELETE'
    });
    showCredentials();
}


/* ===================================
   NAVIGATION FUNCTIONS
   =================================== */

const NAVIGATION_EVENT_CLOSE = { type: 'invoice-collector-close' };
const NAVIGATION_EVENT_SHOW_COMPANIES = { type: 'invoice-collector-panel-search' };
const NAVIGATION_EVENT_SHOW_FORM = { type: 'invoice-collector-panel-form' };
const NAVIGATION_EVENT_SHOW_FEEDBACK = { type: 'invoice-collector-panel-feedback' };
const NAVIGATION_EVENT_SHOW_PROGRESS = { type: 'invoice-collector-panel-progress' };
const NAVIGATION_EVENT_SHOW_CANVAS = { type: 'invoice-collector-panel-canvas' };

function closeIframe() {
    window.parent.postMessage(NAVIGATION_EVENT_CLOSE, '*');
    showCompanies();
}

async function showCompanies() {
    document.getElementById('companies-container').classList.remove('ic-hidden');
    document.getElementById('form-container').classList.add('ic-hidden');
    document.getElementById('progress-container').classList.add('ic-hidden');
    document.getElementById('feedback-container').classList.add('ic-hidden');
    
    document.body.style.overflow = 'hidden';
    
    const searchInput = document.getElementById('search-collectors');
    if (searchInput) {
        searchInput.value = '';
    }
    
    renderCompanies(companies.slice(0, 100));
    window.parent.postMessage(NAVIGATION_EVENT_SHOW_COMPANIES, '*');
}

function showFeedback(type) {
    document.getElementById('companies-container').classList.add('ic-hidden');
    document.getElementById('form-container').classList.add('ic-hidden');
    document.getElementById('progress-container').classList.add('ic-hidden');
    document.getElementById('feedback-container').classList.remove('ic-hidden');
    
    document.getElementById('feedback-response-success').classList.add('ic-hidden');
    document.getElementById('feedback-response-error').classList.add('ic-hidden');
    document.querySelector('#feedback-form input[name="type"]').value = type;
    
    const feedbackForm = document.getElementById('feedback-form');
    const submitButton = feedbackForm.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = false;
    }
    window.parent.postMessage(NAVIGATION_EVENT_SHOW_FEEDBACK, '*');
}


/* ===================================
   COMPANIES LIST & SEARCH
   =================================== */

function filterCompanies(searchTerm) {
    const filteredCompanies = searchCollectorsWithScore(companies, searchTerm);
    renderCompanies(filteredCompanies);
}

function searchCollectorsWithScore(collectors, searchTerm) {
    if (!searchTerm || searchTerm.length < 1) return collectors.slice(0, 100);
    
    const computeCollectorScore = (collector, term) => {
        if (!term || term.length < 1) return 0;
        
        const normalize = (str) => str.normalize('NFD')
            .replace(/[^a-zA-Z]/g, '').toLowerCase();
        
        const name = normalize(collector.name);
        const termLower = normalize(term);
        
        let score = 0;
        if (name === termLower) score += 8;
        else if (name.startsWith(termLower)) score += 4;
        else if (name.includes(termLower)) score += 2;
        
        return score;
    };
    
    return collectors
        .map(collector => ({
            collector,
            score: computeCollectorScore(collector, searchTerm)
        }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ collector }) => collector)
        .slice(0, 100);
}

function renderCompanies(companiesToRender) {
    const companyList = document.getElementById('companies-list');
    companyList.innerHTML = '';
    
    companiesToRender.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.className = 'ic-card';
        const paramsCount = Object.keys(company.params).length;
        const fieldsText = paramsCount === 1 ? i18n.fieldRequired : i18n.fieldsRequired;
        
        companyCard.innerHTML = `
            <div class="ic-card-header">
                <img src="${company.logo}" alt="${company.name}" class="ic-card-logo">
                <div>
                    <label class="ic-card-title">${company.name}</label>
                </div>
            </div>
            <div class="ic-card-body">
                <p class="ic-card-description" title="${company.description}">${company.description}</p>
            </div>
            <div class="ic-card-footer">
                <div class="ic-card-meta">
                    <span>${paramsCount} ${fieldsText}</span>
                </div>
                ${company.state === 'development' ? '<span class="ic-badge ic-badge--info">Development</span>' : ''}
                ${company.state === 'active' ? '<span class="ic-badge ic-badge--stable">Active</span>' : ''}
                ${company.state === 'maintenance' ? '<span class="ic-badge ic-badge--beta">Maintenance</span>' : ''}
            </div>
        `;
        companyCard.addEventListener('click', () => showForm(company));
        companyList.appendChild(companyCard);
    });
    
    const specialCard = document.createElement('div');
    specialCard.className = 'ic-card ic-card--special';
    specialCard.innerHTML = `
        <div class="ic-card-header">
            <img src="/views/icons/plus.svg" alt="Add" class="ic-card-logo">
            <div>
                <label class="ic-card-title">${i18n.cantFindCollector}</label>
            </div>
        </div>
        <div class="ic-card-body">
            <p class="ic-card-description">${i18n.letUsKnow}</p>
        </div>
        <div class="ic-card-footer">
            <div class="ic-card-meta">
                <span>${i18n.requestNew}</span>
            </div>
        </div>
    `;
    specialCard.addEventListener('click', () => showFeedback('new_collector'));
    companyList.appendChild(specialCard);
}


/* ===================================
   CREDENTIAL FORM
   =================================== */

function showForm(company) {
    document.getElementById('companies-container').classList.add('ic-hidden');
    document.getElementById('form-container').classList.remove('ic-hidden');
    document.getElementById('progress-container').classList.add('ic-hidden');
    document.getElementById('feedback-container').classList.add('ic-hidden');
    
    document.getElementById('form-logo').src = company.logo;
    document.getElementById('form-name').textContent = company.name;
    document.getElementById('form-description').textContent = company.description;
    document.getElementById('form-title').textContent = `Configure ${company.name}`;
    
    const badge = document.getElementById('form-badge');
    if (company.state === 'development') {
        badge.className = 'ic-badge ic-badge--info';
        badge.textContent = 'Development';
    } else if (company.state === 'active') {
        badge.className = 'ic-badge ic-badge--stable';
        badge.textContent = 'Active';
    } else if (company.state === 'maintenance') {
        badge.className = 'ic-badge ic-badge--beta';
        badge.textContent = 'Maintenance';
    }
    
    const instructionsDiv = document.getElementById('add-credential-instructions');
    if (company.instructions) {
        instructionsDiv.classList.remove('ic-hidden');
        document.getElementById('instructions-text').innerHTML = company.instructions;
    } else {
        instructionsDiv.classList.add('ic-hidden');
    }
    
    const formParams = document.getElementById('add-credential-form-params');
    const form = document.getElementById('add-credential-form');
    const hitSketch = document.getElementById('hit-sketch');
    const hitSketchButton = document.getElementById('hit-sketch-button');
    
    formParams.innerHTML = '';
    form.dataset.collector = company.id;
    document.getElementById('form-error').classList.add('ic-hidden');
    
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = false;
    }
    
    if (datepickerSince) {
        datepickerSince.destroy();
        datepickerSince = null;
    }

    form.style.display = 'block';
    hitSketch.classList.add('ic-hidden');
    
    Object.keys(company.params).forEach(key => {
        const param = company.params[key];

        const formGroup = document.createElement('div');
        formGroup.className = 'ic-form-group ic-form-group--floating';
        
        const label = document.createElement('label');
        label.className = 'ic-label';
        if (param.mandatory) {
            label.className += ' ic-label--required';
        }
        label.textContent = param.name;
        
        const input = document.createElement('input');
        input.className = 'ic-input';
        input.type = param.type === 'password' ? 'password' : 'text';
        input.name = key;
        input.placeholder = param.placeholder;
        input.required = param.mandatory;
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        formParams.appendChild(formGroup);
    });
    
    datepickerSince = createDatepicker('#datepicker-since', {
        format: 'yyyy-MM-dd',
        placeholder: 'jj / mm / aaaa'
    });
   
    window.parent.postMessage(NAVIGATION_EVENT_SHOW_FORM, '*');
}

async function addCredential(event) {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    const formData = new FormData(form);
    let params = {};
    formData.forEach((value, key) => {
        if(key != "since") params[key] = value;
    });
    
    if (!datepickerSince || !datepickerSince.getValue()) {
        document.getElementById('form-error').classList.remove('ic-hidden');
        document.getElementById('datepicker-since').focus();
        return;
    }
    
    const requiredInputs = form.querySelectorAll('input[required]');
    let allFilled = true;
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });
    
    if (!allFilled) {
        document.getElementById('form-error').classList.remove('ic-hidden');
        return;
    }
    
    const download_from_timestamp = datepickerSince.getValue().getTime();
    
    document.getElementById('form-error').classList.add('ic-hidden');
    
    isSubmitting = true;
    submitButton.disabled = true;
    
    try {
        const response = await fetch(`credential?token=${token}`, {
            method: 'POST',
            body: JSON.stringify({
                collector: form.dataset.collector,
                download_from_timestamp,
                params
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const content = await response.json();
        form.reset();
        
        if (!response.ok) {
            console.error('Error adding credential:', content);
            alert(`Error: ${content.message || 'An error occurred while adding the credential.'}`);
            showCompanies();
        } else {
            showProgress(content.id, content.wsPath);
        }
    } catch (error) {
        console.error('Error adding credential:', error);
        alert('An error occurred while adding the credential.');
        showCompanies();
    } finally {
        isSubmitting = false;
        submitButton.disabled = false;
    }
}


/* ===================================
   FEEDBACK FORM
   =================================== */

function feedbackTypeChanged(event) {
    const invoicesUrlContainer = document.querySelector('#feedback-form div.ic-form-group:has(input[name="invoices_url"])')
    const invoicesUrlInput = document.querySelector('#feedback-form div.ic-form-group input[name="invoices_url"]')
    if (event.target.value == "web") {
        invoicesUrlContainer.classList.remove('ic-hidden');
        invoicesUrlInput.required = true;
    } else {
        invoicesUrlContainer.classList.add('ic-hidden');
        invoicesUrlInput.required = false;
    }
}

async function sendFeedback(event) {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    const formData = new FormData(form);
    let params = {};
    formData.forEach((value, key) => {
        params[key] = value;
    });
    
    if (!params.website_url || !params.website_url.trim()) {
        document.getElementById('feedback-response-error').classList.remove('ic-hidden');
        document.getElementById('feedback-response-success').classList.add('ic-hidden');
        return;
    }
    
    const feedbackBody = {
        type: 'new_collector',
        message: JSON.stringify({
            website_url: params.website_url,
            collector_type: params.collector_type,
            invoices_url: params.invoices_url,
        }),
        email: ''
    };
    
    isSubmitting = true;
    submitButton.disabled = true;
    
    try {
        const response = await post_send_feedback(feedbackBody);
        form.reset();
        document.querySelector('#feedback-form input[name="type"]').value = 'new_collector';
        
        if (!response.ok) {
            document.getElementById('feedback-response-error').classList.remove('ic-hidden');
            document.getElementById('feedback-response-success').classList.add('ic-hidden');
        } else {
            document.getElementById('feedback-response-success').classList.remove('ic-hidden');
            document.getElementById('feedback-response-error').classList.add('ic-hidden');
        }
    } catch (error) {
        console.error('Error sending feedback:', error);
        document.getElementById('feedback-response-error').classList.remove('ic-hidden');
        document.getElementById('feedback-response-success').classList.add('ic-hidden');
    } finally {
        isSubmitting = false;
        submitButton.disabled = false;
    }
}


/* ===================================
   PROGRESS & WEBSOCKET
   =================================== */

async function showProgress(credential_id, wsPath) {
    const progressLoading = document.getElementById('progress-loading');
    const progressBarSection = document.getElementById('progress-bar-section');
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const responseSuccess = document.getElementById('progress-response-success');
    const responseUnknown = document.getElementById('progress-response-unknown');
    const responseError = document.getElementById('progress-response-error');
    const responseErrorText = document.getElementById('progress-response-error-text');
    const container2FA = document.getElementById('send-2fa-container');
    const containerCanvas = document.getElementById('canvas-container');
    const form2fa = document.getElementById('send-2fa-form');
    const form2faInstructions = document.getElementById('send-2fa-instructions');
    
    progressLoading.hidden = false;
    progressBarSection.hidden = false;
    progressText.textContent = '';
    progressBar.style.width = '0%';
    responseSuccess.hidden = true;
    responseUnknown.hidden = true;
    responseError.hidden = true;
    container2FA.hidden = true;
    containerCanvas.hidden = true;
    form2fa.reset();
    form2faInstructions.textContent = '';
    
    document.getElementById('companies-container').classList.add('ic-hidden');
    document.getElementById('form-container').classList.add('ic-hidden');
    document.getElementById('progress-container').classList.remove('ic-hidden');
    document.getElementById('feedback-container').classList.add('ic-hidden');
    
    const VIRTUAL_MAX = 5;

    function showFinalResult(state) {
        progressLoading.hidden = true;
        progressBarSection.hidden = true;
        container2FA.hidden = true;
        containerCanvas.hidden = true;
        
        if (state.index >= VIRTUAL_MAX) {
            responseSuccess.hidden = false;
            responseUnknown.hidden = true;
            responseError.hidden = true;
        } else if (state.index >= 0) {
            responseSuccess.hidden = true;
            responseUnknown.hidden = false;
            responseError.hidden = true;
        } else {
            responseSuccess.hidden = true;
            responseUnknown.hidden = true;
            responseError.hidden = false;
            responseErrorText.textContent = state.message;
        }
        window.parent.postMessage(NAVIGATION_EVENT_SHOW_PROGRESS, '*');
    }
    
    function cancelAndClose() {
        finished = true;
        cancelled = true;
        containerCanvas.hidden = true;
        if (currentWebSocket && currentWebSocket.readyState === WebSocket.OPEN) {
            currentWebSocket.send(JSON.stringify({ type: 'close', reason: 'cancel' }));
            currentWebSocket.close();
        }
        currentWebSocket = null;
        showCompanies();
    }
    
    let finished = false;
    let cancelled = false;
    const ws = new WebSocket(wsPath);
    currentWebSocket = ws;
    
    ws.onopen = () => {
        const canvas = document.getElementById('canvas');
        const canvasOkButton = document.getElementById('canvas-ok');
        const canvasCancelButton = document.getElementById('canvas-cancel');
        const canvasBackButton = document.getElementById('canvas-back');
        
        canvas.addEventListener('click', function(event) {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            const clickX = event.clientX - rect.left;
            const clickY = event.clientY - rect.top;
            const normalizedX = (clickX * scaleX) / canvas.width;
            const normalizedY = (clickY * scaleY) / canvas.height;
            
            ws.send(JSON.stringify({ 
                type: 'click', 
                x: normalizedX, 
                y: normalizedY 
            }));
        });
        
        canvas.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key.toLowerCase() === 'v') {
                navigator.clipboard.readText().then(text => {
                    ws.send(JSON.stringify({ type: 'type', text: text }));
                }).catch(err => {
                    console.error('Clipboard read failed:', err);
                });
            } else {
                ws.send(JSON.stringify({ type: 'keydown', key: event.key }));
            }
        });
        
        canvas.setAttribute('tabindex', '0');
        canvas.focus();
        
        canvasOkButton.onclick = function() {
            finished = true;
            containerCanvas.hidden = true;
            document.getElementById('progress-container').classList.remove('ic-hidden');
            ws.send(JSON.stringify({ type: 'close', reason: 'ok' }));
            window.parent.postMessage(NAVIGATION_EVENT_SHOW_PROGRESS, '*');
        };
        
        canvasCancelButton.onclick = cancelAndClose;
        canvasBackButton.onclick = cancelAndClose;
    };
    
    let previous_state, current_state;
    
    ws.onmessage = async function(event) {
        const parsedData = JSON.parse(event.data);
        
        if (parsedData.type === 'screenshot') {
            const arrayBuffer = Uint8Array.from(atob(parsedData.screenshot), c => c.charCodeAt(0)).buffer;
            const blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'image/png' });
            const url = URL.createObjectURL(blob);
            const img = new Image();
            
            img.onload = function() {
                const canvas = document.getElementById('canvas');
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                URL.revokeObjectURL(url);
            };
            img.src = url;
            
            if (!finished) {
                containerCanvas.hidden = false;
                document.getElementById('progress-container').classList.add('ic-hidden');
                window.parent.postMessage(NAVIGATION_EVENT_SHOW_CANVAS, '*');
            }
        } else if (parsedData.type === 'state') {
            current_state = parsedData.state;
            
            if (current_state.index >= VIRTUAL_MAX || current_state.index < 0) {
                if (!cancelled) {
                    showFinalResult(current_state);
                }
                return;
            }
            
            if (previous_state == undefined || previous_state.index !== current_state.index) {
                progressBar.style.width = `${current_state.index / current_state.max * 100}%`;
                progressText.textContent = current_state.title;

                if (current_state.index === 3) {
                    container2FA.hidden = false;
                    form2faInstructions.textContent = current_state.message;
                }
            }
            previous_state = current_state;
        }
    };
    
    ws.onclose = () => {
        containerCanvas.hidden = true;
        currentWebSocket = null;
        
        if (cancelled) return;
        
        document.getElementById('progress-container').classList.remove('ic-hidden');
        
        if (current_state) {
            showFinalResult(current_state);
        }
    };
    
    form2fa.addEventListener('submit', async (event) => {
        container2FA.hidden = true;
        event.preventDefault();
        ws.send(JSON.stringify({ type: 'twofa', twofa: event.target['code'].value }));
    });

    window.parent.postMessage(NAVIGATION_EVENT_SHOW_PROGRESS, '*');
}


/* ===================================
   DATEPICKER COMPONENT
   =================================== */

class Datepicker {
    constructor(inputElement, options = {}) {
        this.input = inputElement;
        
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
        this.createStructure();
        this.input.readOnly = true;
        this.input.placeholder = this.options.placeholder;
        this.addEventListeners();
        
        this.input.value = this.formatDate(new Date());
        this.selectedDate = this.parseDate(this.input.value);

        if (this.selectedDate) {
            this.currentMonth = this.selectedDate.getMonth();
            this.currentYear = this.selectedDate.getFullYear();
        }
        
        this.render();
    }
    
    createStructure() {
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'ic-datepicker-wrapper';
        
        const inputGroup = document.createElement('div');
        inputGroup.className = 'ic-datepicker-input-group';
        
        this.clearButton = document.createElement('button');
        this.clearButton.className = 'ic-datepicker-clear';
        this.clearButton.innerHTML = '×';
        this.clearButton.type = 'button';
        this.clearButton.title = this.i18n.clear;
        
        const icon = document.createElement('span');
        icon.className = 'ic-datepicker-icon';
        icon.innerHTML = '<img src="/views/icons/calendar.svg" alt="Calendar">';
        
        this.modalOverlay = document.createElement('div');
        this.modalOverlay.className = 'ic-datepicker-modal-overlay';
        
        this.modal = document.createElement('div');
        this.modal.className = 'ic-datepicker-modal';
        
        this.input.parentNode.insertBefore(this.wrapper, this.input);
        this.wrapper.appendChild(inputGroup);
        inputGroup.appendChild(this.input);
        inputGroup.appendChild(this.clearButton);
        inputGroup.appendChild(icon);
        
        document.body.appendChild(this.modalOverlay);
        this.modalOverlay.appendChild(this.modal);
        
        this.updateHasValueClass();
    }
    
    addEventListeners() {
        this.input.addEventListener('click', () => this.toggle());
        
        this.clearButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.clear();
        });
        
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.close();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }
    
    render() {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let y = currentYear; y >= currentYear - 5; y--) {
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
                <div class="ic-datepicker-month-year">
                    ${this.i18n.months[this.currentMonth]} ${this.currentYear}
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
        
        let firstDayOfWeek = firstDay.getDay();
        firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
        
        const daysInMonth = lastDay.getDate();
        const prevDaysInMonth = prevLastDay.getDate();
        
        let html = '';
        
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            const day = prevDaysInMonth - i;
            const date = new Date(this.currentYear, this.currentMonth - 1, day);
            html += this.renderDay(day, date, true);
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(this.currentYear, this.currentMonth, day);
            html += this.renderDay(day, date, false);
        }
        
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
        if (this.options.minDate && date < this.options.minDate) return true;
        if (this.options.maxDate && date > this.options.maxDate) return true;
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
        
        this.input.value = this.formatDate(date);
        this.updateHasValueClass();
        
        if (this.options.onChange) {
            this.options.onChange(date, this.formatDate(date));
        }
        
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
        if (this.modalOverlay && this.modalOverlay.parentNode) {
            this.modalOverlay.remove();
        }
        
        if (this.wrapper && this.wrapper.parentNode) {
            this.wrapper.parentNode.insertBefore(this.input, this.wrapper);
            this.wrapper.remove();
        }
        
        document.body.style.overflow = '';
    }
}

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