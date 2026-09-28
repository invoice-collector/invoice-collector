import axios, { AxiosInstance } from 'axios';
import { fullStackTrace, LoggableError } from '../error';
import * as utils from '../utils';
import { TokenManager } from '../tokenManager';
import { AbstractCollector, Config } from '../collectors/abstractCollector';
import { AbstractAnalytics, OTP } from './abstractAnalytics';

export class HttpAnalytics extends AbstractAnalytics {

    private client: AxiosInstance;

    /**
     * Constructs an instance of HttpAnalytics.
     * @param analyticsServerEndpoint The endpoint of the analytics server.
     */
    public constructor(analyticsServerEndpoint: string) {
        super();
        this.client = axios.create({
            baseURL: `${analyticsServerEndpoint}/${AbstractAnalytics.VERSION}`,
        });

        const headers = JSON.parse(utils.getEnvVar('ANALYTICS_SERVER_HEADERS', '{}'));
        if (headers) {
            for (const [key, value] of Object.entries(headers)) {
                this.client.defaults.headers.common[key] = String(value);
            }
        }
    }

    /**
     * @inheritdoc
     */
    async ping(): Promise<void> {
        try {
            await this.client.get('/ping');
        } catch (error) {
            throw new Error('Could not reach analytics server', { cause: error });
        }
    }

    /**
     * @inheritdoc
     */
    logSuccess(collector: AbstractCollector<Config>): void {
        this.client.post('/log/success', {
            collector: collector.config.id,
            version: collector.config.version,
        })
        .then(response => {
            console.log('Analytics server successfully reached');
        })
        .catch(error => {
            console.error(`Could not reach analytics server at ${error.request.res?.responseUrl || error.request._currentUrl}. Status code: ${error.response?.status || error.code}`);
        });
    }

    /**
     * @inheritdoc
     */
    logError(email: string, remoteId: string, err: LoggableError): void {
        this.client.post('/log/error', {
            email,
            collector: err.collector_id,
            name: err.collector_name,
            version: err.collector_version,
            remoteId,
            url: err.url,
            error: err.name,
            traceback: fullStackTrace(err),
            source_code: err.source_code,
            screenshot: err.screenshot.data,
        })
        .then(response => {
            console.log('Analytics server successfully reached');
        })
        .catch(error => {
            console.error(`Could not reach analytics server at ${error.request.res?.responseUrl || error.request._currentUrl}. Status code: ${error.response?.status || error.code}`);
        });
    }

    /**
     * @inheritdoc
     */
    async feedback(type: string, message: string, email: string, user_id: string): Promise<void> {
        const response = await this.client.post('/feedback', {
            from: 'app',
            type,
            message,
            email,
            user_id,
        });

        // Check response status
        if (response.status !== 200) {
            throw new Error(`Could not reach analytics server at ${response.request.res?.responseUrl || response.request._currentUrl}. Status code: ${response.request?.status || response.status}`);
        }
    }

    // EMAILS

    /**
     * @inheritdoc
     */
    public async sendWelcomeEmail(email: string, locale: string): Promise<void> {
        // Send email
        console.log('Sending welcome email to', email);
        await this.sendEmail(
            [email],
            'Welcome to Invoice-Collector',
            [
                { text: 'We are excited to have you on board. You can start using the app after defining your password.', bold: false, center: false, italic: false },
                { text: 'You will receive a second email to define your password.', bold: false, center: false, italic: false },
                { text: null, bold: false, center: false, italic: false },
                { text: 'You are not the requestor? Kindly ignore this message.', bold: false, center: false, italic: true },
            ],
        );
    }

    /**
     * @inheritdoc
     */
    public async sendOtpEmail(email: string, locale: string): Promise<OTP> {
        // Generate verification code
        const code: string = utils.generateVerificationCode();

        // Send email
        console.log('Sending verification code email to', email);
        await this.sendEmail(
            [email],
            'Activation Code',
            [
                { text: 'Hello', bold: false, center: false, italic: false },
                { text: 'Your activation code is:', bold: false, center: false, italic: false },
                { text: code, bold: true, center: true, italic: false },
                { text: 'This code is valid for 10 minutes after the reception of this email.', bold: false, center: false, italic: false },
                { text: null, bold: false, center: false, italic: false },
                { text: 'You are not the requestor? Kindly ignore this message.', bold: false, center: false, italic: true },
            ],
        );

        return {
            code,
            sentAt: Date.now(),
        };
    }

    /**
     * @inheritdoc
     */
    public async sendResetPasswordEmail(email: string, resetToken: string): Promise<string> {
        // Build reset password link
        const resetLink = `${AbstractAnalytics.FRONTEND}/reset-password/${resetToken}`;
        // Send email
        console.log('Sending reset password email to', email);
        await this.sendEmail(
            [email],
            'Define your password',
            [
                { text: 'Hello', bold: false, center: false, italic: false },
                { text: 'You requested to change your password. Please use the following link:', bold: false, center: false, italic: false },
                { text: `<a href="${resetLink}" rel="nofollow noopener noreferrer">Define a new password</a>`, bold: true, center: true, italic: false },
                { text: `This link is valid for ${Math.round(TokenManager.RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS / 60000)} minutes.`, bold: false, center: false, italic: false },
                { text: null, bold: false, center: false, italic: false },
                { text: 'You are not the requestor? Kindly ignore this message.', bold: false, center: false, italic: true },
            ],
        );
        return resetLink;
    }

    /**
     * Sends an email with the specified subject and content to the given recipients.
     * @param to The list of recipient email addresses.
     * @param subject The subject of the email.
     * @param content The content of the email, including text, bold, center, and italic formatting.
     */
    private async sendEmail(
        to: string[],
        subject: string,
        content: {
            text: string | null,
            bold: boolean,
            center: boolean,
            italic: boolean
        }[],
    ): Promise<void> {
        const response = await this.client.post('/email', {
            to,
            subject,
            content,
        });

        // Check response status
        if (response.status !== 200) {
            throw new Error(`Failed to send email to ${to.join(', ')}`);
        }
    }
}
