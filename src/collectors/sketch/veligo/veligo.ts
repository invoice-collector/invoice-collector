
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VeligoCollector extends SketchCollector {

    static CONFIG = {
        id: "veligo",
        name: "Veligo",
        description: "i18n.collectors.veligo.description",
        version: "0",
        website: "https://mon-espace.veligo-location.fr/home/offer",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/746768.jpg",
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
        loginUrl: "https://mon-espace.veligo-location.fr/home/offer",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VeligoCollector.CONFIG);
    }
}
