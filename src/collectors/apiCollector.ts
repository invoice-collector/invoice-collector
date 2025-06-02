import axios, { AxiosInstance } from "axios";
import { AbstractCollector, Invoice, DownloadedInvoice, CompleteInvoice } from "./abstractCollector";
import { CollectorError, LoggableError, UnfinishedCollectorError } from '../error';
import { mimetypeFromBase64 } from '../utils';
import { Location } from "../proxy/abstractProxy";
import { Secret } from "../secret_manager/abstractSecretManager";
import { TwofaPromise } from "../collect/twofaPromise";
import { State } from "../model/credential";

export type ApiConfig = {
    name: string,
    description: string,
    instructions?: string,
    version: string,
    website: string,
    logo: string,
    params: {
        [key: string]: {
            name: string,
            placeholder: string,
            mandatory: boolean
        }
    },
    baseUrl: string,
    useProxy?: boolean,
}

export abstract class ApiCollector extends AbstractCollector {

    static TYPE: "api" = 'api';

    instance: AxiosInstance | null;

    constructor(config: ApiConfig) {
        super({
            ...config,
            id: '',
            type: ApiCollector.TYPE,
            useProxy: config.useProxy === undefined ? false : config.useProxy,
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

            return invoices;
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

            return {
                ...downloadedInvoice,
                mimetype: mimetypeFromBase64(downloadedInvoice.data)
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
