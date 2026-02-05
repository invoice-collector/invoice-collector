
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AudibleCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "audible_co_uk",
        name: "Audible.co.uk",
        description: "i18n.collectors.audible_co_uk.description",
        version: "0",
        website: "https://www.audible.co.uk/purchase-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/62551.jpg",
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
        loginUrl: "https://www.audible.co.uk/purchase-history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AudibleCoUkCollector.CONFIG);
    }
}
