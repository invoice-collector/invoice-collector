import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType, CollectorAuthenticationMethod } from '../../abstractCollector';

export class AelBureautiqueCollector extends SketchCollector {

    static CONFIG = {
        id: "aelbureautique",
        name: "Ael bureautique",
        description: "i18n.collectors.aelbureautique.description",
        version: "0",
        website: "https://aelbureautique.com/",
        logo: "https://aelbureautique.com/IMG/logo/logo-ael.svg",
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
        loginUrl: "https://aelbureautique.fournituredebureau.net/connexion.html",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AelBureautiqueCollector.CONFIG);
    }
}
