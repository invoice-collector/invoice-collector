import * as utils from './utils';
import { AuthenticationBearerError, MissingField, OauthError, StatusError } from './error';
import { User } from './model/user';
import { Credential } from './model/credential';
import { Customer } from './model/customer';

// Maps ephemeral tokens/bearers to Customers, Users or Credentials
export class TokenManager {

    static UI_BEARER_VALIDITY_DURATION_MS = Number(utils.getEnvVar('UI_BEARER_VALIDITY_DURATION_MS', '3600000'));                       // 1 hour in milliseconds
    static RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS = Number(utils.getEnvVar('RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS', '3600000')); // 1 hour in milliseconds
    static OAUTH_TOKEN_VALIDITY_DURATION_MS = Number(utils.getEnvVar('OAUTH_TOKEN_VALIDITY_DURATION_MS', '1800000'));                   // 30 minutes in milliseconds

    private customerUiBearers: { [key: string]: string };
    private customerResetTokens: { [key: string]: string };
    private userUiBearers: { [key: string]: string };
    private userResetTokens: { [key: string]: string };
    private userUiTokens: { [key: string]: string };
    private credentialOauth2States: { [key: string]: string };

    /**
     * Creates an instance of TokenManager with empty token/bearer maps.
     */
    constructor() {
        this.customerUiBearers = {};
        this.customerResetTokens = {};
        this.userUiBearers = {};
        this.userResetTokens = {};
        this.userUiTokens = {};
        this.credentialOauth2States = {};
    }

    // ---------- CUSTOMER UI BEARER ----------

