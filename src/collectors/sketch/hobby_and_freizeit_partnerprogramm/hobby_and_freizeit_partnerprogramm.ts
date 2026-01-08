
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HobbyAndFreizeitPartnerprogrammCollector extends SketchCollector {

    static CONFIG = {
        id: "hobby_and_freizeit_partnerprogramm",
        name: "Hobby & Freizeit | Partnerprogramm",
        description: "i18n.collectors.hobby_and_freizeit_partnerprogramm.description",
        version: "0",
        website: "https://partner.hobby-freizeit.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/797690.jpg",
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
        loginUrl: "https://partner.hobby-freizeit.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HobbyAndFreizeitPartnerprogrammCollector.CONFIG);
    }
}
