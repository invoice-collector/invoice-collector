
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BuchnerHmkDigitalCollector extends SketchCollector {

    static CONFIG = {
        id: "buchner_hmk_digital",
        name: "Buchner HMK Digital",
        description: "i18n.collectors.buchner_hmk_digital.description",
        version: "0",
        website: "https://www.heilmittelkatalog.app/account-einstellungen/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3032904.jpg",
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
        loginUrl: "https://www.heilmittelkatalog.app/account-einstellungen/billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BuchnerHmkDigitalCollector.CONFIG);
    }
}
