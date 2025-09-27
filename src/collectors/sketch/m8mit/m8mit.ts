
import { SketchCollector } from '../../sketchCollector';

export class M8mitCollector extends SketchCollector {

    static CONFIG = {
        id: "m8mit",
        name: "M8MIT",
        description: "i18n.collectors.m8mit.description",
        version: "0",
        website: "https://sae.m8mit.de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4572211.jpg",
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
        entryUrl: "https://sae.m8mit.de/invoices",
    }

    constructor() {
        super(M8mitCollector.CONFIG);
    }
}
