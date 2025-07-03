import { DatabaseFactory } from './database/databaseFactory';
import { AbstractSecretManager, Secret } from './secret_manager/abstractSecretManager';
import { SecretManagerFactory } from './secret_manager/secretManagerFactory';
import { OauthError, MissingField, MissingParams, StatusError } from './error';
import { generate_token } from './utils';
import { CollectorLoader } from './collectors/collectorLoader';
import { User } from './model/user';
import { Customer } from './model/customer';
import { IcCredential, State } from './model/credential';
import { CollectTask } from './collect/collectTask';
import { ProxyFactory } from './proxy/proxyFactory';
import { AbstractCollector, Config } from './collectors/abstractCollector';
import { RegistryServer } from './registryServer';
import * as utils from './utils';
import { CallbackHandler } from './callback/callback';
import { CollectPool } from './collect/collectPool';
import { Collect } from './collect/collect';
import { I18n } from './i18n';

export class Server {

    static OAUTH_TOKEN_VALIDITY_DURATION_MS = Number(utils.getEnvVar("OAUTH_TOKEN_VALIDITY_DURATION_MS"));
    static DISABLE_VERIFICATION_CODE: boolean = utils.getEnvVar("DISABLE_VERIFICATION_CODE", "false").toLowerCase() === "true";

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
    // ---------- GENERAL ENDPOINTS ----------

