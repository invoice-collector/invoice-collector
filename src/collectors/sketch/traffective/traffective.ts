
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TraffectiveCollector extends SketchCollector {

    static CONFIG = {
        id: "traffective",
        name: "Traffective",
        description: "i18n.collectors.traffective.description",
        version: "0",
        website: "https://cockpit.traffective.com/payment/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/233026.jpg",
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
        loginUrl: "https://cockpit.traffective.com/payment/list",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TraffectiveCollector.CONFIG);
    }
}
