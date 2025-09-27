
import { SketchCollector } from '../../sketchCollector';

export class Pdf4meCollector extends SketchCollector {

    static CONFIG = {
        id: "pdf4me",
        name: "PDF4ME",
        description: "i18n.collectors.pdf4me.description",
        version: "0",
        website: "https://pdf4me.com/de/account/#/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1387435.jpg",
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
        entryUrl: "https://pdf4me.com/de/account/#/invoices/",
    }

    constructor() {
        super(Pdf4meCollector.CONFIG);
    }
}
