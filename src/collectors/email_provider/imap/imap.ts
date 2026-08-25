import { ImapFlow } from 'imapflow';
import { Location } from '../../../proxy/abstractProxy';
import { Secret } from '../../../model/secret';
import { State } from '../../../model/state';
import { AuthenticationError } from '../../../error';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import { CollectorAuthenticationMethod, CollectorState, CollectorType } from '../../abstractCollector';
import { EmailProvider, EmailProviderConfig } from '../../emailProvider';

const MAILBOX_TO_IGNORE = [
    'sent',
    'send',
    'draft',
    'drafts',
    'spam',
    'spams',
    'junk',
    'junks'
]

export type ImapProviderConfig = EmailProviderConfig & {
    host?: string,
    port?: number,
    secure?: boolean,
    connectionTimeoutMs?: number,
    greetingTimeoutMs?: number,
    socketTimeoutMs?: number
}

export class ImapCollector extends EmailProvider<ImapProviderConfig> {

    static CONFIG = {
        id: 'imap',
        name: 'i18n.collectors.imap.name',
        description: "i18n.collectors.imap.description",
        version: '1',
        website: 'https://imap.example.com',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Email_icon.png',
        type: CollectorType.EMAIL,
        params: {
            host: {
                type: 'text',
                name: "i18n.collectors.imap.host",
                placeholder: 'imap.example.com',
                mandatory: true
            },
            port: {
                type: 'number',
                name: "i18n.collectors.imap.port",
                placeholder: '993',
                mandatory: false
            },
            username: {
                type: 'text',
                name: "i18n.collectors.imap.username",
                placeholder: 'user@example.com',
                mandatory: true
            },
            password: {
                type: 'password',
                name: "i18n.collectors.imap.password",
                placeholder: '********',
                mandatory: true
            },
            secure: {
                type: 'boolean',
                name: 'i18n.collectors.imap.secure',
                placeholder: 'true',
                mandatory: true
            }
        },
        state: CollectorState.ACTIVE,
        authenticationMethod: CollectorAuthenticationMethod.SECRETS_ONLY
    }

    constructor() {
        super(ImapCollector.CONFIG);
        this.client = null;
    }

    private client: ImapFlow | null;

    private parseBoolean(value: unknown, fallback: boolean): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (typeof value === 'string') {
            const normalizedValue = value.trim().toLowerCase();
            if (['true', '1', 'yes', 'on'].includes(normalizedValue)) {
                return true;
            }
            if (['false', '0', 'no', 'off'].includes(normalizedValue)) {
                return false;
            }
        }
        return fallback;
    }

    async authenticate(
        state: State,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        locale: string,
        location: Location | null
    ): Promise<void> {
        const params = await secret.getParams();

        const host = params.host as string;
        const username = params.username as string;
        const password = params.password as string;
        const secure = this.parseBoolean(params.secure, true);

        const port = Number(params.port);
        if (!Number.isFinite(port) || port <= 0) {
            throw new AuthenticationError('i18n.collectors.imap.invalid_port', this);
        }

        try {
            // Set progress step to logging in
            state.update(State._2_LOGGING_IN);
            webSocketServer?.sendState(State._2_LOGGING_IN);

            this.client = new ImapFlow({
                host,
                port,
                secure,
                auth: {
                    user: username,
                    pass: password
                },
                //disableCompression: true,
                logger: false
            });

            // Set progress step to collecting
            state.update(State._5_COLLECTING);
            webSocketServer?.sendState(State._5_COLLECTING);

            await this.client.connect();
            await this.client.noop();
        } catch (error) {
            throw new AuthenticationError('i18n.collectors.all.login.error', this, { cause: error });
        }
    }

    async _close(): Promise<void> {
        if (!this.client) {
            return;
        }

        try {
            if (this.client.usable) {
                await this.client.logout();
            }
        } catch (error) {
            // Ignore close errors to avoid masking collection results.
        } finally {
            this.client = null;
        }
    }
}