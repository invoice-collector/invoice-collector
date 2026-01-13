
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AndsafeCollector extends SketchCollector {

    static CONFIG = {
        id: "andsafe",
        name: "andsafe",
        description: "i18n.collectors.andsafe.description",
        version: "0",
        website: "https://andsafe.de/portal/kunden/vertraege",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513842.jpg",
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
        loginUrl: "https://andsafe.de/portal/kunden/vertraege",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AndsafeCollector.CONFIG);
    }
}
