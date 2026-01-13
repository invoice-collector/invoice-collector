
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Check24PartnerprogrammCollector extends SketchCollector {

    static CONFIG = {
        id: "check24_partnerprogramm",
        name: "Check24 - Partnerprogramm",
        description: "i18n.collectors.check24_partnerprogramm.description",
        version: "0",
        website: "https://www.check24-partnerprogramm.de/berichte/gutschriften/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59730.jpg",
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
        loginUrl: "https://www.check24-partnerprogramm.de/berichte/gutschriften/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Check24PartnerprogrammCollector.CONFIG);
    }
}
