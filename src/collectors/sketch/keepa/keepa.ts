
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KeepaCollector extends SketchCollector {

    static CONFIG = {
        id: "keepa",
        name: "Keepa",
        description: "i18n.collectors.keepa.description",
        version: "0",
        website: "https://keepa.com/#!",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131572.jpg",
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
        loginUrl: "https://keepa.com/#!",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KeepaCollector.CONFIG);
    }
}
