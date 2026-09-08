import * as utils from '../utils';
import { OauthError } from '../error';
import { User } from './user';
import { Credential } from './credential';

// Maps ephemeral tokens/bearers to Customers, Users or Credentials
export class TokenManager {

    static OAUTH_TOKEN_VALIDITY_DURATION_MS = Number(utils.getEnvVar('OAUTH_TOKEN_VALIDITY_DURATION_MS', '1800000'));                   // 30 minutes in milliseconds
    static RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS = Number(utils.getEnvVar('RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS', '3600000')); // 1 hour in milliseconds
    static UI_BEARER_VALIDITY_DURATION_MS = Number(utils.getEnvVar('UI_BEARER_VALIDITY_DURATION_MS', '3600000'));                       // 1 hour in milliseconds

    private customerUiBearers: { [key: string]: string };
    private customerResetTokens: { [key: string]: string };
    private userUiBearers: { [key: string]: string };
    private userUiTokens: { [key: string]: User };
    private credentialOauth2States: { [key: string]: Credential };
    private userResetTokens: { [key: string]: string };

    constructor() {
        this.customerUiBearers = {};
        this.customerResetTokens = {};
        this.userUiBearers = {};
        this.userUiTokens = {};
        this.credentialOauth2States = {};
        this.userResetTokens = {};
    }

    // ---------- CUSTOMER UI BEARER ----------

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

    public getCustomerIdFromUiBearer(hashedBearer: string): string | undefined {
        return this.customerUiBearers[hashedBearer];
    }

    // ---------- USER UI BEARER ----------

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

    public getUserIdFromUiBearer(hashedBearer: string): string | undefined {
        return this.userUiBearers[hashedBearer];
    }

    // ---------- CUSTOMER RESET TOKEN ----------

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

    public getCustomerIdFromResetToken(resetToken: string): string | undefined {
        return this.customerResetTokens[resetToken];
    }

    public deleteCustomerResetToken(resetToken: string): void {
        delete this.customerResetTokens[resetToken];
    }

    // ---------- USER RESET TOKEN ----------

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

    public getUserIdFromResetToken(resetToken: string): string | undefined {
        return this.userResetTokens[resetToken];
    }

    public deleteUserResetToken(resetToken: string): void {
        delete this.userResetTokens[resetToken];
    }

    // ---------- USER UI TOKEN ----------

    public createUserUiToken(user: User): string {
        // Generate ui token
        const uiToken = utils.generate_token();

        // Map token with user
        this.userUiTokens[uiToken] = user;

        // Schedule token delete after validity duration
        setTimeout(() => {
            delete this.userUiTokens[uiToken];
        }, TokenManager.OAUTH_TOKEN_VALIDITY_DURATION_MS);

        return uiToken;
    }

    public getUserFromUiToken(uiToken: any): User {
        // Check if token is missing or incorrect
        if (!uiToken || typeof uiToken !== 'string' || !this.userUiTokens.hasOwnProperty(uiToken)) {
            throw new OauthError();
        }
        return this.userUiTokens[uiToken];
    }

    public deleteUserUiTokensForUser(userId: string): void {
        // Delete every ui token mapped to this user
        for (const uiToken in this.userUiTokens) {
            if (this.userUiTokens[uiToken].id === userId) {
                delete this.userUiTokens[uiToken];
            }
        }
    }

    // ---------- CREDENTIAL OAUTH2 STATE ----------

    public createCredentialOauth2State(credential: Credential): string {
        // Generate oauth2 state
        const oauth2State = utils.generate_token();

        // Map state with credential
        this.credentialOauth2States[oauth2State] = credential;

        // Schedule state delete after validity duration
        setTimeout(() => {
            delete this.credentialOauth2States[oauth2State];
        }, TokenManager.OAUTH_TOKEN_VALIDITY_DURATION_MS);

        return oauth2State;
    }

    public getCredentialFromOauth2State(oauth2State: any): Credential {
        // Check if state is missing or incorrect
        if (!oauth2State || typeof oauth2State !== 'string' || !this.credentialOauth2States.hasOwnProperty(oauth2State)) {
            throw new OauthError();
        }
        return this.credentialOauth2States[oauth2State];
    }
}
