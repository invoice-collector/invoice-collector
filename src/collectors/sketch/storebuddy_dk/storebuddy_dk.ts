
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StorebuddyDkCollector extends SketchCollector {

    static CONFIG = {
        id: "storebuddy_dk",
        name: "storebuddy.dk",
        description: "i18n.collectors.storebuddy_dk.description",
        version: "0",
        website: "https://app.storebuddy.dk/konto/fakturarer",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124625.jpg",
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
        loginUrl: "https://app.storebuddy.dk/konto/fakturarer",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StorebuddyDkCollector.CONFIG);
    }
}
