
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BraunschweigerVersorgungsAgCollector extends SketchCollector {

    static CONFIG = {
        id: "braunschweiger_versorgungs_ag",
        name: "Braunschweiger Versorgungs AG",
        description: "i18n.collectors.braunschweiger_versorgungs_ag.description",
        version: "0",
        website: "https://meinportal.bs-energy.de/css/public/bsen/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90991.jpg",
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
        loginUrl: "https://meinportal.bs-energy.de/css/public/bsen/#/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BraunschweigerVersorgungsAgCollector.CONFIG);
    }
}
