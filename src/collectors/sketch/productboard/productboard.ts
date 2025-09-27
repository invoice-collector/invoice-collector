
import { SketchCollector } from '../../sketchCollector';

export class ProductboardCollector extends SketchCollector {

    static CONFIG = {
        id: "productboard",
        name: "productboard",
        description: "i18n.collectors.productboard.description",
        version: "0",
        website: "https://app.productboard.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56807.jpg",
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
        entryUrl: "https://app.productboard.com/",
    }

    constructor() {
        super(ProductboardCollector.CONFIG);
    }
}
