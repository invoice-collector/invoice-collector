
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class C2CircleCollector extends SketchCollector {

    static CONFIG = {
        id: "c2_circle",
        name: "C2 Circle",
        description: "i18n.collectors.c2_circle.description",
        version: "0",
        website: "https://www.c2-circle.com/cyberport/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/786687.jpg",
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
        loginUrl: "https://www.c2-circle.com/cyberport/de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(C2CircleCollector.CONFIG);
    }
}
