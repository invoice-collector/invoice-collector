
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SimonsaysCollector extends SketchCollector {

    static CONFIG = {
        id: "simonsays",
        name: "SimonSays",
        description: "i18n.collectors.simonsays.description",
        version: "0",
        website: "https://app.simonsays.ai/app/account-settings#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778121.jpg",
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
        entryUrl: "https://app.simonsays.ai/app/account-settings#invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SimonsaysCollector.CONFIG);
    }
}
