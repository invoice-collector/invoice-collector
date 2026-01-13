
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VivaWalletCollector extends SketchCollector {

    static CONFIG = {
        id: "viva_wallet",
        name: "Viva Wallet",
        description: "i18n.collectors.viva_wallet.description",
        version: "0",
        website: "https://accounts.vivapayments.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dselfcare.apps.vivapayments.com%26redirect_uri%3Dhttps%253A%252F%252Fwww.vivapayments.com%252F%26response_type%3Dcode%2520id_token%26scope%3Dopenid%25",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2740802.jpg",
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
        loginUrl: "https://accounts.vivapayments.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dselfcare.apps.vivapayments.com%26redirect_uri%3Dhttps%253A%252F%252Fwww.vivapayments.com%252F%26response_type%3Dcode%2520id_token%26scope%3Dopenid%25",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VivaWalletCollector.CONFIG);
    }
}
