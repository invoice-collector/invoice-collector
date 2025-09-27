
import { SketchCollector } from '../../sketchCollector';

export class IncwoCrmCollector extends SketchCollector {

    static CONFIG = {
        id: "incwo_crm",
        name: "INCWO CRM",
        description: "i18n.collectors.incwo_crm.description",
        version: "0",
        website: "https://www.incwo.com/invoices/index/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73831.jpg",
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
        entryUrl: "https://www.incwo.com/invoices/index/",
    }

    constructor() {
        super(IncwoCrmCollector.CONFIG);
    }
}