    // BEARER AUTHENTICATION
    public async post_authorize(bearer: string | undefined, remote_id: string | undefined, locale: string | undefined, email: string | undefined): Promise<{token: string}> {
        // Get customer from bearer
        const customer = await Customer.fromBearer(bearer);

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
                termsConditions = await RegistryServer.getInstance().sendTermsConditionsEmail(customer.bearer, email, locale);
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
                    const termsConditions = await RegistryServer.getInstance().sendTermsConditionsEmail(customer.bearer, email, locale);
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
        const token = generate_token();

        // Map token with user
        this.tokens[token] = user;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.tokens[token];
            console.log(`Token ${token} deleted`);
        }, Server.OAUTH_TOKEN_VALIDITY_DURATION_MS);

        return { token }
    }

    // TOKEN AUTHENTICATION
    public async get_ui(token: any, verificationCode: any): Promise<{locale: string, theme: string}> {
        // Get user from token
        const user = this.get_token_mapping(token);

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
    public async get_test_callback(bearer: string | undefined): Promise<void> {
        // Get customer from bearer
        const customer = await Customer.fromBearer(bearer);

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

    // TOKEN AUTHENTICATION
    public async post_feedback(token: any, feedback: string | undefined, email: string | undefined): Promise<void> {
        //Check if feedback field is missing
        if(!feedback) {
            throw new MissingField("feedback");
        }

        // Get user from token
        const user = this.get_token_mapping(token);

        // Get customer from user
        const customer = await user.getCustomer();

        // Send feedback to registry server
        await RegistryServer.getInstance().feedback(customer.bearer, feedback, email);
    }

    // ---------- CUSTOMER ENDPOINTS ----------

    // BEARER AUTHENTICATION
    public async get_customer(bearer: string | undefined): Promise<any> {
        // Get customer from bearer
        const customer = await Customer.fromBearer(bearer);

        return { name: customer.name, callback: customer.callback, theme: customer.theme };
    }

    // BEARER AUTHENTICATION
    public async post_customer(bearer: string | undefined, name: string | undefined, callback: string | undefined, theme: string | undefined): Promise<any> {
        // Get customer from bearer
        const customer = await Customer.fromBearer(bearer);

        //Check if name field is present
        if(name) {
            customer.name = name;
        }

        //Check if callback field is present
        if(callback) {
            customer.callback = callback;
        }

        //Check if theme field is present
        if(theme) {
            customer.setTheme(theme);
        }

        // Commit changes in database
        await customer.commit();

        return { name: customer.name, callback: customer.callback, theme: customer.theme };
    }

    // ---------- USER ENDPOINTS ----------

    public async get_users(bearer: string | undefined): Promise<{id: string, remote_id: string, locale: string}[]> {
        // Get customer from bearer
        const customer = await Customer.fromBearer(bearer);

        // Get users from customer
        const users = await customer.getUsers();

        // Return users
        return users.map((user) => {
            return {
                id: user.id,
                remote_id: user.remote_id,
                locale: user.locale
            };
        });
    }

    // BEARER AUTHENTICATION
    public async delete_user(bearer: string | undefined, remote_id: string | undefined) {
        // Get customer from bearer
        const customer = await Customer.fromBearer(bearer);

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

    // ---------- CREDENTIAL ENDPOINTS ----------

    // TOKEN AUTHENTICATION
    public async get_credentials(token: any): Promise<{
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
        await user.checkTermsConditions();

        // Get credentials from user
        let credentials = await user.getCredentials();

        // Build response 
        return credentials.map((credential) => {
            const collector = CollectorLoader.get(credential.collector_id);

            // Get current collect
            const collect = CollectPool.getInstance().get(credential.id);
            
            // If collect in progress
            if (collect && collect.state) {
                // Replace state with collect state
                credential.state = collect.state;
            }

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

    // TOKEN AUTHENTICATION
    public async post_credential(token: any, collector_id: string | undefined, params: any | undefined, ip: string | string[] | undefined): Promise<{id: string}> {
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
        await user.checkTermsConditions();

        // Get collector from id
        const collector = CollectorLoader.get(collector_id);

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
            note = I18n.get(collector.config.description, user.locale);
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

        // Return credential_id
        return {id: credential.id};
    }

    // TOKEN AUTHENTICATION
    public async get_credential(token: any, id: string): Promise<{
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

        // Get current collect
        const collect = CollectPool.getInstance().get(credential.id);

        // If collect in progress
        if (collect && collect.state) {
            // Replace state with collect state
            credential.state = collect.state;
        }

        // Get collector from id
        const collector = CollectorLoader.get(credential.collector_id);

        // Translate the state title
        credential.state.title = I18n.get(credential.state.title, user.locale);

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

    // TOKEN AUTHENTICATION
    public async delete_credential(token: any, id: string): Promise<void> {
        // Get user from token
         const user = this.get_token_mapping(token);

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
    public async post_credential_2fa(token: any, id: string, code: string | undefined): Promise<void> {
        // Get user from token
         const user = this.get_token_mapping(token);

         // Check code id field is missing
         if(!code) {
            throw new MissingField("code");
        }

        // Check if terms and conditions have been accepted
        await user.checkTermsConditions();

        // Get collect from id
        const collect = await CollectPool.getInstance().get(id);

        // Check if collect exists
        if (!collect) {
            throw new StatusError(`No collect in progress for credential "${id}".`, 400);
        }
        
        // Resolve collect promise and pass the code to the collector
        collect.twofa_promise.setCode(code);

        // Set progress step to 2FA proceeding
        collect.state?.update(State._4_2FA_PROCEEDING);
    }

    // BEARER AUTHENTICATION
    public async post_credential_collect(token: any, id: string): Promise<void> {
        // Get user from token
         const user = this.get_token_mapping(token);

        // Check if terms and conditions have been accepted
        await user.checkTermsConditions();

        // Get credential from id
        const credential = await user.getCredential(id)

        // Check if credential exists
        if (!credential) {
            throw new StatusError(`Credential with id "${id}" not found.`, 400);
        }

        // Check if credential belongs to user
        if (credential.user_id != user.id) {
            throw new StatusError(`Credential with id "${id}" does not belong to user.`, 403);
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

    // NO AUTHENTICATION
    public get_collectors(locale: any): Config[] {
        //Check if locale field is missing
        if(!locale || typeof locale !== 'string') {
            //Set default locale
            locale = I18n.DEFAULT_LOCALE;
        }

        //Check if locale is supported
        if(locale && !I18n.LOCALES.includes(locale)) {
            throw new StatusError(`Locale "${locale}" not supported. Available locales are: ${I18n.LOCALES.join(", ")}.`, 400);
        }

        return CollectorLoader.getAll().map((collector: AbstractCollector): Config => {
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

    private get_token_mapping(token: any): User {
        // Check if token is missing or incorrect
        if(!token || !this.tokens.hasOwnProperty(token) || typeof token !== 'string') {
            throw new OauthError();
        }
        return this.tokens[token];
    }
}
