
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BrinksHomeCollector extends SketchCollector {

    static CONFIG = {
        id: "brinks_home",
        name: "Brinks Home",
        description: "i18n.collectors.brinks_home.description",
        version: "0",
        website: "https://login.brinkshome.com/brinkshomeb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_BRINKSHOME_CUSTOMER_SSO_SIGNUP_SIGNIN&client_id=ad810868-4715-4404-b1fe-57f010b58da4&nonce=defaultNonce&redirect_uri=https://account.brinkshome.com/auth/b2c/sso&scop",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382652.jpg",
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
        entryUrl: "https://login.brinkshome.com/brinkshomeb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_BRINKSHOME_CUSTOMER_SSO_SIGNUP_SIGNIN&client_id=ad810868-4715-4404-b1fe-57f010b58da4&nonce=defaultNonce&redirect_uri=https://account.brinkshome.com/auth/b2c/sso&scop",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BrinksHomeCollector.CONFIG);
    }
}
