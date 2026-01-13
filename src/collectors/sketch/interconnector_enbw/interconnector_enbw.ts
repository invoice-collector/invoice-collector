
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InterconnectorEnbwCollector extends SketchCollector {

    static CONFIG = {
        id: "interconnector_enbw",
        name: "Interconnector ENBW",
        description: "i18n.collectors.interconnector_enbw.description",
        version: "0",
        website: "https://portal.interconnector.de/dashboard/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1259350.jpg",
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
        loginUrl: "https://portal.interconnector.de/dashboard/overview",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InterconnectorEnbwCollector.CONFIG);
    }
}
