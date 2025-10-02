
import { SketchCollector } from '../../sketchCollector';

export class IngramMicroCloudBeCollector extends SketchCollector {

    static CONFIG = {
        id: "ingram_micro_cloud_be",
        name: "Ingram Micro Cloud (.be)",
        description: "i18n.collectors.ingram_micro_cloud_be.description",
        version: "0",
        website: "https://cp.be.eu.cloud.im/ccp/v/pa/ccp-billing/history-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842030.jpg",
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
            }
        },
        entryUrl: "https://cp.be.eu.cloud.im/ccp/v/pa/ccp-billing/history-invoices",
    }

    constructor() {
        super(IngramMicroCloudBeCollector.CONFIG);
    }
}
