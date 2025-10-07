
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BetreutDeCollector extends SketchCollector {

    static CONFIG = {
        id: "betreut_de",
        name: "betreut.de",
        description: "i18n.collectors.betreut_de.description",
        version: "0",
        website: "https://www.betreut.de/de-de/my-account/billing/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/187233.jpg",
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
        entryUrl: "https://www.betreut.de/de-de/my-account/billing/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BetreutDeCollector.CONFIG);
    }
}
