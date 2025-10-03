
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlandentCollector extends SketchCollector {

    static CONFIG = {
        id: "plandent",
        name: "Plandent",
        description: "i18n.collectors.plandent.description",
        version: "0",
        website: "https://shop.plandent.de/de/mein-konto/rechnungen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2515316.jpg",
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
        entryUrl: "https://shop.plandent.de/de/mein-konto/rechnungen.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlandentCollector.CONFIG);
    }
}
