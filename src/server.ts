import path from 'path';
import { DatabaseFactory } from './database/databaseFactory';
import { AbstractSecretManager, Secret } from './secret_manager/abstractSecretManager';
import { SecretManagerFactory } from './secret_manager/secretManagerFactory';
import { AuthenticationBearerError, OauthError, MissingField, MissingParams, StatusError } from './error';
import { generate_token } from './utils';
import { CollectorLoader } from './collectors/collectorLoader';
import { User } from './model/user';
import { Customer } from './model/customer';
import { IcCredential, State } from './model/credential';
import { CollectTask } from './collect/collectTask';
import { I18n } from 'i18n';
import { ProxyFactory } from './proxy/proxyFactory';
import { AbstractCollector, Config } from './collectors/abstractCollector';
import { RegistryServer } from './registryServer';
import * as utils from './utils';
import { CallbackHandler } from './callback/callback';
import { CollectPool } from './collect/collectPool';
import { Collect } from './collect/collect';

export class Server {

    static OAUTH_TOKEN_VALIDITY_DURATION_MS = Number(utils.getEnvVar("OAUTH_TOKEN_VALIDITY_DURATION_MS"));
    static LOCALES = ['en', 'fr'];
    static DEFAULT_LOCALE = 'en';
    static i18n = new I18n({
        locales: Server.LOCALES,
        directory: path.join(__dirname, '..', 'locales'),
        defaultLocale: Server.DEFAULT_LOCALE,
        retryInDefaultLocale: true,
        updateFiles: false,
        cookie: 'lang'
    });

    tokens: object;
    secret_manager: AbstractSecretManager;
    collect_task: CollectTask;

