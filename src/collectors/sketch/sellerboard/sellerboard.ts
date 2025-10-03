
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SellerboardCollector extends SketchCollector {

    static CONFIG = {
        id: "sellerboard",
        name: "Sellerboard",
        description: "i18n.collectors.sellerboard.description",
        version: "0",
        website: "https://app.sellerboard.com/en/auth/login/?_ga=2.186678696.1679769345.1559218854-1670839472.1559218854",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78244.jpg",
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
        entryUrl: "https://app.sellerboard.com/en/auth/login/?_ga=2.186678696.1679769345.1559218854-1670839472.1559218854",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SellerboardCollector.CONFIG);
    }
}
