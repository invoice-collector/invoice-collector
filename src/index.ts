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
 *          $ref: '#/components/schemas/credentialId'
 *        description: Id of the credential. If provided, a collect will be started for this credential. If a collect is already in progress for this credential, the current progress will be shown.
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// TOKEN AUTHENTICATION
app.get('/api/v1/ui', async (req, res) => {
    try {
        // Get UI context
        console.log(`GET ui`);
        const context = await server.get_ui(
            req.query.token
        );

        // Render ui.ejs
        req.setLocale(context.locale);
        res.render('ui/ui', context);
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
 *     description: Sends feedback to the Invoice-Collector team. _You need to authenticate using token or bearer._
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/feedback'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER OR TOKEN AUTHENTICATION
app.post('/api/v1/feedback', async (req, res) => {
    try {
        // Send feedback
        console.log('POST feedback');
        await server.post_feedback(
            req.headers.authorization,
            req.query.token,
            req.body.type,
            req.body.message
        );

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
 *     description: Authenticates a customer or user and returns a bearer token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 $ref: '#/components/schemas/email'
 *               password:
 *                 $ref: '#/components/schemas/password'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/bearerResponse'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// NO AUTHENTICATION
app.post('/api/v1/login', async (req, res) => {
    try {
        // Perform login
        console.log('POST login');
        const response = await server.post_login(
            req.body.email,
            req.body.password
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
 * /signup:
 *   post:
 *     tags: [Authentication]
 *     summary: Sign up
 *     description: Creates a new customer or user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, name, cid]
 *             properties:
 *               email:
 *                 $ref: '#/components/schemas/email'
 *               name:
 *                 $ref: '#/components/schemas/name'
 *               cid:
 *                 $ref: '#/components/schemas/cid'
 *               locale:
 *                 $ref: '#/components/schemas/locale'
 *               inviteId:
 *                 $ref: '#/components/schemas/inviteId'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required: [resetToken]
 *               properties:
 *                 resetToken:
 *                   $ref: '#/components/schemas/resetToken'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
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
 *     description: Sends a password reset email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties:
 *               email:
 *                 $ref: '#/components/schemas/email'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required: [resetToken]
 *               properties:
 *                 resetToken:
 *                   $ref: '#/components/schemas/resetToken'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// NO AUTHENTICATION
app.post('/api/v1/forgot', async (req, res) => {
    try {
        // Perform forgot password
        console.log('POST forgot');
        const response = await server.post_forgot(
            req.body.email
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
 * /reset:
 *   post:
 *     tags: [Authentication]
 *     summary: Reset password
 *     description: Resets the password using a reset token.
 *     parameters:
 *       - name: token
 *         in: query
 *         required: true
 *         description: Token to be used for password reset. _You can get it using the `POST /signup` endpoint._
 *         schema:
 *           $ref: '#/components/schemas/resetToken'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [password]
 *             properties:
 *               password:
 *                 $ref: '#/components/schemas/password'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// NO AUTHENTICATION
app.post('/api/v1/reset', async (req, res) => {
    try {
        // Perform reset password
        console.log('POST reset');
        await server.post_reset(
            req.query.token,
            req.body.password
        );

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
 *     description: Returns the authenticated customer's details.
 *     security:
 *       - CustomerBearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/customer'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.get('/api/v1/customer', async (req, res) => {
    try {
        // Get customer
        console.log(`GET customer`);
        const response = await server.get_customer(
            req.headers.authorization
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
 * /customer:
 *   put:
 *     tags: [Customer]
 *     summary: Update customer
 *     description: Updates the authenticated customer's details.
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
 *                 $ref: '#/components/schemas/name'
 *               callback:
 *                 $ref: '#/components/schemas/callback'
 *               remoteId:
 *                 $ref: '#/components/schemas/customerRemoteId'
 *               cid:
 *                 $ref: '#/components/schemas/cid'
 *               theme:
 *                 $ref: '#/components/schemas/theme'
 *               subscribedCollectors:
 *                 $ref: '#/components/schemas/subscribedCollectors'
 *               isSubscribedToAll:
 *                 $ref: '#/components/schemas/isSubscribedToAll'
 *               enableInteractiveLogin:
 *                 $ref: '#/components/schemas/enableInteractiveLogin'
 *               displaySketchCollectors:
 *                 $ref: '#/components/schemas/displaySketchCollectors'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/customer'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
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
 *     description: Generates a new API bearer token for the customer.
 *     security:
 *       - CustomerBearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/bearerResponse'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.post('/api/v1/customer/bearer', async (req, res) => {
    try {
        // Generate a new bearer for customer
        console.log(`POST customer bearer`);
        const response = await server.post_customer_bearer(
            req.headers.authorization
        );

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
 *     description: Returns statistics for the authenticated customer.
 *     security:
 *       - CustomerBearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/customerStats'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.get('/api/v1/customer/stats', async (req, res) => {
    try {
        // Get customer stats
        console.log(`GET customer stats`);
        const response = await server.getCustomerStats(
            req.headers.authorization
        );

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
 *     description: Returns all users belonging to the authenticated customer.
 *     security:
 *       - CustomerBearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/userListItem'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.get('/api/v1/users', async (req, res) => {
    try {
        // List users
        console.log(`GET users`);
        const response = await server.get_users(
            req.headers.authorization
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
 * /user:
 *   post:
 *     tags: [User]
 *     summary: Create or get user
 *     description: Creates a new user or returns an existing one by remote_id. Returns a UI token.
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
 *                 $ref: '#/components/schemas/remoteId'
 *               locale:
 *                 $ref: '#/components/schemas/locale'
 *               ip:
 *                 $ref: '#/components/schemas/ip'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/userWithToken'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       403:
 *         description: User limit reached
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
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
 * /user/{userId}:
 *   get:
 *     tags: [User]
 *     summary: Get user
 *     description: Returns a specific user by ID.
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/userId"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/userWithToken'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.get('/api/v1/user/:user_id', async (req, res) => {
    try {
        // Get user
        console.log('GET user');
        const response = await server.get_user(
            req.headers.authorization,
            req.params.user_id
        );

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// BEARER AUTHENTICATION
app.get('/api/v1/user', async (req, res) => {
    try {
        // Get user
        console.warn('GET user (DEPRECATED, use GET /user/{userId} with userId "me" instead)');
        const response = await server.get_user(
            req.headers.authorization,
            "me"
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
 * /user/{userId}:
 *   put:
 *     tags: [User]
 *     summary: Update user
 *     description: Updates a user's details.
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/userId"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               remoteId:
 *                 $ref: '#/components/schemas/remoteId'
 *               name:
 *                 $ref: '#/components/schemas/name'
 *               cid:
 *                 $ref: '#/components/schemas/cid'
 *               locale:
 *                 $ref: '#/components/schemas/locale'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
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
 * /user/{userId}:
 *   delete:
 *     tags: [User]
 *     summary: Delete user
 *     description: Deletes a user and all associated credentials.
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/userId"
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.delete('/api/v1/user/:user_id', async (req, res) => {
    try {
        // Delete user
        console.log('DELETE user');
        await server.delete_user(
            req.headers.authorization,
            req.params.user_id
        );

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- CREDENTIAL ENDPOINTS ----------

/**
 * @openapi
 * /user/{userId}/credentials:
 *   get:
 *     tags: [Credential]
 *     summary: List credentials (Bearer)
 *     description: Returns all credentials for a user.
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/userId"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/credential'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.get('/api/v1/user/:user_id/credentials', async (req, res) => {
    try {
        // Get credentials
        console.log(`GET credentials`);
        const credentials = await server.get_credentials(
            req.headers.authorization,
            req.params.user_id,
            req.query.token
        );

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
        console.warn(`GET credentials (DEPRECATED, use GET /user/{userId}/credentials with userId "me" instead)`);
        const credentials = await server.get_credentials(
            req.headers.authorization,
            "me",
            req.query.token
        );

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(credentials));
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /user/{userId}/credential:
 *   post:
 *     tags: [Credential]
 *     summary: Create credential (Bearer)
 *     description: Creates a new credential and starts collection.
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/userId"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [collector, params]
 *             properties:
 *               collector:
 *                 $ref: "#/components/schemas/collectorId"
 *               params:
 *                 $ref: "#/components/schemas/credentialParams"
 *               download_from_timestamp:
 *                 allOf:
 *                   - $ref: "#/components/schemas/downloadFromTimestamp"
 *                 description: 'Timestamp to start downloading invoices from in ms. _If empty, invoices will be downloaded starting from today._'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/credential'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       403:
 *         description: Credential limit reached or collector not subscribed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.post('/api/v1/user/:user_id/credential', async (req, res) => {
    try {
        // Save credential
        console.log(`POST credential`);
        const response = await server.post_credential(
            req.headers.authorization,
            req.params.user_id,
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

// TOKEN AUTHENTICATION
app.post('/api/v1/credential', async (req, res) => {
    try {
        // Save credential
        console.warn(`POST credential (DEPRECATED, use POST /user/{userId}/credential with userId "me" instead)`);
        const response = await server.post_credential(
            req.headers.authorization,
            "me",
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
 * /user/{userId}/credential/{credentialId}:
 *   get:
 *     tags: [Credential]
 *     summary: Get credential (Bearer)
 *     description: Returns a specific credential by ID.
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/userId"
 *       - name: credentialId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/credentialId"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/credential'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.get('/api/v1/user/:user_id/credential/:credential_id', async (req, res) => {
    try {
        // Get credential status
        const response = await server.get_credential(
            req.headers.authorization,
            req.params.user_id,
            req.query.token,
            req.params.credential_id
        );

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
        console.warn(`GET credential (DEPRECATED, use GET /user/{userId}/credential/{credentialId} with userId "me" instead)`);
        // Get credential status
        const response = await server.get_credential(
            req.headers.authorization,
            "me",
            req.query.token,
            req.params.credential_id
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
 * /user/{userId}/credential/{credentialId}:
 *   delete:
 *     tags: [Credential]
 *     summary: Delete credential (Bearer)
 *     description: Deletes a credential.
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/userId"
 *       - name: credentialId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/credentialId"
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.delete('/api/v1/user/:user_id/credential/:credential_id', async (req, res) => {
    try {
        // Delete credential
        console.log(`DELETE credential ${req.params.credential_id}`);
        await server.delete_credential(
            req.headers.authorization,
            req.params.user_id,
            req.query.token,
            req.params.credential_id
        );

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
        console.warn(`DELETE credential ${req.params.credential_id} (DEPRECATED, use DELETE /user/{userId}/credential/{credentialId} with userId "me" instead)`);
        await server.delete_credential(
            req.headers.authorization,
            "me",
            req.query.token,
            req.params.credential_id
        );

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /user/{userId}/credential/{credentialId}/2fa:
 *   post:
 *     tags: [Credential]
 *     summary: Submit 2FA code (Bearer)
 *     description: Submits a 2FA code for an ongoing collection. Deprecated - use websockets instead.
 *     deprecated: true
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/userId"
 *       - name: credentialId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/credentialId"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [code]
 *             properties:
 *               code:
 *                 $ref: '#/components/schemas/twofaCode'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.post('/api/v1/user/:user_id/credential/:credential_id/2fa', async (req, res) => {
    try {
        // Post 2fa
        console.warn(`POST 2fa ${req.params.credential_id} (DEPRECATED, use websockets instead)`);
        await server.post_credential_2fa(
            req.headers.authorization,
            req.params.user_id,
            req.query.token,
            req.params.credential_id,
            req.body.code
        );

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
        console.warn(`POST 2fa ${req.params.credential_id} (DEPRECATED, use websockets instead)`);
        await server.post_credential_2fa(
            req.headers.authorization,
            "me",
            req.query.token,
            req.params.credential_id,
            req.body.code
        );

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /user/{userId}/credential/{credentialId}/collect:
 *   post:
 *     tags: [Credential]
 *     summary: Trigger collection (Bearer)
 *     description: Triggers a new collection for a credential or returns the existing one.
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/userId"
 *       - name: credentialId
 *         in: path
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/credentialId"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wsPath:
 *                   $ref: '#/components/schemas/wsPath'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       403:
 *         description: Credential does not belong to user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER AUTHENTICATION
app.post('/api/v1/user/:user_id/credential/:credential_id/collect', async (req, res) => {
    try {
        // Post collect
        console.log(`POST collect ${req.params.credential_id}`);
        const response = await server.post_credential_collect(
            req.headers.authorization,
            req.params.user_id,
            req.query.token,
            req.params.credential_id
        );

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
        console.warn(`POST collect ${req.params.credential_id} (DEPRECATED, use websockets instead)`);
        const response = await server.post_credential_collect(
            req.headers.authorization,
            "me",
            req.query.token,
            req.params.credential_id
        );

        // Build response
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- CALLBACKS ENDPOINTS ----------

/**
 * @openapi
 * /callbacks:
 *   get:
 *     tags: [Callback]
 *     summary: List callbacks
 *     description: Returns all callbacks the customer is subscribed to.
 *     security:
 *      - CustomerBearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/callback'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
//BEARER AUTHENTICATION
app.get('/api/v1/callbacks', async (req, res) => {
    try {
        // List callbacks
        console.log(`GET callbacks`);
        const response = await server.get_callbacks(
            req.headers.authorization
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
 * /callback:
 *   post:
 *     tags: [Callback]
 *     summary: Create a new callback
 *     description: Creates a new callback for the customer account.
 *     security:
 *      - CustomerBearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             integration_id:
 *               type: string
 *             params:
 *               type: object
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/callback'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
//BEARER AUTHENTICATION
app.post('/api/v1/callback', async (req, res) => {
    try {
        // Create callback
        console.log(`POST callback`);
        const response = await server.post_callback(
            req.headers.authorization,
            req.body.integration_id,
            req.body.params,
            req.body.automaticExport
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
 * /callback/{callbackId}:
 *   delete:
 *     tags: [Callback]
 *     summary: Delete a callback
 *     description: Deletes a callback from the customer account.
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: callbackId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the callback to delete
 *     responses:
 *       200:
 *         description: Callback deleted successfully
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'

 */
//BEARER AUTHENTICATION
app.delete('/api/v1/callback/:callbackId', async (req, res) => {
    try {
        // Delete callback
        console.log(`DELETE callback ${req.params.callbackId}`);
        await server.delete_callback(
            req.headers.authorization,
            req.params.callbackId
        );

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

/**
 * @openapi
 * /callback/{callbackId}/test/{type}:
 *   get:
 *     tags: [Callback]
 *     summary: Test a callback
 *     description: Sends a test request of the specified type to a given callback.
 *     security:
 *       - CustomerBearerAuth: []
 *     parameters:
 *       - name: callbackId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the callback to test
 *       - name: type
 *         in: path
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/callbackType'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
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
 *                         $ref: '#/components/schemas/remoteId'
 *                       invoice:
 *                         $ref: "#/components/schemas/invoice"
 *                       collector:
 *                         $ref: "#/components/schemas/collectorConfig"
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
 *                        $ref: '#/components/schemas/credentialId'
 *                       user_id:
 *                        $ref: '#/components/schemas/userId'
 *                       remote_id:
 *                         $ref: '#/components/schemas/remoteId'
 *                       collector:
 *                         $ref: "#/components/schemas/collectorConfig"
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
app.get('/api/v1/callback/:callbackId/test/:type', async (req, res) => {
    try {
        // Test callback
        console.log(`GET /api/v1/callback/${req.params.callbackId}/test/${req.params.type}`);
        await server.get_callback_test(
            req.headers.authorization,
            req.params.callbackId,
            req.params.type
        );

        // Build response
        res.end()
    } catch (e) {
        handle_error(e, req, res);
    }
});

// ---------- INTEGRATIONS ENDPOINTS ----------

//NO AUTHENTICATION
app.get('/api/v1/integrations', async (req, res) => {
    try {
        // List available integrations
        console.log(`GET available integrations`);
        const response = await server.get_integrations(
            req.query.locale
        );
        // Build response        res.setHeader('Content-Type', 'application/json');
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
 *     description: Returns all available collectors. _You can authenticate using token or bearer. If an authentication is provided, only the collectors the customer is subscribed to will be returned._
 *     security:
 *       - CustomerBearerAuth: []
 *       - UserBearerAuth: []
 *       - TokenAuth: []
 *     parameters:
 *       - name: locale
 *         in: query
 *         required: false
 *         schema:
 *           $ref: "#/components/schemas/locale"
 *         description: Locale for translated collector names and descriptions
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/collectorConfig'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       401:
 *         description: Authentication error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/error'
 */
// BEARER OR TOKEN AUTHENTICATION
app.get('/api/v1/collectors', async (req, res) => {
    try {
        // List all collectors
        console.log(`GET collectors`);
        const response = await server.get_collectors(
            req.headers.authorization,
            req.query.token,
            req.query.locale
        );

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
