
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RiversidePublicUtilitesCollector extends SketchCollector {

    static CONFIG = {
        id: "riverside_public_utilites",
        name: "Riverside Public Utilites",
        description: "i18n.collectors.riverside_public_utilites.description",
        version: "0",
        website: "https://billpay.riversideca.gov/iwr/billing/billingManager.seam?cid=8887&rvn=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723371.jpg",
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
        loginUrl: "https://billpay.riversideca.gov/iwr/billing/billingManager.seam?cid=8887&rvn=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RiversidePublicUtilitesCollector.CONFIG);
    }
}
