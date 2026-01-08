
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StoriesDieBuchhandlungCollector extends SketchCollector {

    static CONFIG = {
        id: "stories_die_buchhandlung",
        name: "Stories! Die Buchhandlung",
        description: "i18n.collectors.stories_die_buchhandlung.description",
        version: "0",
        website: "https://www.stories-hamburg.de/shop/kundenkonto/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730443.jpg",
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
        loginUrl: "https://www.stories-hamburg.de/shop/kundenkonto/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StoriesDieBuchhandlungCollector.CONFIG);
    }
}
