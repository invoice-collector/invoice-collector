
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HeysummitCollector extends SketchCollector {

    static CONFIG = {
        id: "heysummit",
        name: "HeySummit",
        description: "i18n.collectors.heysummit.description",
        version: "0",
        website: "https://heysummit.com/accounts/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/392736.jpg",
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
        entryUrl: "https://heysummit.com/accounts/billing/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HeysummitCollector.CONFIG);
    }
}
