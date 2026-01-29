
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AlternateCollector extends SketchCollector {

    static CONFIG = {
        id: "alternate",
        name: "Alternate",
        description: "i18n.collectors.alternate.description",
        version: "0",
        website: "https://www.alternate.de/MEIN-KONTO-(B2B)/Meine-Bestellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6462.jpg",
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
        loginUrl: "https://www.alternate.de/MEIN-KONTO-(B2B)/Meine-Bestellungen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AlternateCollector.CONFIG);
    }
}
