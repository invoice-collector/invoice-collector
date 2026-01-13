
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Uk2numbersCollector extends SketchCollector {

    static CONFIG = {
        id: "uk2numbers",
        name: "UK2Numbers",
        description: "i18n.collectors.uk2numbers.description",
        version: "0",
        website: "http://www.uk2numbers.co.uk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56848.jpg",
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
        loginUrl: "http://www.uk2numbers.co.uk",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Uk2numbersCollector.CONFIG);
    }
}
