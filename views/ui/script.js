const token = new URLSearchParams(window.location.search).get('token');
let companies = [];
let ip = null;
let hit = []

document.addEventListener('DOMContentLoaded', async () => {
    showCredentials();
    document.getElementById('add-credential-form').addEventListener('submit', addCredential);
    document.getElementById('feedback-form').addEventListener('submit', sendFeedback);

    getCollectors()
        .then(c => {
            console.log(c.length, 'companies loaded');
            companies = c;
        }).catch(error => {
            console.error('Error getting the companies:', error);
        });

    getIp()
        .then(i => {
            ip = i;
        }).catch(error => {
            console.error('Error getting the IP address:', error);
        });
});

async function getCollectors() {
    const response = await fetch(`collectors?locale=${locale}&token=${token}`);
    return await response.json();
}

async function getIp() {
    const response = await fetch("https://api.ipify.org?format=json")
    return (await response.json()).ip;
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
    // Get the elements
    const credentialsEmpty = document.getElementById('credentials-empty');
    const credentialsList = document.getElementById('credentials-list');

    // Hide other containers
    document.getElementById('credentials-container').hidden = false;
    document.getElementById('companies-container').hidden = true;
    document.getElementById('form-container').hidden = true;
    document.getElementById('progress-container').hidden = true;
    document.getElementById('feedback-container').hidden = true;

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
                        <img class="credential-logo" src="${credential.collector.logo}" alt="${credential.collector.name}">
                    </td>
                    <td>
                        ${credential.note}
                    </td>
                    <td>
                        ${buildCredentialStatus(credential)}
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
                        <button class="button delete-button" onclick="deleteCredential('${credential.id}')">
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
    // Get elements
    const companyList = document.getElementById('companies-list');

    // Reset values
    companyList.innerHTML = '';

    // Hide other containers
    document.getElementById('credentials-container').hidden = true;
    document.getElementById('companies-container').hidden = false;
    document.getElementById('form-container').hidden = true;
    document.getElementById('progress-container').hidden = true;
    document.getElementById('feedback-container').hidden = true;

    companies.forEach(company => {
        const companyItem = document.createElement('li');
        companyItem.className = 'company-item company-item-selectable';
        companyItem.innerHTML = `
            <img src="${company.logo}" alt="${company.name}" class="companies-logo">
            <div>
                <bold>${company.name}</bold>
            </div>
        `;
        companyItem.addEventListener('click', () => showForm(company));
        companyList.appendChild(companyItem);
    });
}

