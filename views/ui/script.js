const token = new URLSearchParams(window.location.search).get('token');
let companies = [];
let ip = null;
let hit = []
// Variable globale pour le datepicker
let datepickerSince = null;
// Variables pour gérer l'état des requêtes
let isSubmitting = false;
// Variable globale pour le WebSocket
let currentWebSocket = null;

document.addEventListener('DOMContentLoaded', async () => {
    // CHANGEMENT: On démarre directement sur showCompanies() au lieu de showCredentials()
    showCompanies();
    
    document.getElementById('add-credential-form').addEventListener('submit', addCredential);
    document.getElementById('feedback-form').addEventListener('submit', sendFeedback);
    
    getCollectors()
        .then(c => {
            console.log(c.length, 'companies loaded');
            companies = c;
            // Refresh companies list once loaded
            showCompanies();
        }).catch(error => {
            console.error('Error getting the companies:', error);
        });
});

async function getCollectors() {
    const response = await fetch(`collectors?locale=${locale}&token=${token}`);
    return await response.json();
}

function closeIframe() {
    // Post message au parent pour fermer l'iframe
    console.log('iframe closed');
    window.parent.postMessage({ type: 'invoice-collector-close' }, '*');
}

function buildCredentialFooter(credential) {
    if (credential.state.index < 0) {
        return `
            <div class="credential-footer credential-error">
                <img src="/views/icons/error.png" alt="Error"/>
                <div>${credential.state.message}</div>
            </div>
        `;
    }
    else if (credential.state.index < credential.state.max) {
        return `
            <div class="credential-footer credential-warning">
                <img src="/views/icons/pending.png" alt="Pending"/>
            </div>
        `;
    }
    else {
        return `
            <div class="credential-footer credential-success">
                <img src="/views/icons/success.png" alt="Success"/>
            </div>
        `;
    }
}

function buildCredentialStatus(credential) {
    let img, popup;
    if (credential.state.index < 0) {
        img = `<img src="/views/icons/error.png" alt="Error">`;
        popup = `<div class="popup popup-error">${credential.state.message}</div>`;
    }
    else if (credential.state.index < credential.state.max) {
        img = `<img src="/views/icons/pending.png" alt="Pending">`;
        popup = `<div class="popup">Collecte planifiée</div>`;
    }
    else {
        img = `<img src="/views/icons/success.png" alt="Success">`;
        popup = `<div class="popup">Vos identifiants sont valides</div>`;
    }
    return `
        <div class="credential-status">
            ${img}
            ${popup}
        </div>`
}

async function showCredentials() {
    // Hide all modals and show credentials table
    document.getElementById('credentials-container').hidden = false;
    document.getElementById('companies-container').classList.add('ic-hidden');
    document.getElementById('form-container').classList.add('ic-hidden');
    document.getElementById('progress-container').classList.add('ic-hidden');
    document.getElementById('feedback-container').classList.add('ic-hidden');
    
    // Restore body scroll
    document.body.style.overflow = '';
    // Get the elements
    const credentialsEmpty = document.getElementById('credentials-empty');
    const credentialsList = document.getElementById('credentials-list');
    // Get the credentials
    const response = await fetch(`credentials?token=${token}`);
    const credentials = await response.json();
    let credentialsList_innerHTML = '';
    if (credentials.length === 0) {
        credentialsEmpty.hidden = false;
    }
    else {
        credentialsEmpty.hidden = true;
        credentials.forEach(credential => {
            const credentialItem = `
                <tr class="credential">
                    <td class="table-column-center">
                        <img class="credential-logo" src="${credential.collector.logo}" alt="${credential.collector.name}" style="width: 48px; height: 48px; border-radius: 8px;">
                    </td>
                    <td>
                        ${credential.note ? credential.note : '--'}
                    </td>
                    <td>
                        ${buildCredentialStatus(credential)}
                    </td>
                    <td>
                        <div class="credential-collect">
                            ${credential.invoices.length}
                        </div>
                    </td>
                    <td>
                        <div class="credential-collect">
                            ${credential.last_collect_timestamp ? new Date(credential.last_collect_timestamp).toLocaleString() : '--'}
                        </div>
                    </td>
                    <td>
                        <div class="credential-collect">
                            ${credential.next_collect_timestamp ? new Date(credential.next_collect_timestamp).toLocaleString() : '--'}
                        </div>
                    </td>
                    <td class="table-column-center">
                        <button class="ic-button ic-button--danger ic-button--icon" onclick="deleteCredential('${credential.id}')">
                            <img src="/views/icons/delete.png" alt="Delete">
                        </button>
                    </td>
                </tr>`;
            
            credentialsList_innerHTML += credentialItem;
        });
    }
    credentialsList.innerHTML = credentialsList_innerHTML;
}

