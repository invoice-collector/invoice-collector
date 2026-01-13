
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LEauDuValenciennoisCollector extends SketchCollector {

    static CONFIG = {
        id: "l_eau_du_valenciennois",
        name: "l'eau du Valenciennois",
        description: "i18n.collectors.l_eau_du_valenciennois.description",
        version: "0",
        website: "https://leauduvalenciennois.toutsurmoneau.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/837728.jpg",
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
        loginUrl: "https://leauduvalenciennois.toutsurmoneau.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LEauDuValenciennoisCollector.CONFIG);
    }
}
