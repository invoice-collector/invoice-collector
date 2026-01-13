
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeMeeraneGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_meerane_gmbh",
        name: "STADTWERKE MEERANE GMBH",
        description: "i18n.collectors.stadtwerke_meerane_gmbh.description",
        version: "0",
        website: "https://kundenportal.sw-meerane.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/794864.jpg",
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
        loginUrl: "https://kundenportal.sw-meerane.de/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeMeeraneGmbhCollector.CONFIG);
    }
}
