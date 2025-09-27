
import { SketchCollector } from '../../sketchCollector';

export class OrtelMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "ortel_mobile",
        name: "Ortel Mobile",
        description: "i18n.collectors.ortel_mobile.description",
        version: "0",
        website: "https://mein.ortelmobile.de/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9481.jpg",
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
        entryUrl: "https://mein.ortelmobile.de/de/",
    }

    constructor() {
        super(OrtelMobileCollector.CONFIG);
    }
}
