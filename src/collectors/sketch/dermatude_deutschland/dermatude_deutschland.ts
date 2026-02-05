
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DermatudeDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "dermatude_deutschland",
        name: "Dermatude Deutschland",
        description: "i18n.collectors.dermatude_deutschland.description",
        version: "0",
        website: "https://www.dermatude-deutschland.de/mein-konto/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2636436.jpg",
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
        loginUrl: "https://www.dermatude-deutschland.de/mein-konto/orders/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DermatudeDeutschlandCollector.CONFIG);
    }
}
