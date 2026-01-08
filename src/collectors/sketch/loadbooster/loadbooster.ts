
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LoadboosterCollector extends SketchCollector {

    static CONFIG = {
        id: "loadbooster",
        name: "LoadBooster",
        description: "i18n.collectors.loadbooster.description",
        version: "0",
        website: "http://www.loadbooster.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37595.jpg",
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
        loginUrl: "http://www.loadbooster.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LoadboosterCollector.CONFIG);
    }
}
