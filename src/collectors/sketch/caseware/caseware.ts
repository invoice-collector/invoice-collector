
import { SketchCollector } from '../../sketchCollector';

export class CasewareCollector extends SketchCollector {

    static CONFIG = {
        id: "caseware",
        name: "CaseWare",
        description: "i18n.collectors.caseware.description",
        version: "0",
        website: "https://my.caseware.com/site/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/555388.jpg",
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
        entryUrl: "https://my.caseware.com/site/invoices/",
    }

    constructor() {
        super(CasewareCollector.CONFIG);
    }
}
