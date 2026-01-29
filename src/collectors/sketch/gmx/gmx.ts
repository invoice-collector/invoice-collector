
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GmxCollector extends SketchCollector {

    static CONFIG = {
        id: "gmx",
        name: "GMX",
        description: "i18n.collectors.gmx.description",
        version: "0",
        website: "http://www.gmx.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8033.jpg",
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
        loginUrl: "http://www.gmx.net",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GmxCollector.CONFIG);
    }
}
