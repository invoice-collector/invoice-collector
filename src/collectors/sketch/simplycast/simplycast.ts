
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SimplycastCollector extends SketchCollector {

    static CONFIG = {
        id: "simplycast",
        name: "SimplyCast",
        description: "i18n.collectors.simplycast.description",
        version: "0",
        website: "https://app.simplycast.ca/?q=account/subscription/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/157968.jpg",
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
        entryUrl: "https://app.simplycast.ca/?q=account/subscription/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SimplycastCollector.CONFIG);
    }
}
