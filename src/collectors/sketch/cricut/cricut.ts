
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CricutCollector extends SketchCollector {

    static CONFIG = {
        id: "cricut",
        name: "Cricut",
        description: "i18n.collectors.cricut.description",
        version: "0",
        website: "https://myaccount.cricut.com/order-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2180712.jpg",
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
        entryUrl: "https://myaccount.cricut.com/order-history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CricutCollector.CONFIG);
    }
}
