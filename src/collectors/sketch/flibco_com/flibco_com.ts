
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlibcoComCollector extends SketchCollector {

    static CONFIG = {
        id: "flibco_com",
        name: "flibco.com",
        description: "i18n.collectors.flibco_com.description",
        version: "0",
        website: "https://www.flibco.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77691.jpg",
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
        loginUrl: "https://www.flibco.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlibcoComCollector.CONFIG);
    }
}
