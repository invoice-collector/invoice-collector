import { DatabaseFactory } from './database/databaseFactory';
import { AbstractSecretManager, Secret } from './secret_manager/abstractSecretManager';
import { SecretManagerFactory } from './secret_manager/secretManagerFactory';
import { OauthError, MissingField, MissingParams, StatusError, AuthenticationBearerError } from './error';
import { generate_token } from './utils';
import { CollectorLoader } from './collectors/collectorLoader';
import { User } from './model/user';
import { Customer } from './model/customer';
import { IcCredential, State } from './model/credential';
import { CollectTask } from './collect/collectTask';
import { ProxyFactory } from './proxy/proxyFactory';
import { AbstractCollector, CollectorType, Config } from './collectors/abstractCollector';
import { RegistryServer } from './registryServer';
import * as utils from './utils';
import { CallbackHandler } from './callback/callback';
import { CollectPool } from './collect/collectPool';
import { Collect } from './collect/collect';
import { I18n } from './i18n';

export class Server {

    static OAUTH_TOKEN_VALIDITY_DURATION_MS = Number(utils.getEnvVar("OAUTH_TOKEN_VALIDITY_DURATION_MS", "600000"));
    static RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS = Number(utils.getEnvVar("RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS", "600000"));
    static UI_BEARER_VALIDITY_DURATION_MS = Number(utils.getEnvVar("UI_BEARER_VALIDITY_DURATION_MS", "3600000"));
    static DISABLE_VERIFICATION_CODE: boolean = utils.getEnvVar("DISABLE_VERIFICATION_CODE", "false").toLowerCase() === "true";

    uiTokens: { [key: string]: User };
    resetTokens: { [key: string]: string };
    uiBearers: { [key: string]: string };
    secret_manager: AbstractSecretManager;
    collect_task: CollectTask;

    constructor() {
        this.uiTokens = {};
        this.resetTokens = {};
        this.uiBearers = {};

        // Load all collectors
        CollectorLoader.load();

        // Connect to database
        DatabaseFactory.getDatabase().connect();

        // Connect to secret manager
        this.secret_manager = SecretManagerFactory.getSecretManager();

        // Check if registery server is reachable
        RegistryServer.getInstance().ping();

        // Start collect task
        this.collect_task = new CollectTask();
	}
    // ---------- GENERAL ENDPOINTS ----------

    // TOKEN AUTHENTICATION
    public async get_ui(token: any, verificationCode: any): Promise<{locale: string, theme: string}> {
        // Get user from token
        const user = this.getUserFromUiToken(token);

        // Get customer from user
        const customer = await user.getCustomer();

        // Check if verificationCode is valid
        if (verificationCode && user.termsConditions.verificationCode === verificationCode) {
            // Validate terms and conditions by setting validTimestamp to now
            user.termsConditions.validTimestamp = Date.now();
            // Commit changes
            await user.commit();
        }

        // Check if terms and conditions have been accepted
        await user.checkTermsConditions();

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
        message: string | undefined,
        email: string | undefined
    ): Promise<void> {
        //Check if type field is missing
        if(!type) {
            throw new MissingField("type");
        }

        //Check if message field is missing
        if(!message) {
            throw new MissingField("message");
        }

        // Get customer from bearer or token
        const customer = await this.getCustomerFromBearerOrToken(bearer, token);

        // Send feedback to registry server
        await RegistryServer.getInstance().feedback(customer.bearer, type, message, email);
    }

    // ---------- LOGIN/SIGNUP/RESET ENDPOINTS ----------

