
import { SketchCollector } from '../../sketchCollector';

export class GaianaCollector extends SketchCollector {

    static CONFIG = {
        id: "gaiana",
        name: "Gaiana",
        description: "i18n.collectors.gaiana.description",
        version: "0",
        website: "https://gaiana.nl/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2246697.jpg",
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
        entryUrl: "https://gaiana.nl/my-account/orders/",
    }

    constructor() {
        super(GaianaCollector.CONFIG);
    }
}
