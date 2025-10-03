
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BuyselladsCollector extends SketchCollector {

    static CONFIG = {
        id: "buysellads",
        name: "BuySellAds",
        description: "i18n.collectors.buysellads.description",
        version: "0",
        website: "https://www.buysellads.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8659.jpg",
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
        entryUrl: "https://www.buysellads.com/users/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BuyselladsCollector.CONFIG);
    }
}
