
import { SketchCollector } from '../../sketchCollector';

export class MkbBrandstofCollector extends SketchCollector {

    static CONFIG = {
        id: "mkb_brandstof",
        name: "MKB Brandstof",
        description: "i18n.collectors.mkb_brandstof.description",
        version: "0",
        website: "https://www.mkb-brandstof.nl/inloggen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32907.jpg",
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
        entryUrl: "https://www.mkb-brandstof.nl/inloggen",
    }

    constructor() {
        super(MkbBrandstofCollector.CONFIG);
    }
}
