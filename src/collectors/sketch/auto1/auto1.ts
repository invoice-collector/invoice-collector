
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Auto1Collector extends SketchCollector {

    static CONFIG = {
        id: "auto1",
        name: "AUTO1",
        description: "i18n.collectors.auto1.description",
        version: "0",
        website: "http://www.auto1.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91351.jpg",
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
        loginUrl: "http://www.auto1.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Auto1Collector.CONFIG);
    }
}
