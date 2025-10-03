
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SchweizerStromCollector extends SketchCollector {

    static CONFIG = {
        id: "schweizer_strom",
        name: "Schweizer Strom",
        description: "i18n.collectors.schweizer_strom.description",
        version: "0",
        website: "https://mein.schweizstrom.de/dashboard/3000738205",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1747434.jpg",
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
        entryUrl: "https://mein.schweizstrom.de/dashboard/3000738205",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SchweizerStromCollector.CONFIG);
    }
}
