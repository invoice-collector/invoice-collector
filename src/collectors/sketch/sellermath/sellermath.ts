
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SellermathCollector extends SketchCollector {

    static CONFIG = {
        id: "sellermath",
        name: "Sellermath",
        description: "i18n.collectors.sellermath.description",
        version: "0",
        website: "https://system.seller-math.com/sellermath/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200541.jpg",
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
        entryUrl: "https://system.seller-math.com/sellermath/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SellermathCollector.CONFIG);
    }
}
