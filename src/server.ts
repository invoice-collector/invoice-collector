import { DatabaseFactory } from './database/databaseFactory';
import { Secret } from './model/secret';
import { SecretManagerFactory } from './secret_manager/secretManagerFactory';
import { OauthError, MissingField, MissingParams, StatusError, AuthenticationBearerError } from './error';
import { CollectorLoader } from './collectors/collectorLoader';
import { User, UserStats } from './model/user';
import { Customer, Stats } from './model/customer';
import { IcCredential } from './model/credential';
import { CollectTask } from './collect/collectTask';
import { ProxyFactory } from './proxy/proxyFactory';
import { AbstractCollector, CollectorType, Config } from './collectors/abstractCollector';
import { RegistryServer } from './registryServer';
import * as utils from './utils';
import { CallbackHandler } from './callback/callback';
import { CollectPool } from './collect/collectPool';
import { Collect } from './collect/collect';
import { I18n } from './i18n';
import { Plan } from './model/plan';
import { State } from './model/state';
import { WebSocketServer } from './websocket/webSocketServer';

export class Server {

    static OAUTH_TOKEN_VALIDITY_DURATION_MS = Number(utils.getEnvVar("OAUTH_TOKEN_VALIDITY_DURATION_MS", "1800000"));                   // 30 minutes in milliseconds
    static RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS = Number(utils.getEnvVar("RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS", "3600000")); // 1 hour in milliseconds
    static UI_BEARER_VALIDITY_DURATION_MS = Number(utils.getEnvVar("UI_BEARER_VALIDITY_DURATION_MS", "3600000"));                       // 1 hour in milliseconds
    static IS_SELF_HOSTED: boolean = utils.getEnvVar("IS_SELF_HOSTED", "true").toLowerCase() === "true";

    customerUiBearers: { [key: string]: string };
    customerResetTokens: { [key: string]: string };
    userUiBearers: { [key: string]: string };
    userUiTokens: { [key: string]: User };
    userResetTokens: { [key: string]: string };

    collect_task: CollectTask;
    httpServer: any;

    constructor() {
        this.customerUiBearers = {};
        this.customerResetTokens = {};
        this.userUiBearers = {};
        this.userUiTokens = {};
        this.userResetTokens = {};
        this.collect_task = new CollectTask();
	}

    async start(){
        // Load all collectors
        await CollectorLoader.load();

        // Connect to database
        await DatabaseFactory.getDatabase().connect();

        // Load secret manager and connect to it
        await SecretManagerFactory.load();
        await SecretManagerFactory.getSecretManager().connect();

        // Check if registery server is reachable
        RegistryServer.getInstance().ping();

        // Start cron job for invoice collection
        this.collect_task.start();
    }

    // ---------- GENERAL ENDPOINTS ----------

    // TOKEN AUTHENTICATION
    public async get_ui(token: any): Promise<{locale: string, theme: string}> {
        // Get user from token
        const user = this.getUserFromUiToken(token);

        // Get customer from user
        const customer = await user.getCustomer();

        // Return locale and theme for UI rendering
        return { locale: user.locale, theme: customer.theme };
    }

    // BEARER AUTHENTICATION
    public async get_test_callback(bearer: string | undefined, type: string): Promise<void> {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        // Check if type field is missing
        if(!type) {
            throw new MissingField("type");
        }

        // Create callback handler
        const callback = new CallbackHandler(customer);

        // If type is "invoice", send a fake invoice
        if(type === "invoice") {
            // Get fake invoice datas
            let {collector_id, remote_id, invoice} = utils.createFakeInvoice();

            // Send fake invoice to callback
            await callback.sendInvoice(collector_id, remote_id, invoice);
        }
        else if(type === "notification_disconnected") {
            // Get fake notification disconnected
            let {collector_id, credential_id, user_id, remote_id } = utils.createFakeNotificationDisconnected();
            // Send notification disconnected
            await callback.sendNotificationDisconnected(collector_id, credential_id, user_id, remote_id);
        }
        else {
            throw new StatusError(`Type "${type}" not supported.`, 400);
        }
    }

    // TOKEN AUTHENTICATION
    public async post_feedback(
        bearer: string | undefined,
        token: any,
        type: string | undefined,
        message: string | undefined
    ): Promise<void> {
        // Check if type field is missing
        if(!type) {
            throw new MissingField("type");
        }

        // Check if message field is missing
        if(!message) {
            throw new MissingField("message");
        }

        // Get customer from bearer or token
        const customer = await this.getCustomerFromBearerOrToken(bearer, token);

        // Send feedback to registry server
        await RegistryServer.getInstance().feedback(
            type,
            message,
            customer.email,
            ""
        );
    }

    // ---------- LOGIN/SIGNUP/RESET ENDPOINTS ----------

