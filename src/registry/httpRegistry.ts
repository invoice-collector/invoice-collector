
import axios, { AxiosInstance } from 'axios';
import { fullStackTrace, LoggableError } from '../error';
import * as utils from '../utils';
import { Server } from '../server';
import { AbstractCollector, Config } from '../collectors/abstractCollector';
import { AbstractRegistry, OTP } from './abstractRegistry';

export class HttpRegistry extends AbstractRegistry {

    private client: AxiosInstance;

    public constructor(registryServerEndpoint: string) {
        super();
        this.client = axios.create({
            baseURL: `${registryServerEndpoint}/${AbstractRegistry.VERSION}`
        });

        const headers = JSON.parse(utils.getEnvVar("REGISTRY_SERVER_HEADERS", "{}"));
        if (headers) {
            for (const [key, value] of Object.entries(headers)) {
                this.client.defaults.headers.common[key] = String(value);
            }
        }
    }

    ping(): void {
        this.client.get("/ping")
        .then(response => {
            console.log("Pong! Registry server successfully reached");
        })
        .catch(error => {
            console.error(`Could not reach registry server at ${error.request.res?.responseUrl || error.request._currentUrl}. Status code: ${error.response?.status || error.code}
You are still able to use the product but some features may not work as expected.`);
        });
    }

    logSuccess(collector: AbstractCollector<Config>): void {
        this.client.post("/log/success", {
            collector: collector.config.id,
            version: collector.config.version,
        })
        .then(response => {
            console.log("Registry server successfully reached");
        })
        .catch(error => {
            console.error(`Could not reach registry server at ${error.request.res?.responseUrl || error.request._currentUrl}. Status code: ${error.response?.status || error.code}`);
        });
    }

    logError(email: string, remoteId: string, err: LoggableError): void {
        this.client.post("/log/error", {
            email,
            collector: err.collector_id,
            name: err.collector_name,
            version: err.collector_version,
            remoteId,
            url: err.url,
            error: err.name,
            traceback: fullStackTrace(err),
            source_code: err.source_code,
            screenshot: err.screenshot
        })
        .then(response => {
            console.log("Registry server successfully reached");
        })
        .catch(error => {
            console.error(`Could not reach registry server at ${error.request.res?.responseUrl || error.request._currentUrl}. Status code: ${error.response?.status || error.code}`);
        });
    }

    async feedback(type: string, message: string, email: string, user_id: string): Promise<void> {
        const response = await this.client.post("/feedback", {
            from: "app",
            type,
            message,
            email,
            user_id
        });

        // Check response status
        if (response.status !== 200) {
            throw new Error(`Could not reach registry server at ${response.request.res?.responseUrl || response.request._currentUrl}. Status code: ${response.request?.status || response.status}`);
        };
    }

    // EMAILS

    public async sendWelcomeEmail(email: string, locale: string): Promise<void> {
        // Send email
        console.log("Sending welcome email to", email);
        await this.sendEmail(
            [email],
            "Welcome to Invoice-Collector",
            [
                { text: `We are excited to have you on board. You can start using the app after defining your password.`, bold: false, center: false, italic: false },
                { text: "You will receive a second email to define your password.", bold: false, center: false, italic: false },
                { text: null, bold: false, center: false, italic: false },
                { text: "You are not the requestor? Kindly ignore this message.", bold: false, center: false, italic: true }
            ]
        );
    }

    public async sendOtpEmail(email: string, locale: string): Promise<OTP> {
        // Generate verification code
        const code: string = utils.generateVerificationCode();

        // Send email
        console.log("Sending verification code email to", email);
        await this.sendEmail(
            [email],
            "Activation Code",
            [
                { text: `Hello`, bold: false, center: false, italic: false },
                { text: `Your activation code is:`, bold: false, center: false, italic: false },
                { text: code, bold: true, center: true, italic: false },
                { text: "This code is valid for 10 minutes after the reception of this email.", bold: false, center: false, italic: false },
                { text: null, bold: false, center: false, italic: false },
                { text: "You are not the requestor? Kindly ignore this message.", bold: false, center: false, italic: true }
            ]
        );

        return {
            code: code,
            sentAt: Date.now()
        };
    }

    public async sendResetPasswordEmail(email: string, resetToken: string): Promise<string> {
        // Build reset password link
        const resetLink = `${AbstractRegistry.FRONTEND}/reset-password/${resetToken}`;
        // Send email
        console.log("Sending reset password email to", email);
        await this.sendEmail(
            [email],
            "Define your password",
            [
                { text: `Hello`, bold: false, center: false, italic: false },
                { text: `You requested to change your password. Please use the following link:`, bold: false, center: false, italic: false },
                { text: `<a href="${resetLink}" rel="nofollow noopener noreferrer">Define a new password</a>`, bold: true, center: true, italic: false },
                { text: `This link is valid for ${Math.round(Server.RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS / 60000)} minutes.`, bold: false, center: false, italic: false },
                { text: null, bold: false, center: false, italic: false },
                { text: "You are not the requestor? Kindly ignore this message.", bold: false, center: false, italic: true }
            ]
        );
        return resetLink;
    }

    private async sendEmail(
        to: string[],
        subject: string,
        content: {
            text: string | null,
            bold: boolean,
            center: boolean,
            italic: boolean
        }[]
    ): Promise<void> {
        const response = await this.client.post("/email", {
            to,
            subject,
            content,
        });

        // Check response status
        if (response.status !== 200) {
            throw new Error(`Failed to send email to ${to.join(", ")}`);
        }
    }
}
