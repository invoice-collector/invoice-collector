
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Klean13Collector extends SketchCollector {

    static CONFIG = {
        id: "klean13",
        name: "Klean13",
        description: "i18n.collectors.klean13.description",
        version: "0",
        website: "https://app.klean13.com/invoice?invoice_id=3676",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1525175.jpg",
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
        loginUrl: "https://app.klean13.com/invoice?invoice_id=3676",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Klean13Collector.CONFIG);
    }
}
