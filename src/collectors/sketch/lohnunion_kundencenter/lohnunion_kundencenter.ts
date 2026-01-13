
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LohnunionKundencenterCollector extends SketchCollector {

    static CONFIG = {
        id: "lohnunion_kundencenter",
        name: "LohnUnion Kundencenter",
        description: "i18n.collectors.lohnunion_kundencenter.description",
        version: "0",
        website: "https://www.lohnunioncenter.de/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778937.jpg",
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
        loginUrl: "https://www.lohnunioncenter.de/de/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LohnunionKundencenterCollector.CONFIG);
    }
}
