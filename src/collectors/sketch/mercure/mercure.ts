
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MercureCollector extends SketchCollector {

    static CONFIG = {
        id: "mercure",
        name: "Mercure",
        description: "i18n.collectors.mercure.description",
        version: "0",
        website: "https://mercure.rocks/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/783403.jpg",
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
        loginUrl: "https://mercure.rocks/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MercureCollector.CONFIG);
    }
}
