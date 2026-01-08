
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BsPayoneMerchantServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "bs_payone_merchant_service",
        name: "BS PAYONE - Merchant Service",
        description: "i18n.collectors.bs_payone_merchant_service.description",
        version: "0",
        website: "https://pmi.pay1.de/merchants/index.php?request=makecsv&mode=0&navi=rechn&year=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8067.jpg",
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
        loginUrl: "https://pmi.pay1.de/merchants/index.php?request=makecsv&mode=0&navi=rechn&year=",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BsPayoneMerchantServiceCollector.CONFIG);
    }
}
