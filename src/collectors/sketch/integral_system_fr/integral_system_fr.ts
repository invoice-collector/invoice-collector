
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IntegralSystemFrCollector extends SketchCollector {

    static CONFIG = {
        id: "integral_system_fr",
        name: "Integral System (.fr)",
        description: "i18n.collectors.integral_system_fr.description",
        version: "0",
        website: "https://www.integral-system.fr/fr_FR/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/648509.jpg",
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
        loginUrl: "https://www.integral-system.fr/fr_FR/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IntegralSystemFrCollector.CONFIG);
    }
}
