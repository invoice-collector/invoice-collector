
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FaxPlusCollector extends SketchCollector {

    static CONFIG = {
        id: "fax_plus",
        name: "Fax.Plus",
        description: "i18n.collectors.fax_plus.description",
        version: "0",
        website: "https://app.fax.plus/profile/plan_billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1612135.jpg",
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
        entryUrl: "https://app.fax.plus/profile/plan_billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FaxPlusCollector.CONFIG);
    }
}
