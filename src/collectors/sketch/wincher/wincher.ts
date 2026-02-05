
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WincherCollector extends SketchCollector {

    static CONFIG = {
        id: "wincher",
        name: "Wincher",
        description: "i18n.collectors.wincher.description",
        version: "0",
        website: "http://www.wincher.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69261.jpg",
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
        loginUrl: "http://www.wincher.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WincherCollector.CONFIG);
    }
}
