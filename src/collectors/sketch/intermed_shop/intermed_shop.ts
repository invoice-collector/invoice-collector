
import { SketchCollector } from '../../sketchCollector';

export class IntermedShopCollector extends SketchCollector {

    static CONFIG = {
        id: "intermed_shop",
        name: "Intermed Shop",
        description: "i18n.collectors.intermed_shop.description",
        version: "0",
        website: "https://shop.intermed.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3083224.jpg",
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
        entryUrl: "https://shop.intermed.de/",
    }

    constructor() {
        super(IntermedShopCollector.CONFIG);
    }
}
