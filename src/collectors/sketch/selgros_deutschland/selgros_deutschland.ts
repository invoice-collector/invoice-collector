
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SelgrosDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "selgros_deutschland",
        name: "Selgros Deutschland",
        description: "i18n.collectors.selgros_deutschland.description",
        version: "0",
        website: "https://pangaeab2c.b2clogin.com/pangaeab2c.onmicrosoft.com/b2c_1a_signin_with_embedded_password_reset/oauth2/v2.0/authorize?client_id=8bcc0134-9364-4d3e-b83f-c3a2b0bd440d&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fwww.selgros.de%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/82601.jpg",
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
        loginUrl: "https://pangaeab2c.b2clogin.com/pangaeab2c.onmicrosoft.com/b2c_1a_signin_with_embedded_password_reset/oauth2/v2.0/authorize?client_id=8bcc0134-9364-4d3e-b83f-c3a2b0bd440d&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fwww.selgros.de%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SelgrosDeutschlandCollector.CONFIG);
    }
}
