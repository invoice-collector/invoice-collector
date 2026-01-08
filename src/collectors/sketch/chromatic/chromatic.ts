
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChromaticCollector extends SketchCollector {

    static CONFIG = {
        id: "chromatic",
        name: "Chromatic",
        description: "i18n.collectors.chromatic.description",
        version: "0",
        website: "https://www.chromatic.com/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779618.jpg",
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
        loginUrl: "https://www.chromatic.com/start",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChromaticCollector.CONFIG);
    }
}
