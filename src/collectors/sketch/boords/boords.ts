
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BoordsCollector extends SketchCollector {

    static CONFIG = {
        id: "boords",
        name: "Boords",
        description: "i18n.collectors.boords.description",
        version: "0",
        website: "https://app.boords.com/settings/billing/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/399177.jpg",
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
        entryUrl: "https://app.boords.com/settings/billing/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BoordsCollector.CONFIG);
    }
}
