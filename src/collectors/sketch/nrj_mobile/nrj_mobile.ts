
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NrjMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "nrj_mobile",
        name: "NRJ Mobile",
        description: "i18n.collectors.nrj_mobile.description",
        version: "0",
        website: "https://www.nrjmobile.fr/identification/vip-nrj-mobile.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27325.jpg",
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
        loginUrl: "https://www.nrjmobile.fr/identification/vip-nrj-mobile.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NrjMobileCollector.CONFIG);
    }
}
