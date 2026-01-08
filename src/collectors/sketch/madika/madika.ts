
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MadikaCollector extends SketchCollector {

    static CONFIG = {
        id: "madika",
        name: "madika",
        description: "i18n.collectors.madika.description",
        version: "0",
        website: "https://www.madika.de/bestellung/28a61vo3r79tw6w19",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103746.jpg",
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
        loginUrl: "https://www.madika.de/bestellung/28a61vo3r79tw6w19",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MadikaCollector.CONFIG);
    }
}