    // NO AUTHENTICATION
    public async post_login(
        email: string | undefined,
        password: string | undefined
    ): Promise<{
        bearer: string,
        type: string
    }> {
        // Check if email field is missing
        if(!email) {
            throw new MissingField("email");
        }

        // Check if password field is missing
        if(!password) {
            throw new MissingField("password");
        }

        // Get customer from email
        const customer = await Customer.fromEmailAndPassword(email, utils.hash_string(password));

        // If customer exists
        if(customer) {
            // Generate session bearer token
            const customerUiBearer = utils.generate_bearer(utils.BearerType.CUSTOMER_SESSION);

            // Compute hashed bearer
            const hashedCustomerUiBearer = utils.hash_string(customerUiBearer);

            // Map bearer token with customer
            this.customerUiBearers[hashedCustomerUiBearer] = customer.id;

            // Schedule token delete after validity duration
            setTimeout(() => {
                delete this.customerUiBearers[hashedCustomerUiBearer];
            }, Server.UI_BEARER_VALIDITY_DURATION_MS);

            // Return bearer token
            return {
                bearer: customerUiBearer,
                type: "customer"
            };
        }
        else {
            // Get user from remote_id and password
            const user = await User.fromRemoteIdAndPassword(email, utils.hash_string(password));
            
            // Check if user exists
            if(!user) {
                throw new StatusError("Invalid credentials", 401);
            }

            // Generate session bearer token
            const userUiBearer = utils.generate_bearer(utils.BearerType.USER_SESSION);

            // Compute hashed bearer
            const hashedUserUiBearer = utils.hash_string(userUiBearer);

            // Map bearer token with user
            this.userUiBearers[hashedUserUiBearer] = user.id;

            // Schedule token delete after validity duration
            setTimeout(() => {
                delete this.userUiBearers[hashedUserUiBearer];
            }, Server.UI_BEARER_VALIDITY_DURATION_MS);

            // Return bearer token
            return {
                bearer: userUiBearer,
                type: "user"
            };
        }
    }

    // NO AUTHENTICATION
    public async post_signup(
        email: string | undefined,
        name: string | undefined,
        cid: string | undefined,
        locale: string | undefined,
        inviteId: string | undefined
    ): Promise<{
        resetLink: string
    }> {
        // Check if email field is missing
        if(!email) {
            throw new MissingField("email");
        }

        // Check if name field is missing
        if(!name) {
            throw new MissingField("name");
        }

        // Check if cid field is missing
        if(!cid) {
            throw new MissingField("cid");
        }

        // Check if email is valid
        if(!utils.checkEmailIsValid(email)) {
            throw new StatusError(`Email "${email}" is not valid.`, 400);
        }

        // Check if email contains alias
        if(email.includes("+")) {
            throw new StatusError(`Email "${email}" is not valid. Aliases are not allowed.`, 400);
        }

        // Check if customer already exists
        let customer = await Customer.fromEmail(email);

        // Check if user already exists
        let user = await User.fromRemoteId(email);

        // If customer or user exists, raise error
        if(customer || user) {
            throw new StatusError(`An account with email "${email}" already exists. Please log in instead.`, 400);
        }

        // If inviteId is provided, it is a user signup
        if (inviteId) {
            // Get customer id from invite id
            customer = await Customer.fromInviteId(inviteId);

            // If no customer found for invite id, raise error
            if (!customer) {
                throw new StatusError(`No customer found for invite ID "${inviteId}".`, 400);
            }

            // Create new user for existing customer
            user = new User(
                customer.id,
                email,
                User.DEFAULT_PASSWORD,
                name,
                cid,
                null,
                locale || I18n.DEFAULT_LOCALE,
                Date.now()
            );

            // Commit changes in database
            await user.commit();

            // Send welcome email
            await RegistryServer.getInstance().sendWelcomeEmail(email, user.locale);

            // Handle password reset for user
            const resetLink = await this.handleUserResetPassword(user);

            // Return reset link
            return { resetLink };
        }
        else {
            // Create new customer
            customer = new Customer(
                email,
                Customer.DEFAULT_PASSWORD,
                name,
                cid,
                Customer.DEFAULT_CALLBACK,
                Customer.DEFAULT_REMOTE_ID,
                Customer.DEFAULT_BEARER,
                utils.convertNameToInviteId(name),
                Date.now()
            );

            // Commit changes in database
            await customer.commit();

            // Send welcome email
            await RegistryServer.getInstance().sendWelcomeEmail(email, locale || I18n.DEFAULT_LOCALE);

            // Handle password reset for customer
            const resetLink = await this.handleCustomerResetPassword(customer);

            // Return reset link
            return { resetLink };
        }
    }

