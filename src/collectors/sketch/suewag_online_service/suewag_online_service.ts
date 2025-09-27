
import { SketchCollector } from '../../sketchCollector';

export class SuewagOnlineServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "suewag_online_service",
        name: "SUEWAG Online Service",
        description: "i18n.collectors.suewag_online_service.description",
        version: "0",
        website: "https://online-service.suewag.de/sap/bc/ui5_ui5/sap/zisuumc_b2c_pri/index.html?CompanyID=SUEWAG&sap-client=001&sap-language=DE#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2387798.jpg",
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
        entryUrl: "https://online-service.suewag.de/sap/bc/ui5_ui5/sap/zisuumc_b2c_pri/index.html?CompanyID=SUEWAG&sap-client=001&sap-language=DE#/invoices",
    }

    constructor() {
        super(SuewagOnlineServiceCollector.CONFIG);
    }
}
