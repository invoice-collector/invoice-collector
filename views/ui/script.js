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