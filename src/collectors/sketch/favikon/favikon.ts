
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FavikonCollector extends SketchCollector {

    static CONFIG = {
        id: "favikon",
        name: "Favikon",
        description: "i18n.collectors.favikon.description",
        version: "0",
        website: "https://app.favikon.com/signin/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4693340.jpg",
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
        loginUrl: "https://app.favikon.com/signin/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FavikonCollector.CONFIG);
    }
}
