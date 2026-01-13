
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BilligerMietwagenCollector extends SketchCollector {

    static CONFIG = {
        id: "billiger_mietwagen",
        name: "Billiger Mietwagen",
        description: "i18n.collectors.billiger_mietwagen.description",
        version: "0",
        website: "https://www.billiger-mietwagen.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779113.jpg",
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
        loginUrl: "https://www.billiger-mietwagen.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BilligerMietwagenCollector.CONFIG);
    }
}
