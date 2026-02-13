import axios from 'axios';
import { Customer } from '../model/customer';
import { CompleteInvoice } from '../collectors/abstractCollector';
import * as utils from '../utils';

export class CallbackHandler {
    static DEFAULT_RETRIES: number = 3;
    static DEFAULT_DELAY_BETWEEN_RETRIES: number = 10000; // 10 seconds

    private callback: string;

    constructor(customer: Customer) {
        this.callback = customer.callback;
    }

    private async sendRequest(data: object, maxRetries: number = CallbackHandler.DEFAULT_RETRIES): Promise<void> {
        let lastError: Error | null = null;
        
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await axios.post(this.callback, data);
                
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
                    console.warn(`Retrying in ${CallbackHandler.DEFAULT_DELAY_BETWEEN_RETRIES / 1000} s...`);
                    await utils.delay(CallbackHandler.DEFAULT_DELAY_BETWEEN_RETRIES);
                }
            }
        }
        
        // All retries exhausted, throw the last error
        throw lastError;
    }

    async sendInvoice(collector_id: string, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        if (this.callback) {
            await this.sendRequest({
                type: "invoice",
                collector: collector_id,
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
            });
            console.log(`Callback ${this.callback} successfully reached, invoice sent`);
        }
        else {
            throw new Error("Callback URL not defined by customer, skipping invoice request");
        }
    }

    async sendNotificationDisconnected(collector_id: string, credential_id: string,  user_id: string, remote_id: string): Promise<void> {
        console.log(`Sending disconnected notification to callback ${this.callback} for credential ${credential_id}`);
        if (this.callback) {
            await this.sendRequest({
                type: "notification_disconnected",
                collector: collector_id,
                credential_id: credential_id,
                user_id: user_id,
                remote_id: remote_id
            });
            console.log(`Callback ${this.callback} successfully reached, disconnected notification sent`);
        }
        else {
            throw new Error("Callback URL not defined by customer, skipping disconnected notification request");
        }
    }
}
