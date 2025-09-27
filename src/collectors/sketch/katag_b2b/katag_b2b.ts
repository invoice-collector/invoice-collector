
import { SketchCollector } from '../../sketchCollector';

export class KatagB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "katag_b2b",
        name: "Katag B2B",
        description: "i18n.collectors.katag_b2b.description",
        version: "0",
        website: "https://katag.net/kundenportale/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1914290.jpg",
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
        entryUrl: "https://katag.net/kundenportale/",
    }

    constructor() {
        super(KatagB2bCollector.CONFIG);
    }
}
