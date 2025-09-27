
import { SketchCollector } from '../../sketchCollector';

export class BildconnectCollector extends SketchCollector {

    static CONFIG = {
        id: "bildconnect",
        name: "BildConnect",
        description: "i18n.collectors.bildconnect.description",
        version: "0",
        website: "https://service.bildconnect.de/mytariff/invoice/showAll",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/744019.jpg",
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
        entryUrl: "https://service.bildconnect.de/mytariff/invoice/showAll",
    }

    constructor() {
        super(BildconnectCollector.CONFIG);
    }
}
