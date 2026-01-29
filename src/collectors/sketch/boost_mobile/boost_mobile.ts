
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BoostMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "boost_mobile",
        name: "boost mobile",
        description: "i18n.collectors.boost_mobile.description",
        version: "0",
        website: "https://myaccount.boostmobile.com/sign-in.html?intnav=UtilNav:SignIn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8785.jpg",
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
        loginUrl: "https://myaccount.boostmobile.com/sign-in.html?intnav=UtilNav:SignIn",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BoostMobileCollector.CONFIG);
    }
}
