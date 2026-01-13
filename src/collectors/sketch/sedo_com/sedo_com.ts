
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SedoComCollector extends SketchCollector {

    static CONFIG = {
        id: "sedo_com",
        name: "sedo.com",
        description: "i18n.collectors.sedo_com.description",
        version: "0",
        website: "http://www.sedo.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20422.jpg",
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
        loginUrl: "http://www.sedo.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SedoComCollector.CONFIG);
    }
}
