import * as crypto from 'crypto';
import { AxiosInstance } from "axios";
import { ApiCollector } from '../../apiCollector';
import { Invoice, DownloadedInvoice } from '../../abstractCollector';
import { AuthenticationError } from '../../../error';
import { generateUserAgent, timestampFromString } from '../../../utils';

export class GazDeBordeauxCollector extends ApiCollector {

    static CONFIG = {
        id: "gazdebordeaux",
        name: "Gaz de Bordeaux",
        description: "i18n.collectors.gazdebordeaux.description",
        version: "0",
        website: "https://gazdebordeaux.fr",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-clwMMGyCf1s8ZlvnIvX6eyjfq98zWKyMQ&s",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            },
            collectAllDocuments: {
                type: "boolean",
                name: "i18n.collectors.gazdebordeaux.collect_all_documents",
                mandatory: false
            }
        },
        baseUrl: "https://espaceclient.gazdebordeaux.fr/api",
    }

    constructor() {
        super(GazDeBordeauxCollector.CONFIG);
    }

    async collect(instance: AxiosInstance, params: any): Promise<any[]> {

        instance.defaults.headers.common['User-Agent'] = generateUserAgent();
        instance.defaults.headers.common['Content-Type'] = 'application/json';

        // Get Authentication tokens
        const token = await instance.post('/authentication-token', {
            "email": params.email,
            "password": params.password
        }, {
            validateStatus: () => true
        });
        if (token.status != 201) {
            throw new AuthenticationError('i18n.collectors.all.authentication_error', this);
        }

        // Set Authorization headers
        instance.defaults.headers.common['Authorization'] = `Bearer ${token.data.token}`;

        // Get personals infos
        const me = (await instance.get('/me')).data;

        let invoices: Invoice[] = [];

        // Get documents
        for (let contract of me.contracts) {
            const documents = (await instance.get(`/documents/${contract.id}`)).data;

            // Get invoices
            for (let invoice of documents.invoices) {
                invoices.push({
                    id: invoice.code,
                    timestamp: timestampFromString(invoice.date, "dd/MM/yyyy", 'fr'),
                    amount: `${invoice.amount.toString().replace('.',',')} €`,
                    link: `https://espaceclient.gazdebordeaux.fr/api/document/download?contractId=${contract.id}&documentId=${invoice.id}&documentType=${invoice.type}`,
                    metadata: {
                        name: `Facture n°${invoice.code}`,
                        contractId: contract.id,
                        [contract.type === "elec" ? "pdl" : "pce"]: contract.pdc,
                        type: invoice.type,
                        documentId: invoice.id,
                        documentType: 'invoice'
                    }
                })
            }

            if ("collectAllDocuments" in params && params.collectAllDocuments) {
                // Get contacts	
                for (let contact of documents.contacts) {
                    invoices.push({
                        id: crypto.createHash('sha256').update(contact.link).digest('hex'),
                        timestamp: timestampFromString(contact.date, "dd/MM/yyyy", 'fr'),
                        link: contact.link,
                        metadata: {
                            name: contact.name,
                            contractId: contract.id,
                            [contract.type === "elec" ? "pdl" : "pce"]: contract.pdc,
                            documentType: "contact",
                        }
                    })
                }

                // Get contractDocuments.termsAndCondition
                invoices.push({
                    id: crypto.createHash('sha256').update(documents.contractDocuments.termsAndCondition.link).digest('hex'),
                    timestamp: timestampFromString(documents.contractDocuments.termsAndCondition.date, "dd/MM/yyyy", 'fr'),
                    link: documents.contractDocuments.termsAndCondition.link,
                    metadata: {
                        name: documents.contractDocuments.termsAndCondition.name,
                        contractId: contract.id,
                        [contract.type === "elec" ? "pdl" : "pce"]: contract.pdc,
                        documentType: "cgv"
                    }
                })

                // Get contractDocuments.pricingSheet
                invoices.push({
                    id: crypto.createHash('sha256').update(documents.contractDocuments.termsAndCondition.code + documents.contractDocuments.pricingSheet.date).digest('hex'),
                    timestamp: timestampFromString(documents.contractDocuments.pricingSheet.date, "dd/MM/yyyy", 'fr'),
                    link: `https://espaceclient.gazdebordeaux.fr/api/document/download?contractId=${contract.id}&documentId=${documents.contractDocuments.pricingSheet.id}&documentType=${documents.contractDocuments.pricingSheet.type}`,
                    metadata: {
                        name: documents.contractDocuments.pricingSheet.name,
                        contractId: contract.id,
                        [contract.type === "elec" ? "pdl" : "pce"]: contract.pdc || undefined,
                        type: documents.contractDocuments.pricingSheet.type,
                        documentId: documents.contractDocuments.pricingSheet.id,
                        documentType: "pricingSheet"
                    }
                });
            }
        }

        return invoices;
    }

    // Define custom method to download invoice
    async download(instance: AxiosInstance, invoice: Invoice): Promise<DownloadedInvoice> {
        let response;

        if (invoice.link.includes("api/document/download")) {
            response = await instance.post("/document/download", {
                documentId: invoice.metadata?.documentId,
                documentType: invoice.metadata?.type,
                contractId:invoice.metadata?.contractId
            },{
                responseType: 'arraybuffer',
            });
        } else {
            response = await instance.get(invoice.link, {
                responseType: 'arraybuffer',
            });
        }

        return {
            ...invoice,
            documents: [
                response.data.toString("base64")
            ]
        }
    }
}
