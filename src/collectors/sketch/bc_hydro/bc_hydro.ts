
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BcHydroCollector extends SketchCollector {

    static CONFIG = {
        id: "bc_hydro",
        name: "BC Hydro",
        description: "i18n.collectors.bc_hydro.description",
        version: "0",
        website: "https://app.bchydro.com/sso/UI/Login?realm=bch-ps&goto=https%3A%2F%2Fapp.bchydro.com%3A443%2FBCHCustomerPortal%2Fweb%2Flogin.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23367.jpg",
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
        loginUrl: "https://app.bchydro.com/sso/UI/Login?realm=bch-ps&goto=https%3A%2F%2Fapp.bchydro.com%3A443%2FBCHCustomerPortal%2Fweb%2Flogin.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BcHydroCollector.CONFIG);
    }
}