async function showCompanies() {
    // Hide all containers and show companies
    document.getElementById('companies-container').classList.remove('ic-hidden');
    document.getElementById('form-container').classList.add('ic-hidden');
    document.getElementById('progress-container').classList.add('ic-hidden');
    document.getElementById('feedback-container').classList.add('ic-hidden');
    
    // Block body scroll (modal is open)
    document.body.style.overflow = 'hidden';
    
    // Reset search field
    const searchInput = document.getElementById('search-collectors');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Render all companies (cette fonction gère tout l'affichage)
    renderCompanies(companies);
}

function showForm(company) {
    // Hide other containers
    document.getElementById('companies-container').classList.add('ic-hidden');
    document.getElementById('form-container').classList.remove('ic-hidden');
    document.getElementById('progress-container').classList.add('ic-hidden');
    document.getElementById('feedback-container').classList.add('ic-hidden');
    // Update form header
    document.getElementById('form-logo').src = company.logo;
    document.getElementById('form-name').textContent = company.name;
    document.getElementById('form-description').textContent = company.description;
    document.getElementById('form-title').textContent = `Configure ${company.name}`;
    
    const badge = document.getElementById('form-badge');
    if(company.state === 'development') {
        badge.className = 'ic-badge ic-badge--info';
        badge.textContent = 'Development';
    }
    else if(company.state === 'active') {
        badge.className = 'ic-badge ic-badge--stable';
        badge.textContent = 'Active';
    }
    else if(company.state === 'maintenance') {
        badge.className = 'ic-badge ic-badge--beta';
        badge.textContent = 'Maintenance';
    }
    
    // Update instructions
    const instructionsDiv = document.getElementById('add-credential-instructions');
    if (company.instructions) {
        instructionsDiv.classList.remove('ic-hidden');
        document.getElementById('instructions-text').innerHTML = company.instructions;
    } else {
        instructionsDiv.classList.add('ic-hidden');
    }
    // Get elements
    const formParams = document.getElementById('add-credential-form-params');
    const form = document.getElementById('add-credential-form');
    const hitSketch = document.getElementById('hit-sketch');
    const hitSketchButton = document.getElementById('hit-sketch-button');
    
    // Reset form
    formParams.innerHTML = '';
    form.dataset.collector = company.id;
    document.getElementById('form-error').classList.add('ic-hidden');
    
    // Réactiver le bouton submit (au cas où il était disabled)
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = false;
    }
    
    // Détruire l'ancien datepicker si existant
    if (datepickerSince) {
        datepickerSince.destroy();
        datepickerSince = null;
    }
    // If NOT a sketch collector, show form
    if(company.type != "sketch") {
        form.style.display = 'block';
        hitSketch.classList.add('ic-hidden');
        
        // Build form fields dynamically
        Object.keys(company.params).forEach(key => {
            const param = company.params[key];
            
            // Create form group
            const formGroup = document.createElement('div');
            formGroup.className = 'ic-form-group';
            
            // Create label
            const label = document.createElement('label');
            label.className = 'ic-label';
            if (param.mandatory) {
                label.className += ' ic-label--required';
            }
            label.textContent = param.name;
            
            // Create input
            const input = document.createElement('input');
            input.className = 'ic-input';
            input.type = param.type === 'password' ? 'password' : 'text';
            input.name = key;
            input.placeholder = param.placeholder;
            input.required = param.mandatory;
            
            // Append to form group
            formGroup.appendChild(label);
            formGroup.appendChild(input);
            formParams.appendChild(formGroup);
        });
        // Initialiser le datepicker
        datepickerSince = createDatepicker('#datepicker-since', {
            format: 'yyyy-MM-dd',
            placeholder: 'jj / mm / aaaa',
            onChange: (date, formattedDate) => {
                console.log('Date selected:', formattedDate);
            }
        });
    }
    // If sketch collector, show sketch section
    else {
        form.style.display = 'none';
        hitSketch.classList.remove('ic-hidden');
        document.getElementById('hit-sketch-success').classList.add('ic-hidden');
        
        // Set onclick for sketch button
        hitSketchButton.onclick = async() => {
            document.getElementById('hit-sketch-success').classList.remove('ic-hidden');
            if (!hit.includes(company.id)) {
                await post_send_feedback({
                    type: 'sketch',
                    message: company.id,
                });
                hit.push(company.id);
            }
        }
    }
}

