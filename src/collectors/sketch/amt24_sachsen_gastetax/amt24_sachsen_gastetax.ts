
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Amt24SachsenGastetaxCollector extends SketchCollector {

    static CONFIG = {
        id: "amt24_sachsen_gastetax",
        name: "Amt24. sachsen Gastetax",
        description: "i18n.collectors.amt24_sachsen_gastetax.description",
        version: "0",
        website: "https://sso.amt24.sachsen.de/idp/profile/SAML2/Redirect/SSO?execution=e3s1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1201350.jpg",
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
        loginUrl: "https://sso.amt24.sachsen.de/idp/profile/SAML2/Redirect/SSO?execution=e3s1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Amt24SachsenGastetaxCollector.CONFIG);
    }
}
