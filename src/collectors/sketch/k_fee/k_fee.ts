
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KFeeCollector extends SketchCollector {

    static CONFIG = {
        id: "k_fee",
        name: "K-Fee",
        description: "i18n.collectors.k_fee.description",
        version: "0",
        website: "https://shop.k-fee.com/de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51031.jpg",
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
        entryUrl: "https://shop.k-fee.com/de/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KFeeCollector.CONFIG);
    }
}
