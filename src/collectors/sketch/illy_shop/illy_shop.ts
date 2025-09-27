
import { SketchCollector } from '../../sketchCollector';

export class IllyShopCollector extends SketchCollector {

    static CONFIG = {
        id: "illy_shop",
        name: "illy Shop",
        description: "i18n.collectors.illy_shop.description",
        version: "0",
        website: "https://www.illy.com/de-de/my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1953773.jpg",
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
        entryUrl: "https://www.illy.com/de-de/my-account",
    }

    constructor() {
        super(IllyShopCollector.CONFIG);
    }
}