    // NO AUTHENTICATION
    public async post_forgot(
        email: string | undefined
    ): Promise<{
        resetLink: string
    }> {
        // Check if email field is missing
        if(!email) {
            throw new MissingField("email");
        }

        // Get customer from email
        let customer = await Customer.fromEmail(email);

        // If customer exists
        if(customer) {
            // Generate reset token
            const resetLink = await this.handleCustomerResetPassword(customer);

            // Return reset link
            return { resetLink };
        }

        // Check if customer already exists
        let user = await User.fromRemoteId(email);

        // If user exists
        if(user) {
            // Generate reset token and return it
            const resetLink = await this.handleUserResetPassword(user);

            // Return reset link
            return { resetLink };
        }

        // If not customer or user found, raise error
        throw new StatusError(`No account found for email "${email}".`, 400);
    }

    // RESET TOKEN AUTHENTICATION
    public async post_reset(
        resetToken: any,
        password: string
    ): Promise<void> {

        // Check if reset token exists and is a string
        if (!resetToken ||typeof resetToken !== 'string') {
            throw new MissingField("token");
        }

        // Check if password exists and is a string
        if (!password || typeof password !== 'string') {
            throw new MissingField("password");
        }

        // If reset token belongs to a customer
        if(this.customerResetTokens.hasOwnProperty(resetToken)) {
            // Get customer from id
            const customer = await Customer.fromId(this.customerResetTokens[resetToken]);

            // Check if customer exists
            if(!customer) {
                throw new StatusError(`Customer with id "${this.customerResetTokens[resetToken]}" not found.`, 400);
            }

            // Set new password
            customer.password = utils.hash_string(password);

            // Commit changes in database
            await customer.commit();

            // Delete customer reset token
            delete this.customerResetTokens[resetToken];
        }
        // If reset token belongs to a user
        else if(this.userResetTokens.hasOwnProperty(resetToken)) {
            // Get user from id
            const user = await User.fromId(this.userResetTokens[resetToken]);

            // Check if user exists
            if(!user) {
                throw new StatusError(`User with id "${this.userResetTokens[resetToken]}" not found.`, 400);
            }

            // Set new password
            user.password = utils.hash_string(password);

            // Commit changes in database
            await user.commit();

            // Delete user reset token
            delete this.userResetTokens[resetToken];
        }
        else {
            throw new StatusError("Invalid reset token. Your reset link probably expired.", 401);
        }
    }

    // ---------- CUSTOMER ENDPOINTS ----------

    // BEARER AUTHENTICATION
    public async get_customer(bearer: string | undefined): Promise<{
        id: string,
        email: string,
        name: string,
        callback: string,
        remoteId: string,
        createdAt: number,
        theme: string,
        subscribedCollectors: string[],
        isSubscribedToAll: boolean,
        enableInteractiveLogin: boolean,
        displaySketchCollectors: boolean,
        maxDelayBetweenCollect: number,
        plan: Plan
    }> {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        return {
            id: customer.id,
            email: customer.email,
            name: customer.name,
            callback: customer.callback,
            remoteId: customer.remoteId,
            createdAt: customer.createdAt,
            theme: customer.theme,
            subscribedCollectors: customer.subscribedCollectors,
            isSubscribedToAll: customer.isSubscribedToAll,
            enableInteractiveLogin: customer.enableInteractiveLogin,
            displaySketchCollectors: customer.displaySketchCollectors,
            maxDelayBetweenCollect: customer.maxDelayBetweenCollect,
            plan: customer.plan
        };
    }

    // BEARER AUTHENTICATION
    public async post_customer(
        bearer: string | undefined,
        name: string | undefined,
        callback: string | undefined,
        remoteId: string | undefined,
        theme: string | undefined,
        subscribedCollectors: string[] | undefined,
        isSubscribedToAll: boolean | undefined,
        enableInteractiveLogin: boolean | undefined,
        displaySketchCollectors: boolean | undefined
    ): Promise<void> {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        // Check if name field is present
        if(name) {
            customer.name = name;
        }

        // Check if callback field is present
        if(callback) {
            customer.callback = callback;
        }

        // Check if remoteId field is present
        if(remoteId) {
            customer.remoteId = remoteId;
        }

        // Check if theme field is present
        if(theme) {
            customer.setTheme(theme);
        }

        if (subscribedCollectors) {
            await customer.setSubscribedCollectors(subscribedCollectors);
        }

        if (typeof isSubscribedToAll === 'boolean') {
            customer.isSubscribedToAll = isSubscribedToAll;
        }

        if (typeof enableInteractiveLogin === 'boolean') {
            customer.enableInteractiveLogin = enableInteractiveLogin;
        }

        if (typeof displaySketchCollectors === 'boolean') {
            customer.displaySketchCollectors = displaySketchCollectors;
        }

        // Commit changes in database
        await customer.commit();
    }

    // BEARER AUTHENTICATION
    public async post_customer_bearer(bearer: string | undefined): Promise<{
        bearer: string
    }> {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        // Generate api bearer
        const newBearer = utils.generate_bearer(utils.BearerType.API);

        // Compute hashed bearer
        const hashedBearer = utils.hash_string(newBearer);

        // Update customer bearer
        customer.bearer = hashedBearer;

        // Commit changes in database
        await customer.commit();

        // Return new bearer token
        return { bearer: newBearer };
    }

