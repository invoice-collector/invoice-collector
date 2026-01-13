
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GelsenwasserCollector extends SketchCollector {

    static CONFIG = {
        id: "gelsenwasser",
        name: "Gelsenwasser",
        description: "i18n.collectors.gelsenwasser.description",
        version: "0",
        website: "https://onlineservice.gelsenwasser.de/sap/bc/ui5_ui5/sap/zmcf_ui/index.html?CompanyID=1101000_GWAG&sap-client=110",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105560.jpg",
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
        loginUrl: "https://onlineservice.gelsenwasser.de/sap/bc/ui5_ui5/sap/zmcf_ui/index.html?CompanyID=1101000_GWAG&sap-client=110",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GelsenwasserCollector.CONFIG);
    }
}
