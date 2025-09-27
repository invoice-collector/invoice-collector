
import { SketchCollector } from '../../sketchCollector';

export class DrewagCollector extends SketchCollector {

    static CONFIG = {
        id: "drewag",
        name: "Drewag",
        description: "i18n.collectors.drewag.description",
        version: "0",
        website: "https://onlineservice.drewag.de/sap/bc/ui5_ui5/sap/zemc_ui/index.html?CompanyID=DREWAG&sap-client=630#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798002.jpg",
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
        entryUrl: "https://onlineservice.drewag.de/sap/bc/ui5_ui5/sap/zemc_ui/index.html?CompanyID=DREWAG&sap-client=630#/invoices",
    }

    constructor() {
        super(DrewagCollector.CONFIG);
    }
}
