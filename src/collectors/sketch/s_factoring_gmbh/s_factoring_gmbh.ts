
import { SketchCollector } from '../../sketchCollector';

export class SFactoringGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "s_factoring_gmbh",
        name: "S-Factoring GmbH",
        description: "i18n.collectors.s_factoring_gmbh.description",
        version: "0",
        website: "https://portal.s-factoring.de/#Docs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2862909.jpg",
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
        entryUrl: "https://portal.s-factoring.de/#Docs",
    }

    constructor() {
        super(SFactoringGmbhCollector.CONFIG);
    }
}
