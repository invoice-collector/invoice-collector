
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Cloud66Collector extends SketchCollector {

    static CONFIG = {
        id: "cloud_66",
        name: "Cloud 66",
        description: "i18n.collectors.cloud_66.description",
        version: "0",
        website: "https://app.cloud66.com/accounts/latest",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64990.jpg",
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
        loginUrl: "https://app.cloud66.com/accounts/latest",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Cloud66Collector.CONFIG);
    }
}
