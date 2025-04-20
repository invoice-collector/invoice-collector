const token = new URLSearchParams(window.location.search).get('token');
let companies = [];
let ip = null;

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
    const response = await fetch(`collectors?locale=${locale}`);
    return await response.json();
}

async function getIp() {
    const response = await fetch("https://api.ipify.org?format=json")
    return (await response.json()).ip;
}

function buildCredentialFooter(credential) {
    if (credential.state == "ERROR") {
        return `
            <div class="credential-footer credential-error">
                <img src="/views/icons/error.png" alt="Error"/>
                <div>${credential.error}</div>
            </div>
        `;
    }
    else if (credential.state == "PENDING") {
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

async function showCredentials() {
    document.getElementById('credentials-container').hidden = false;
    document.getElementById('companies-container').hidden = true;
    document.getElementById('form-container').hidden = true;
    document.getElementById('progress-container').hidden = true;
    document.getElementById('feedback-container').hidden = true;

    const response = await fetch(`credentials?token=${token}`);
    const credentials = await response.json();

    const credentialsList = document.getElementById('credentials-list');
    credentialsList.innerHTML = '';

    credentials.forEach(credential => {
        const credentialItem = document.createElement('div');
        credentialItem.className = 'credential-item company-item';
        credentialItem.innerHTML = `
            <img src="${credential.collector.logo}" alt="${credential.collector.name}">
            <div>
            <h3>${credential.collector.name}</h3>
            <p>${credential.note}</p>
            </div>
            <button class="button delete-button" onclick="deleteCredential('${credential.id}')">
                <img src="/views/icons/delete.png" alt="Delete"/>
            </button>
            ${buildCredentialFooter(credential)}
        `;
        credentialsList.appendChild(credentialItem);
    });
}

async function showCompanies() {
    document.getElementById('credentials-container').hidden = true;
    document.getElementById('companies-container').hidden = false;
    document.getElementById('form-container').hidden = true;
    document.getElementById('progress-container').hidden = true;
    document.getElementById('feedback-container').hidden = true;

    const companyList = document.getElementById('companies-list');
    companyList.innerHTML = '';

    companies.forEach(company => {
        const companyItem = document.createElement('li');
        companyItem.className = 'company-item company-item-selectable';
        companyItem.innerHTML = `
            <img src="${company.logo}" alt="${company.name}">
            <div>
                <h3>${company.name}</h3>
                <p>${company.description}</p>
            </div>
        `;
        companyItem.addEventListener('click', () => showForm(company));
        companyList.appendChild(companyItem);
    });
}

function showForm(company) {
    document.getElementById('credentials-container').hidden = true;
    document.getElementById('companies-container').hidden = true;
    document.getElementById('form-container').hidden = false;
    document.getElementById('progress-container').hidden = true;
    document.getElementById('feedback-container').hidden = true;
    
    // Update the form with the company's information
    document.getElementById('company-logo').src = company.logo;
    document.getElementById('company-name').textContent = company.name;
    document.getElementById('company-description').textContent = company.description;
    document.querySelector('#add-credential-instructions').hidden = !company.instructions;
    document.querySelector('#add-credential-instructions p').innerHTML = company.instructions;
    document.getElementById('add-credential-form').dataset.collector = company.id;

    // Add input fields
    const form = document.getElementById('add-credential-form-params');
    form.innerHTML = ''; // Clear any existing fields

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

        form.appendChild(label);
        form.appendChild(input);
    });
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
    document.getElementById('credentials-container').hidden = true;
    document.getElementById('companies-container').hidden = true;
    document.getElementById('form-container').hidden = true;
    document.getElementById('progress-container').hidden = false;
    document.getElementById('feedback-container').hidden = true;

    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const responseSuccess = document.getElementById('progress-response-success');
    const container_2fa = document.getElementById('send-2fa-container');
    container_2fa.hidden = true;
    progressBar.style.width = `0%`;
    responseSuccess.hidden = true;

    // Set the onsudmit event for the 2fa form
    const form2fa = document.getElementById('send-2fa-form');
    form2fa.addEventListener('submit', async (event) => {
        container_2fa.hidden = true;
        event.preventDefault();
        await post2FA(credential_id, event.target["code"].value);
    });

    let response;
    let previous_status, current_status;
    
    do {
        response = await fetch(`credential/${credential_id}/status?token=${token}`);
        current_status = await response.json();

        if (previous_status && previous_status.index !== current_status.index) {
            // Display 2fa code if needed
            if (current_status.index === 2) {
                container_2fa.hidden = false;
            } else {
                container_2fa.hidden = true;
            }
            // Update progress bar and text
            progressBar.style.width = `${current_status.index / current_status.max * 100}%`;
            progressText.classList.add('fade');
            await new Promise(resolve => setTimeout(resolve, 500));
            progressText.textContent = current_status.message;
            progressText.classList.remove('fade');
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        else {
            // Wait 1 second before polling again
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        previous_status = current_status;
    } while (0 <= current_status.index && current_status.index < current_status.max);

    responseSuccess.hidden = false;
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

async function showFeedback() {
    document.getElementById('credentials-container').hidden = true;
    document.getElementById('companies-container').hidden = true;
    document.getElementById('form-container').hidden = true;
    document.getElementById('progress-container').hidden = true;
    document.getElementById('feedback-container').hidden = false;
    document.getElementById('feedback-response-success').hidden = true;
    document.getElementById('feedback-response-error').hidden = true;
}

async function sendFeedback(event) {
    event.preventDefault();

    // Convert form data to object
    const formData = new FormData(event.target);
    let params = {};
    formData.forEach((value, key) => {
        params[key] = value;
    });

    const response = await fetch(`feedback?token=${token}`, {
        method: 'POST',
        body: JSON.stringify({...params}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.getElementById('feedback-form').reset();

    // Check if the response is ok
    if (!response.ok) {
        document.getElementById('feedback-response-error').hidden = false;
    }
    else {
        document.getElementById('feedback-response-success').hidden = false;
    }
}
