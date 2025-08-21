import axios, { AxiosInstance } from 'axios';
import { fullStackTrace, LoggableError } from './error'
import * as utils from './utils'
import { TermsConditions } from './model/user';
import { Server } from './server';
import { AbstractCollector } from './collectors/abstractCollector';

export class RegistryServer {

    static instance: RegistryServer;
    static VERSION = "v1"
    static FRONTEND = utils.getEnvVar("FRONTEND");

    static getInstance(): RegistryServer {
        if (!RegistryServer.instance) {
            RegistryServer.instance = new RegistryServer();
        }
        return RegistryServer.instance;
    }

    private client: AxiosInstance;

    private constructor() {
        const REGISTRY_SERVER_ENDPOINT = utils.getEnvVar("REGISTRY_SERVER_ENDPOINT");
        this.client = axios.create({
            baseURL: `${REGISTRY_SERVER_ENDPOINT}/${RegistryServer.VERSION}`
        });

        const headers = JSON.parse(utils.getEnvVar("REGISTRY_SERVER_HEADERS", "{}"));
        if (headers) {
            for (const [key, value] of Object.entries(headers)) {
                this.client.defaults.headers.common[key] = String(value);
            }
        }
    }

    ping() {
        this.client.get("/ping")
        .then(response => {
            console.log("Pong! Invoice-Collector server successfully reached");
        })
        .catch(error => {
            console.error(`Could not reach Invoice-Collector server at ${error.request.res?.responseUrl || error.request._currentUrl}. Status code: ${error.response?.status || error.code}
You are still able to use the product but some features may not work as expected.`);
        });
    }

    logSuccess(collector: AbstractCollector) {
        this.client.post("/log/success", {
            collector: collector.config.id,
            version: collector.config.version,
        })
        .then(response => {
            console.log("Invoice-Collector server successfully reached");
        })
        .catch(error => {
            console.error(`Could not reach Invoice-Collector server at ${error.request.res.responseUrl}. Status code: ${error.response.status}`);
        });
    }

    logError(email: string, err: LoggableError) {
        this.client.post("/log/error", {
            email,
            collector: err.collector,
            version: err.version,
            error: err.name,
            traceback: fullStackTrace(err),
            source_code: err.source_code,
            screenshot: err.screenshot
        })
        .then(response => {
            console.log("Invoice-Collector server successfully reached");
        })
        .catch(error => {
            console.error(`Could not reach Invoice-Collector server at ${error.request.res?.responseUrl || error.request._currentUrl}. Status code: ${error.response?.status || error.code}`);
        });
    }

    async feedback(type: string, message: string, email: string, user_id: string) {
        const response = await this.client.post("/feedback", {
            from: "app",
            type,
            message,
            email,
            user_id
        });

        // Check response status
        if (response.status !== 200) {
            throw new Error(`Could not reach Invoice-Collector server at ${response.request.res?.responseUrl || response.request._currentUrl}. Status code: ${response.request?.status || response.status}`);
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

    public async sendVerificationCodeEmail(email: string, locale: string): Promise<TermsConditions> {
        // Generate verification code
        const verificationCode: string = utils.generateVerificationCode();

        // Send email
        console.log("Sending verification code email to", email);
        await this.sendEmail(
            [email],
            "Activation Code",
            [
                { text: `Hello`, bold: false, center: false, italic: false },
                { text: `Your activation code is:`, bold: false, center: false, italic: false },
                { text: verificationCode, bold: true, center: true, italic: false },
                { text: "This code is valid for 10 minutes after the reception of this email.", bold: false, center: false, italic: false },
                { text: null, bold: false, center: false, italic: false },
                { text: "You are not the requestor? Kindly ignore this message.", bold: false, center: false, italic: true }
            ]
        );

        return {
            verificationCode,
            sentTimestamp: Date.now(),
        };
    }

    public async sendResetPasswordEmail(email: string, resetToken: string): Promise<void> {
        // Send email
        console.log("Sending reset password email to", email);
        await this.sendEmail(
            [email],
            "Define your password",
            [
                { text: `Hello`, bold: false, center: false, italic: false },
                { text: `You requested to change your password. Please use the following link:`, bold: false, center: false, italic: false },
                { text: `<a href="${RegistryServer.FRONTEND}/reset-password?token=${resetToken}" rel="nofollow noopener noreferrer">Define a new password</a>`, bold: true, center: true, italic: false },
                { text: `This link is valid for ${Math.round(Server.RESET_PASSWORD_TOKEN_VALIDITY_DURATION_MS / 60000)} minutes.`, bold: false, center: false, italic: false },
                { text: null, bold: false, center: false, italic: false },
                { text: "You are not the requestor? Kindly ignore this message.", bold: false, center: false, italic: true }
            ]
        );
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
