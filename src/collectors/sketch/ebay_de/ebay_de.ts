
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EbayDeCollector extends SketchCollector {

    static CONFIG = {
        id: "ebay_de",
        name: "ebay.de",
        description: "i18n.collectors.ebay_de.description",
        version: "0",
        website: "https://www.ebay.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/328.jpg",
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
        entryUrl: "https://www.ebay.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EbayDeCollector.CONFIG);
    }
}
