
import { SketchCollector } from '../../sketchCollector';

export class ArrowCollector extends SketchCollector {

    static CONFIG = {
        id: "arrow",
        name: "ARROW",
        description: "i18n.collectors.arrow.description",
        version: "0",
        website: "https://my.arrowecs.fr/partner-portal/invoices.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/883271.jpg",
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
        entryUrl: "https://my.arrowecs.fr/partner-portal/invoices.do",
    }

    constructor() {
        super(ArrowCollector.CONFIG);
    }
}
