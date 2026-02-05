
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MedisignCollector extends SketchCollector {

    static CONFIG = {
        id: "medisign",
        name: "medisign",
        description: "i18n.collectors.medisign.description",
        version: "0",
        website: "http://www.medisign.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91321.jpg",
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
        loginUrl: "http://www.medisign.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MedisignCollector.CONFIG);
    }
}
