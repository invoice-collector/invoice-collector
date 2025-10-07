
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MarfeelCollector extends SketchCollector {

    static CONFIG = {
        id: "marfeel",
        name: "Marfeel",
        description: "i18n.collectors.marfeel.description",
        version: "0",
        website: "https://hub.marfeel.com/organization/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4554125.jpg",
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
        entryUrl: "https://hub.marfeel.com/organization/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarfeelCollector.CONFIG);
    }
}
