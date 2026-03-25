import axios from 'axios';
import { CompleteInvoice, Config } from '../collectors/abstractCollector';
import * as utils from '../utils';
import { AbstractIntegrationHandler } from './abstractIntegrationHandler';
import { Secret } from '../model/secret';

export class HttpIntegrationHandler extends AbstractIntegrationHandler {

    static MANDATORY_PARAMS: string[] = ["url"];
    static DEFAULT_RETRIES: number = 3;
    static DEFAULT_DELAY_BETWEEN_RETRIES: number = 10000; // 10 seconds
    
    constructor(secret: Secret) {
        super(HttpIntegrationHandler.MANDATORY_PARAMS, secret);
    }

    private async sendRequest(
        url: string,
        data: object,
        maxRetries: number = HttpIntegrationHandler.DEFAULT_RETRIES
    ): Promise<void> {
        let lastError: Error | null = null;
        
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await axios.post(url, data);
                
                // Check if response is successful
                if (response.status !== 200) {
                    throw new Error(`Callback request failed with status code ${response.status}`);
                }
                return; // Success, exit the function
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    lastError = new Error(`Callback request failed with status code ${error.code}. Make sure the callback URL is correct and accessible.`, { cause: error });
                } else {
                    lastError = new Error(`Callback request failed: ${error}. Make sure the callback URL is correct and accessible`, { cause: error });
                }
                
                console.warn(`Callback request attempt ${attempt}/${maxRetries} failed.`);
                if (attempt < maxRetries) {
                    console.warn(`Retrying in ${HttpIntegrationHandler.DEFAULT_DELAY_BETWEEN_RETRIES / 1000} s...`);
                    await utils.delay(HttpIntegrationHandler.DEFAULT_DELAY_BETWEEN_RETRIES);
                }
            }
        }
        
        // All retries exhausted, throw the last error
        throw lastError;
    }

    async sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        // Get params from secret
        const secretParams = await this.secret.getParams();

        // Check if url is defined in secret params
        await this.checkMandatoryParams(secretParams);

        await this.sendRequest(
            secretParams.url,
            {
                type: "invoice",
                collector: collector,
                remote_id: remote_id,
                invoice: {
                    id: invoice.id,
                    timestamp: invoice.timestamp,
                    link: invoice.link,
                    collected_timestamp: invoice.collected_timestamp,
                    amount: invoice.amount,
                    mimetype: invoice.mimetype,
                    metadata: invoice.metadata,
                    data: invoice.data
                }
            }
        );
        console.log(`Callback ${secretParams.url} successfully reached, invoice sent`);
    }

    async sendNotificationDisconnected(collector: Config, credential_id: string,  user_id: string, remote_id: string): Promise<void> {
        // Get params from secret
        const secretParams = await this.secret.getParams();

        // Check if url is defined in secret params
        await this.checkMandatoryParams(secretParams);

        console.log(`Sending disconnected notification to callback ${secretParams.url} for credential ${credential_id}`);
        await this.sendRequest(
            secretParams.url,
            {
                type: "notification_disconnected",
                collector: collector,
                credential_id: credential_id,
                user_id: user_id,
                remote_id: remote_id
            }
        );
        console.log(`Callback ${secretParams.url} successfully reached, disconnected notification sent`);

    }
}
