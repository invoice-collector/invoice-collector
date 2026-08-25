import { ImapFlow, MessageStructureObject } from 'imapflow';
import { Location } from '../../../proxy/abstractProxy';
import { Secret } from '../../../model/secret';
import { State } from '../../../model/state';
import { AuthenticationError, LoggableError } from '../../../error';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import { CollectorAuthenticationMethod, CollectorState, CollectorType } from '../../abstractCollector';
import { DownloadedEmailInvoice, EmailInvoice, EmailInvoiceFilters, EmailProvider, EmailProviderConfig } from '../../emailProvider';

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
        type: CollectorType.PROVIDER,
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
                name: "i18n.collectors.all.email",
                placeholder: 'i18n.collectors.all.email.placeholder',
                mandatory: true
            },
            password: {
                type: 'password',
                name: "i18n.collectors.all.password",
                placeholder: 'i18n.collectors.all.password.placeholder',
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

    async getInvoices(filters: EmailInvoiceFilters, download_from_timestamp: number): Promise<EmailInvoice[]> {
        if (!this.client) {
            throw new AuthenticationError('i18n.collectors.all.login.error', this);
        }

        const senderRegex = this.wildcardToRegex(filters.senderRegex);
        const subjectRegex = this.wildcardToRegex(filters.subjectRegex);
        const bodyRegex = this.wildcardToRegex(filters.bodyRegex);
        const attachmentNameRegex = this.wildcardToRegex(filters.attachmentNameRegex);

        const since = new Date(download_from_timestamp);
        const invoices: EmailInvoice[] = [];
        const mailboxes = await this.client.list();

        for (const mailbox of mailboxes) {
            if (MAILBOX_TO_IGNORE.includes(mailbox.name.toLowerCase())) {
                continue;
            }

            const lock = await this.client.getMailboxLock(mailbox.path, { readOnly: true });
            try {
                const uids = await this.client.search({ since }, { uid: true });
                if (!uids || uids.length === 0) {
                    continue;
                }

                const messages = await this.client.fetchAll(uids, { envelope: true, bodyStructure: true }, { uid: true });

                for (const message of messages) {
                    const senderAddress = message.envelope?.from?.[0]?.address || '';
                    if (!senderRegex.test(senderAddress)) {
                        continue;
                    }

                    const subject = message.envelope?.subject || '';
                    if (!subjectRegex.test(subject)) {
                        continue;
                    }

                    // The envelope does not expose the message body, so this only matches wildcard-only filters
                    if (!bodyRegex.test('')) {
                        continue;
                    }

                    const attachments = this.findAttachments(message.bodyStructure);
                    for (const attachment of attachments) {
                        if (!attachmentNameRegex.test(attachment.filename)) {
                            continue;
                        }

                        invoices.push({
                            id: `${mailbox.path}:${message.uid}:${attachment.part}`,
                            timestamp: message.envelope?.date ? new Date(message.envelope.date).getTime() : Date.now(),
                            metadata: {
                                mailbox: mailbox.path,
                                uid: message.uid,
                                part: attachment.part,
                                filename: attachment.filename,
                                senderAddress
                            }
                        });
                    }
                }
            } finally {
                lock.release();
            }
        }

        return invoices;
    }

    async downloadInvoice(invoice: EmailInvoice): Promise<DownloadedEmailInvoice> {
        if (!this.client) {
            throw new AuthenticationError('i18n.collectors.all.login.error', this);
        }

        const { mailbox, uid, part } = invoice.metadata as { mailbox: string, uid: number, part: string };

        const lock = await this.client.getMailboxLock(mailbox, { readOnly: true });
        try {
            const downloaded = await this.client.downloadMany(String(uid), [part], { uid: true });
            const content = downloaded[part]?.content;

            if (!content) {
                throw new LoggableError(`No content found for invoice ${invoice.id}`, this);
            }

            return {
                ...invoice,
                data: content.toString('base64'),
                mimetype: downloaded[part].meta.contentType || 'application/octet-stream'
            };
        } finally {
            lock.release();
        }
    }

    private wildcardToRegex(pattern: string): RegExp {
        const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
        return new RegExp('^' + escaped.replace(/\*/g, '.*') + '$', 'i');
    }

    private findAttachments(node?: MessageStructureObject): { part: string, type: string, filename: string }[] {
        if (!node) {
            return [];
        }

        const attachments: { part: string, type: string, filename: string }[] = [];
        const topType = (node.type || '').split('/')[0];

        const isAttachment =
            node.disposition === 'attachment' ||
            (!!node.type && topType !== 'text' && topType !== 'multipart' && !node.disposition);

        if (isAttachment) {
            attachments.push({
                part: node.part || '1',
                type: node.type,
                filename: node.dispositionParameters?.filename ||
                    node.parameters?.name ||
                    'unnamed'
            });
        }

        if (node.childNodes) {
            for (const child of node.childNodes) {
                attachments.push(...this.findAttachments(child));
            }
        }

        return attachments;
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