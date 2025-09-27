
import { SketchCollector } from '../../sketchCollector';

export class ConradNlCollector extends SketchCollector {

    static CONFIG = {
        id: "conrad_nl",
        name: "Conrad.nl",
        description: "i18n.collectors.conrad_nl.description",
        version: "0",
        website: "https://www.conrad.nl/nl/account.html#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1416078.jpg",
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
        entryUrl: "https://www.conrad.nl/nl/account.html#/invoices",
    }

    constructor() {
        super(ConradNlCollector.CONFIG);
    }
}
