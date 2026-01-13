
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GrubhubCollector extends SketchCollector {

    static CONFIG = {
        id: "grubhub",
        name: "Grubhub",
        description: "i18n.collectors.grubhub.description",
        version: "0",
        website: "http://www.grubhub.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52299.jpg",
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
        loginUrl: "http://www.grubhub.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrubhubCollector.CONFIG);
    }
}
