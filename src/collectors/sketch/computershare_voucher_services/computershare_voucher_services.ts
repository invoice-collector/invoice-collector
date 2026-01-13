
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ComputershareVoucherServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "computershare_voucher_services",
        name: "Computershare Voucher Services",
        description: "i18n.collectors.computershare_voucher_services.description",
        version: "0",
        website: "https://myaccount.computersharevoucherservices.com/Login/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71233.jpg",
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
        loginUrl: "https://myaccount.computersharevoucherservices.com/Login/Login.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ComputershareVoucherServicesCollector.CONFIG);
    }
}
