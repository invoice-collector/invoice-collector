
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HdiVersicherungCollector extends SketchCollector {

    static CONFIG = {
        id: "hdi_versicherung",
        name: "HDI Versicherung",
        description: "i18n.collectors.hdi_versicherung.description",
        version: "0",
        website: "https://www.hdi.de/mein-hdi/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778119.jpg",
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
        entryUrl: "https://www.hdi.de/mein-hdi/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HdiVersicherungCollector.CONFIG);
    }
}
