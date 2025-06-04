import { DatabaseFactory } from "../database/databaseFactory";
import { StatusError, TermsConditionsError } from "../error";
import { Location } from "../proxy/abstractProxy";
import { SecretManagerFactory } from "../secret_manager/secretManagerFactory";
import { IcCredential } from "./credential";
import { Customer } from "./customer";
import * as utils from "../utils";

export type TermsConditions = {
    verificationCode: string,
    sentTimestamp: number,
    validTimestamp?: number;
}

export class User {

    id: string;
    customer_id: string;
    remote_id: string;
    location: Location | null;
    locale: string;
    termsConditions: TermsConditions;

    constructor(customer_id: string, remote_id: string, location: Location | null, locale: string, termsConditions: TermsConditions) {
        this.id = "";
        this.customer_id = customer_id;
        this.remote_id = remote_id;
        this.location = location;
        this.locale = locale;
        this.termsConditions = termsConditions;
    }

    async getCustomer(): Promise<Customer> {
        const customer = await DatabaseFactory.getDatabase().getCustomer(this.customer_id);
            
        // Check if customer exists
        if(!customer) {
            throw new StatusError(`Could not find customer for user with id "${this.id}".`, 400);
        }
        return customer;
    }

    async getCredential(credential_id: string) {
        return await DatabaseFactory.getDatabase().getCredential(credential_id);
    }

    async getCredentials() {
        return await DatabaseFactory.getDatabase().getCredentials(this.id);
    }

    async commit() {
        if (this.id) {
            // Update existing user
            await DatabaseFactory.getDatabase().updateUser(this);
        }
        else {
            // Create user
            await DatabaseFactory.getDatabase().createUser(this);
        }
    }

    async delete() {
        // Get all credentials ids
        const credentials: IcCredential[] = await this.getCredentials();
        const secret_manager_ids: string[] = credentials.map(credential => credential.secret_manager_id);

        // Delete all secrets in secret manager
        if (secret_manager_ids.length > 0) {
            await SecretManagerFactory.getSecretManager().deleteSecrets(secret_manager_ids);
        }

        // Delete all credentials
        await DatabaseFactory.getDatabase().deleteCredentials(this.id);

        // Delete the user
        await DatabaseFactory.getDatabase().deleteUser(this.id);
    }

    async checkTermsConditions(): Promise<void> {

        // If verification code is disabled, we consider TOS are accepted automatically
        if (utils.getEnvVar("DISABLE_VERIFICATION_CODE", "false") === "true") {
            this.termsConditions.validTimestamp = Date.now();
            await this.commit();
            return;
        }

        if (this.termsConditions.validTimestamp == undefined) {
            const customer = await this.getCustomer();
            throw new TermsConditionsError(this.locale, customer.theme);
        }
    }
}
