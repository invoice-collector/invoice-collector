
import { SketchCollector } from '../../sketchCollector';

export class SimdiscountDeCollector extends SketchCollector {

    static CONFIG = {
        id: "simdiscount_de",
        name: "SimDiscount.de",
        description: "i18n.collectors.simdiscount_de.description",
        version: "0",
        website: "https://service.simdiscount.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6137.jpg",
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
        entryUrl: "https://service.simdiscount.de/",
    }

    constructor() {
        super(SimdiscountDeCollector.CONFIG);
    }
}
