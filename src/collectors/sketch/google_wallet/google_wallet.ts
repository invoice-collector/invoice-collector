
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GoogleWalletCollector extends SketchCollector {

    static CONFIG = {
        id: "google_wallet",
        name: "Google Wallet",
        description: "i18n.collectors.google_wallet.description",
        version: "0",
        website: "https://accounts.google.com/signin/v2/identifier?service=sierra&passive=1209600&osid=1&continue=https%3A%2F%2Fpay.google.com%2Fsend%2Ftransactions&followup=https%3A%2F%2Fwallet.google.com%2Fn%2Ftransactions&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/502.jpg",
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
        loginUrl: "https://accounts.google.com/signin/v2/identifier?service=sierra&passive=1209600&osid=1&continue=https%3A%2F%2Fpay.google.com%2Fsend%2Ftransactions&followup=https%3A%2F%2Fwallet.google.com%2Fn%2Ftransactions&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GoogleWalletCollector.CONFIG);
    }
}
