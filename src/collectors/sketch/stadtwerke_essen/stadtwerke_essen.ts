
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeEssenCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_essen",
        name: "Stadtwerke Essen",
        description: "i18n.collectors.stadtwerke_essen.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-essen.de/sap/bc/ui5_ui5/sap/zswe_cu_prv/index.html?sap-client=001&sap-language=DE#/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1229736.jpg",
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
        entryUrl: "https://kundenportal.stadtwerke-essen.de/sap/bc/ui5_ui5/sap/zswe_cu_prv/index.html?sap-client=001&sap-language=DE#/invoice",
    }

    constructor() {
        super(StadtwerkeEssenCollector.CONFIG);
    }
}
