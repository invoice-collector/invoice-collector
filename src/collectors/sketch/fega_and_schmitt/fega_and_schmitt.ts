
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FegaAndSchmittCollector extends SketchCollector {

    static CONFIG = {
        id: "fega_and_schmitt",
        name: "FEGA & Schmitt",
        description: "i18n.collectors.fega_and_schmitt.description",
        version: "0",
        website: "https://shop.fega.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122771.jpg",
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
        entryUrl: "https://shop.fega.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FegaAndSchmittCollector.CONFIG);
    }
}
