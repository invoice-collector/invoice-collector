import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import { StatusError, TermsConditionsError } from "./error"
import { Server } from "./server"
import * as utils from "./utils"
import { I18n } from './i18n';
dotenv.config();

// Configure express
const app = express()
app.use(express.json());
app.use(I18n.i18n.init);
app.use('/views', express.static(path.join(__dirname, '..', 'views')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
declare global {
    namespace Express {
        interface Request {
            setLocale: (locale: string) => void;
        }
    }
}

// Create server
const server = new Server();
const PORT = utils.getEnvVar("PORT");
const DEBUG_ENABLED = utils.getEnvVar("ENV", "prod") === "debug";

function handle_error(e, req, res){
    if(e instanceof StatusError) {
        res.setHeader('Content-Type', 'application/json');
        res.status(e.status_code).end(JSON.stringify({type: "error", message: e.message}));
    }
    else if (e instanceof TermsConditionsError) {
        console.error(e.message);
        req.setLocale(e.locale);
        res.render('terms_conditions/terms_conditions', {token: req.query.token});
    }
    else {
        console.error(e);
        let reason;
        if (DEBUG_ENABLED) {
            reason = e.message;
        }
        else {
            reason = "Internal server error"
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(500).end(JSON.stringify({type: "error", reason}));
    }
}

// ---------- GENERAL ENDPOINTS ----------

// BEARER AUTHENTICATION
app.post('/api/v1/authorize', async (req, res) => {
    try {
        // Perform authorization
        console.log('POST authorize');
        const response = await server.post_authorize(req.headers.authorization, req.body.remote_id, req.body.locale, req.body.email);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.get('/api/v1/ui', async (req, res) => {
    try {
        // Check user has accepted terms and conditions
        console.log(`GET ui`);
        const context = await server.get_ui(req.query.token, req.query.verificationCode);

        // Render ui.ejs
        req.setLocale(context.locale);
        res.render('ui/ui', context);
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.get('/api/v1/test_callback', async (req, res) => {
    try {
        // Test callback
        console.log('GET test_callback');
        await server.get_test_callback(req.headers.authorization);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.post('/api/v1/feedback', async (req, res) => {
    try {
        // Send feedback
        console.log('POST feedback');
        await server.post_feedback(req.query.token, req.body.feedback, req.body.email);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- CUSTOMER ENDPOINTS ----------

// BEARER AUTHENTICATION
app.get('/api/v1/customer', async (req, res) => {
    try {
        // Get customer
        console.log(`GET customer`);
        const response = await server.get_customer(req.headers.authorization);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- USER ENDPOINTS ----------

// BEARER AUTHENTICATION
app.delete('/api/v1/user', async (req, res) => {
    try {
        // Delete user
        console.log('DELETE user');
        await server.delete_user(req.headers.authorization, req.body.remote_id);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- CREDENTIAL ENDPOINTS ----------

// TOKEN AUTHENTICATION
app.get('/api/v1/credentials', async (req, res) => {
    try {
        // Get credentials
        console.log(`GET credentials`);
        const credentials = await server.get_credentials(req.query.token)

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(credentials));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.post('/api/v1/credential', async (req, res) => {
    try {
        // Save credential
        console.log(`POST credential`);
        const response = await server.post_credential(req.query.token, req.body.collector, req.body.params, req.headers['x-user-ip']);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.get('/api/v1/credential/:id', async (req, res) => {
    try {
        // Get credential status
        const response = await server.get_credential(req.query.token, req.params.id);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.delete('/api/v1/credential/:id', async (req, res) => {
    try {
        // Delete credential
        console.log(`DELETE credential ${req.params.id}`);
        await server.delete_credential(req.query.token, req.params.id);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.post('/api/v1/credential/:id/2fa', async (req, res) => {
    try {
        // Post 2fa
        console.log(`POST 2fa ${req.params.id}`);
        await server.post_credential_2fa(req.query.token, req.params.id, req.body.code);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- COLLECTOR ENDPOINTS ----------

// NO AUTHENTICATION
app.get('/api/v1/collectors', (req, res) => {
    try {
        // List all collectors
        console.log(`GET collectors`);
        const response = server.get_collectors(req.query.locale);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// Handle non-existing endpoints
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(404).end(JSON.stringify({type: "error", reason: "Endpoint not found"}));
});

// Start
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});
