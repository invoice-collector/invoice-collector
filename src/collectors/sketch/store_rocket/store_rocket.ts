
import { SketchCollector } from '../../sketchCollector';

export class StoreRocketCollector extends SketchCollector {

    static CONFIG = {
        id: "store_rocket",
        name: "Store Rocket",
        description: "i18n.collectors.store_rocket.description",
        version: "0",
        website: "https://storerocket.io/app/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/386532.jpg",
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
        entryUrl: "https://storerocket.io/app/billing",
    }

    constructor() {
        super(StoreRocketCollector.CONFIG);
    }
}
