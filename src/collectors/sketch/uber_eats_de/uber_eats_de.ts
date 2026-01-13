
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UberEatsDeCollector extends SketchCollector {

    static CONFIG = {
        id: "uber_eats_de",
        name: "Uber Eats (.de)",
        description: "i18n.collectors.uber_eats_de.description",
        version: "0",
        website: "https://www.ubereats.com/de/orders#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1229803.jpg",
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
        loginUrl: "https://www.ubereats.com/de/orders#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UberEatsDeCollector.CONFIG);
    }
}
