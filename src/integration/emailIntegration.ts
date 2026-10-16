import { AnalyticsFactory } from '../analytics/analyticsFactory';
import { EmailAttachment } from '../analytics/abstractAnalytics';
import { CompleteInvoice, Config } from '../collectors/abstractCollector';
import { Secret } from '../model/secret';
import * as utils from '../utils';
import { AbstractIntegration, IntegrationConfig } from './abstractIntegration';

export class EmailIntegration extends AbstractIntegration {

    static CONFIG: IntegrationConfig = {
        id: 'email',
        name: 'Email',
        description: 'i18n.integrations.email.description',
        state: 'active',
        params: {
            email: {
                type: 'text',
                name: 'Email',
                placeholder: 'Email at which you want to receive invoices',
                mandatory: true,
            },
        },
    };

    /**
     * Constructs an instance of the email integration.
     * @param secret The secrets for the integration.
     */
    constructor(secret: Secret) {
        super(EmailIntegration.CONFIG, secret);
    }

    /**
     * @inheritdoc
     */
    async sendInvoice(collector: Config, remote_id: string, invoice: CompleteInvoice): Promise<void> {
        const attachments: EmailAttachment[] = [];
        if (invoice.data && invoice.mimetype) {
            const extension = invoice.mimetype.split('/')[1] || 'bin';
            const filename = `${collector.id}-${invoice.id}`.replace(/[^a-zA-Z0-9._-]/g, '_');
            attachments.push({
                filename: `${filename}.${extension}`,
                content: invoice.data,
                contentType: invoice.mimetype,
                encoding: 'base64',
            });
        }

        await this.sendEmail(
            `Your ${collector.name} invoice from the ${new Date(invoice.timestamp).toISOString().substring(0, 10)}`,
            [
                `Collector: ${collector.name}`,
                `Invoice: ${invoice.id}`,
                `Account: ${remote_id}`,
                `Date: ${new Date(invoice.timestamp).toISOString()}`,
                ...(invoice.amount ? [`Amount: ${invoice.amount}`] : []),
                `Invoice URL: ${invoice.link}`,
            ],
            attachments,
        );
    }

    /**
     * @inheritdoc
     */
    async sendNotificationDisconnected(collector: Config, credential_id: string, user_id: string, remote_id: string): Promise<void> {
        await this.sendEmail(
            `Account disconnected: ${collector.name}`,
            [
                `Your ${collector.name} account has been disconnected. Please reconnect it to resume collecting invoices.`,
                `Account: ${remote_id}`
            ],
        );
    }

    /**
     * Sends an email to the configured destination through analytics.
     * @param subject The email subject.
     * @param paragraphs The email body paragraphs.
     * @param attachments The optional invoice attachments.
     */
    private async sendEmail(subject: string, paragraphs: string[], attachments?: EmailAttachment[]): Promise<void> {
        const secretParams = await this.secret.getParams();
        await this.checkMandatoryParams(secretParams);

        utils.assertEmail(secretParams.email.value);

        const content = paragraphs.map(text => ({
            text: text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'),
            bold: false,
            center: false,
            italic: false,
        }));

        await AnalyticsFactory.getInstance().sendEmail([secretParams.email.value], subject, content, attachments);
    }
}