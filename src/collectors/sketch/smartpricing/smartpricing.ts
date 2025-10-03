
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmartpricingCollector extends SketchCollector {

    static CONFIG = {
        id: "smartpricing",
        name: "Smartpricing",
        description: "i18n.collectors.smartpricing.description",
        version: "0",
        website: "https://admin.smartpricing.it/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846291.jpg",
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
        entryUrl: "https://admin.smartpricing.it/payments",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmartpricingCollector.CONFIG);
    }
}
