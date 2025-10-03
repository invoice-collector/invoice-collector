
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LandbellEasyShopCollector extends SketchCollector {

    static CONFIG = {
        id: "landbell_easy_shop",
        name: "Landbell EASy-Shop",
        description: "i18n.collectors.landbell_easy_shop.description",
        version: "0",
        website: "https://easyshop.landbell.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43834.jpg",
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
        entryUrl: "https://easyshop.landbell.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LandbellEasyShopCollector.CONFIG);
    }
}
