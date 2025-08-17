import { Temporal} from '@js-temporal/polyfill';
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
                throw new StatusError(`Callback request failed with status code ${response.status}`, 500);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new StatusError(`Callback request failed with status code ${error.status}`, 500, { cause: error });
            }
            throw new StatusError(`Callback request failed: ${error}`, 500, { cause: error });
        }
    }

    async sendInvoice(collector_id: string, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        await this.sendRequest({
            type: "invoice",
            collector: collector_id,
            remote_id: remote_id,
            invoice: {
                id: invoice.id,
                timestamp: Temporal.Instant.from(invoice.datetime).epochMilliseconds, // for backward compatibility
                datetime: invoice.datetime,
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

    async sendNotificationDisconnected(collector_id: string, credential_id: string,  user_id: string, remote_id: string): Promise<void> {
        console.log(`Sending disconnected notification to callback ${this.callback} for credential ${credential_id}`);
        await this.sendRequest({
            type: "notification_disconnected",
            collector: collector_id,
            credential_id: credential_id,
            user_id: user_id,
            remote_id: remote_id
        });
        console.log(`Callback ${this.callback} successfully reached, disconnected notification sent`);
    }
}
