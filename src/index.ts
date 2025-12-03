import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import { StatusError } from "./error"
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

// TOKEN AUTHENTICATION
app.get('/api/v1/ui', async (req, res) => {
    try {
        // Get UI context
        console.log(`GET ui`);
        const context = await server.get_ui(req.query.token);

        // Render ui.ejs
        req.setLocale(context.locale);
        res.render('ui/ui', context);
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.get('/api/v1/test/callback/:type', async (req, res) => {
    try {
        // Test callback
        console.log('GET test_callback');
        await server.get_test_callback(req.headers.authorization, req.params.type);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER OR TOKEN AUTHENTICATION
app.post('/api/v1/feedback', async (req, res) => {
    try {
        // Send feedback
        console.log('POST feedback');
        await server.post_feedback(req.headers.authorization, req.query.token, req.body.type, req.body.message);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- LOGIN/SIGNUP/RESET ENDPOINTS ----------

// NO AUTHENTICATION
app.post('/api/v1/login', async (req, res) => {
    try {
        // Perform login
        console.log('POST login');
        const response = await server.post_login(req.body.email, req.body.password);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// NO AUTHENTICATION
app.post('/api/v1/signup', async (req, res) => {
    try {
        // Perform signup
        console.log('POST signup');
        await server.post_signup(req.body.email, req.body.name);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// NO AUTHENTICATION
app.post('/api/v1/reset', async (req, res) => {
    try {
        // Perform reset password
        console.log('POST reset');
        await server.post_reset(req.query.token, req.body.password);

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

// BEARER AUTHENTICATION
app.post('/api/v1/customer', async (req, res) => {
    try {
        // Save customer
        console.log(`POST customer`);
        await server.post_customer(
            req.headers.authorization,
            req.body.name,
            req.body.callback,
            req.body.remoteId,
            req.body.theme,
            req.body.subscribedCollectors,
            req.body.isSubscribedToAll,
            req.body.displaySketchCollectors
        );

        // Build response
        res.end();
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.post('/api/v1/customer/bearer', async (req, res) => {
    try {
        // Generate a new bearer for customer
        console.log(`POST customer bearer`);
        const response = await server.post_customer_bearer(req.headers.authorization);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }
    catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.get('/api/v1/customer/stats', async (req, res) => {
    try {
        // Get customer stats
        console.log(`GET customer stats`);
        const response = await server.getCustomerStats(req.headers.authorization);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- USER ENDPOINTS ----------

// BEARER AUTHENTICATION
app.get('/api/v1/users', async (req, res) => {
    try {
        // List users
        console.log(`GET users`);
        const response = await server.get_users(req.headers.authorization);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.post('/api/v1/user', async (req, res) => {
    try {
        // Perform authorization
        console.log('POST user');
        const response = await server.post_user(req.headers.authorization, req.body.remote_id, req.body.locale, req.body.ip);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.delete('/api/v1/user/:user_id', async (req, res) => {
    try {
        // Delete user
        console.log('DELETE user');
        await server.delete_user(req.headers.authorization, req.params.user_id);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- CREDENTIAL ENDPOINTS ----------

// BEARER AUTHENTICATION
app.get('/api/v1/user/:user_id/credentials', async (req, res) => {
    try {
        // Get credentials
        console.log(`GET credentials`);
        const credentials = await server.get_credentials(req.headers.authorization, req.params.user_id, undefined);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(credentials));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.get('/api/v1/credentials', async (req, res) => {
    try {
        // Get credentials
        console.log(`GET credentials`);
        const credentials = await server.get_credentials(undefined, undefined, req.query.token)

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(credentials));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.post('/api/v1/user/:user_id/credential', async (req, res) => {
    try {
        // Save credential
        console.log(`POST credential`);
        const response = await server.post_credential(
            req.headers.authorization,
            req.params.user_id,
            undefined,
            req.body.collector,
            req.body.params,
            req.body.download_from_timestamp
        );

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.post('/api/v1/credential', async (req, res) => {
    try {
        // Save credential
        console.log(`POST credential`);
        const response = await server.post_credential(
            undefined,
            undefined,
            req.query.token,
            req.body.collector,
            req.body.params,
            req.body.download_from_timestamp
        );

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.get('/api/v1/user/:user_id/credential/:credential_id', async (req, res) => {
    try {
        // Get credential status
        const response = await server.get_credential(req.headers.authorization, req.params.user_id, undefined, req.params.credential_id);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.get('/api/v1/credential/:credential_id', async (req, res) => {
    try {
        // Get credential status
        const response = await server.get_credential(undefined, undefined, req.query.token, req.params.credential_id);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.delete('/api/v1/user/:user_id/credential/:credential_id', async (req, res) => {
    try {
        // Delete credential
        console.log(`DELETE credential ${req.params.credential_id}`);
        await server.delete_credential(req.headers.authorization, req.params.user_id, undefined, req.params.credential_id);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.delete('/api/v1/credential/:credential_id', async (req, res) => {
    try {
        // Delete credential
        console.log(`DELETE credential ${req.params.credential_id}`);
        await server.delete_credential(undefined, undefined, req.query.token, req.params.credential_id);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.post('/api/v1/user/:user_id/credential/:credential_id/2fa', async (req, res) => {
    try {
        // Post 2fa
        console.log(`POST 2fa ${req.params.credential_id} (DEPRECATED, use websockets instead)`);
        await server.post_credential_2fa(req.headers.authorization, req.params.user_id, undefined, req.params.credential_id, req.body.code);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.post('/api/v1/credential/:credential_id/2fa', async (req, res) => {
    try {
        // Post 2fa
        console.log(`POST 2fa ${req.params.credential_id} (DEPRECATED, use websockets instead)`);
        await server.post_credential_2fa(undefined, undefined, req.query.token, req.params.credential_id, req.body.code);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.post('/api/v1/user/:user_id/credential/:credential_id/collect', async (req, res) => {
    try {
        // Post collect
        console.log(`POST collect ${req.params.credential_id}`);
        const response = await server.post_credential_collect(req.headers.authorization, req.params.user_id, undefined, req.params.credential_id);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// TOKEN AUTHENTICATION
app.post('/api/v1/credential/:credential_id/collect', async (req, res) => {
    try {
        // Post collect
        console.log(`POST collect ${req.params.credential_id}`);
        const response = await server.post_credential_collect(undefined, undefined, req.query.token, req.params.credential_id);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- COLLECTOR ENDPOINTS ----------

// BEARER OR TOKEN AUTHENTICATION
app.get('/api/v1/collectors', async (req, res) => {
    try {
        // List all collectors
        console.log(`GET collectors`);
        const response = await server.get_collectors(req.headers.authorization, req.query.token, req.query.locale);

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

// Start server
server.start().then(() => {
    const httpServer = app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`)
    });

    // Set http server to server instance to be able to use websockets
    server.httpServer = httpServer;
});
