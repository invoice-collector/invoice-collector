
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EsbEnergieSudbayernKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "esb_energie_sudbayern_kundenportal",
        name: "ESB Energie Sudbayern Kundenportal",
        description: "i18n.collectors.esb_energie_sudbayern_kundenportal.description",
        version: "0",
        website: "https://onlineservice.esb.de/portal/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2515182.jpg",
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
        loginUrl: "https://onlineservice.esb.de/portal/dashboard",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EsbEnergieSudbayernKundenportalCollector.CONFIG);
    }
}
