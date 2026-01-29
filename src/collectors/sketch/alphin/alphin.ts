
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AlphinCollector extends SketchCollector {

    static CONFIG = {
        id: "alphin",
        name: "Alphin",
        description: "i18n.collectors.alphin.description",
        version: "0",
        website: "https://app.alphin.io/billing/overview?utm_source=zuora&utm_medium=email&utm_campaign=invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2103968.jpg",
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
        loginUrl: "https://app.alphin.io/billing/overview?utm_source=zuora&utm_medium=email&utm_campaign=invoice",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AlphinCollector.CONFIG);
    }
}
