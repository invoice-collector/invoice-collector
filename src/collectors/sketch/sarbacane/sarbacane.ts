
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SarbacaneCollector extends SketchCollector {

    static CONFIG = {
        id: "sarbacane",
        name: "Sarbacane",
        description: "i18n.collectors.sarbacane.description",
        version: "0",
        website: "https://sarbacane.app/#!/auth/connection",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137721.jpg",
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
        loginUrl: "https://sarbacane.app/#!/auth/connection",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SarbacaneCollector.CONFIG);
    }
}
