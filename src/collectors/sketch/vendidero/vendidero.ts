
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VendideroCollector extends SketchCollector {

    static CONFIG = {
        id: "vendidero",
        name: "Vendidero",
        description: "i18n.collectors.vendidero.description",
        version: "0",
        website: "https://vendidero.de/mein-konto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14578.jpg",
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
        entryUrl: "https://vendidero.de/mein-konto",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VendideroCollector.CONFIG);
    }
}
