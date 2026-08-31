import { AxiosInstance } from "axios";
import { ApiCollector } from '../../apiCollector';
import { CollectorType, DownloadedInvoice } from '../../abstractCollector';
import { AuthenticationError } from '../../../error';
import { WebSocketServer } from "../../../websocket/webSocketServer";
import * as utils from '../../../utils';

/**
 * Tesla charging invoices, through the official Fleet API, which exposes the
 * charging history and the PDF invoice of every session.
 *
 * The Tesla account pages sit behind a two step SSO and an invisible hCaptcha,
 * so the API is both the only workable route and the supported one.
 */
export class TeslaCollector extends ApiCollector {

    static CONFIG = {
        id: "tesla",
        name: "Tesla",
        description: "i18n.collectors.tesla.description",
        version: "1",
        website: "https://www.tesla.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
        type: CollectorType.API,
        params: {},
        // Replaced at runtime with the region of the account, see collect()
        baseUrl: "https://fleet-api.prd.eu.vn.cloud.tesla.com"
    }

    constructor() {
        super(TeslaCollector.CONFIG);
    }

    static REDIRECT_URI = utils.getEnvVar("FRONTEND", "https://api.invoice-collector.com") + "/api/v1/oauth2";
    static CLIENT_ID = "86f1cbbc-3023-4e1c-98ea-dd4bb2171f3e";
    static CLIENT_SECRET = utils.getEnvVar("OAUTH2_TESLA_CLIENT_SECRET");
    static OAUTH2_URL = `https://auth.tesla.com/oauth2/v3/authorize?client_id=${TeslaCollector.CLIENT_ID}&locale=en-US&prompt=login&redirect_uri=${encodeURIComponent(TeslaCollector.REDIRECT_URI)}&response_type=code&scope=openid%20vehicle_charging_cmds%20offline_access&state={state}`;
    static TOKEN_URL = "https://fleet-auth.prd.vn.cloud.tesla.com/oauth2/v3/token";
    static PAGE_SIZE = 25;
    static MAX_PAGES = 40;

    // Regional servers of the account. Tesla exposes three of them and a token is only valid on its own.
    static REGIONS = {
        EU: "https://fleet-api.prd.eu.vn.cloud.tesla.com",
        NA: "https://fleet-api.prd.na.vn.cloud.tesla.com",
        CN: "https://fleet-api.prd.cn.vn.cloud.tesla.cn",
    };

