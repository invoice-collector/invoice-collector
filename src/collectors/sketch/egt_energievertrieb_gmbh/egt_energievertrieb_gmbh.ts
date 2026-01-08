
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EgtEnergievertriebGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "egt_energievertrieb_gmbh",
        name: "EGT - Energievertrieb GmbH",
        description: "i18n.collectors.egt_energievertrieb_gmbh.description",
        version: "0",
        website: "https://kundenportal.egt.de/sap/bc/ui5_ui5/kibf/gwui_mcf/index.html?CompanyID=KLIEF_211&sap-client=030&sap-language=DE#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3054532.jpg",
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
        loginUrl: "https://kundenportal.egt.de/sap/bc/ui5_ui5/kibf/gwui_mcf/index.html?CompanyID=KLIEF_211&sap-client=030&sap-language=DE#/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EgtEnergievertriebGmbhCollector.CONFIG);
    }
}
