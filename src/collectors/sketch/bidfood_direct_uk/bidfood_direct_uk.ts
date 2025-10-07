
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BidfoodDirectUkCollector extends SketchCollector {

    static CONFIG = {
        id: "bidfood_direct_uk",
        name: "Bidfood direct UK",
        description: "i18n.collectors.bidfood_direct_uk.description",
        version: "0",
        website: "https://www.bidfooddirect.co.uk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/573839.jpg",
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
        entryUrl: "https://www.bidfooddirect.co.uk",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BidfoodDirectUkCollector.CONFIG);
    }
}
