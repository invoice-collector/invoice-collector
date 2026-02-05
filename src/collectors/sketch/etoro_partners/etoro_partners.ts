
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EtoroPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "etoro_partners",
        name: "Etoro Partners",
        description: "i18n.collectors.etoro_partners.description",
        version: "0",
        website: "https://etoropartners.b2clogin.com/etoropartners.onmicrosoft.com/b2c_1_signin/oauth2/v2.0/logout?post_logout_redirect_uri=https%3A%2F%2Fpor.etoro.com%2Fen-gb%2Fauth%2Flogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1675306.jpg",
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
        loginUrl: "https://etoropartners.b2clogin.com/etoropartners.onmicrosoft.com/b2c_1_signin/oauth2/v2.0/logout?post_logout_redirect_uri=https%3A%2F%2Fpor.etoro.com%2Fen-gb%2Fauth%2Flogin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EtoroPartnersCollector.CONFIG);
    }
}
