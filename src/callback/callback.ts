import axios from 'axios';
import { Customer } from '../model/customer';
import { CompleteInvoice } from '../collectors/abstractCollector';
import { StatusError } from '../error';

export class CallbackHandler {
    private callback: string;

    constructor(customer: Customer) {
        this.callback = customer.callback;
    }

    private async sendRequest(data: object): Promise<void> {
        try {
            const response = await axios.post(this.callback, data);
            
            // Check if response is successful
            if (response.status !== 200) {
                throw new Error(`Callback request failed with status code ${response.status}`);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Callback request failed with status code ${error.code}. Make sure the callback URL is correct and accessible.`, { cause: error });
            }
            throw new Error(`Callback request failed: ${error}. Make sure the callback URL is correct and accessible`, { cause: error });
        }
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
            try {
                await this.sendRequest({
                    type: "notification_disconnected",
                    collector: collector_id,
                    credential_id: credential_id,
                    user_id: user_id,
                    remote_id: remote_id
                });
                console.log(`Callback ${this.callback} successfully reached, disconnected notification sent`);
            } catch (error) {
                console.error(`Failed to send disconnected notification to callback ${this.callback}:`, error);
            }
        }
        else {
            console.error("Callback URL not defined by customer, skipping disconnected notification request");
        }
    }
}
