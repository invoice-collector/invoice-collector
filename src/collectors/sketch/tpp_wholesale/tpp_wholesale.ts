
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TppWholesaleCollector extends SketchCollector {

    static CONFIG = {
        id: "tpp_wholesale",
        name: "TPP Wholesale",
        description: "i18n.collectors.tpp_wholesale.description",
        version: "0",
        website: "https://www.tppwholesale.com.au/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8630.jpg",
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
        entryUrl: "https://www.tppwholesale.com.au/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TppWholesaleCollector.CONFIG);
    }
}
