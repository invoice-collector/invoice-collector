
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EShoplandCollector extends SketchCollector {

    static CONFIG = {
        id: "e_shopland",
        name: "e-shopland",
        description: "i18n.collectors.e_shopland.description",
        version: "0",
        website: "https://shop.e-shopland.ch",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777394.jpg",
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
        entryUrl: "https://shop.e-shopland.ch",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EShoplandCollector.CONFIG);
    }
}
