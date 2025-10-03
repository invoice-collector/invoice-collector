
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PayoneerCollector extends SketchCollector {

    static CONFIG = {
        id: "payoneer",
        name: "Payoneer",
        description: "i18n.collectors.payoneer.description",
        version: "0",
        website: "https://myaccount.payoneer.com/payer",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56734.jpg",
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
        entryUrl: "https://myaccount.payoneer.com/payer",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PayoneerCollector.CONFIG);
    }
}
