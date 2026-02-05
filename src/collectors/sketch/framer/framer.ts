
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FramerCollector extends SketchCollector {

    static CONFIG = {
        id: "framer",
        name: "Framer",
        description: "i18n.collectors.framer.description",
        version: "0",
        website: "http://www.framer.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39805.jpg",
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
        loginUrl: "http://www.framer.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FramerCollector.CONFIG);
    }
}