    /**
     * Generates a session bearer for a customer and schedules its expiration.
     * @param customerId The id of the customer to map the bearer to.
     * @returns The generated (unhashed) bearer token.
     */
    public createCustomerUiBearer(customerId: string): string {
        // Generate session bearer token
        const bearer = utils.generate_bearer(utils.BearerType.CUSTOMER_SESSION);

        // Compute hashed bearer
        const hashedBearer = utils.hash_string(bearer);

        // Map bearer token with customer
        this.customerUiBearers[hashedBearer] = customerId;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.customerUiBearers[hashedBearer];
        }, TokenManager.UI_BEARER_VALIDITY_DURATION_MS);

        return bearer;
    }

    /**
     * Retrieves the customer id mapped to a hashed UI bearer.
     * @param hashedBearer The hashed bearer to look up.
     * @returns The mapped customer id, or undefined if not found.
     */
    public getCustomerIdFromUiBearer(hashedBearer: string): string | undefined {
        return this.customerUiBearers[hashedBearer];
    }

    // ---------- CUSTOMER RESET TOKEN ----------

    /**
     * Generates a password reset token for a customer and schedules its expiration.
     * @param customerId The id of the customer to map the reset token to.
     * @returns The generated reset token.
     */
    public createCustomerResetToken(customerId: string): string {
        // Generate reset token
        const resetToken = utils.generate_token();

        // Map reset token with customer
        this.customerResetTokens[resetToken] = customerId;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.customerResetTokens[resetToken];
        }, TokenManager.RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS);

        return resetToken;
    }

    /**
     * Retrieves the customer id mapped to a reset token.
     * @param resetToken The reset token to look up.
     * @returns The mapped customer id, or undefined if not found.
     */
    public getCustomerIdFromResetToken(resetToken: string): string | undefined {
        return this.customerResetTokens[resetToken];
    }

    /**
     * Deletes a customer reset token.
     * @param resetToken The reset token to delete.
     */
    public deleteCustomerResetToken(resetToken: string): void {
        delete this.customerResetTokens[resetToken];
    }

    // ---------- USER UI BEARER ----------

    /**
     * Generates a session bearer for a user and schedules its expiration.
     * @param userId The id of the user to map the bearer to.
     * @returns The generated (unhashed) bearer token.
     */
    public createUserUiBearer(userId: string): string {
        // Generate session bearer token
        const bearer = utils.generate_bearer(utils.BearerType.USER_SESSION);

        // Compute hashed bearer
        const hashedBearer = utils.hash_string(bearer);

        // Map bearer token with user
        this.userUiBearers[hashedBearer] = userId;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.userUiBearers[hashedBearer];
        }, TokenManager.UI_BEARER_VALIDITY_DURATION_MS);

        return bearer;
    }

    /**
     * Retrieves the user id mapped to a hashed UI bearer.
     * @param hashedBearer The hashed bearer to look up.
     * @returns The mapped user id, or undefined if not found.
     */
    public getUserIdFromUiBearer(hashedBearer: string): string | undefined {
        return this.userUiBearers[hashedBearer];
    }

    // ---------- USER RESET TOKEN ----------

    /**
     * Generates a password reset token for a user and schedules its expiration.
     * @param userId The id of the user to map the reset token to.
     * @returns The generated reset token.
     */
    public createUserResetToken(userId: string): string {
        // Generate reset token
        const resetToken = utils.generate_token();

        // Map reset token with user
        this.userResetTokens[resetToken] = userId;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.userResetTokens[resetToken];
        }, TokenManager.RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS);

        return resetToken;
    }

    /**
     * Retrieves the user id mapped to a reset token.
     * @param resetToken The reset token to look up.
     * @returns The mapped user id, or undefined if not found.
     */
    public getUserIdFromResetToken(resetToken: string): string | undefined {
        return this.userResetTokens[resetToken];
    }

    /**
     * Deletes a user reset token.
     * @param resetToken The reset token to delete.
     */
    public deleteUserResetToken(resetToken: string): void {
        delete this.userResetTokens[resetToken];
    }

    // ---------- USER UI TOKEN ----------

    /**
     * Generates a UI token for a user and schedules its expiration.
     * @param userId The id of the user to map the token to.
     * @returns The generated UI token.
     */
    public createUserUiToken(userId: string): string {
        // Generate ui token
        const uiToken = utils.generate_token();

        // Map token with user
        this.userUiTokens[uiToken] = userId;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.userUiTokens[uiToken];
        }, TokenManager.OAUTH_TOKEN_VALIDITY_DURATION_MS);

        return uiToken;
    }

    /**
     * Retrieves the user mapped to a UI token.
     * @param uiToken The UI token to look up.
     * @returns The user mapped to the token.
     */
    public async getUserFromUiToken(uiToken: any): Promise<User> {
        // Check if token is missing or incorrect
        if (!uiToken || typeof uiToken !== 'string' || !this.userUiTokens.hasOwnProperty(uiToken)) {
            throw new OauthError();
        }

        // Get user id from token
        const userId = this.userUiTokens[uiToken];

        // Get user from id
        const user = await User.fromId(userId);

        // Check if user exists
        if (!user) {
            throw new OauthError();
        }

        return user;
    }

    /**
     * Deletes every UI token mapped to a given user.
     * @param userId The id of the user whose tokens should be deleted.
     */
    public deleteUserUiTokensForUser(userId: string): void {
        // Delete every ui token mapped to this user
        for (const uiToken in this.userUiTokens) {
            if (this.userUiTokens[uiToken] === userId) {
                delete this.userUiTokens[uiToken];
            }
        }
    }

    // ---------- CREDENTIAL OAUTH2 STATE ----------

    /**
     * Generates an OAuth2 state for a credential and schedules its expiration.
     * @param credentialId The id of the credential to map the state to.
     * @returns The generated OAuth2 state.
     */
    public createCredentialOauth2State(credentialId: string): string {
        // Generate oauth2 state
        const oauth2State = utils.generate_token();

        // Map state with credential
        this.credentialOauth2States[oauth2State] = credentialId;

        // Schedule state delete after validity duration
        setTimeout(() => {
            delete this.credentialOauth2States[oauth2State];
        }, TokenManager.OAUTH_TOKEN_VALIDITY_DURATION_MS);

        return oauth2State;
    }

    /**
     * Retrieves the credential mapped to an OAuth2 state.
     * @param oauth2State The OAuth2 state to look up.
     * @returns The credential mapped to the state.
     */
    public async getCredentialFromOauth2State(oauth2State: any): Promise<Credential> {
        // Check if state is missing or incorrect
        if (!oauth2State || typeof oauth2State !== 'string' || !this.credentialOauth2States.hasOwnProperty(oauth2State)) {
            throw new OauthError();
        }

        // Get credential id from state
        const credentialId = this.credentialOauth2States[oauth2State];

        // Get credential from id
        const credential = await Credential.fromId(credentialId);

        // If the credential does not exist, throw an error
        if (!credential) {
            throw new OauthError();
        }

        return credential;
    }

    // ---------- OTHER METHODS ----------

    /**
     * Resolves a customer from either a UI token or a bearer (customer or user session).
     * @param bearer The Bearer header value, if any.
     * @param token The UI token, if any.
     * @returns The resolved customer.
     */
    async getCustomerFromBearerOrToken(bearer: string | undefined, token: any): Promise<Customer> {
        if (token) {
            // Get user from token
            const user = await this.getUserFromUiToken(token);
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
            throw new StatusError('Provide a Bearer token or a "token" field in the query.', 400);
        }
    }

    /**
     * Resolves a user from either a UI token, a user bearer, or a customer bearer combined with a user id.
     * @param bearer The Bearer header value, if any.
     * @param user_id The target user id, or 'me' to resolve the bearer's own user.
     * @param token The UI token, if any.
     * @returns The resolved user.
     */
    async getUserFromBearerOrToken(bearer: string | undefined, user_id: string, token: any): Promise<User> {
        // If token provided, get user from token
        if (token) {
            // Get user from token
            return this.getUserFromUiToken(token);
        }
        // If only bearer provided, get user from bearer
        else if (bearer && user_id === 'me') {
            // Get user from bearer
            return await this.getUserFromBearer(bearer);
        }
        // If bearer and user_id provided, get user from customer bearer
        else if (bearer && user_id) {
            // Check if user_id is provided
            if (!user_id) {
                throw new MissingField('user_id');
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
            throw new StatusError('Provide a Bearer token or a "token" field in the query.', 400);
        }
    }

    /**
     * Resolves a customer from a customer session bearer.
     * @param bearer The Bearer header value.
     * @returns The resolved customer.
     */
    async getCustomerFromBearer(bearer: string | undefined): Promise<Customer> {
        // Check if bearer is missing
        if (!bearer || !bearer.startsWith('Bearer ')) {
            throw new AuthenticationBearerError();
        }

        // Get hashed bearer
        const hashed_bearer = utils.hash_string(bearer.split(' ')[1]);

        // Check if a customer ui bearer maps to the hashed bearer
        const customer_id = this.getCustomerIdFromUiBearer(hashed_bearer);

        let customer: Customer | null;
        if (customer_id !== undefined) {
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

    /**
     * Resolves a user from a user session bearer.
     * @param bearer The Bearer header value.
     * @returns The resolved user.
     */
    async getUserFromBearer(bearer: string | undefined): Promise<User> {
        // Check if bearer is missing
        if (!bearer || !bearer.startsWith('Bearer ')) {
            throw new AuthenticationBearerError();
        }

        // Get hashed bearer
        const hashed_bearer = utils.hash_string(bearer.split(' ')[1]);

        // Get user id from ui bearers
        const user_id = this.getUserIdFromUiBearer(hashed_bearer);

        // If the bearer is not mapped to a user
        if(user_id === undefined) {
            throw new AuthenticationBearerError();
        }

        // Get user from id
        const user = await User.fromId(user_id);

        // Check if user exists
        if (!user) {
            throw new AuthenticationBearerError();
        }

        return user;
    }
}
