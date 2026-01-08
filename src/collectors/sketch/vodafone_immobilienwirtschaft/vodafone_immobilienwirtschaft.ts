
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VodafoneImmobilienwirtschaftCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_immobilienwirtschaft",
        name: "Vodafone Immobilienwirtschaft",
        description: "i18n.collectors.vodafone_immobilienwirtschaft.description",
        version: "0",
        website: "https://wowi.unitymedia.de/PWRKP/faces/KP",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/553395.jpg",
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
        loginUrl: "https://wowi.unitymedia.de/PWRKP/faces/KP",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VodafoneImmobilienwirtschaftCollector.CONFIG);
    }
}
