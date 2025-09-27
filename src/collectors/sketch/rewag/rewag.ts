
import { SketchCollector } from '../../sketchCollector';

export class RewagCollector extends SketchCollector {

    static CONFIG = {
        id: "rewag",
        name: "Rewag",
        description: "i18n.collectors.rewag.description",
        version: "0",
        website: "https://meine.rewag.de/sap/bc/ui5_ui5/sap/zmcf_customer/index.html?sap-client=200&sap-language=DE#/invoiceslatest",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1283523.jpg",
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
        entryUrl: "https://meine.rewag.de/sap/bc/ui5_ui5/sap/zmcf_customer/index.html?sap-client=200&sap-language=DE#/invoiceslatest",
    }

    constructor() {
        super(RewagCollector.CONFIG);
    }
}
