
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UniperSeCollector extends SketchCollector {

    static CONFIG = {
        id: "uniper_se",
        name: "Uniper SE",
        description: "i18n.collectors.uniper_se.description",
        version: "0",
        website: "https://uniperdigitalext.b2clogin.com/uniperdigitalext.onmicrosoft.com/B2C_1_external_user_sign_in_v2/oauth2/v2.0/authorize?client_id=eae0e73c-04f8-41ff-a7a5-2d3eb4d599b7&redirect_uri=https://uniper-digital.de/openIdConnect&response_type=code&scope=openid",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1534122.jpg",
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
        loginUrl: "https://uniperdigitalext.b2clogin.com/uniperdigitalext.onmicrosoft.com/B2C_1_external_user_sign_in_v2/oauth2/v2.0/authorize?client_id=eae0e73c-04f8-41ff-a7a5-2d3eb4d599b7&redirect_uri=https://uniper-digital.de/openIdConnect&response_type=code&scope=openid",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UniperSeCollector.CONFIG);
    }
}
