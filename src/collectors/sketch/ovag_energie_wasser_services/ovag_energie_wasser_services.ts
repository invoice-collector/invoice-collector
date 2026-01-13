
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OvagEnergieWasserServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "ovag_energie_wasser_services",
        name: "ovag. Energie. Wasser. Services",
        description: "i18n.collectors.ovag_energie_wasser_services.description",
        version: "0",
        website: "https://onlineservice.ovag.de/sap/bc/ui5_ui5/sap/zmcf_ui/index.html?CompanyID=OVAG&sap-client=002&sap-language=DE#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1210753.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://onlineservice.ovag.de/sap/bc/ui5_ui5/sap/zmcf_ui/index.html?CompanyID=OVAG&sap-client=002&sap-language=DE#/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OvagEnergieWasserServicesCollector.CONFIG);
    }
}
