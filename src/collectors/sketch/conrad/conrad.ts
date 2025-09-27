
import { SketchCollector } from '../../sketchCollector';

export class ConradCollector extends SketchCollector {

    static CONFIG = {
        id: "conrad",
        name: "Conrad",
        description: "i18n.collectors.conrad.description",
        version: "0",
        website: "https://www.conrad.de/de/account.html#/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/35230.jpg",
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
        entryUrl: "https://www.conrad.de/de/account.html#/invoices/",
    }

    constructor() {
        super(ConradCollector.CONFIG);
    }
}