    public async getCustomerStats(bearer: string | undefined): Promise<Stats>{
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        // Get customer stats
        return await customer.getStats();
    }


    // ---------- USER ENDPOINTS ----------

    // BEARER AUTHENTICATION
    public async get_users(bearer: string | undefined): Promise<{
        id: string,
        customer_id: string,
        remote_id: string,
        locale: string,
        createdAt: number,
        stats: UserStats
    }[]> {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        // Get users from customer
        const users = await customer.getUsers();

        // Return users
        return await Promise.all(users.map(async (user) => {
            // Get user stats
            const stats = await user.getStats();

            // Return user with credentials count
            return {
                id: user.id,
                customer_id: user.customer_id,
                remote_id: user.remote_id,
                locale: user.locale,
                createdAt: user.createdAt,
                stats: stats
            };
        }));
    }

    // BEARER AUTHENTICATION
    public async post_user(
        bearer: string | undefined,
        remote_id: string | undefined,
        locale: string | undefined,
        ip: string | undefined
    ): Promise<{
        id: string,
        customer_id: string,
        remote_id: string,
        locale: string,
        createdAt: number,
        token: string,
        stats: UserStats
    }> {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        // Check if remote_id field is missing
        if(!remote_id) {
            throw new MissingField("remote_id");
        }

        // Check if locale field is missing
        if(!locale) {
            throw new MissingField("locale");
        }

        // Check if remote_id contains space
        if(remote_id.includes(" ")) {
            throw new StatusError(`Remote ID "${remote_id}" cannot contain spaces.`, 400);
        }

        // Check if locale is supported
        if(locale && !I18n.LOCALES.includes(locale)) {
            throw new StatusError(`Locale "${locale}" not supported. Available locales are: ${I18n.LOCALES.join(", ")}.`, 400);
        }

        // Get user from remote_id
        let user = await customer.getUserFromRemoteId(remote_id);

        // If user does not exist, create it
        if(!user) {
            // Check if customer can add more users
            const canAddUser = await customer.canAddUser();

            // If customer cannot add more users, throw an error
            if (!canAddUser) {
                throw new StatusError(`User limit reached. Max users: ${customer.plan.maxUsers}`, 403);
            }

            // Get user location
            const location = await ProxyFactory.getProxy().locate(ip);
            // Create user
            user = new User(
                customer.id,
                remote_id,
                User.DEFAULT_PASSWORD,
                User.DEFAULT_NAME,
                User.DEFAULT_CID,
                location,
                locale,
                Date.now()
            );
        }
        else {
            // Update user locale
            user.locale = locale;
            
            // If user location is unknown
            if (user.location === null) {
                // Update user with location
                user.location = await ProxyFactory.getProxy().locate(ip);
                if (user.location != null) {
                    await user.commit();
                }
            }
        }

        // Commit changes in database
        await user.commit();

        // Generate oauth token
        const uiToken = utils.generate_token();

        // Map token with user
        this.userUiTokens[uiToken] = user;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.userUiTokens[uiToken];
        }, Server.OAUTH_TOKEN_VALIDITY_DURATION_MS);

        // Get user stats
        const stats = await user.getStats();

        return {
            id: user.id,
            customer_id: user.customer_id,
            remote_id: user.remote_id,
            locale: user.locale,
            createdAt: user.createdAt,
            token: uiToken,
            stats: stats
        }
    }

    // BEARER AUTHENTICATION
    public async get_user(bearer: string | undefined, user_id: string | undefined): Promise<{
        id: string,
        remote_id: string,
        locale: string,
        createdAt: number,
        customer: {
            name: string
        },
        stats: UserStats
    }> {
        // Get user from bearer
        const user = await this.getUserFromBearerOrToken(bearer, user_id, null);

        // Get customer from user
        const customer = await user.getCustomer();

        // Get user stats
        const stats = await user.getStats();

        // Return user
        return {
            id: user.id,
            remote_id: user.remote_id,
            locale: user.locale,
            createdAt: user.createdAt,
            customer: {
                name: customer.name
            },
            stats: stats
        };
    }


    // BEARER AUTHENTICATION
    public async delete_user(bearer: string | undefined, user_id: string) {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        // Check if user_id field is missing
        if(!user_id) {
            throw new MissingField("user_id");
        }

        // Get user from user_id
        const user = await customer.getUser(user_id);

        // Check if user exists
        if (!user) {
            throw new StatusError(`User with id "${user_id}" not found.`, 400);
        }

        // Delete user and all its credentials
        await user.delete();

        // Delete user from ui token mapping
        for (let uiToken in this.userUiTokens) {
            if (this.userUiTokens[uiToken].id === user.id) {
                delete this.userUiTokens[uiToken];
            }
        }
    }

    // ---------- CREDENTIAL ENDPOINTS ----------

    // TOKEN AUTHENTICATION
    public async get_credentials(
        bearer: string | undefined,
        user_id: string | undefined,
        token: any
    ): Promise<{
        id: string,
        user_id: string,
        note: string,
        create_timestamp: number,
        download_from_timestamp: number,
        last_collect_timestamp: number,
        next_collect_timestamp: number,
        invoices: any[],
        state: State,
        collector: Config,
        wsPath: string | null
    }[]> {
        // Get user from bearer or token
         const user = await this.getUserFromBearerOrToken(bearer, user_id, token);

        // Get credentials from user
        let credentials = await user.getCredentials();

        // Build response 
        return await Promise.all(credentials.map(async credential => {
            // Get collector from id
            const collector = await CollectorLoader.get(credential.collector_id);

            // Get customer from user
            const customer = await user.getCustomer();

            // Update collector params based on customer settings
            AbstractCollector.updateCollectorParams(customer.enableInteractiveLogin, collector.config);

            // Get current collect
            const collect = CollectPool.getInstance().get(credential.id);
            
            // If collect in progress
            if (collect && collect.state) {
                // Replace state with collect state
                credential.state = collect.state;
            }

            // Translate the state title and message
            credential.state.title = I18n.get(credential.state.title, user.locale);
            credential.state.message = I18n.get(credential.state.message, user.locale);

            // Get ws path
            const wsPath = collect?.webSocketServer?.path || null;

            return {
                id: credential.id,
                user_id: credential.user_id,
                note: credential.note,
                create_timestamp: credential.create_timestamp,
                download_from_timestamp: credential.download_from_timestamp,
                last_collect_timestamp: credential.last_collect_timestamp,
                next_collect_timestamp: credential.next_collect_timestamp,
                state: credential.state,
                invoices: credential.invoices,
                collector: collector.config,
                wsPath: wsPath
            }
        }));
    }

    // TOKEN AUTHENTICATION
    public async post_credential(
        bearer: string | undefined,
        user_id: string | undefined,
        token: any,
        collector_id: string | undefined,
        params: any | undefined,
        download_from_timestamp: number | undefined
    ): Promise<{
        id: string,
        user_id: string,
        note: string,
        create_timestamp: number,
        download_from_timestamp: number,
        last_collect_timestamp: number,
        next_collect_timestamp: number,
        invoices: any[],
        state: State,
        collector: Config,
        wsPath: string
    }> {
        // Get user from bearer or token
        const user = await this.getUserFromBearerOrToken(bearer, user_id, token);

        // Check if id field is missing
        if(!collector_id) {
            throw new MissingField("collector");
        }
 
        // Check if params field is missing
        if(!params) {
            throw new MissingField("params");
        }

        // Check if download_from_timestamp is valid
        if(download_from_timestamp != undefined && (typeof download_from_timestamp !== "number" || download_from_timestamp < 0)) {
            throw new StatusError(`The field "download_from_timestamp" must be a positive number.`, 400);
        }

        // Get collector from id
        const collector = await CollectorLoader.get(collector_id);

        // Get customer from user
        const customer = await user.getCustomer();

        // Update collector params based on customer settings
        AbstractCollector.updateCollectorParams(customer.enableInteractiveLogin, collector.config);

        // Check if customer has define a callback URL
        if(!customer.callback) {
            throw new StatusError(`No callback url defined for the customer. Please define a callback URL first.`, 400);
        }

        // Check if customer has subscribed to the collector
        if (!customer.isSubscribedToAll && !customer.subscribedCollectors.includes(collector.config.id)) {
            throw new StatusError(`Customer has not subscribed to collector "${collector.config.id}". Available collectors are: ${customer.subscribedCollectors.join(", ")}.`, 400);
        }

        // Get credential note
        let note = params.note;
        delete params.note;

        // Check if all mandatory params are present
        const missing_params = Object.keys(collector.config.params).filter((param) => collector.config.params[param].mandatory && !params.hasOwnProperty(param));
        if(missing_params.length > 0) {
            throw new MissingParams(missing_params);
        }

        // Check if collector is sketch
        if(collector.config.type == CollectorType.SKETCH) {
            await RegistryServer.getInstance().feedback(
                "sketch",
                `User ${user.id} from customer ${customer.id} (${customer.name}) needs collector ${collector.config.id} to be implemented.`,
                customer.email,
                user.id
            );
        }

        // Check if customer can add more credentials
        const canAddCredential = await customer.canAddCredential();

        // If customer cannot add more credentials, throw an error
        if (!canAddCredential) {
            throw new StatusError(`Credential limit reached. Max credentials: ${customer.plan.maxCredentials}`, 403);
        }

        // Create secret
        const secret = new Secret(`${user.id}_${collector.config.id}`, {
            params,
            cookies: null,
            localStorage: null
        });

        // Create secret in Secure Storage
        await secret.commit();

        // Create credential
        const now = Date.now();
        let credential = new IcCredential(
            user.id,
            collector.config.id,
            note,
            secret.id,
            now,
            download_from_timestamp ?? now
        );

        // Compute next collect
        credential.computeNextCollect(customer.maxDelayBetweenCollect);

        // Create credential in database
        await credential.commit();

        // Start web socket server and get token
        const webSocketServer = new WebSocketServer(this.httpServer, user.locale, collector);
        const wsPath = webSocketServer.start();

        // Start collect
        const collect = new Collect(credential.id, webSocketServer)

        // Register collect in progress
        CollectPool.getInstance().registerCollect(credential.id, collect);

        // Do not wait for promise to resolve
        collect.start().catch((err) => {
            console.error(`Collect for credential ${credential.id} has failed`);
            console.error(err);
        })
        .finally(() => {
            // Unregister collect in progress
            CollectPool.getInstance().unregisterCollect(credential.id);
            // Close web socket server
            webSocketServer.close();
        });

        // Return credential
        return {
            id: credential.id,
            user_id: credential.user_id,
            note: credential.note,
            create_timestamp: credential.create_timestamp,
            download_from_timestamp: credential.download_from_timestamp,
            last_collect_timestamp: credential.last_collect_timestamp,
            next_collect_timestamp: credential.next_collect_timestamp,
            invoices: credential.invoices,
            state: credential.state,
            collector: collector.config,
            wsPath: wsPath
        };
    }

    // TOKEN AUTHENTICATION
    public async get_credential(
        bearer: string | undefined,
        user_id: string | undefined,
        token: any,
        id: string
    ): Promise<{
        id: string,
        user_id: string,
        note: string,
        create_timestamp: number,
        download_from_timestamp: number,
        last_collect_timestamp: number,
        next_collect_timestamp: number,
        invoices: any[],
        state: State,
        collector: Config,
        wsPath: string | null
    }> {
        // Get user from bearer or token
        const user = await this.getUserFromBearerOrToken(bearer, user_id, token);

        // Get credential from id
        const credential = await user.getCredential(id);

        // Check if credential exists
        if (!credential) {
            throw new StatusError(`Credential with id "${id}" not found.`, 400);
        }

        // Check if credential belongs to user
        if (credential.user_id != user.id) {
            throw new StatusError(`Credential with id "${id}" does not belong to user.`, 403);
        }

        // Get collector from id
        const collector = await CollectorLoader.get(credential.collector_id);

        // Get customer from user
        const customer = await user.getCustomer();

        // Update collector params based on customer settings
        AbstractCollector.updateCollectorParams(customer.enableInteractiveLogin, collector.config);

        // Get current collect
        const collect = CollectPool.getInstance().get(credential.id);

        // If collect in progress
        if (collect && collect.state) {
            // Replace state with collect state
            credential.state = collect.state;
        }

        // Translate the state title and message
        credential.state.title = I18n.get(credential.state.title, user.locale);
        credential.state.message = I18n.get(credential.state.message, user.locale);

        // Get ws path
        const wsPath = collect?.webSocketServer?.path || null;

        // Return credential
        return {
            id: credential.id,
            user_id: credential.user_id,
            note: credential.note,
            create_timestamp: credential.create_timestamp,
            download_from_timestamp: credential.download_from_timestamp,
            last_collect_timestamp: credential.last_collect_timestamp,
            next_collect_timestamp: credential.next_collect_timestamp,
            invoices: credential.invoices,
            state: credential.state,
            collector: collector.config,
            wsPath: wsPath
        };
    }

    // TOKEN AUTHENTICATION
    public async delete_credential(
        bearer: string | undefined,
        user_id: string | undefined,
        token: any,
        id: string
    ): Promise<void> {
        // Get user from bearer or token
        const user = await this.getUserFromBearerOrToken(bearer, user_id, token);

        // Get credential from id
        const credential = await user.getCredential(id);

        // Check if credential exists
        if (!credential) {
            throw new StatusError(`Credential with id "${id}" not found.`, 400);
        }

        // Check if credential belongs to user
        if (credential.user_id != user.id) {
            throw new StatusError(`Credential with id "${id}" does not belong to user.`, 403);
        }

        // Delete credential
        await credential.delete();
    }

    // TOKEN AUTHENTICATION
    public async post_credential_2fa(
        bearer: string | undefined,
        user_id: string | undefined,
        token: any,
        credential_id: string,
        code: string | undefined
    ): Promise<void> {
        // Get user from bearer or token
        const user = await this.getUserFromBearerOrToken(bearer, user_id, token);

         // Check code id field is missing
         if(!code) {
            throw new MissingField("code");
        }

        // Get credential from id
        const credential = await user.getCredential(credential_id)

        // Check if credential exists
        if (!credential) {
            throw new StatusError(`Credential with id "${credential_id}" not found.`, 400);
        }

        // Check if credential belongs to user
        if (credential.user_id != user.id) {
            throw new StatusError(`Credential with id "${credential_id}" does not belong to user.`, 403);
        }

        // Get collect from id
        const collect = await CollectPool.getInstance().get(credential.id);

        // Check if collect exists
        if (!collect) {
            throw new StatusError(`No collect in progress for credential "${credential.id}".`, 400);
        }
        
        // Resolve collect promise and pass the code to the collector
        collect.twofa_promise.setCode(code);

        // Set progress step to 2FA proceeding
        collect.state?.update(State._4_2FA_PROCEEDING);
    }

    // BEARER AUTHENTICATION
    public async post_credential_collect(
        bearer: string | undefined,
        user_id: string | undefined,
        token: any,
        credential_id: string
    ): Promise<{
        wsPath: string | null
    }> {
        // Get user from bearer or token
        const user = await this.getUserFromBearerOrToken(bearer, user_id, token);

        // Get credential from id
        const credential = await user.getCredential(credential_id)

        // Check if credential exists
        if (!credential) {
            throw new StatusError(`Credential with id "${credential_id}" not found.`, 400);
        }

        // Check if credential belongs to user
        if (credential.user_id != user.id) {
            throw new StatusError(`Credential with id "${credential_id}" does not belong to user.`, 403);
        }

        let collect = CollectPool.getInstance().get(credential.id);
        let wsPath: string | null;

        // If no collect in progress, start a new one
        if (collect == undefined) {
            // Get collector from id
            const collector = await CollectorLoader.get(credential.collector_id);

            // Get customer from user
            const customer = await user.getCustomer();

            // Update collector params based on customer settings
            AbstractCollector.updateCollectorParams(customer.enableInteractiveLogin, collector.config);

            // Start web socket server and get token
            const webSocketServer = new WebSocketServer(this.httpServer, user.locale, collector);
            wsPath = webSocketServer.start();

            // Start collect
            collect = new Collect(credential.id, webSocketServer)

            // Register collect in progress
            CollectPool.getInstance().registerCollect(credential.id, collect);

            // Do not wait for promise to resolve
            collect.start().catch((err) => {
                console.error(`Collect for credential ${credential.id} has failed`);
                console.error(err);
            })
            .finally(() => {
                // Unregister collect in progress
                CollectPool.getInstance().unregisterCollect(credential.id);
                // Close web socket server
                webSocketServer.close();
            });
        }
        else {
            // If collect in progress, return existing wsPath
            wsPath = collect.webSocketServer?.path || null;
        }

        return {
            wsPath: wsPath
        };
    }

    // ---------- COLLECTOR ENDPOINTS ----------

    // BEARER AUTHENTICATION
    public async get_collectors(
        bearer: string | undefined,
        token: any,
        locale: any
    ): Promise<Config[]> {
        // Check if token is missing or incorrect
        let subscribedCollectors: string[] = Customer.DEFAULT_SUBSCRIBED_COLLECTORS;
        let isSubscribedToAll: boolean = Customer.DEFAULT_IS_SUBSCRIBED_TO_ALL;
        let enableInteractiveLogin: boolean = false;
        let displaySketchCollectors: boolean = Customer.DEFAULT_DISPLAY_SKETCH_COLLECTORS;
        if(token || bearer) {
            // Get customer from bearer or token
            const customer = await this.getCustomerFromBearerOrToken(bearer, token);
            subscribedCollectors = customer.subscribedCollectors;
            isSubscribedToAll = customer.isSubscribedToAll;
            enableInteractiveLogin = customer.enableInteractiveLogin;
            displaySketchCollectors = customer.displaySketchCollectors;
        }

        // Check if locale field is missing
        if(!locale || typeof locale !== 'string') {
            // Set default locale
            locale = I18n.DEFAULT_LOCALE;
        }

        // Check if locale is supported
        if(locale && !I18n.LOCALES.includes(locale)) {
            throw new StatusError(`Locale "${locale}" not supported. Available locales are: ${I18n.LOCALES.join(", ")}.`, 400);
        }

        return (await CollectorLoader.getAll())
            .map((config: Config): Config => ({ ...config }))
            .filter((config: Config) => isSubscribedToAll || subscribedCollectors.includes(config.id))
            .filter((config: Config) => config.type !== CollectorType.SKETCH || displaySketchCollectors)
            .map((config: Config): Config => {
                // Update collector params based on customer settings
                AbstractCollector.updateCollectorParams(enableInteractiveLogin, config);

                const name: string = I18n.get(config.name, locale);
                const description: string = I18n.get(config.description, locale);
                const instructions: string = I18n.get(config.instructions, locale);
                const params = Object.keys(config.params).reduce((acc, key) => {
                    acc[key] = {
                        ...config.params[key],
                        name: I18n.get(config.params[key].name, locale),
                        placeholder: I18n.get(config.params[key].placeholder, locale)
                    };
                    return acc;
                }, {});
                return {
                    ...config,
                    name,
                    description,
                    instructions,
                    params
                };
            });
    }

    // ---------- PRIVATE METHODS ----------

    private getUserFromUiToken(uiToken: any): User {
        // Check if token is missing or incorrect
        if(!uiToken || !this.userUiTokens.hasOwnProperty(uiToken) || typeof uiToken !== 'string') {
            throw new OauthError();
        }
        return this.userUiTokens[uiToken];
    }

    private async getCustomerFromBearerOrToken(bearer: string | undefined, token: any): Promise<Customer> {
        if (token) {
            // Get user from token
            const user = this.getUserFromUiToken(token);
            // Get customer from user
            return await user.getCustomer();
        }
        else if (bearer) {
            // If is a user bearer, get user from bearer
            if(bearer.startsWith(`Bearer ${utils.BearerType.USER_SESSION}`)) {
                // Get user from bearer
                const user = await this.getUserFromBearer(bearer);
                // Get customer from user
                return await user.getCustomer();
            }
            else {
                // Get customer from bearer
                return await this.getCustomerFromBearer(bearer);
            }
        }
        else {
            throw new StatusError(`Provide a Bearer token or a "token" field in the query.`, 400);
        }
    }

    private async getUserFromBearerOrToken(bearer: string | undefined, user_id: string | undefined, token: any): Promise<User> {
        // If token provided, get user from token
        if (token) {
            // Get user from token
            return this.getUserFromUiToken(token);
        }
        // If bearer and user_id provided, get user from customer bearer
        else if (bearer && user_id) {
            // Check if user_id is provided
            if (!user_id) {
                throw new MissingField("user_id");
            }
            // Get customer from bearer
            const customer = await this.getCustomerFromBearer(bearer);
            // Get user from customer
            const user = await customer.getUser(user_id);

            // Check if user exists
            if (!user) {
                throw new StatusError(`User with id "${user_id}" not found.`, 400);
            }

            return user;
        }
        // If only bearer provided, get user from bearer
        else if (bearer && !user_id) {
            // Get user from bearer
            return await this.getUserFromBearer(bearer);
        }
        else {
            throw new StatusError(`Provide a Bearer token or a "token" field in the query.`, 400);
        }
    }

    private async getCustomerFromBearer(bearer: string | undefined): Promise<Customer> {
        // Check if bearer is missing
        if (!bearer || !bearer.startsWith("Bearer ")) {
            throw new AuthenticationBearerError()
        }

        // Get hashed bearer
        const hashed_bearer = utils.hash_string(bearer.split(' ')[1]);

        let customer: Customer | null;
        // Check if customerUiBearers contains the hashed bearer
        if (this.customerUiBearers.hasOwnProperty(hashed_bearer)) {
            // Get customer id from uiBearers
            const customer_id = this.customerUiBearers[hashed_bearer];

            // Get customer from id
            customer = await Customer.fromId(customer_id);
        }
        else {
            // Get customer from bearer
            customer = await Customer.fromBearer(hashed_bearer);
        }

        // Check if customer exists
        if (!customer) {
            throw new AuthenticationBearerError();
        }

        return customer;
    }

    private async getUserFromBearer(bearer: string | undefined): Promise<User> {
        // Check if bearer is missing
        if (!bearer || !bearer.startsWith("Bearer ")) {
            throw new AuthenticationBearerError()
        }

        // Get hashed bearer
        const hashed_bearer = utils.hash_string(bearer.split(' ')[1]);

        // If the bearer is not in userUiBearers
        if(!this.userUiBearers.hasOwnProperty(hashed_bearer)) {
            throw new AuthenticationBearerError()
        }

        // Get user id from uiBearers
        const user_id = this.userUiBearers[hashed_bearer];

        // Get user from id
        const user = await User.fromId(user_id);

        // Check if user exists
        if (!user) {
            throw new AuthenticationBearerError();
        }

        return user;
    }

    private async handleUserResetPassword(user: User): Promise<string> {
        // Generate reset token
        const resetToken = utils.generate_token();

        // Map reset token with user
        this.userResetTokens[resetToken] = user.id;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.userResetTokens[resetToken];
        }, Server.RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS);

        // Send reset password email
        return await RegistryServer.getInstance().sendResetPasswordEmail(user.remote_id, resetToken);
    }

    private async handleCustomerResetPassword(customer: Customer): Promise<string> {
        // Generate reset token
        const resetToken = utils.generate_token();

        // Map reset token with customer
        this.customerResetTokens[resetToken] = customer.id;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.customerResetTokens[resetToken];
        }, Server.RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS);

        // Send reset password email
        return await RegistryServer.getInstance().sendResetPasswordEmail(customer.email, resetToken);
    }
}