    constructor() {
        this.tokens = {}

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

    // ---------- BEARER TOKEN NEEDED ----------

    async get_customer(bearer: string | undefined): Promise<any> {
        // Get customer from bearer
        const customer = await Customer.fromBearer(bearer);

        // Check if customer exists
        if(!customer) {
            throw new AuthenticationBearerError();
        }

        return { name: customer.name, callback: customer.callback }
    }

    async post_authorize(bearer: string | undefined, remote_id: string | undefined, locale: string | undefined, email: string | undefined): Promise<{token: string}> {
        // Get customer from bearer
        const customer = await Customer.fromBearer(bearer);

        // Check if customer exists
        if(!customer) {
            throw new AuthenticationBearerError();
        }

        //Check if remote_id field is missing
        if(!remote_id) {
            throw new MissingField("remote_id");
        }

        //Check if locale field is missing
        if(!locale) {
            throw new MissingField("locale");
        }

        //Check if email field is missing
        if(!email) {
            throw new MissingField("email");
        }

        //Check if locale is supported
        if(locale && !Server.LOCALES.includes(locale)) {
            throw new StatusError(`Locale "${locale}" not supported. Available locales are: ${Server.LOCALES.join(", ")}.`, 400);
        }

        // Get user from remote_id
        let user = await customer.getUserFromRemoteId(remote_id);

        // If user does not exist, create it
        if(!user) {
            // Send terms and conditions email
            const termsConditions = await RegistryServer.getInstance().sendTermsConditionsEmail(customer.bearer, email, locale);
            // Create user
            user = new User(customer.id, remote_id, null, locale, termsConditions);
        }
        else {
            // Update user locale
            user.locale = locale;

            // Check if user has accepted terms and conditions
            if (!user.termsConditions.validTimestamp) {
                // Send terms and conditions email
                const termsConditions = await RegistryServer.getInstance().sendTermsConditionsEmail(customer.bearer, email, locale);
                // Update terms and conditions
                user.termsConditions = termsConditions;
            }
        }

        // Commit changes in database
        user.commit();

        // Generate oauth token
        const token = generate_token();

        // Map token with user
        this.tokens[token] = user;

        // Schedule token delete after 1 hour
        setTimeout(() => {
            delete this.tokens[token];
            console.log(`Token ${token} deleted`);
        }, Server.OAUTH_TOKEN_VALIDITY_DURATION_MS);

        return { token }
    }

    async delete_user(bearer: string | undefined, remote_id: string | undefined) {
        // Get customer from bearer
        const customer = await Customer.fromBearer(bearer);

        // Check if customer exists
        if(!customer) {
            throw new AuthenticationBearerError();
        }

        //Check if remote_id field is missing
        if(!remote_id) {
            throw new MissingField("remote_id");
        }

        // Get user from remote_id
        const user = await customer.getUserFromRemoteId(remote_id);

        // Check if user exists
        if (!user) {
            throw new StatusError(`User with remote_id "${remote_id}" not found.`, 400);
        }

        // Delete user and all its credentials
        await user.delete();

        // Delete user from token mapping
        for (let token in this.tokens) {
            if (this.tokens[token].id === user.id) {
                delete this.tokens[token];
                console.log(`Token ${token} deleted`);
            }
        }
    }

    async post_collect(bearer: string | undefined, id: string | undefined) {
        // Get customer from bearer
        const customer = await Customer.fromBearer(bearer);

        // Check if customer exists
        if(!customer) {
            throw new AuthenticationBearerError();
        }

        // Check if id field is missing
        if(!id) {
            throw new MissingField("id");
        }

        // Get credential from id
        const credential = await IcCredential.fromId(id);

        // Check if credential exists
        if (!credential) {
            throw new StatusError(`Credential with id "${id}" not found.`, 400);
        }

        // Get user from credential
        const user = await credential.getUser();

        // Check if user exists
        if (!user) {
            throw new StatusError(`Could not find user for credential with id "${credential.id}".`, 401);
        }

        // Check if user belongs to customer
        if (user.customer_id != customer.id) {
            throw new StatusError(`User with id "${user.id}" does not belong to customer with id "${customer.id}".`, 403);
        }

        // Schedule next collect now
        credential.next_collect_timestamp = Date.now()

        // Update credential in database
        await credential.commit();
    }

    async get_test_callback(bearer: string | undefined): Promise<void> {
        // Get customer from bearer
        const customer = await Customer.fromBearer(bearer);

        // Check if customer exists
        if(!customer) {
            throw new AuthenticationBearerError();
        }

        // Get users from customer
        const users = await customer.getUsers();

        // Get fake invoice datas
        let {collector_id, remote_id, invoice} = utils.createFakeInvoice();

        // Get remote_id from first user if exists
        if(users.length > 0) {
            remote_id = users[0].remote_id;
        }

        // Send invoice to callback
        const callback = new CallbackHandler(customer);
        await callback.sendInvoice(collector_id, remote_id, invoice);
    }

    // ---------- OAUTH TOKEN NEEDED ----------

    get_token_mapping(token: any): User {
        // Check if token is missing or incorrect
        if(!token || !this.tokens.hasOwnProperty(token) || typeof token !== 'string') {
            throw new OauthError();
        }
        return this.tokens[token];
    }

    async get_user(token: any, verificationCode: any): Promise<{locale: string}> {
        // Get user from token
        const user = this.get_token_mapping(token);

        // Check if verificationCode is valid
        if (verificationCode && user.termsConditions.verificationCode === verificationCode) {
            // Validate terms and conditions by setting validTimestamp to now
            user.termsConditions.validTimestamp = Date.now();
            // Commit changes
            await user.commit();
        }

        // Check if terms and conditions have been accepted
        user.checkTermsConditions();

        return { locale: user.locale }
    }

    async get_credentials(token: any): Promise<{
        id: string,
        note: string,
        create_timestamp: number,
        last_collect_timestamp: number,
        next_collect_timestamp: number,
        state: State,
        collector: Config
    }[]> {
        // Get user from token
         const user = this.get_token_mapping(token);

         // Check if terms and conditions have been accepted
        user.checkTermsConditions();

        // Get credentials from user
        let credentials = await user.getCredentials();

        // Build response 
        return credentials.map((credential) => {
            const collector = this.get_collector(credential.collector_id);
            return {
                id: credential.id,
                note: credential.note,
                create_timestamp: credential.create_timestamp,
                last_collect_timestamp: credential.last_collect_timestamp,
                next_collect_timestamp: credential.next_collect_timestamp,
                state: credential.state,
                collector: collector.config,
            }
        });
    }

    async post_credential(token: any, collector_id: string | undefined, params: any | undefined, ip: string | string[] | undefined): Promise<{id: string}> {
        // Get user from token
         const user = this.get_token_mapping(token);

         //Check if id field is missing
         if(!collector_id) {
             throw new MissingField("collector");
         }
 
         //Check if params field is missing
         if(!params) {
             throw new MissingField("params");
         }

         // Check if terms and conditions have been accepted
        user.checkTermsConditions();

        // Get collector from id
        const collector = this.get_collector(collector_id);

        // Get credential note
        let note = params.note;
        delete params.note;

        // Check if all mandatory params are present
        const missing_params = Object.keys(collector.config.params).filter((param) => collector.config.params[param].mandatory && !params.hasOwnProperty(param));
        if(missing_params.length > 0) {
            throw new MissingParams(missing_params);
        }

        // If no note, set it to collector description
        if(!note) {
            note = Server.i18n.__({ phrase: collector.config.description, locale: user.locale });
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
        const secret_manager_id = await this.secret_manager.addSecret(`${user.customer_id}_${user.id}_${collector_id}`, secret);

        // Create credential
        let credential = new IcCredential(
            user.id,
            collector_id,
            note,
            secret_manager_id
        );

        // Compute next collect
        credential.computeNextCollect();

        // Create credential in database
        await credential.commit();

        // Start collect
        const collect = new Collect(credential.id)
        // Do not wait for promise to resolve
        collect.start();

        // Return credential_id
        return {id: credential.id};
    }

    async post_credential_2fa(token: any, id: string, code: string | undefined): Promise<void> {
        // Get user from token
         const user = this.get_token_mapping(token);

         // Check code id field is missing
         if(!code) {
            throw new MissingField("code");
        }

         // Check if terms and conditions have been accepted
        user.checkTermsConditions();

        // Get collect from id
        const collect = await CollectPool.getInstance().get(id);

        // Check if collect exists
        if (!collect) {
            throw new StatusError(`No collect in progress for credential "${id}".`, 400);
        }
        
        // Resolve collect promise and pass the code to the collector
        collect.twofa_promise.setCode(code);

        // Set progress step to 2FA proceeding
        collect.state?.update(State._3_2FA_PROCEEDING);
    }

    async get_credential(token: any, id: string): Promise<{
        id: string,
        note: string,
        create_timestamp: number,
        last_collect_timestamp: number,
        next_collect_timestamp: number,
        state: State,
        collector: Config
    }> {
        // Get user from token
         const user = this.get_token_mapping(token);

         // Check if terms and conditions have been accepted
        user.checkTermsConditions();

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

        // Get current collect
        const collect = CollectPool.getInstance().get(credential.id);

        // If collect in progress
        if (collect && collect.state) {
            // Replace state with collect state
            credential.state = collect.state;
        }

        // Get collector from id
        const collector = this.get_collector(credential.collector_id);

        // Return status
        return {
            id: credential.id,
            note: credential.note,
            create_timestamp: credential.create_timestamp,
            last_collect_timestamp: credential.last_collect_timestamp,
            next_collect_timestamp: credential.next_collect_timestamp,
            state: credential.state,
            collector: collector.config,
        };
    }

    async delete_credential(token: any, id: string): Promise<void> {
        // Get user from token
         const user = this.get_token_mapping(token);

         // Check if terms and conditions have been accepted
        user.checkTermsConditions();

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

    public async post_feedback(token: any, feedback: string | undefined, email: string | undefined): Promise<void> {
        //Check if feedback field is missing
        if(!feedback) {
            throw new MissingField("feedback");
        }

        // Get user from token
        const user = this.get_token_mapping(token);

        // Get customer from user
        const customer = await user.getCustomer();

        // Check if customer exists
        if(!customer) {
            throw new StatusError(`Could not find customer for user with id "${user.id}".`, 400);
        }

        // Send feedback to registry server
        await RegistryServer.getInstance().feedback(customer.bearer, feedback, email);
    }

    // ---------- NO OAUTH TOKEN NEEDED ----------

    public get_collectors(locale: any): Config[] {
        //Check if locale field is missing
        if(!locale || typeof locale !== 'string') {
            //Set default locale
            locale = Server.DEFAULT_LOCALE;
        }

        //Check if locale is supported
        if(locale && !Server.LOCALES.includes(locale)) {
            throw new StatusError(`Locale "${locale}" not supported. Available locales are: ${Server.LOCALES.join(", ")}.`, 400);
        }

        console.log(`Listing all collectors`);
        return CollectorLoader.getAll().map((collector): Config => {
            const name: string = Server.i18n.__({ phrase: collector.config.name, locale });
            const description: string = Server.i18n.__({ phrase: collector.config.description, locale });
            const instructions: string = Server.i18n.__({ phrase: collector.config.instructions, locale });
            const params = Object.keys(collector.config.params).reduce((acc, key) => {
                acc[key] = {
                    ...collector.config.params[key],
                    name: Server.i18n.__({ phrase: collector.config.params[key].name, locale }),
                    placeholder: Server.i18n.__({ phrase: collector.config.params[key].placeholder, locale })
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

    private get_collector(id: string): AbstractCollector {
        const collector = CollectorLoader.get(id);
        if(collector == null) {
            throw new StatusError(`No collector with id "${id}" found.`, 400);
        }
        return collector;
    }
}
