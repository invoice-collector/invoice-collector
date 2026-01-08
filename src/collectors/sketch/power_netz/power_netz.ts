
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PowerNetzCollector extends SketchCollector {

    static CONFIG = {
        id: "power_netz",
        name: "Power-Netz",
        description: "i18n.collectors.power_netz.description",
        version: "0",
        website: "https://login.ssl-entry.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15293.jpg",
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
        loginUrl: "https://login.ssl-entry.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PowerNetzCollector.CONFIG);
    }
}
