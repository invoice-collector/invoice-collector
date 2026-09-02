import { ImapFlow, MessageStructureObject } from 'imapflow';
import { AuthenticationError, LoggableError } from '../../../error';
import { CollectorAuthenticationMethod, CollectorState, CollectorType } from '../../abstractCollector';
import { DownloadedEmailInvoice, EmailInvoice, EmailInvoiceWildcards, EmailProvider, EmailProviderConfig } from '../../emailProvider';
import * as utils from '../../../utils';

const MAILBOX_TO_IGNORE = [
    'sent',
    'send',
    'draft',
    'drafts',
    'spam',
    'spams',
    'junk',
    'junks',
];

export class ImapCollector extends EmailProvider {

    static CONFIG = {
        id: 'imap',
        name: 'i18n.collectors.imap.name',
        description: 'i18n.collectors.imap.description',
        version: '1',
        website: 'https://imap.example.com',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Email_icon.png',
        type: CollectorType.PROVIDER,
        params: {
            host: {
                type: 'text',
                name: 'i18n.collectors.imap.host',
                placeholder: 'imap.example.com',
                mandatory: true,
            },
            port: {
                type: 'number',
                name: 'i18n.collectors.imap.port',
                placeholder: '993',
                mandatory: true,
            },
            secure: {
                type: 'boolean',
                name: 'i18n.collectors.imap.secure',
                placeholder: 'true',
                mandatory: false,
            },
            username: {
                type: 'text',
                name: 'i18n.collectors.all.email',
                placeholder: 'i18n.collectors.all.email.placeholder',
                mandatory: true,
            },
            password: {
                type: 'password',
                name: 'i18n.collectors.all.password',
                placeholder: 'i18n.collectors.all.password.placeholder',
                mandatory: true,
            },
        },
        state: CollectorState.ACTIVE,
        authenticationMethod: CollectorAuthenticationMethod.SECRETS_ONLY,
    };

    constructor() {
        super(ImapCollector.CONFIG);
        this.client = null;
    }

    private client: ImapFlow | null;

    async authenticate(params: any): Promise<void> {
        const host = params.host as string;
        const username = params.username as string;
        const password = params.password as string;
        const secure = utils.parseBoolean(params.secure, false);

        const port = Number(params.port);
        if (!Number.isFinite(port) || port <= 0) {
            throw new AuthenticationError('i18n.collectors.imap.invalid_port', this);
        }

        try {
            this.client = new ImapFlow({
                host: host.trim(),
                port,
                secure,
                auth: {
                    user: username.trim(),
                    pass: password,
                },
                //disableCompression: true,
                logger: false,
            });

            await this.client.connect();
            await this.client.noop();
        } catch (error) {
            throw new AuthenticationError('i18n.collectors.imap.login.error', this, { cause: error });
        }
    }

    async getInvoices(wildcards: EmailInvoiceWildcards, download_from_timestamp: number): Promise<EmailInvoice[]> {
        if (!this.client) {
            throw new Error('IMAP client is not connected');
        }

        const senderRegex = utils.wildcardToRegex(wildcards.sender);
        const subjectRegex = utils.wildcardToRegex(wildcards.subject);
        const bodyRegex = utils.wildcardToRegex(wildcards.body);
        const attachmentNameRegex = utils.wildcardToRegex(wildcards.attachmentName);

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
                            id: utils.hash_string(`${message.uid}:${attachment.part}`),
                            timestamp: message.envelope?.date ? new Date(message.envelope.date).getTime() : Date.now(),
                            metadata: {
                                mailbox: mailbox.path,
                                uid: message.uid,
                                part: attachment.part,
                                filename: attachment.filename,
                                senderAddress,
                            },
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
            throw new Error('IMAP client is not connected');
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
                mimetype: downloaded[part].meta.contentType || 'application/octet-stream',
            };
        } finally {
            lock.release();
        }
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
                    'unnamed',
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