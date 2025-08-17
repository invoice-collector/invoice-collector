import { Temporal} from '@js-temporal/polyfill';
import axios, { AxiosInstance } from "axios";
import { AbstractCollector, Invoice, DownloadedInvoice, CompleteInvoice, CollectorType, CollectorState, CollectorCaptcha } from "./abstractCollector";
import { CollectorError, LoggableError, UnfinishedCollectorError } from '../error';
import { mimetypeFromBase64 } from '../utils';
import { Location } from "../proxy/abstractProxy";
import { Secret } from "../secret_manager/abstractSecretManager";
import { TwofaPromise } from "../collect/twofaPromise";
import { State } from "../model/credential";
import * as utils from '../utils';


export type ApiConfig = {
    id: string,
    name: string,
    description: string,
    instructions?: string,
    version: string,
    website: string,
    logo: string,
    params: {
        [key: string]: {
            type: string,
            name: string,
            placeholder: string,
            mandatory: boolean
        }
    },
    state?: CollectorState,
    baseUrl: string,
    useProxy?: boolean,
}

export abstract class ApiCollector extends AbstractCollector {
    static DEFAULT_TIMEZONE = 'Europe/Paris';

    instance: AxiosInstance | null;

    constructor(config: ApiConfig) {
        super({
            ...config,
            type: CollectorType.API,
            useProxy: config.useProxy === undefined ? false : config.useProxy,
            state: config.state || CollectorState.ACTIVE,
            loadImages: false, // API collectors do not need to load images
            autoLogin: {}   // No auto login by default
    });
        this.instance = null;
    }

    async _collect(state: State, secret: Secret, location: Location | null, twofa_promise: TwofaPromise): Promise<Invoice[]> {
        console.log(`API Collector, do not use proxy`);

        // Initialise axios instance
        this.instance = axios.create({
            baseURL: this.config.baseUrl,
            timeout: 1000
        });

        try {
            // Set progress step to collecting
            state.update(State._5_COLLECTING);

            // Collect invoices
            const invoices = await this.collect(this.instance, secret.params)
            
            // If invoices is undefined, collector is unfinished
            if (invoices === undefined) {
                throw new UnfinishedCollectorError(this);
            }

            return invoices.map(newInvoice => ({
                id: newInvoice.id.trim(),
                datetime: newInvoice.datetime || Temporal.Instant.fromEpochMilliseconds(newInvoice.timestamp || 0).toString({timeZone: ApiCollector.DEFAULT_TIMEZONE}),
                amount: newInvoice.amount?.trim(),
                link: newInvoice.link?.trim(),
                metadata: newInvoice.metadata || {},
                downloadData: newInvoice.downloadData || {}
            }));
        } catch (error) {
            // Get url
            const url = this.instance?.defaults.baseURL || '';
            
            if (error instanceof LoggableError) {
                error.url = url;
            }
            if (error instanceof CollectorError) {
                throw error;
            }

            // For unexpected error happening during the collection, log the error
            let loggableError = new LoggableError(
                "An error occured while collecting invoice from API",
                this,
                { cause: error }
            );
            loggableError.url = url;
            throw loggableError;
        }
    }

    async _download(invoice: Invoice): Promise<CompleteInvoice> {
        if (!this.instance) {
            throw new Error('Instance is not initialized.');
        }

        try {
            let downloadedInvoice = await this.download(this.instance, invoice);

            // If data field is missing, collector is unfinished
            if (!downloadedInvoice) {
                throw new UnfinishedCollectorError(this);
            }

            // If documents field is empty
            if (downloadedInvoice.documents.length === 0) {
                throw new LoggableError(`No documents downloaded`, this);
            }

            let data;
            // If one document downloaded
            if (downloadedInvoice.documents.length === 1) {
                data = downloadedInvoice.documents[0];
            }
            else {
                data = await utils.mergePdfDocuments(downloadedInvoice.documents);
            }

            return {
                ...downloadedInvoice,
                datetime: downloadedInvoice.datetime || "",
                data,
                mimetype: mimetypeFromBase64(data),
                collected_timestamp: Date.now(),
                metadata: downloadedInvoice.metadata || {}
            };
        } catch (error) {
            // Get url
            const url = this.instance?.defaults.baseURL || '';
            
            if (error instanceof LoggableError) {
                error.url = url;
            }
            if (error instanceof CollectorError) {
                throw error;
            }

            // For unexpected error happening during the download, log the error
            let loggableError = new LoggableError(
                "An error occured while downloading invoice from API",
                this,
                { cause: error }
            );
            loggableError.url = url;
            throw loggableError;
        }
    }
    
    //NOT IMPLEMENTED
    abstract collect(instance: AxiosInstance, params: any): Promise<Invoice[] | void>;
    
    abstract download(instance: AxiosInstance, invoice: Invoice): Promise<DownloadedInvoice>;
}
