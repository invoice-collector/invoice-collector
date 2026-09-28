import * as crypto from 'crypto';
import { AxiosInstance } from 'axios';
import { ApiCollector } from '../../apiCollector';
import { CollectorState, CollectorType, DownloadedInvoice } from '../../abstractCollector';
import { AuthenticationError } from '../../../error';
import { WebSocketServer } from '../../../websocket/webSocketServer';

export class OvhCollector extends ApiCollector {

    static CONFIG = {
        id: 'ovh',
        name: 'OVH',
        description: 'i18n.collectors.ovh.description',
        instructions: 'i18n.collectors.ovh.instructions',
        version: '2',
        website: 'https://www.ovh.com',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Logo_OVH.svg',
        type: CollectorType.API,
        params: {
            app_key: {
                type: 'string',
                name: 'Application key',
                placeholder: '',
                mandatory: true,
            },
            app_secret: {
                type: 'password',
                name: 'Application secret',
                placeholder: '',
                mandatory: true,
            },
            consumer_key: {
                type: 'string',
                name: 'Consumer key',
                placeholder: '',
                mandatory: true,
            },
            /*server: {
                type: "enum",
                name: "i18n.collectors.ovh.server",
                default: "ovh-eu",
                mandatory: true,
                enum : {
                    "ovh-eu": "Europe",
                    "ovh-us": "United-States",
                    "ovh-ca": "Canada",
                }
            }*/
        },
        baseUrl: 'https://eu.api.ovh.com/v1',
        state: CollectorState.ACTIVE,
    };

    /**
     * Constructs a new instance of the OvhCollector class.
     */
    constructor() {
        super(OvhCollector.CONFIG);
    }

    /**
     * @inheritdoc
     */
    async collect(instance: AxiosInstance, webSocketServer: WebSocketServer | undefined, params: any): Promise<any[]> {
        // Set default headers
        instance.defaults.headers.common['X-Ovh-Application'] = params.app_key;
        instance.defaults.headers.common['X-Ovh-Consumer'] = params.consumer_key;

        // Get bill ids
        const bill_ids = await this.request(instance, params, 'GET', '/me/bill');
        
        // Return bills
        return await Promise.all(bill_ids.map(async (id: any) => {
            const bill = await this.request(instance, params, 'GET', `/me/bill/${id}`);
            return {
                id,
                timestamp: new Date(bill.date).getTime(),
                amount: bill.priceWithTax.text,
                link: bill.pdfUrl,
            };
        }));
    }
    
    /**
     * @inheritdoc
     */
    async download(instance: AxiosInstance, invoice: any): Promise<DownloadedInvoice> {
        return {
            ...invoice,
            documents: [
                await this.download_direct_link(invoice),
            ],
        };
    }

    /**
     * Makes a request to the OVH API.
     * @param instance The Axios instance used to make the request.
     * @param params The parameters containing authentication information.
     * @param method The HTTP method to use for the request.
     * @param path The API endpoint path.
     * @returns The response data from the OVH API.
     */
    private async request(instance: AxiosInstance, params: any, method: string, path: string): Promise<any> {
        const timestamp: string = await this.getAuthTime(instance);
        const response = await instance.request({
            method,
            url: path,
            headers: {
                'X-Ovh-Timestamp': timestamp,
                'X-Ovh-Signature': this.signRequest(params, method, instance.defaults.baseURL + path, '', timestamp),
            },
            validateStatus: () => true,
        });
        if (response.status !== 200) {
            throw new AuthenticationError('i18n.collectors.ovh.authentication_error', this);
        }
        return response.data;
    }

    /**
     * Retrieves the current authentication time from the OVH API.
     * @param instance The Axios instance used to make the request.
     * @returns The current authentication time as a string.
     */
    private async getAuthTime(instance: AxiosInstance): Promise<string> {
        const response = await instance.get('/auth/time');
        if (response.status !== 200) {
            throw new Error('Unable to get auth time');
        }
        return response.data;
    }

    /**
     * Signs the request for the OVH API.
     * @param params The parameters containing authentication information.
     * @param httpMethod The HTTP method to use for the request.
     * @param url The full URL of the API endpoint.
     * @param body The request body as a string.
     * @param timestamp The current authentication timestamp.
     * @returns The generated signature for the request.
     */
    private signRequest(params: any, httpMethod: string, url: string, body: string, timestamp: string): string {
        const s = [
            params.app_secret,
            params.consumer_key,
            httpMethod,
            url,
            body || '',
            timestamp,
        ];

        return `$1$${  crypto.createHash('sha1').update(s.join('+')).digest('hex')}`;
    }
}
