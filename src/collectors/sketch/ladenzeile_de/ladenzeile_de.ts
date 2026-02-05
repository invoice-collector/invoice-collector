
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LadenzeileDeCollector extends SketchCollector {

    static CONFIG = {
        id: "ladenzeile_de",
        name: "LadenZeile.de",
        description: "i18n.collectors.ladenzeile_de.description",
        version: "0",
        website: "https://www.ladenzeile.de/account/registration",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56512.jpg",
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
        loginUrl: "https://www.ladenzeile.de/account/registration",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LadenzeileDeCollector.CONFIG);
    }
}
