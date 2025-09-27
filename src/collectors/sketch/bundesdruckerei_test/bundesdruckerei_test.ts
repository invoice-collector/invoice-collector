
import { SketchCollector } from '../../sketchCollector';

export class BundesdruckereiTestCollector extends SketchCollector {

    static CONFIG = {
        id: "bundesdruckerei_test",
        name: "Bundesdruckerei Test",
        description: "i18n.collectors.bundesdruckerei_test.description",
        version: "0",
        website: "https://test.xrechnung-bdr.de/portal/Documents/#/Inbox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778192.jpg",
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
        entryUrl: "https://test.xrechnung-bdr.de/portal/Documents/#/Inbox",
    }

    constructor() {
        super(BundesdruckereiTestCollector.CONFIG);
    }
}
