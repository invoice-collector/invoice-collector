
import { SketchCollector } from '../../sketchCollector';

export class DkvEuroserviceCollector extends SketchCollector {

    static CONFIG = {
        id: "dkv_euroservice",
        name: "DKV Euroservice",
        description: "i18n.collectors.dkv_euroservice.description",
        version: "0",
        website: "https://www.dkv-euroservice.com/DKVCockpit/sites/content/invoices/invoices.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11668.jpg",
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
        entryUrl: "https://www.dkv-euroservice.com/DKVCockpit/sites/content/invoices/invoices.xhtml",
    }

    constructor() {
        super(DkvEuroserviceCollector.CONFIG);
    }
}
