
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType, CollectorAuthenticationMethod } from '../../abstractCollector';

export class EnbridgeCollector extends SketchCollector {

    static CONFIG = {
        id: "enbridge",
        name: "Enbridge",
        description: "i18n.collectors.enbridge.description",
        version: "0",
        website: "https://www.enbridgegas.com/myEnbridge/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8884.jpg",
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
        loginUrl: "https://www.enbridgegas.com/myEnbridge/login.aspx",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EnbridgeCollector.CONFIG);
    }
}
