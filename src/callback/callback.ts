import axios from 'axios';
import { Customer } from '../model/customer';
import { CompleteInvoice } from '../collectors/abstractCollector';
import { StatusError } from '../error';

export class CallbackHandler {
    private callback: string;

    constructor(customer: Customer) {
        this.callback = customer.callback;
    }

    async sendInvoice(collector_id: string, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        try {
            const response = await axios.post(this.callback, {
                    type: "invoice",
                    collector: collector_id,
                    remote_id,
                    invoice
                });
            
            // Check if response is successful
            if (response.status !== 200) {
                throw new StatusError(`Callback request failed with status code ${response.status}`, 500);
            }
            console.log(`Callback ${this.callback} successfully reached`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new StatusError(`Callback request failed with status code ${error.status}`, 500, { cause: error });
            }
            throw new StatusError(`Callback request failed: ${error}`, 500, { cause: error });
        }
    }
}
