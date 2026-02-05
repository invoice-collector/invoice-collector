
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MyobCollector extends SketchCollector {

    static CONFIG = {
        id: "myob",
        name: "MYOB",
        description: "i18n.collectors.myob.description",
        version: "0",
        website: "https://www.myob.com/au",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/748584.jpg",
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
        loginUrl: "https://www.myob.com/au",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MyobCollector.CONFIG);
    }
}
