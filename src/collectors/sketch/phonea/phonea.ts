
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PhoneaCollector extends SketchCollector {

    static CONFIG = {
        id: "phonea",
        name: "Phonea",
        description: "i18n.collectors.phonea.description",
        version: "0",
        website: "https://login.phonea.de/rechnungen.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/430.jpg",
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
        loginUrl: "https://login.phonea.de/rechnungen.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PhoneaCollector.CONFIG);
    }
}