    /**
     * Regional server of the account. The region is carried by the code.
     */
    private baseUrlFromCode(code: string): string {
        for (const [key, value] of Object.entries(TeslaCollector.REGIONS)) {
            if (code.startsWith(key)) {
                return value;
            }
        }
        return TeslaCollector.REGIONS.EU;
    }
    /**
     * Exchanges the authorization code obtained from the user consent redirect
     * for an access token and a refresh token (Fleet API third-party tokens, step 3: code exchange).
     */
    private async getAccessToken(instance: AxiosInstance, params: any, code: string): Promise<void> {
        // Get the base URL from the code and update the instance defaults
        const baseUrl = this.baseUrlFromCode(code);
        instance.defaults.baseURL = baseUrl;
        // Exchange the code for tokens
        const body = new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: TeslaCollector.CLIENT_ID,
            client_secret: TeslaCollector.CLIENT_SECRET,
            code: code,
            audience: baseUrl,
            redirect_uri: TeslaCollector.REDIRECT_URI,
        });

        const data = await this.request(instance, 'POST', TeslaCollector.TOKEN_URL, {
            data: body.toString(),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        if (!data?.access_token || !data?.refresh_token) {
            throw new AuthenticationError('i18n.collectors.tesla.authentication_error', this);
        }
        // Update params with the new tokens for future use
        params.access_token = data.access_token;
        params.refresh_token = data.refresh_token;
    }

    /**
     * Exchanges the refresh token for an access token. The Tesla refresh token
     * is reusable, so the one returned here is ignored and the user never has
     * to enter a new one.
     */
    private async refreshAccessToken(instance: AxiosInstance, params: any): Promise<void> {
        // Set the base URL from the code and update the instance defaults
        instance.defaults.baseURL = this.baseUrlFromCode(params.refresh_token);
        const body = new URLSearchParams({
            grant_type: 'refresh_token',
            client_id: TeslaCollector.CLIENT_ID,
            refresh_token: params.refresh_token,
        });

        const data = await this.request(instance, 'POST', TeslaCollector.TOKEN_URL, {
            data: body.toString(),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        if (!data?.access_token) {
            throw new AuthenticationError('i18n.collectors.tesla.authentication_error', this);
        }
        params.access_token = data.access_token;
        params.refresh_token = data.refresh_token;
    }

    // Make request to Tesla API
    private async request(instance: AxiosInstance, method: string, url: string, options: any = {}): Promise<any> {
        const response = await instance.request({
            method,
            url,
            validateStatus: () => true,
            ...options,
        });
        if (response.status !== 200) {
            throw new AuthenticationError('i18n.collectors.tesla.authentication_error', this);
        }
        return response.data;
    }

    async collect(instance: AxiosInstance, webSocketServer: WebSocketServer | undefined, params: any): Promise<any[]> {
        // If param does not contain a refresh token, the user has not authenticated yet, so the collector cannot proceed.
        if (!params.refresh_token && !params.access_token && webSocketServer != undefined) {
            // Build the Oauth2 URL with the state
            const oauth2Url = TeslaCollector.OAUTH2_URL.replace('{state}', webSocketServer.oauth2State);
            // Send oauth2 url
            const code = await webSocketServer.sendOauth2(oauth2Url, false);
            // Exchange the code for tokens
            await this.getAccessToken(instance, params, code);
        }
        else if (params.refresh_token && params.access_token && webSocketServer != undefined) {
            // Refresh the access token to ensure it is valid and up to date
            await this.refreshAccessToken(instance, params);
        }

        // Set the Authorization header for future requests
        instance.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`;

        const invoices: any[] = [];
        for (let page = 1; page <= TeslaCollector.MAX_PAGES; page++) {
            const data = await this.request(instance, 'GET', '/api/1/dx/charging/history', {
                params: { pageNo: page, pageSize: TeslaCollector.PAGE_SIZE },
            });

            const sessions = data?.data || [];
            if (sessions.length === 0) {
                break;
            }

            for (const session of sessions) {
                // A session without an invoice cannot be collected
                const invoice = (session.invoices || [])[0];
                if (!invoice || !invoice.contentId) {
                    continue;
                }

                // A session carries several fees: charging, congestion,
                // idle. The invoiced amount is their sum.
                const fees = session.fees || [];
                const total = fees.reduce((sum: number, fee: any) => sum + (fee.totalDue || 0), 0);
                const currency = (fees[0] || {}).currencyCode || '';

                invoices.push({
                    id: invoice.contentId,
                    timestamp: new Date(session.chargeStartDateTime).getTime(),
                    amount: `${total.toFixed(2)} ${currency}`.trim(),
                    link: `/api/1/dx/charging/invoice/${invoice.contentId}`,
                    metadata: {
                        site: session.siteLocationName,
                        fileName: invoice.fileName,
                    },
                });
            }

            // Last page reached
            if (sessions.length < TeslaCollector.PAGE_SIZE) {
                break;
            }
        }

        return invoices;
    }

    async download(instance: AxiosInstance, invoice: any): Promise<DownloadedInvoice> {
        // The PDF is served by the API itself, so it needs the token: a plain
        // link download would not do.
        const data = await this.request(instance, 'GET', invoice.link, { responseType: 'arraybuffer' });

        return {
            ...invoice,
            documents: [Buffer.from(data).toString('base64')],
        };
    }
}
