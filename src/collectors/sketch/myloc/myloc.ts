
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MylocCollector extends SketchCollector {

    static CONFIG = {
        id: "myloc",
        name: "myLoc",
        description: "i18n.collectors.myloc.description",
        version: "0",
        website: "https://zkm.myloc.de/s/billing/overview/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40174.jpg",
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
        loginUrl: "https://zkm.myloc.de/s/billing/overview/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MylocCollector.CONFIG);
    }
}
