
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BornetDeCollector extends SketchCollector {

    static CONFIG = {
        id: "bornet_de",
        name: "BORnet.de",
        description: "i18n.collectors.bornet_de.description",
        version: "0",
        website: "https://kundenportal.deutsche-glasfaser.de/selfcare/#/selfcare/login?returnUrl=%2Fhome",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9604.jpg",
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
        loginUrl: "https://kundenportal.deutsche-glasfaser.de/selfcare/#/selfcare/login?returnUrl=%2Fhome",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BornetDeCollector.CONFIG);
    }
}
