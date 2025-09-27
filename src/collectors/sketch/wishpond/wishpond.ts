
import { SketchCollector } from '../../sketchCollector';

export class WishpondCollector extends SketchCollector {

    static CONFIG = {
        id: "wishpond",
        name: "Wishpond",
        description: "i18n.collectors.wishpond.description",
        version: "0",
        website: "https://www.wishpond.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132118.jpg",
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
        entryUrl: "https://www.wishpond.com/",
    }

    constructor() {
        super(WishpondCollector.CONFIG);
    }
}
