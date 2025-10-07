
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TripitCollector extends SketchCollector {

    static CONFIG = {
        id: "tripit",
        name: "TripIt",
        description: "i18n.collectors.tripit.description",
        version: "0",
        website: "https://www.tripit.com/account/edit/section/billing_history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115653.jpg",
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
        entryUrl: "https://www.tripit.com/account/edit/section/billing_history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TripitCollector.CONFIG);
    }
}
