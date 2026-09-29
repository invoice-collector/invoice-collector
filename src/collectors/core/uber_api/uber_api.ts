import { AxiosInstance } from 'axios';
import { ApiCollector } from '../../apiCollector';
import { CollectorState, CollectorType, DownloadedInvoice } from '../../abstractCollector';
import { AuthenticationError } from '../../../error';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import * as utils from '../../../utils';

export class UberApiCollector extends ApiCollector {

    static CONFIG = {
        id: 'uber_api',
        name: 'Uber for Business',
        description: 'i18n.collectors.uber_api.description',
        instructions: 'i18n.collectors.uber_api.instructions',
        version: '1',
        website: 'https://www.uber.com/business/',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg',
        type: CollectorType.API,
        params: {
            organization_uuid: {
                type: 'string',
                name: 'Uber organization UUID',
                placeholder: '',
                mandatory: true,
            },
            order_ids: {
                type: 'string',
                name: 'Order IDs (comma or newline separated)',
                placeholder: '',
                mandatory: true,
            },
        },
        baseUrl: 'https://api.uber.com',
        state: CollectorState.ACTIVE,
    };

    /**
     * Constructs a new instance of the UberApiCollector class.
     */
    constructor() {
        super(UberApiCollector.CONFIG);
    }

    static REDIRECT_URI = `${utils.BACKEND_URI}/api/v1/oauth2`;
    static CLIENT_ID = utils.getEnvVar('OAUTH2_UBER_CLIENT_ID');
    static CLIENT_SECRET = utils.getEnvVar('OAUTH2_UBER_CLIENT_SECRET');
    static AUTHORIZATION_URL = utils.DEBUG_ENABLED ? `https://sandbox-login.uber.com/oauth/v2/authorize` : 'https://auth.uber.com/oauth/v2/authorize';
    static TOKEN_URL = 'https://auth.uber.com/oauth/v2/token';
    static SCOPE = 'business.receipts offline_access';

    /**
     * @inheritdoc
     */
    async collect(instance: AxiosInstance, webSocketServer: WebSocketServer | undefined, params: any): Promise<any[]> {
        if (!params.refresh_token && !params.access_token) {
            if (!webSocketServer) {
                throw new AuthenticationError('i18n.collectors.uber_api.authentication_error', this);
            }

            const authorizationUrl = new URL(UberApiCollector.AUTHORIZATION_URL);
            authorizationUrl.search = new URLSearchParams({
                client_id: UberApiCollector.CLIENT_ID,
                response_type: 'code',
                redirect_uri: UberApiCollector.REDIRECT_URI,
                scope: UberApiCollector.SCOPE,
                state: webSocketServer.oauth2State,
            }).toString();
            const code = await webSocketServer.sendOauth2(authorizationUrl.toString(), false);
            await this.getAccessToken(instance, params, code);
        }
        else if (params.refresh_token) {
            await this.refreshAccessToken(instance, params);
        }

        const orderIds = String(params.order_ids || '')
            .split(/[\s,;]+/)
            .map((orderId: string) => orderId.trim())
            .filter(Boolean);
        if (!params.organization_uuid || orderIds.length === 0) {
            throw new Error('An Uber organization UUID and at least one order ID are required.');
        }

        const invoices: any[] = [];
        for (const orderId of orderIds) {
            const receipt = await this.request(instance, params.access_token, 'GET', `/v1/business/orders/${encodeURIComponent(orderId)}/receipt`, {
                headers: { 'x-uber-organizationuuid': params.organization_uuid },
            });
            const orderAmount = receipt.payment_detail?.order_amount;
            const amount = orderAmount
                ? `${(orderAmount.value / 100000).toFixed(2)} ${orderAmount.currency_code || ''}`.trim()
                : undefined;
            const timestamp = new Date(
                receipt.order_request_time?.timestamp_utc || receipt.order_request_time?.timestamp_local || Date.now(),
            ).getTime();

            for (const charge of receipt.payment_detail?.charges || []) {
                for (const document of charge.documents || []) {
                    if (document.document_type !== 'INVOICE' || !document.url) {
                        continue;
                    }
                    invoices.push({
                        id: document.id || `${orderId}:${charge.charge_entity_type}`,
                        timestamp,
                        amount,
                        link: document.url,
                        metadata: {
                            orderId,
                            orderType: receipt.order_type,
                            documentType: document.document_type,
                            chargeEntity: charge.charge_entity_type,
                        },
                    });
                }
            }
        }

        return invoices;
    }

    /**
     * @inheritdoc
     */
    async download(instance: AxiosInstance, invoice: any): Promise<DownloadedInvoice> {
        return {
            ...invoice,
            documents: [await this.download_direct_link(invoice)],
        };
    }

    /**
     * Exchanges the authorization code for OAuth tokens.
     * @param instance The Axios instance to use for the request.
     * @param params The parameters object to store the tokens.
     * @param code The authorization code returned by Uber.
     */
    private async getAccessToken(instance: AxiosInstance, params: any, code: string): Promise<void> {
        const body = new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: UberApiCollector.CLIENT_ID,
            client_secret: UberApiCollector.CLIENT_SECRET,
            redirect_uri: UberApiCollector.REDIRECT_URI,
            code,
        });
        const data = await this.request(instance, undefined, 'POST', UberApiCollector.TOKEN_URL, {
            data: body.toString(),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        if (!data?.access_token || !data?.refresh_token) {
            throw new AuthenticationError('i18n.collectors.uber_api.authentication_error', this);
        }
        params.access_token = data.access_token;
        params.refresh_token = data.refresh_token;
    }

    /**
     * Exchanges the refresh token for a new access token.
     * @param instance The Axios instance to use for the request.
     * @param params The parameters object containing the refresh token.
     */
    private async refreshAccessToken(instance: AxiosInstance, params: any): Promise<void> {
        const body = new URLSearchParams({
            grant_type: 'refresh_token',
            client_id: UberApiCollector.CLIENT_ID,
            client_secret: UberApiCollector.CLIENT_SECRET,
            refresh_token: params.refresh_token,
        });
        const data = await this.request(instance, undefined, 'POST', UberApiCollector.TOKEN_URL, {
            data: body.toString(),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        if (!data?.access_token) {
            throw new AuthenticationError('i18n.collectors.uber_api.authentication_error', this);
        }
        params.access_token = data.access_token;
        if (data.refresh_token) {
            params.refresh_token = data.refresh_token;
        }
    }

    /**
     * Makes an authenticated request to Uber.
     * @param instance The Axios instance to use for the request.
     * @param accessToken The bearer token, or undefined for OAuth token requests.
     * @param method The HTTP method.
     * @param url The request URL or API path.
     * @param options Additional Axios request options.
     * @returns The response data.
     */
    private async request(instance: AxiosInstance, accessToken: string | undefined, method: string, url: string, options: any = {}): Promise<any> {
        const response = await instance.request({
            method,
            url,
            validateStatus: () => true,
            ...options,
            headers: {
                ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
                ...options.headers,
            },
        });
        if (response.status === 401 || response.status === 403) {
            throw new AuthenticationError('i18n.collectors.uber_api.authentication_error', this);
        }
        else if (response.status < 200 || response.status >= 300) {
            throw new Error(`Request to ${url} failed with status code ${response.status}`, { cause: JSON.stringify(response.data) });
        }
        return response.data;
    }
}