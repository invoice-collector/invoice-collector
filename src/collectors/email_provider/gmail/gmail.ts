import axios, { AxiosInstance } from 'axios';
import { AuthenticationError } from '../../../error';
import { CollectorAuthenticationMethod, CollectorState, CollectorType } from '../../abstractCollector';
import { DownloadedEmailInvoice, EmailInvoice, EmailInvoiceWildcards, EmailProvider, EmailProviderConfig } from '../../emailProvider';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import * as utils from '../../../utils';

type GmailHeader = { name: string, value: string };

type GmailMessagePart = {
    filename?: string,
    mimeType?: string,
    body?: { attachmentId?: string },
    parts?: GmailMessagePart[],
};

export class GmailCollector extends EmailProvider {

    static REDIRECT_URI = `${utils.BACKEND_URI}/api/v1/oauth2`;
    static CLIENT_ID = utils.getEnvVar('OAUTH2_GMAIL_CLIENT_ID');
    static CLIENT_SECRET = utils.getEnvVar('OAUTH2_GMAIL_CLIENT_SECRET');
    static SCOPE = 'https://www.googleapis.com/auth/gmail.readonly';
    static OAUTH2_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GmailCollector.CLIENT_ID}&redirect_uri=${encodeURIComponent(GmailCollector.REDIRECT_URI)}&response_type=code&access_type=offline&prompt=consent&scope=${encodeURIComponent(GmailCollector.SCOPE)}&state={state}`;
    static TOKEN_URL = 'https://oauth2.googleapis.com/token';
    static BASE_URL = 'https://gmail.googleapis.com/gmail/v1/users/me';
    static PAGE_SIZE = 100;

    static CONFIG = {
        id: 'gmail',
        name: 'i18n.collectors.gmail.name',
        description: 'i18n.collectors.gmail.description',
        version: '1',
        website: 'https://gmail.com',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Gmail_icon_%282026%29.svg?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original',
        type: CollectorType.PROVIDER,
        params: {},
        state: CollectorState.ACTIVE,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
    };

    constructor() {
        super(GmailCollector.CONFIG);
        this.instance = axios.create({ baseURL: GmailCollector.BASE_URL, timeout: 10000 });
    }

    private instance: AxiosInstance;

    async authenticate(params: any, webSocketServer?: WebSocketServer): Promise<void> {
        // If param does not contain a refresh token nor an access token, the user has not authenticated yet.
        if (!params.refresh_token && !params.access_token && webSocketServer) {
            // Build the Oauth2 URL with the state
            const oauth2Url = GmailCollector.OAUTH2_URL.replace('{state}', webSocketServer.oauth2State);
            // Send oauth2 url and wait for code
            const code = await webSocketServer.sendOauth2(oauth2Url, false);
            // Exchange the code for tokens
            await this.getAccessToken(params, code);
        }
        else if (params.refresh_token) {
            // Refresh the access token to ensure it is valid and up to date
            await this.refreshAccessToken(params);
        }

        // Set the Authorization header for future requests
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`;
    }

    async getInvoices(wildcards: EmailInvoiceWildcards, download_from_timestamp: number): Promise<EmailInvoice[]> {
        const senderRegex = utils.wildcardToRegex(wildcards.sender);
        const subjectRegex = utils.wildcardToRegex(wildcards.subject);
        const bodyRegex = utils.wildcardToRegex(wildcards.body);
        const attachmentNameRegex = utils.wildcardToRegex(wildcards.attachmentName);

        const afterInSeconds = Math.floor(download_from_timestamp / 1000);
        const invoices: EmailInvoice[] = [];
        let pageToken: string | undefined;

        do {
            // List message ids matching the timestamp filter, ignoring sent/draft/spam/trash mailboxes
            const list = await this.request('GET', '/messages', {
                params: {
                    q: `after:${afterInSeconds} -in:sent -in:drafts -in:spam`,
                    maxResults: GmailCollector.PAGE_SIZE,
                    pageToken,
                },
            });

            for (const { id } of list.messages || []) {
                const message = await this.request('GET', `/messages/${id}`, { params: { format: 'full' } });

                const headers: GmailHeader[] = message.payload?.headers || [];
                const senderAddress = this.headerValue(headers, 'From');
                if (!senderRegex.test(senderAddress)) {
                    continue;
                }

                const subject = this.headerValue(headers, 'Subject');
                if (!subjectRegex.test(subject)) {
                    continue;
                }

                if (!bodyRegex.test(message.snippet || '')) {
                    continue;
                }

                for (const attachment of this.findAttachments(message.payload)) {
                    if (!attachmentNameRegex.test(attachment.filename)) {
                        continue;
                    }

                    invoices.push({
                        id: utils.hash_string(`${id}:${attachment.attachmentId}`),
                        timestamp: Number(message.internalDate) || Date.now(),
                        metadata: {
                            messageId: id,
                            attachmentId: attachment.attachmentId,
                            mimetype: attachment.mimeType,
                        },
                    });
                }
            }

            pageToken = list.nextPageToken;
        } while (pageToken);

        return invoices;
    }

    async downloadInvoice(invoice: EmailInvoice): Promise<DownloadedEmailInvoice> {
        const { messageId, attachmentId, mimetype } = invoice.metadata as { messageId: string, attachmentId: string, mimetype: string };

        const attachment = await this.request('GET', `/messages/${messageId}/attachments/${attachmentId}`);

        return {
            ...invoice,
            data: Buffer.from(attachment.data, 'base64url').toString('base64'),
            mimetype: mimetype || 'application/octet-stream',
        };
    }

    async _close(): Promise<void> {
        // No persistent connection to close for the Gmail REST API.
    }

    private headerValue(headers: GmailHeader[], name: string): string {
        return headers.find(header => header.name.toLowerCase() === name.toLowerCase())?.value || '';
    }

    private findAttachments(node?: GmailMessagePart): { attachmentId: string, mimeType?: string, filename: string }[] {
        if (!node) {
            return [];
        }

        const attachments: { attachmentId: string, mimeType?: string, filename: string }[] = [];

        if (node.filename && node.body?.attachmentId) {
            attachments.push({
                attachmentId: node.body.attachmentId,
                mimeType: node.mimeType,
                filename: node.filename,
            });
        }

        for (const child of node.parts || []) {
            attachments.push(...this.findAttachments(child));
        }

        return attachments;
    }

    /**
     * Exchanges the authorization code obtained from the user consent redirect
     * for an access token and a refresh token.
     */
    private async getAccessToken(params: any, code: string): Promise<void> {
        const body = new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: GmailCollector.CLIENT_ID,
            client_secret: GmailCollector.CLIENT_SECRET,
            code,
            redirect_uri: GmailCollector.REDIRECT_URI,
        });
        // Perform request
        const data = await this.request('POST', GmailCollector.TOKEN_URL, {
            data: body.toString(),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        if (!data?.access_token || !data?.refresh_token) {
            throw new AuthenticationError('i18n.collectors.gmail.authentication_error', this);
        }
        // Update params with the new tokens for future use
        params.access_token = data.access_token;
        params.refresh_token = data.refresh_token;
    }

    /**
     * Exchanges the refresh token for a new access token.
     */
    private async refreshAccessToken(params: any): Promise<void> {
        const body = new URLSearchParams({
            grant_type: 'refresh_token',
            client_id: GmailCollector.CLIENT_ID,
            client_secret: GmailCollector.CLIENT_SECRET,
            refresh_token: params.refresh_token,
        });
        // Perform request
        const data = await this.request('POST', GmailCollector.TOKEN_URL, {
            data: body.toString(),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        if (!data?.access_token || !data?.refresh_token) {
            throw new AuthenticationError('i18n.collectors.gmail.authentication_error', this);
        }
        // Update params with the new access token for future use
        params.access_token = data.access_token;
        params.refresh_token = data.refresh_token;
    }

    /**
     * Makes a request to the Gmail API (or the Google token endpoint) using the underlying Axios instance.
     */
    private async request(method: string, url: string, options: any = {}): Promise<any> {
        const response = await this.instance.request({
            method,
            url,
            validateStatus: () => true,
            ...options,
        });
        if (response.status === 401 || response.status === 403) {
            throw new AuthenticationError('i18n.collectors.gmail.authentication_error', this);
        }
        else if (response.status < 200 || response.status >= 300) {
            throw new Error(`Request to ${url} failed with status code ${response.status}`, { cause: JSON.stringify(response.data) });
        }
        return response.data;
    }
}