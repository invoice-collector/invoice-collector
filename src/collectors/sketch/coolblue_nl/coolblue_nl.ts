
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CoolblueNlCollector extends SketchCollector {

    static CONFIG = {
        id: "coolblue_nl",
        name: "coolblue.nl",
        description: "i18n.collectors.coolblue_nl.description",
        version: "0",
        website: "https://www.coolblue.nl/mijn-coolblue-account/orderoverzicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20444.jpg",
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
        loginUrl: "https://www.coolblue.nl/mijn-coolblue-account/orderoverzicht",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoolblueNlCollector.CONFIG);
    }
}
