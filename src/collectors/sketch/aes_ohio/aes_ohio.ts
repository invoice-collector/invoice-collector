
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AesOhioCollector extends SketchCollector {

    static CONFIG = {
        id: "aes_ohio",
        name: "AES Ohio",
        description: "i18n.collectors.aes_ohio.description",
        version: "0",
        website: "https://myprofile.aes-ohio.com/Bill/BillHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4203046.jpg",
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
        loginUrl: "https://myprofile.aes-ohio.com/Bill/BillHistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AesOhioCollector.CONFIG);
    }
}
