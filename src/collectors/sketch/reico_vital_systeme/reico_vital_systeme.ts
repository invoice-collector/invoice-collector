
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ReicoVitalSystemeCollector extends SketchCollector {

    static CONFIG = {
        id: "reico_vital_systeme",
        name: "REICO Vital-Systeme",
        description: "i18n.collectors.reico_vital_systeme.description",
        version: "0",
        website: "https://vp.reico-vital.com/sales-data",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1368223.jpg",
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
        loginUrl: "https://vp.reico-vital.com/sales-data",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReicoVitalSystemeCollector.CONFIG);
    }
}
