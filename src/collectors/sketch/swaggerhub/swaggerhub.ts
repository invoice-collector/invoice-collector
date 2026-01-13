
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SwaggerhubCollector extends SketchCollector {

    static CONFIG = {
        id: "swaggerhub",
        name: "SwaggerHub",
        description: "i18n.collectors.swaggerhub.description",
        version: "0",
        website: "https://app.swaggerhub.com/settings/billings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/112149.jpg",
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
        loginUrl: "https://app.swaggerhub.com/settings/billings",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwaggerhubCollector.CONFIG);
    }
}
