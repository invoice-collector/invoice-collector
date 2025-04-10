import axios, { AxiosInstance } from 'axios';
import { LoggableError } from './error'
import * as utils from './utils'
import { TermsConditions } from './model/user';

export class RegistryServer {

    static instance: RegistryServer;
    static VERSION = "v1"

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
    }

    ping() {
        this.client.get("/ping")
        .then(response => {
            console.log("Pong! Invoice-Collector server successfully reached");
        })
        .catch(error => {
            console.error(`Could not reach Invoice-Collector server at ${error.request.res?.responseUrl || error.request._currentUrl}. Status code: ${error.response?.status || error.code}\n
                You are still able to use the product but some features may not work as expected.`);
        });
    }

    logSuccess(collector: string) {
        this.client.post("/log/success", {
            collector
        })
        .then(response => {
            console.log("Invoice-Collector server successfully reached");
        })
        .catch(error => {
            console.error(`Could not reach Invoice-Collector server at ${error.request.res.responseUrl}. Status code: ${error.response.status}`);
        });
    }

    logError(bearer: string, err: LoggableError) {
        this.client.post("/log/error", {
            collector: err.collector,
            version: err.version,
            error: err.name,
            traceback: err.stack,
            source_code: err.source_code,
            screenshot: err.screenshot
        },
        {
            headers: {
                'Authorization': `Bearer ${bearer}`
            }
        })
        .then(response => {
            console.log("Invoice-Collector server successfully reached");
        })
        .catch(error => {
            console.error(`Could not reach Invoice-Collector server at ${error.request.res?.responseUrl || error.request._currentUrl}. Status code: ${error.response?.status || error.code}`);
        });
    }

    async sendTermsConditionsEmail(bearer: string, email: string, locale: string): Promise<TermsConditions> {
        // Generate verification code
        const verificationCode: string = utils.generateVerificationCode();
        // Send email
        console.log("Sending terms and conditions email to", email);
        const response = await this.client.post("/email/terms_conditions", {
            email,
            locale,
            verificationCode,
        },
        {
            headers: {
                'Authorization': `Bearer ${bearer}`
            }
        });

        // Check response status
        if (response.status !== 200) {
            throw new Error(`Failed to send email to ${email}`);
        }

        return {
            verificationCode,
            sentTimestamp: Date.now(),
        };
    }
}