    // NO AUTHENTICATION
    public async post_login(
        email: string | undefined,
        password: string | undefined
    ): Promise<{
        bearer: string
    }> {
        //Check if email field is missing
        if(!email) {
            throw new MissingField("email");
        }

        //Check if password field is missing
        if(!password) {
            throw new MissingField("password");
        }

        // Get customer from email
        const customer = await Customer.fromEmailAndPassword(email, utils.hash_string(password));

        // Check if customer exists
        if(!customer) {
            throw new StatusError("Invalid credentials", 401);
        }

        // Generate ui bearer token
        const uiBearer = utils.generate_bearer();

        // Compute hashed bearer
        const hashed_bearer = utils.hash_string(uiBearer);

        // Map bearer token with customer
        this.uiBearers[hashed_bearer] = customer.id;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.uiBearers[hashed_bearer];
            console.log(`Ui bearer ${hashed_bearer} deleted`);
        }, Server.UI_BEARER_VALIDITY_DURATION_MS);

        return { bearer: uiBearer };
    }

    // NO AUTHENTICATION
    public async post_signup(
        email: string | undefined,
        name: string | undefined
    ): Promise<void> {
        //Check if email field is missing
        if(!email) {
            throw new MissingField("email");
        }

        // Check if customer already exists
        let customer = await Customer.fromEmail(email);

        // If customer does not exist, create it
        if(!customer) {
            //Check if name field is missing
            if(!name) {
                throw new MissingField("name");
            }

            // Create new customer
            customer = new Customer(email, "", name, "", "", "");

            // Commit changes in database
            await customer.commit();

            // Send welcome email
            await RegistryServer.getInstance().sendWelcomeEmail(email, "en");
        }

        // Generate reset token
        const resetToken = utils.generate_token();

        // Map reset token with customer
        this.resetTokens[resetToken] = customer.id;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.resetTokens[resetToken];
            console.log(`Reset token ${resetToken} deleted`);
        }, Server.RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS);

        // Send reset password email
        await RegistryServer.getInstance().sendResetPasswordEmail(email, resetToken);
    }

    // RESET TOKEN AUTHENTICATION
    public async post_reset(
        resetToken: any,
        password: string | undefined
    ): Promise<void> {
        // Check if resetToken field is missing
        if(!resetToken) {
            throw new MissingField("resetToken");
        }

        // Check if password field is missing
        if(!password) {
            throw new MissingField("password");
        }

        // Get customer from reset token
        const customer = await this.getCustomerFromResetToken(resetToken);

        // Set new password
        customer.password = utils.hash_string(password);

        // Commit changes in database
        await customer.commit();

        // Delete reset token
        delete this.resetTokens[resetToken];
    }

    // ---------- CUSTOMER ENDPOINTS ----------

    // BEARER AUTHENTICATION
    public async get_customer(bearer: string | undefined): Promise<{
        id: string,
        email: string,
        name: string,
        callback: string,
        remoteId: string,
        theme: string,
        subscribedCollectors: string[],
        isSubscribedToAll: boolean,
        displaySketchCollectors: boolean,
        maxDelayBetweenCollect: number
    }> {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        return {
            id: customer.id,
            email: customer.email,
            name: customer.name,
            callback: customer.callback,
            remoteId: customer.remoteId,
            theme: customer.theme,
            subscribedCollectors: customer.subscribedCollectors,
            isSubscribedToAll: customer.isSubscribedToAll,
            displaySketchCollectors: customer.displaySketchCollectors,
            maxDelayBetweenCollect: customer.maxDelayBetweenCollect
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
        displaySketchCollectors: boolean | undefined
    ): Promise<void> {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        //Check if name field is present
        if(name) {
            customer.name = name;
        }

        //Check if callback field is present
        if(callback) {
            customer.callback = callback;
        }

        //Check if remoteId field is present
        if(remoteId) {
            customer.remoteId = remoteId;
        }

        //Check if theme field is present
        if(theme) {
            customer.setTheme(theme);
        }

        if (subscribedCollectors) {
            customer.setSubscribedCollectors(subscribedCollectors);
        }

        if (typeof isSubscribedToAll === 'boolean') {
            customer.isSubscribedToAll = isSubscribedToAll;
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

        // Generate new bearer token
        const newBearer = utils.generate_bearer();

        // Compute hashed bearer
        const hashedBearer = utils.hash_string(newBearer);

        // Update customer bearer
        customer.bearer = hashedBearer;

        // Commit changes in database
        await customer.commit();

        // Return new bearer token
        return { bearer: newBearer };
    }


    // ---------- USER ENDPOINTS ----------

    // BEARER AUTHENTICATION
    public async get_users(bearer: string | undefined): Promise<{
        id: string,
        customer_id: string,
        remote_id: string,
        locale: string
    }[]> {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        // Get users from customer
        const users = await customer.getUsers();

        // Return users
        return users.map((user) => {
            return {
                id: user.id,
                customer_id: user.customer_id,
                remote_id: user.remote_id,
                locale: user.locale
            };
        });
    }

    // BEARER AUTHENTICATION
    public async post_user(
        bearer: string | undefined,
        remote_id: string | undefined,
        locale: string | undefined,
        email: string | undefined
    ): Promise<{
        id: string,
        customer_id: string,
        remote_id: string,
        locale: string,
        token: string
    }> {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        //Check if remote_id field is missing
        if(!remote_id) {
            throw new MissingField("remote_id");
        }

        //Check if locale field is missing
        if(!locale) {
            throw new MissingField("locale");
        }

        //Check if locale is supported
        if(locale && !I18n.LOCALES.includes(locale)) {
            throw new StatusError(`Locale "${locale}" not supported. Available locales are: ${I18n.LOCALES.join(", ")}.`, 400);
        }

        // Get user from remote_id
        let user = await customer.getUserFromRemoteId(remote_id);

        // If user does not exist, create it
        if(!user) {
            let termsConditions;
            // If terms and conditions are required, send email
            if (!Server.DISABLE_VERIFICATION_CODE) {
                //Check if email field is missing
                if(!email) {
                    throw new MissingField("email");
                }
                // Send terms and conditions email
                termsConditions = await RegistryServer.getInstance().sendVerificationCodeEmail(email, locale);
            } else {
                // If terms and conditions are not required, set validTimestamp to now
                termsConditions = {
                    verificationCode: null,
                    sentTimestamp: Date.now(),
                    validTimestamp: Date.now()
                };
            }
            // Create user
            user = new User(customer.id, remote_id, null, locale, termsConditions);
        }
        else {
            // Update user locale
            user.locale = locale;

            // Check if user has accepted terms and conditions
            if (!user.termsConditions.validTimestamp) {
                // If terms and conditions are required, send email
                if (!Server.DISABLE_VERIFICATION_CODE) {
                    //Check if email field is missing
                    if(!email) {
                        throw new MissingField("email");
                    }
                    // Send terms and conditions email
                    const termsConditions = await RegistryServer.getInstance().sendVerificationCodeEmail(email, locale);
                    // Update terms and conditions
                    user.termsConditions = termsConditions;
                }
                else {
                    // This case can happend the DISABLE_VERIFICATION_CODE environment variable is changed after the user has been created.
                    // If terms and conditions are not required, set validTimestamp to now
                    user.termsConditions.validTimestamp = Date.now();
                }
            }
        }

        // Commit changes in database
        await user.commit();

        // Generate oauth token
        const uiToken = generate_token();

        // Map token with user
        this.uiTokens[uiToken] = user;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.uiTokens[uiToken];
            console.log(`Token ${uiToken} deleted`);
        }, Server.OAUTH_TOKEN_VALIDITY_DURATION_MS);

        return {
            id: user.id,
            customer_id: user.customer_id,
            remote_id: user.remote_id,
            locale: user.locale,
            token: uiToken,
        }
    }

    // BEARER AUTHENTICATION
    public async delete_user(bearer: string | undefined, user_id: string) {
        // Get customer from bearer
        const customer = await this.getCustomerFromBearer(bearer);

        //Check if user_id field is missing
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
        for (let uiToken in this.uiTokens) {
            if (this.uiTokens[uiToken].id === user.id) {
                delete this.uiTokens[uiToken];
                console.log(`Token ${uiToken} deleted`);
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
        last_collect_timestamp: number,
        next_collect_timestamp: number,
        invoices: any[],
        state: State,
        collector: Config
    }[]> {
        // Get user from bearer or token
         const user = await this.getUserFromBearerOrToken(bearer, user_id, token);

        // Check if terms and conditions have been accepted
        await user.checkTermsConditions();

        // Get credentials from user
        let credentials = await user.getCredentials();

        // Build response 
        return credentials.map((credential) => {
            // Get collector from id
            const collector = CollectorLoader.get(credential.collector_id);

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

            return {
                id: credential.id,
                user_id: credential.user_id,
                note: credential.note,
                create_timestamp: credential.create_timestamp,
                last_collect_timestamp: credential.last_collect_timestamp,
                next_collect_timestamp: credential.next_collect_timestamp,
                state: credential.state,
                invoices: credential.invoices,
                collector: collector.config,
            }
        });
    }

    // TOKEN AUTHENTICATION
    public async post_credential(
        bearer: string | undefined,
        user_id: string | undefined,
        token: any,
        collector_id: string | undefined,
        params: any | undefined,
        ip: string | string[] | undefined
    ): Promise<{
        id: string,
        user_id: string,
        note: string,
        create_timestamp: number,
        last_collect_timestamp: number,
        next_collect_timestamp: number,
        invoices: any[],
        state: State,
        collector: Config
    }> {
        // Get user from bearer or token
         const user = await this.getUserFromBearerOrToken(bearer, user_id, token);

         //Check if id field is missing
         if(!collector_id) {
             throw new MissingField("collector");
         }
 
         //Check if params field is missing
         if(!params) {
             throw new MissingField("params");
         }

        // Check if terms and conditions have been accepted
        await user.checkTermsConditions();

        // Get collector from id
        const collector = CollectorLoader.get(collector_id);

        // Check if collector is sketch
        if(collector.config.type == CollectorType.SKETCH) {
            throw new StatusError(`Collector "${collector.config.id}" is a sketch collector and cannot be used to create credentials.`, 400);
        }

        // Get customer from user
        const customer = await user.getCustomer();

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

        if (user.location === null) {
            console.log(`User location not found, trying to locate it`);

            // Update user with location
            user.location = await ProxyFactory.getProxy().locate(ip);

            if (user.location != null) {
                console.log('User location found');
                // Commit user
                await user.commit();
            }
            else {
                console.log('Could not find user location');
            }
        }

        // Add credential to Secure Storage
        const secret: Secret = {
            params,
            cookies: null,
        }
        const secret_manager_id = await this.secret_manager.addSecret(`${user.customer_id}_${user.id}_${collector.config.id}`, secret);

        // Create credential
        let credential = new IcCredential(
            user.id,
            collector.config.id,
            note,
            secret_manager_id
        );

        // Compute next collect
        credential.computeNextCollect(customer.maxDelayBetweenCollect);

        // Create credential in database
        await credential.commit();

        // Start collect
        const collect = new Collect(credential.id)

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
        });

        // Return credential
        return {
            id: credential.id,
            user_id: credential.user_id,
            note: credential.note,
            create_timestamp: credential.create_timestamp,
            last_collect_timestamp: credential.last_collect_timestamp,
            next_collect_timestamp: credential.next_collect_timestamp,
            invoices: credential.invoices,
            state: credential.state,
            collector: collector.config,
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
        last_collect_timestamp: number,
        next_collect_timestamp: number,
        invoices: any[],
        state: State,
        collector: Config
    }> {
        // Get user from bearer or token
        const user = await this.getUserFromBearerOrToken(bearer, user_id, token);

        // Check if terms and conditions have been accepted
        await user.checkTermsConditions();

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
        const collector = CollectorLoader.get(credential.collector_id);

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

        // Return credential
        return {
            id: credential.id,
            user_id: credential.user_id,
            note: credential.note,
            create_timestamp: credential.create_timestamp,
            last_collect_timestamp: credential.last_collect_timestamp,
            next_collect_timestamp: credential.next_collect_timestamp,
            invoices: credential.invoices,
            state: credential.state,
            collector: collector.config,
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

        // Check if terms and conditions have been accepted
        await user.checkTermsConditions();

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

        // Delete credential from Secure Storage
        await this.secret_manager.deleteSecret(credential.secret_manager_id);

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

        // Check if terms and conditions have been accepted
        await user.checkTermsConditions();

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
    ): Promise<void> {
        // Get user from bearer or token
        const user = await this.getUserFromBearerOrToken(bearer, user_id, token);

        // Check if terms and conditions have been accepted
        await user.checkTermsConditions();

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

        // Start collect
        const collect = new Collect(credential.id)

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
        });
    }

    // ---------- COLLECTOR ENDPOINTS ----------

    // BEARER AUTHENTICATION
    public async get_collectors(
        bearer: string | undefined,
        token: any,
        locale: any
    ): Promise<Config[]> {
        // Check if token is missing or incorrect
        let subscribedCollectors: string[] | null = null;
        let isSubscribedToAll: boolean = true;
        let displaySketchCollectors: boolean = false;
        if(token || bearer) {
            // Get customer from bearer or token
            const customer = await this.getCustomerFromBearerOrToken(bearer, token);
            subscribedCollectors = customer.subscribedCollectors;
            isSubscribedToAll = customer.isSubscribedToAll;
            displaySketchCollectors = customer.displaySketchCollectors;
        }

        //Check if locale field is missing
        if(!locale || typeof locale !== 'string') {
            //Set default locale
            locale = I18n.DEFAULT_LOCALE;
        }

        //Check if locale is supported
        if(locale && !I18n.LOCALES.includes(locale)) {
            throw new StatusError(`Locale "${locale}" not supported. Available locales are: ${I18n.LOCALES.join(", ")}.`, 400);
        }

        return CollectorLoader.getAll()
            .filter((collector: AbstractCollector) => isSubscribedToAll || (subscribedCollectors === null || subscribedCollectors.includes(collector.config.id)))
            .filter((collector: AbstractCollector) => collector.config.type !== CollectorType.SKETCH || displaySketchCollectors)
            .map((collector: AbstractCollector): Config => {
                const name: string = I18n.get(collector.config.name, locale);
                const description: string = I18n.get(collector.config.description, locale);
                const instructions: string = I18n.get(collector.config.instructions, locale);
                const params = Object.keys(collector.config.params).reduce((acc, key) => {
                    acc[key] = {
                        ...collector.config.params[key],
                        name: I18n.get(collector.config.params[key].name, locale),
                        placeholder: I18n.get(collector.config.params[key].placeholder, locale)
                    };
                    return acc;
                }, {});
                return {
                    ...collector.config,
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
        if(!uiToken || !this.uiTokens.hasOwnProperty(uiToken) || typeof uiToken !== 'string') {
            throw new OauthError();
        }
        return this.uiTokens[uiToken];
    }

    private async getCustomerFromResetToken(resetToken: string): Promise<Customer> {
        // Check if reset token is missing or incorrect
        if(!resetToken || !this.resetTokens.hasOwnProperty(resetToken) || typeof resetToken !== 'string') {
            throw new StatusError("Invalid reset token", 401);
        }

        // Get customer from id
        const customer = await DatabaseFactory.getDatabase().getCustomer(this.resetTokens[resetToken]);

        // Check if customer exists
        if(!customer) {
            throw new StatusError(`Customer with id "${this.resetTokens[resetToken]}" not found.`, 400);
        }

        return customer;
    }

    private async getCustomerFromBearerOrToken(bearer: string | undefined, token: any): Promise<Customer> {
        if (token) {
            // Get user from token
            const user = this.getUserFromUiToken(token);
            // Get customer from user
            return await user.getCustomer();
        }
        else if (bearer) {
            // Get customer from bearer
            return await this.getCustomerFromBearer(bearer);
        }
        else {
            throw new StatusError(`Provide a Bearer token or a "token" field in the query.`, 400);
        }
    }

    private async getUserFromBearerOrToken(bearer: string | undefined, user_id: string | undefined, token: any): Promise<User> {
        if (token) {
            // Get user from token
            return this.getUserFromUiToken(token);
        }
        else if (bearer) {
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
        // Check if uiBearers contains the hashed bearer
        if (this.uiBearers.hasOwnProperty(hashed_bearer)) {
            // Get customer id from uiBearers
            const customer_id = this.uiBearers[hashed_bearer];

            // Get customer from id
            customer = await DatabaseFactory.getDatabase().getCustomer(customer_id);
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
}
