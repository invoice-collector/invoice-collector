import path from 'path';
import express from 'express';
import { StatusError } from "./error"
import { Server } from "./server"
import * as utils from "./utils"
import { I18n } from './i18n';

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
        let message;
        if (DEBUG_ENABLED) {
            message = e.message;
        }
        else {
            message = "Internal server error"
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(500).end(JSON.stringify({type: "error", message}));
    }
}

// ---------- GENERAL ENDPOINTS ----------

/**
 * @openapi
 * /ui:
 *   get:
 *     tags: [General]
 *     summary: Get UI page
 *     description: Returns a UI page for the user to add credentials.
 *     security:
 *      - TokenAuth: []
 *     parameters:
 *      - name: credential_id
 *        in: query
 *        schema:
 *          $ref: '#/components/schemas/credential_id'
 *        description: Id of the credential. If provided, a collect will be started for this credential. If a collect is already in progress for this credential, the current progress will be shown.
 *     responses:
 *       200:
 *         description: Rendered HTML page
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *       401:
 *         description: Invalid or expired token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /test/callback/{type}:
 *   get:
 *     tags: [General]
 *     summary: Test callback
 *     description: Sends a test callback of the specified type. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: type
 *         in: path
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/callbackType'
 *     responses:
 *       200:
 *         description: Callback sent successfully
 *       400:
 *         description: Unsupported type
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *     callbacks:
 *       onInvoiceCollected:
 *         Invoice:
 *           post:
 *             requestBody:
 *               required: true
 *               content:
 *                 application/json:
 *                   schema:
 *                     type: object
 *                     properties:
 *                       type:
 *                         $ref: '#/components/schemas/callbackType'
 *                       remote_id:
 *                         $ref: '#/components/schemas/remote_id'
 *                       invoice:
 *                         $ref: "#/components/schemas/Invoice"
 *                       collector:
 *                         $ref: "#/components/schemas/CollectorConfig"
 *                     required:
 *                       - type
 *                       - remote_id
 *                       - invoice
 *                       - collector
 *             responses:
 *               '200':
 *                 description: Success
 *               '400':
 *                 description: Error
 *       onCollectorDisconnected:
 *         Notification Disconnected:
 *           post:
 *             requestBody:
 *               required: true
 *               content:
 *                 application/json:
 *                   schema:
 *                     type: object
 *                     properties:
 *                       type:
 *                         $ref: '#/components/schemas/callbackType'
 *                       credential_id:
 *                        $ref: '#/components/schemas/credential_id'
 *                       user_id:
 *                        $ref: '#/components/schemas/user_id'
 *                       remote_id:
 *                         $ref: '#/components/schemas/remote_id'
 *                       collector:
 *                         $ref: "#/components/schemas/CollectorConfig"
 *                     required:
 *                       - type
 *                       - credential_id
 *                       - user_id
 *                       - remote_id
 *                       - collector
 *             responses:
 *               '200':
 *                 description: Success
 *               '400':
 *                 description: Error
 */
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

