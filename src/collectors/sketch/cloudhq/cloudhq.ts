
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CloudhqCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudhq",
        name: "cloudHQ",
        description: "i18n.collectors.cloudhq.description",
        version: "0",
        website: "https://www.cloudhq.net/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105258.jpg",
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
        loginUrl: "https://www.cloudhq.net/account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CloudhqCollector.CONFIG);
    }
}
