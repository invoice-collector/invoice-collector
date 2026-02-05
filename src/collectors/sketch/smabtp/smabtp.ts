
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SmabtpCollector extends SketchCollector {

    static CONFIG = {
        id: "smabtp",
        name: "SMABTP",
        description: "i18n.collectors.smabtp.description",
        version: "0",
        website: "https://www.services-smabtp.net/monespace/#/documents/contrats",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730405.jpg",
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
        loginUrl: "https://www.services-smabtp.net/monespace/#/documents/contrats",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SmabtpCollector.CONFIG);
    }
}
