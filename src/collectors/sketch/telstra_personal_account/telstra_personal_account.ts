
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelstraPersonalAccountCollector extends SketchCollector {

    static CONFIG = {
        id: "telstra_personal_account",
        name: "Telstra - Personal Account",
        description: "i18n.collectors.telstra_personal_account.description",
        version: "0",
        website: "https://onlinebilling.telstra.com.au/corporatebill/hierarchy/main/dashboard/show.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9606.jpg",
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
        loginUrl: "https://onlinebilling.telstra.com.au/corporatebill/hierarchy/main/dashboard/show.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TelstraPersonalAccountCollector.CONFIG);
    }
}
