
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JuicerCollector extends SketchCollector {

    static CONFIG = {
        id: "juicer",
        name: "Juicer",
        description: "i18n.collectors.juicer.description",
        version: "0",
        website: "https://www.juicer.io/log-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46710.jpg",
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
        loginUrl: "https://www.juicer.io/log-in",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(JuicerCollector.CONFIG);
    }
}
