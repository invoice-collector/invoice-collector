
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SetasignCollector extends SketchCollector {

    static CONFIG = {
        id: "setasign",
        name: "Setasign",
        description: "i18n.collectors.setasign.description",
        version: "0",
        website: "http://www.setasign.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39846.jpg",
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
        loginUrl: "http://www.setasign.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SetasignCollector.CONFIG);
    }
}
