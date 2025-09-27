
import { SketchCollector } from '../../sketchCollector';

export class HhvCollector extends SketchCollector {

    static CONFIG = {
        id: "hhv",
        name: "hhv",
        description: "i18n.collectors.hhv.description",
        version: "0",
        website: "https://www.hhv.de/shop/de/bestellung/61999-86238",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2669833.jpg",
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
        entryUrl: "https://www.hhv.de/shop/de/bestellung/61999-86238",
    }

    constructor() {
        super(HhvCollector.CONFIG);
    }
}
