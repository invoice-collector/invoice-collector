
import { SketchCollector } from '../../sketchCollector';

export class ShcCareCollector extends SketchCollector {

    static CONFIG = {
        id: "shc_care",
        name: "SHC-Care",
        description: "i18n.collectors.shc_care.description",
        version: "0",
        website: "https://shc-care.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2180696.jpg",
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
        entryUrl: "https://shc-care.de/login",
    }

    constructor() {
        super(ShcCareCollector.CONFIG);
    }
}
