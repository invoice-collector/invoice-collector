
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CodioCollector extends SketchCollector {

    static CONFIG = {
        id: "codio",
        name: "codio",
        description: "i18n.collectors.codio.description",
        version: "0",
        website: "https://codio.com/p/login?hsCtaTracking=ad6aa427-4bb5-4a3c-beb3-8bd8df08b02f%7C73a7f5c4-c051-4906-b0ab-b7d61d1bd8a2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/857975.jpg",
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
        loginUrl: "https://codio.com/p/login?hsCtaTracking=ad6aa427-4bb5-4a3c-beb3-8bd8df08b02f%7C73a7f5c4-c051-4906-b0ab-b7d61d1bd8a2",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CodioCollector.CONFIG);
    }
}
