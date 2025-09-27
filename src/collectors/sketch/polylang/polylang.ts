
import { SketchCollector } from '../../sketchCollector';

export class PolylangCollector extends SketchCollector {

    static CONFIG = {
        id: "polylang",
        name: "Polylang",
        description: "i18n.collectors.polylang.description",
        version: "0",
        website: "https://polylang.pro/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/95137.jpg",
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
        entryUrl: "https://polylang.pro/account/",
    }

    constructor() {
        super(PolylangCollector.CONFIG);
    }
}
