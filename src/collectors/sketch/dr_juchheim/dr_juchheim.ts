
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DrJuchheimCollector extends SketchCollector {

    static CONFIG = {
        id: "dr_juchheim",
        name: "Dr. Juchheim",
        description: "i18n.collectors.dr_juchheim.description",
        version: "0",
        website: "https://doritmeyer.juchheim-methode.de/de/partner/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2038716.jpg",
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
        loginUrl: "https://doritmeyer.juchheim-methode.de/de/partner/orders",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DrJuchheimCollector.CONFIG);
    }
}