/**
 * @openapi
 * /feedback:
 *   post:
 *     tags: [General]
 *     summary: Send feedback
 *     description: Sends feedback to the registry server. Bearer or Token authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [type, message]
 *             properties:
 *               type:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Feedback sent successfully
 *       400:
 *         description: Missing field
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /login:
 *   post:
 *     tags: [Authentication]
 *     summary: Login
 *     description: Authenticates a customer or user and returns a bearer token. No authentication required.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bearer:
 *                   type: string
 *                 type:
 *                   type: string
 *                   enum: [customer, user]
 *       400:
 *         description: Missing field
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /signup:
 *   post:
 *     tags: [Authentication]
 *     summary: Sign up
 *     description: Creates a new customer or user account. No authentication required.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, name, cid]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               name:
 *                 type: string
 *               cid:
 *                 type: string
 *               locale:
 *                 type: string
 *               inviteId:
 *                 type: string
 *                 description: If provided, creates a user under the customer matching this invite ID
 *     responses:
 *       200:
 *         description: Signup successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resetLink:
 *                   type: string
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// NO AUTHENTICATION
app.post('/api/v1/signup', async (req, res) => {
    try {
        // Perform signup
        console.log('POST signup');
        const response = await server.post_signup(
            req.body.email,
            req.body.name,
            req.body.cid,
            req.body.locale,
            req.body.inviteId,
        );

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /forgot:
 *   post:
 *     tags: [Authentication]
 *     summary: Forgot password
 *     description: Sends a password reset email. No authentication required.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *     responses:
 *       200:
 *         description: Reset link sent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resetLink:
 *                   type: string
 *       400:
 *         description: Account not found or missing field
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// NO AUTHENTICATION
app.post('/api/v1/forgot', async (req, res) => {
    try {
        // Perform forgot password
        console.log('POST forgot');
        const response = await server.post_forgot(req.body.email);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /reset:
 *   post:
 *     tags: [Authentication]
 *     summary: Reset password
 *     description: Resets the password using a reset token. No authentication required.
 *     parameters:
 *       - name: token
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Password reset token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [password]
 *             properties:
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Missing field
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Invalid or expired token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /customer:
 *   get:
 *     tags: [Customer]
 *     summary: Get customer
 *     description: Returns the authenticated customer's details. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     responses:
 *       200:
 *         description: Customer details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /customer:
 *   put:
 *     tags: [Customer]
 *     summary: Update customer
 *     description: Updates the authenticated customer's details. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               callback:
 *                 type: string
 *               remoteId:
 *                 type: string
 *               cid:
 *                 type: string
 *               theme:
 *                 type: string
 *               subscribedCollectors:
 *                 type: array
 *                 items:
 *                   type: string
 *               isSubscribedToAll:
 *                 type: boolean
 *               enableInteractiveLogin:
 *                 type: boolean
 *               displaySketchCollectors:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Updated customer details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// BEARER AUTHENTICATION
app.put('/api/v1/customer', async (req, res) => {
    try {
        // Save customer
        console.log(`PUT customer`);
        const response = await server.put_customer(
            req.headers.authorization,
            req.body.name,
            req.body.callback,
            req.body.remoteId,
            req.body.cid,
            req.body.theme,
            req.body.subscribedCollectors,
            req.body.isSubscribedToAll,
            req.body.enableInteractiveLogin,
            req.body.displaySketchCollectors
        );

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /customer/bearer:
 *   post:
 *     tags: [Customer]
 *     summary: Generate new API bearer
 *     description: Generates a new API bearer token for the customer. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     responses:
 *       200:
 *         description: New bearer token
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/BearerResponse'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /customer/stats:
 *   get:
 *     tags: [Customer]
 *     summary: Get customer stats
 *     description: Returns statistics for the authenticated customer. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     responses:
 *       200:
 *         description: Customer statistics
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CustomerStats'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /users:
 *   get:
 *     tags: [User]
 *     summary: List users
 *     description: Returns all users belonging to the authenticated customer. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserListItem'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /user:
 *   post:
 *     tags: [User]
 *     summary: Create or get user
 *     description: Creates a new user or returns an existing one by remote_id. Returns a UI token. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [remoteId, locale]
 *             properties:
 *               remoteId:
 *                 type: string
 *                 description: Also accepted as remote_id
 *               locale:
 *                 type: string
 *               ip:
 *                 type: string
 *                 description: User IP for geolocation
 *     responses:
 *       200:
 *         description: User details with token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserWithToken'
 *       400:
 *         description: Missing or invalid field
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: User limit reached
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// BEARER AUTHENTICATION
app.post('/api/v1/user', async (req, res) => {
    try {
        // Perform authorization
        console.log('POST user');
        const response = await server.post_user(
            req.headers.authorization,
            req.body.remoteId || req.body.remote_id,
            req.body.locale,
            req.body.ip
        );

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /user/{user_id}:
 *   get:
 *     tags: [User]
 *     summary: Get user by ID
 *     description: Returns a specific user by ID. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/user_id"
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// BEARER AUTHENTICATION
app.get('/api/v1/user/:user_id', async (req, res) => {
    try {
        // Get user
        console.log('GET user');
        const response = await server.get_user(req.headers.authorization, req.params.user_id);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /user:
 *   get:
 *     tags: [User]
 *     summary: Get current user
 *     description: Returns the user associated with the bearer token. Bearer authentication (user session).
 *     security:
 *       - UserBearerAuth: []
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// BEARER AUTHENTICATION
app.get('/api/v1/user', async (req, res) => {
    try {
        // Get user
        console.log('GET user');
        const response = await server.get_user(req.headers.authorization, undefined);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /user/{userId}:
 *   put:
 *     tags: [User]
 *     summary: Update user
 *     description: Updates a user's details. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               remoteId:
 *                 type: string
 *               name:
 *                 type: string
 *               cid:
 *                 type: string
 *               locale:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated user details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// BEARER AUTHENTICATION
app.put('/api/v1/user/:userId', async (req, res) => {
    try {
        // Update user
        console.log('PUT user');
        const response = await server.put_user(
            req.headers.authorization,
            req.params.userId,
            req.body.remoteId,
            req.body.name,
            req.body.cid,
            req.body.locale
        );

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /user/{user_id}:
 *   delete:
 *     tags: [User]
 *     summary: Delete user
 *     description: Deletes a user and all associated credentials. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/user_id"
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       400:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /user/{user_id}/credentials:
 *   get:
 *     tags: [Credential (Bearer)]
 *     summary: List credentials (Bearer)
 *     description: Returns all credentials for a user. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/user_id"
 *     responses:
 *       200:
 *         description: List of credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Credential'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /credentials:
 *   get:
 *     tags: [Credential (Token)]
 *     summary: List credentials (Token)
 *     description: Returns all credentials for the authenticated user. Token authentication.
 *     security:
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: token
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Credential'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// TOKEN AUTHENTICATION
app.get('/api/v1/credentials', async (req, res) => {
    try {
        // Get credentials
        console.log(`GET credentials`);
        const credentials = await server.get_credentials(req.headers.authorization, undefined, req.query.token)

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(credentials));
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /user/{user_id}/credential:
 *   post:
 *     tags: [Credential (Bearer)]
 *     summary: Create credential (Bearer)
 *     description: Creates a new credential and starts collection. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/user_id"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [collector, params]
 *             properties:
 *               collector:
 *                 type: string
 *                 description: Collector ID
 *               params:
 *                 type: object
 *                 description: Collector-specific parameters
 *               download_from_timestamp:
 *                 type: integer
 *                 description: Unix timestamp in ms to download invoices from
 *     responses:
 *       200:
 *         description: Created credential
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Credential'
 *       400:
 *         description: Missing or invalid field
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Credential limit reached or collector not subscribed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /credential:
 *   post:
 *     tags: [Credential (Token)]
 *     summary: Create credential (Token)
 *     description: Creates a new credential and starts collection. Token authentication.
 *     security:
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: token
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [collector, params]
 *             properties:
 *               collector:
 *                 type: string
 *                 description: Collector ID
 *               params:
 *                 type: object
 *                 description: Collector-specific parameters
 *               download_from_timestamp:
 *                 type: integer
 *                 description: Unix timestamp in ms to download invoices from
 *     responses:
 *       200:
 *         description: Created credential
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Credential'
 *       400:
 *         description: Missing or invalid field
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Credential limit reached or collector not subscribed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// TOKEN AUTHENTICATION
app.post('/api/v1/credential', async (req, res) => {
    try {
        // Save credential
        console.log(`POST credential`);
        const response = await server.post_credential(
            req.headers.authorization,
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

/**
 * @openapi
 * /user/{user_id}/credential/{credential_id}:
 *   get:
 *     tags: [Credential (Bearer)]
 *     summary: Get credential (Bearer)
 *     description: Returns a specific credential by ID. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/user_id"
 *       - name: credential_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Credential details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Credential'
 *       400:
 *         description: Credential not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /credential/{credential_id}:
 *   get:
 *     tags: [Credential (Token)]
 *     summary: Get credential (Token)
 *     description: Returns a specific credential by ID. Token authentication.
 *     security:
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: credential_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: token
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Credential details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Credential'
 *       400:
 *         description: Credential not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// TOKEN AUTHENTICATION
app.get('/api/v1/credential/:credential_id', async (req, res) => {
    try {
        // Get credential status
        const response = await server.get_credential(req.headers.authorization, undefined, req.query.token, req.params.credential_id);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /user/{user_id}/credential/{credential_id}:
 *   delete:
 *     tags: [Credential (Bearer)]
 *     summary: Delete credential (Bearer)
 *     description: Deletes a credential. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/user_id"
 *       - name: credential_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Credential deleted successfully
 *       400:
 *         description: Credential not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /credential/{credential_id}:
 *   delete:
 *     tags: [Credential (Token)]
 *     summary: Delete credential (Token)
 *     description: Deletes a credential. Token authentication.
 *     security:
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: credential_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: token
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Credential deleted successfully
 *       400:
 *         description: Credential not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// TOKEN AUTHENTICATION
app.delete('/api/v1/credential/:credential_id', async (req, res) => {
    try {
        // Delete credential
        console.log(`DELETE credential ${req.params.credential_id}`);
        await server.delete_credential(req.headers.authorization, undefined, req.query.token, req.params.credential_id);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /user/{user_id}/credential/{credential_id}/2fa:
 *   post:
 *     tags: [Credential (Bearer)]
 *     summary: Submit 2FA code (Bearer)
 *     description: Submits a 2FA code for an ongoing collection. Deprecated - use websockets instead. Bearer authentication.
 *     deprecated: true
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/user_id"
 *       - name: credential_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [code]
 *             properties:
 *               code:
 *                 type: string
 *     responses:
 *       200:
 *         description: 2FA code submitted
 *       400:
 *         description: Missing field or no collect in progress
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /credential/{credential_id}/2fa:
 *   post:
 *     tags: [Credential (Token)]
 *     summary: Submit 2FA code (Token)
 *     description: Submits a 2FA code for an ongoing collection. Deprecated - use websockets instead. Token authentication.
 *     deprecated: true
 *     security:
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: credential_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: token
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [code]
 *             properties:
 *               code:
 *                 type: string
 *     responses:
 *       200:
 *         description: 2FA code submitted
 *       400:
 *         description: Missing field or no collect in progress
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// TOKEN AUTHENTICATION
app.post('/api/v1/credential/:credential_id/2fa', async (req, res) => {
    try {
        // Post 2fa
        console.log(`POST 2fa ${req.params.credential_id} (DEPRECATED, use websockets instead)`);
        await server.post_credential_2fa(req.headers.authorization, undefined, req.query.token, req.params.credential_id, req.body.code);

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /user/{user_id}/credential/{credential_id}/collect:
 *   post:
 *     tags: [Credential (Bearer)]
 *     summary: Trigger collection (Bearer)
 *     description: Triggers a new collection for a credential or returns the existing one. Bearer authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/user_id"
 *       - name: credential_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Collection started or already in progress
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wsPath:
 *                   type: string
 *                   nullable: true
 *                   description: WebSocket path to monitor collection progress
 *       400:
 *         description: Credential not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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

/**
 * @openapi
 * /credential/{credential_id}/collect:
 *   post:
 *     tags: [Credential (Token)]
 *     summary: Trigger collection (Token)
 *     description: Triggers a new collection for a credential or returns the existing one. Token authentication.
 *     security:
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: credential_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: token
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Collection started or already in progress
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wsPath:
 *                   type: string
 *                   nullable: true
 *                   description: WebSocket path to monitor collection progress
 *       400:
 *         description: Credential not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
// TOKEN AUTHENTICATION
app.post('/api/v1/credential/:credential_id/collect', async (req, res) => {
    try {
        // Post collect
        console.log(`POST collect ${req.params.credential_id}`);
        const response = await server.post_credential_collect(req.headers.authorization, undefined, req.query.token, req.params.credential_id);

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- COLLECTOR ENDPOINTS ----------

/**
 * @openapi
 * /collectors:
 *   get:
 *     tags: [General]
 *     summary: List collectors
 *     description: Returns all available collectors. Bearer or Token authentication.
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: locale
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Locale for translated collector names and descriptions
 *     responses:
 *       200:
 *         description: List of collector configurations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CollectorConfig'
 *       400:
 *         description: Unsupported locale
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
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
