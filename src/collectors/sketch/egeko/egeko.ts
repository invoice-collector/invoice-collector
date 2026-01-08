
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EgekoCollector extends SketchCollector {

    static CONFIG = {
        id: "egeko",
        name: "Egeko",
        description: "i18n.collectors.egeko.description",
        version: "0",
        website: "http://www.egeko.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56813.jpg",
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
        loginUrl: "http://www.egeko.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EgekoCollector.CONFIG);
    }
}