async function addCredential(event) {
    event.preventDefault();
    
    // Empêcher les soumissions multiples
    if (isSubmitting) return;
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Convert form data to object
    const formData = new FormData(form);
    let params = {};
    formData.forEach((value, key) => {
        params[key] = value;
    });
    
    // Vérifier que le datepicker a une valeur (champ obligatoire)
    if (!datepickerSince || !datepickerSince.getValue()) {
        document.getElementById('form-error').classList.remove('ic-hidden');
        // Mettre le focus sur le datepicker
        document.getElementById('datepicker-since').focus();
        return;
    }
    
    // Vérifier que tous les champs required sont remplis
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
    
    // Ajouter la date du datepicker
    params.since = datepickerSince.formatDate(datepickerSince.getValue());
    
    document.getElementById('form-error').classList.add('ic-hidden');
    
    // Désactiver le bouton et marquer comme en cours de soumission
    isSubmitting = true;
    submitButton.disabled = true;
    
    try {
        // Send request
        const response = await fetch(`credential?token=${token}`, {
            method: 'POST',
            body: JSON.stringify({
                collector: form.dataset.collector,
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
        }
        else {
            showProgress(content.id, content.wsPath);
        }
    } catch (error) {
        console.error('Error adding credential:', error);
        alert('An error occurred while adding the credential.');
        showCompanies();
    } finally {
        // Réactiver le bouton
        isSubmitting = false;
        submitButton.disabled = false;
    }
}

async function showProgress(credential_id, wsPath) {
    // Get the elements
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
    
    // Reset values
    progressLoading.hidden = false;
    progressBarSection.hidden = false;
    progressText.textContent = '';
    progressText.classList.add('fade');
    progressBar.style.width = `0%`;
    responseSuccess.hidden = true;
    responseUnknown.hidden = true;
    responseError.hidden = true;
    container2FA.hidden = true;
    containerCanvas.hidden = true;
    form2fa.reset();
    form2faInstructions.textContent = '';
    
    // Hide other containers
    document.getElementById('companies-container').classList.add('ic-hidden');
    document.getElementById('form-container').classList.add('ic-hidden');
    document.getElementById('progress-container').classList.remove('ic-hidden');
    document.getElementById('feedback-container').classList.add('ic-hidden');
    
    // Fonction pour afficher le résultat final
    function showFinalResult(state) {
        // Cacher les éléments de progression
        progressLoading.hidden = true;
        progressBarSection.hidden = true;
        container2FA.hidden = true;
        containerCanvas.hidden = true;
        
        // Afficher le résultat approprié
        if (state.index >= state.max) {
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
    }
    
    // Fonction pour annuler et fermer le WebSocket
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
    
    // WebSocket to get real-time updates
    let finished = false;
    let cancelled = false;
    const ws = new WebSocket(wsPath);
    currentWebSocket = ws; // Stocker la référence globale
    
    ws.onopen = () => {
        console.log('WebSocket connection opened');
        const canvas = document.getElementById('canvas');
        const canvasOkButton = document.getElementById('canvas-ok');
        const canvasCancelButton = document.getElementById('canvas-cancel');
        const canvasBackButton = document.getElementById('canvas-back');
        
        canvas.addEventListener('click', function(event) {
            console.log("CLICK");
            const rect = canvas.getBoundingClientRect();
            const canvasDisplayWidth = rect.width;
            const canvasDisplayHeight = rect.height;
            const scaleX = canvas.width / canvasDisplayWidth;
            const scaleY = canvas.height / canvasDisplayHeight;
            const clickX = event.clientX - rect.left;
            const clickY = event.clientY - rect.top;
            const normalizedX = (clickX * scaleX) / canvas.width;
            const normalizedY = (clickY * scaleY) / canvas.height;
            
            console.log(`Click at: ${normalizedX}, ${normalizedY}`);
            
            ws.send(JSON.stringify({ 
                type: 'click', 
                x: normalizedX, 
                y: normalizedY 
            }));
        });
        
        canvas.addEventListener('keydown', function(event) {
            console.log("KEYDOWN");
            if (event.ctrlKey) {
                if (event.key.toLowerCase() === 'v') {
                    navigator.clipboard.readText().then(text => {
                        ws.send(JSON.stringify({ type: 'type', text: text }));
                    }).catch(err => {
                        console.error('Clipboard read failed:', err);
                    });
                }
            } else {
                ws.send(JSON.stringify({ type: 'keydown', key: event.key, code: event.code }));
            }
        });
        
        canvas.setAttribute('tabindex', '0');
        canvas.focus();
        
        canvasOkButton.onclick = function() {
            finished = true;
            containerCanvas.hidden = true;
            document.getElementById('progress-container').classList.remove('ic-hidden');
            ws.send(JSON.stringify({ type: 'close', reason: 'ok' }));
        };
        
        // Handler pour le bouton Cancel
        canvasCancelButton.onclick = cancelAndClose;
        
        // Handler pour le bouton Back (même comportement que Cancel)
        canvasBackButton.onclick = cancelAndClose;
    };
    
    let previous_state, current_state;
    
    ws.onmessage = async function(event) {
        const parsedData = JSON.parse(event.data);
        
        if (parsedData.type == "screenshot") {
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
            }
        }
        else if (parsedData.type == "state") {
            current_state = parsedData.state;
            
            // Vérifier si on a atteint la fin (succès ou erreur)
            if (current_state.index >= current_state.max || current_state.index < 0) {
                // Ne pas afficher si annulé
                if (!cancelled) {
                    showFinalResult(current_state);
                }
                return;
            }
            
            if (previous_state && previous_state.index !== current_state.index) {
                progressBar.style.width = `${current_state.index / current_state.max * 100}%`;
                
                progressText.classList.add('fade');
                await new Promise(resolve => setTimeout(resolve, 500));
                progressText.textContent = current_state.title;
                progressText.classList.remove('fade');
                await new Promise(resolve => setTimeout(resolve, 500));
                
                if (current_state.index === 3) {
                    container2FA.hidden = false;
                    form2faInstructions.textContent = current_state.message;
                }
            } else {
                if (previous_state === undefined) {
                    progressBar.style.width = `${current_state.index / current_state.max * 100}%`;
                    progressText.textContent = current_state.title;
                    progressText.classList.remove('fade');
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            previous_state = current_state;
        }
    };
    
    ws.onclose = (event) => {
        console.log('WebSocket connection closed');
        containerCanvas.hidden = true;
        currentWebSocket = null;
        
        // Ne pas afficher le résultat si on a annulé
        if (cancelled) {
            return;
        }
        
        document.getElementById('progress-container').classList.remove('ic-hidden');
        
        if (current_state) {
            showFinalResult(current_state);
        }
    };
    
    // 2FA form submit
    form2fa.addEventListener('submit', async (event) => {
        container2FA.hidden = true;
        event.preventDefault();
        ws.send(JSON.stringify({ type: 'twofa', twofa: event.target["code"].value }));
    });
}


async function deleteCredential(id) {
    await fetch(`credential/${id}?token=${token}`, {
        method: 'DELETE'
    });
    showCredentials();
}

async function showFeedback(type) {
    document.getElementById('companies-container').classList.add('ic-hidden');
    document.getElementById('form-container').classList.add('ic-hidden');
    document.getElementById('progress-container').classList.add('ic-hidden');
    document.getElementById('feedback-container').classList.remove('ic-hidden');
    
    document.getElementById('feedback-response-success').classList.add('ic-hidden');
    document.getElementById('feedback-response-error').classList.add('ic-hidden');
    document.querySelector('#feedback-form input[name="type"]').value = type;
    
    // Réactiver le bouton submit
    const feedbackForm = document.getElementById('feedback-form');
    const submitButton = feedbackForm.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = false;
    }
}

async function sendFeedback(event) {
    event.preventDefault();
    
    // Empêcher les soumissions multiples
    if (isSubmitting) return;
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Convert form data to object
    const formData = new FormData(form);
    let params = {};
    formData.forEach((value, key) => {
        params[key] = value;
    });
    
    // Vérifier que l'URL est remplie
    if (!params.website_url || !params.website_url.trim()) {
        document.getElementById('feedback-response-error').classList.remove('ic-hidden');
        document.getElementById('feedback-response-success').classList.add('ic-hidden');
        return;
    }
    
    // Construire le message pour l'API
    const feedbackBody = {
        type: 'new_collector',
        message: params.website_url,
        email: ''
    };
    
    // Désactiver le bouton et marquer comme en cours de soumission
    isSubmitting = true;
    submitButton.disabled = true;
    
    try {
        const response = await post_send_feedback(feedbackBody);
        form.reset();
        document.querySelector('#feedback-form input[name="type"]').value = 'new_collector';
        
        // Check if the response is ok
        if (!response.ok) {
            document.getElementById('feedback-response-error').classList.remove('ic-hidden');
            document.getElementById('feedback-response-success').classList.add('ic-hidden');
        }
        else {
            document.getElementById('feedback-response-success').classList.remove('ic-hidden');
            document.getElementById('feedback-response-error').classList.add('ic-hidden');
        }
    } catch (error) {
        console.error('Error sending feedback:', error);
        document.getElementById('feedback-response-error').classList.remove('ic-hidden');
        document.getElementById('feedback-response-success').classList.add('ic-hidden');
    } finally {
        // Réactiver le bouton
        isSubmitting = false;
        submitButton.disabled = false;
    }
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

// Fonction de recherche avec score
function searchCollectorsWithScore(collectors, searchTerm) {
    if (!searchTerm || searchTerm.length < 1) return collectors.slice(0, 100);
    
    // Compute a score for each collector based on search term match
    const computeCollectorScore = (collector, term) => {
        if (!term || term.length < 1) return 0;
        
        // Remove accents/diacritics for better matching
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

// Fonction pour filtrer les companies
function filterCompanies(searchTerm) {
    const filteredCompanies = searchCollectorsWithScore(companies, searchTerm);
    renderCompanies(filteredCompanies);
}

// Fonction pour afficher les companies
function renderCompanies(companiesToRender) {
    const companyList = document.getElementById('companies-list');
    companyList.innerHTML = '';
    
    // Build cards for each company
    companiesToRender.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.className = 'ic-card';
        const paramsCount = Object.keys(company.params).length;
        const fieldsText = paramsCount === 1 ? i18n.fieldRequired : i18n.fieldsRequired;
        
        companyCard.innerHTML = `
            <div class="ic-card-header">
                <img src="${company.logo}" alt="${company.name}" class="ic-card-logo">
                <div>
                    <h3 class="ic-card-title">${company.name}</h3>
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
    
    // Ajouter la card "Collecteur introuvable"
    const specialCard = document.createElement('div');
    specialCard.className = 'ic-card ic-card--special';
    specialCard.innerHTML = `
        <div class="ic-card-header">
            <img src="/views/styles/icons/plus.svg" alt="Add" class="ic-card-logo">
            <div>
                <h3 class="ic-card-title">${i18n.cantFindCollector}</h3>
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

/****
 * DATEPICKER
 */

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