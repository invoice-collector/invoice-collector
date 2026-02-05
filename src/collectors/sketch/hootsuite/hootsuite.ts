
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HootsuiteCollector extends SketchCollector {

    static CONFIG = {
        id: "hootsuite",
        name: "Hootsuite",
        description: "i18n.collectors.hootsuite.description",
        version: "0",
        website: "https://hootsuite.com/billing/manage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2204.jpg",
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
        loginUrl: "https://hootsuite.com/billing/manage",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HootsuiteCollector.CONFIG);
    }
}
