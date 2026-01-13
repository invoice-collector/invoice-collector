
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FunnelyticsCollector extends SketchCollector {

    static CONFIG = {
        id: "funnelytics",
        name: "Funnelytics",
        description: "i18n.collectors.funnelytics.description",
        version: "0",
        website: "https://app.funnelytics.io/login?_fs=3ed242b0-b9fd-4af6-b6fc-d44c9bc1f797",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/800958.jpg",
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
        loginUrl: "https://app.funnelytics.io/login?_fs=3ed242b0-b9fd-4af6-b6fc-d44c9bc1f797",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FunnelyticsCollector.CONFIG);
    }
}