function showForm(company) {
    // Get elements
    const formParams = document.getElementById('add-credential-form-params');
    const form = document.getElementById('add-credential-form');
    const hitSketch = document.getElementById('hit-sketch');
    const hitSketchButton = document.getElementById('hit-sketch-button');
    
    // Update the form with the company's information
    document.getElementById('form-logo').src = company.logo;
    document.getElementById('form-name').textContent = company.name;
    document.getElementById('form-description').textContent = company.description;
    document.querySelector('#add-credential-instructions').hidden = !company.instructions;
    document.querySelector('#add-credential-instructions p').innerHTML = company.instructions;

    // Reset values
    formParams.innerHTML = ''; // Clear any existing fields
    form.dataset.collector = company.id;

    // Hide other containers
    document.getElementById('credentials-container').hidden = true;
    document.getElementById('companies-container').hidden = true;
    document.getElementById('form-container').hidden = false;
    document.getElementById('progress-container').hidden = true;
    document.getElementById('feedback-container').hidden = true;

    console.log(company);
    // If the collector is not a sketch, show form
    if(company.type != "sketch") {
        // Show form, hide sketch button
        form.style.removeProperty("display");
        hitSketch.hidden = true;

        Object.keys(company.params).forEach(key => {
            // Get the parameter
            const param = company.params[key];

            // Add label
            const label = document.createElement('label');
            label.textContent = param.name;

            if (param.mandatory) {
                const required = document.createElement('span');
                required.textContent = ' *';
                required.style.color = 'red';
                label.appendChild(required);
            }

            // Add input
            const input = document.createElement('input');
            if (key === 'password' || key === 'token') {
                input.setAttribute('type', 'password');
            } else {
                input.setAttribute('type', 'text');
            }
            input.setAttribute('name', key);
            input.placeholder = param.placeholder;
            input.required = param.mandatory;

            formParams.appendChild(label);
            formParams.appendChild(input);
        });
    }
    else {
        // Show sketch button, hide form
        form.style.display="none"
        hitSketch.hidden = false;
        document.getElementById('hit-sketch-success').hidden = true;

        // Set the onclick event for the sketch button
        hitSketchButton.onclick = async() => {
            document.getElementById('hit-sketch-success').hidden = false;
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

    // Convert form data to object
    const formData = new FormData(event.target);
    let params = {};
    formData.forEach((value, key) => {
        params[key] = value;
    });

    const response = await fetch(`credential?token=${token}`, {
        method: 'POST',
        body: JSON.stringify({
            collector: event.target.dataset.collector,
            params
        }),
        headers: {
            'Content-Type': 'application/json',
            'X-User-Ip': ip
        }
    });

    const content = await response.json();
    document.getElementById('add-credential-form').reset();

    if (!response.ok) {
        console.error('Error adding credential:', content);
        alert(`Error: ${content.message || 'An error occurred while adding the credential.'}`);
        showCredentials();
    }
    else {
        showProgress(content.id);
    }
}

async function showProgress(credential_id) {
    // Get the elements
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const responseSuccess = document.getElementById('progress-response-success');
    const responseUnknown = document.getElementById('progress-response-unknown');
    const responseError = document.getElementById('progress-response-error');
    const responseErrorText = document.getElementById('progress-response-error-text');
    const container2FA = document.getElementById('send-2fa-container');
    const form2fa = document.getElementById('send-2fa-form');
    const form2faInstructions = document.getElementById('send-2fa-instructions');
    

    // Reset values
    progressText.textContent = '';
    progressText.classList.add('fade');
    progressBar.style.width = `0%`;
    responseSuccess.hidden = true;
    responseUnknown.hidden = true;
    responseError.hidden = true;
    container2FA.hidden = true;
    form2fa.reset();
    form2faInstructions.textContent = '';

    // Hide other containers
    document.getElementById('credentials-container').hidden = true;
    document.getElementById('companies-container').hidden = true;
    document.getElementById('form-container').hidden = true;
    document.getElementById('progress-container').hidden = false;
    document.getElementById('feedback-container').hidden = true;

    // Set the onsudmit event for the 2fa form
    form2fa.addEventListener('submit', async (event) => {
        container2FA.hidden = true;
        event.preventDefault();
        await post2FA(credential_id, event.target["code"].value);
    });

    let response;
    let previous_state, current_state;
    
    do {
        response = await fetch(`credential/${credential_id}?token=${token}`);
        current_state = (await response.json()).state;

        // Check if the response is ok
        if (current_state.index > 0) {
            if (previous_state && previous_state.index !== current_state.index) {
                // Update progress bar and text
                progressBar.style.width = `${current_state.index / current_state.max * 100}%`;

                // Update progress text with fade effect
                progressText.classList.add('fade');
                await new Promise(resolve => setTimeout(resolve, 500));
                progressText.textContent = current_state.title;
                progressText.classList.remove('fade');
                await new Promise(resolve => setTimeout(resolve, 500));

                // Display 2fa code if needed
                if (current_state.index === 3) {
                    container2FA.hidden = false;
                    form2faInstructions.textContent = current_state.message;
                }
            }
            else {
                if (previous_state === undefined) {
                    // Update progress bar and text
                    progressBar.style.width = `${current_state.index / current_state.max * 100}%`;

                    // Update progress text with fade effect
                    progressText.textContent = current_state.title;
                    progressText.classList.remove('fade');
                }
                // Wait 1 second before polling again
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
        previous_state = current_state;
    } while (0 < current_state.index && current_state.index < current_state.max);

    // Display error or success message
    container2FA.hidden = true;
    responseErrorText.textContent = current_state.message;
    responseSuccess.hidden = !(current_state.index >= current_state.max);
    responseUnknown.hidden = !(0 <= current_state.index && current_state.index < current_state.max);
    responseError.hidden = !(current_state.index < 0);
}

async function post2FA(credential_id, code) {
    await fetch(`credential/${credential_id}/2fa?token=${token}`, {
        method: 'POST',
        body: JSON.stringify({
            code
        }),
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

async function showFeedback(type) {
    document.getElementById('credentials-container').hidden = true;
    document.getElementById('companies-container').hidden = true;
    document.getElementById('form-container').hidden = true;
    document.getElementById('progress-container').hidden = true;
    document.getElementById('feedback-container').hidden = false;
    document.getElementById('feedback-response-success').hidden = true;
    document.getElementById('feedback-response-error').hidden = true;
    document.querySelector('#feedback-form input[name="type"]').value = type;
}

async function sendFeedback(event) {
    event.preventDefault();

    // Convert form data to object
    const formData = new FormData(event.target);
    let params = {};
    formData.forEach((value, key) => {
        params[key] = value;
    });

    const response = await post_send_feedback({...params});

    document.getElementById('feedback-form').reset();

    // Check if the response is ok
    if (!response.ok) {
        document.getElementById('feedback-response-error').hidden = false;
    }
    else {
        document.getElementById('feedback-response-success').hidden = false;
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