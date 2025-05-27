import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { StatusError, TermsConditionsError } from "./error"
import { Server } from "./server"
import * as utils from "./utils"
import { I18n } from './i18n';
import { swaggerSpec } from './swagger';
dotenv.config();

// Configure express
const app = express()
app.use(express.json());
app.use(I18n.i18n.init);
app.use('/views', express.static(path.join(__dirname, '..', 'views')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
        res.render('terms_conditions/terms_conditions', { token: req.query.token, theme: e.theme });
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

/**
 * @swagger
 * /api/v1/authorize:
 *   post:
 *     summary: Authorize a user
 *     security:
 *       - bearerAuth: []
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - remote_id
 *               - locale
 *               - email
 *             properties:
 *               remote_id:
 *                 type: string
 *                 description: User's remote ID
 *               locale:
 *                 type: string
 *                 description: User's locale (e.g., 'fr', 'en')
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *     responses:
 *       200:
 *         description: Authorization successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: OAuth token
 *       401:
 *         description: Invalid Bearer token
 *       400:
 *         description: Missing required fields
 */
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

/**
 * @swagger
 * /api/v1/ui:
 *   get:
 *     summary: Get UI configuration
 *     security:
 *       - tokenAuth: []
 *     tags: [UI]
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: verificationCode
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: UI configuration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 locale:
 *                   type: string
 *                 theme:
 *                   type: string
 *       401:
 *         description: Invalid token
 */
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

/**
 * @swagger
 * /api/v1/collectors:
 *   get:
 *     summary: List all available collectors
 *     tags: [Collectors]
 *     parameters:
 *       - in: query
 *         name: locale
 *         schema:
 *           type: string
 *         description: Locale for collector descriptions
 *     responses:
 *       200:
 *         description: List of collectors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   version:
 *                     type: string
 *                   website:
 *                     type: string
 *                   logo:
 *                     type: string
 *                   params:
 *                     type: object
 */
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
