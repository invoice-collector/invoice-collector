
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TestomatoCollector extends SketchCollector {

    static CONFIG = {
        id: "testomato",
        name: "Testomato",
        description: "i18n.collectors.testomato.description",
        version: "0",
        website: "https://www.testomato.com/invoice/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69472.jpg",
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
        loginUrl: "https://www.testomato.com/invoice/list",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TestomatoCollector.CONFIG);
    }
}
