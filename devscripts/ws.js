
require('dotenv').config();

async function createUserAndOpenBrowser() {
    // Make a request to create a user with the BEARER_DEFAULT_USER environment variable
    const response = await fetch('http://localhost:8080/api/v1/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.BEARER_DEFAULT_USER}`
        },
        body: JSON.stringify({
            "remote_id": "1234",
            "locale": "fr",
            "email": "test@test.test",
            "ip": "1.2.3.4"
        })
    })

    if (!response.ok) {
        throw new Error(`Failed to create user: ${response.statusText}`);
    }
    const data = await response.json();
    const token = data.token;
    console.log(`User created with token: ${token}`);

    // Open the browser with the token in the URL
    const url = `http://localhost:8080/api/v1/ui?token=${token}`;
    console.log(`Open the following URL in your browser: ${url}`);
    const start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
    require('child_process').exec(start + ' ' + url);
}

createUserAndOpenBrowser();