
import { SketchCollector } from '../../sketchCollector';

export class GStarRawCollector extends SketchCollector {

    static CONFIG = {
        id: "g_star_raw",
        name: "G-Star RAW",
        description: "i18n.collectors.g_star_raw.description",
        version: "0",
        website: "https://invoicing.g-star.com/gstar/#/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777326.jpg",
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
        entryUrl: "https://invoicing.g-star.com/gstar/#/documents",
    }

    constructor() {
        super(GStarRawCollector.CONFIG);
    }
}
