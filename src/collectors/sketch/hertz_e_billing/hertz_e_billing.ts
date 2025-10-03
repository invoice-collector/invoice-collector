
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HertzEBillingCollector extends SketchCollector {

    static CONFIG = {
        id: "hertz_e_billing",
        name: "Hertz E Billing",
        description: "i18n.collectors.hertz_e_billing.description",
        version: "0",
        website: "https://www.hertz-ebilling.com/hertz/welcome.html?se32p3dd1r30825ncv9jmpnimb=kc1ehvtqskqqbvgjuh4n6upf91#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/197395.jpg",
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
        entryUrl: "https://www.hertz-ebilling.com/hertz/welcome.html?se32p3dd1r30825ncv9jmpnimb=kc1ehvtqskqqbvgjuh4n6upf91#",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HertzEBillingCollector.CONFIG);
    }
}
