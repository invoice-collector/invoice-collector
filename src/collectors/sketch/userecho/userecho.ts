
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UserechoCollector extends SketchCollector {

    static CONFIG = {
        id: "userecho",
        name: "Userecho",
        description: "i18n.collectors.userecho.description",
        version: "0",
        website: "https://getmyinvoices.userecho.com/settings/payments/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1488436.jpg",
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
        entryUrl: "https://getmyinvoices.userecho.com/settings/payments/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UserechoCollector.CONFIG);
    }
}
