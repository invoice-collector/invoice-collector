
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmartplanCollector extends SketchCollector {

    static CONFIG = {
        id: "smartplan",
        name: "Smartplan",
        description: "i18n.collectors.smartplan.description",
        version: "0",
        website: "https://schutzschild.smartplanapp.io/account/payment/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513840.jpg",
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
        entryUrl: "https://schutzschild.smartplanapp.io/account/payment/billing/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmartplanCollector.CONFIG);
    }
}
