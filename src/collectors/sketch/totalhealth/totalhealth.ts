
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TotalhealthCollector extends SketchCollector {

    static CONFIG = {
        id: "totalhealth",
        name: "TotalHealth",
        description: "i18n.collectors.totalhealth.description",
        version: "0",
        website: "https://totalhealth.ie/member",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/408102.jpg",
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
        loginUrl: "https://totalhealth.ie/member",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TotalhealthCollector.CONFIG);
    }
}
