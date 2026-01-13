
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NecFinancialServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "nec_financial_services",
        name: "NEC Financial Services",
        description: "i18n.collectors.nec_financial_services.description",
        version: "0",
        website: "https://necleasebillpay.osgview.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74135.jpg",
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
        loginUrl: "https://necleasebillpay.osgview.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NecFinancialServicesCollector.CONFIG);
    }
}
