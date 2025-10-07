
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TakealotSellerCollector extends SketchCollector {

    static CONFIG = {
        id: "takealot_seller",
        name: "Takealot - Seller",
        description: "i18n.collectors.takealot_seller.description",
        version: "0",
        website: "https://sellers.takealot.com/sales",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4233537.jpg",
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
        entryUrl: "https://sellers.takealot.com/sales",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TakealotSellerCollector.CONFIG);
    }
}
