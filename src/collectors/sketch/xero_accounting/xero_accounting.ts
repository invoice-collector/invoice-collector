
import { SketchCollector } from '../../sketchCollector';

export class XeroAccountingCollector extends SketchCollector {

    static CONFIG = {
        id: "xero_accounting",
        name: "XERO Accounting",
        description: "i18n.collectors.xero_accounting.description",
        version: "0",
        website: "https://login.xero.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20484.jpg",
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
        entryUrl: "https://login.xero.com/",
    }

    constructor() {
        super(XeroAccountingCollector.CONFIG);
    }
}
