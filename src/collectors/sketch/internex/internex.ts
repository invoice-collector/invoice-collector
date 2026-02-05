
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InternexCollector extends SketchCollector {

    static CONFIG = {
        id: "internex",
        name: "Internex",
        description: "i18n.collectors.internex.description",
        version: "0",
        website: "https://www.internex.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65110.jpg",
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
        loginUrl: "https://www.internex.at",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InternexCollector.CONFIG);
    }
}
