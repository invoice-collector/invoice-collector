
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AvisEuropeCollector extends SketchCollector {

    static CONFIG = {
        id: "avis_europe",
        name: "Avis Europe",
        description: "i18n.collectors.avis_europe.description",
        version: "0",
        website: "http://www.avis-billing.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/38034.jpg",
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
        entryUrl: "http://www.avis-billing.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AvisEuropeCollector.CONFIG);
    }
}
