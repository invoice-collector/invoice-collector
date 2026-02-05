
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ExpediaPartnercentralCollector extends SketchCollector {

    static CONFIG = {
        id: "expedia_partnercentral",
        name: "Expedia PartnerCentral",
        description: "i18n.collectors.expedia_partnercentral.description",
        version: "0",
        website: "https://www.expediapartnercentral.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56831.jpg",
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
        loginUrl: "https://www.expediapartnercentral.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ExpediaPartnercentralCollector.CONFIG);
    }
}
