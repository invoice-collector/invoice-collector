import { Secret } from '../model/secret';

export abstract class AbstractSecretManager {

    /**
     * Constructs an instance of the AbstractSecretManager class.
     * This constructor is protected to prevent direct instantiation of the abstract class.
     */
    protected constructor() {}

    /**
     * Connects to the secret manager service.
     */
    abstract connect(): Promise<void>;

    /**
     * Disconnects from the secret manager service.
     */
    abstract disconnect(): Promise<void>;

    /**
     * Pings the secret manager service to check its availability.
     */
    abstract ping(): Promise<void>;

    // SECRETS

    /**
     * Gets the value of a secret by its ID.
     * @param id The ID of the secret to retrieve.
     */
    abstract getValue(id: string): Promise<any>;

    /**
     * Creates a new secret in the secret manager.
     * @param secret The secret object to be created.
     */
    abstract createSecret(secret: Secret): Promise<Secret>;

    /**
     * Updates an existing secret in the secret manager.
     * @param secret The secret object to be updated.
     */
    abstract updateSecret(secret: Secret): Promise<void>;

    /**
     * Deletes a secret from the secret manager by its ID.
     * @param id The ID of the secret to be deleted.
     */
    abstract deleteSecret(id: string): Promise<void>;

    /**
     * Deletes multiple secrets from the secret manager by their IDs.
     * @param ids The IDs of the secrets to be deleted.
     */
    abstract deleteSecrets(ids: string[]): Promise<void>;
}
