
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PraxisdienstCollector extends SketchCollector {

    static CONFIG = {
        id: "praxisdienst",
        name: "Praxisdienst",
        description: "i18n.collectors.praxisdienst.description",
        version: "0",
        website: "http://www.praxisdienst.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32684.jpg",
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
        entryUrl: "http://www.praxisdienst.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PraxisdienstCollector.CONFIG);
    }
}
