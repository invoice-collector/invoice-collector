
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KabelbinderDiscountDeCollector extends SketchCollector {

    static CONFIG = {
        id: "kabelbinder_discount_de",
        name: "Kabelbinder-discount.de",
        description: "i18n.collectors.kabelbinder_discount_de.description",
        version: "0",
        website: "https://kabelbinder-discount.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/753072.jpg",
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
        entryUrl: "https://kabelbinder-discount.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KabelbinderDiscountDeCollector.CONFIG);
    }
}
