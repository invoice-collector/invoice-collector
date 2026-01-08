
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LibertyMutualCollector extends SketchCollector {

    static CONFIG = {
        id: "liberty_mutual",
        name: "Liberty Mutual",
        description: "i18n.collectors.liberty_mutual.description",
        version: "0",
        website: "https://lmidp.libertymutual.com/as/authorization.oauth2?client_id=ci_blportaloidc_1&scope=openid%20profile%20email&response_type=code&redirect_uri=https%3A%2F%2Fmybusiness.libertymutual.com%2Fauth%2Fuser%2F&state=%2Faccount&IdpAdapterId=extldap",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2387618.jpg",
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
        loginUrl: "https://lmidp.libertymutual.com/as/authorization.oauth2?client_id=ci_blportaloidc_1&scope=openid%20profile%20email&response_type=code&redirect_uri=https%3A%2F%2Fmybusiness.libertymutual.com%2Fauth%2Fuser%2F&state=%2Faccount&IdpAdapterId=extldap",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LibertyMutualCollector.CONFIG);
    }
}
