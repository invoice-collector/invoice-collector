
import { SketchCollector } from '../../sketchCollector';

export class DripifyCollector extends SketchCollector {

    static CONFIG = {
        id: "dripify",
        name: "Dripify",
        description: "i18n.collectors.dripify.description",
        version: "0",
        website: "https://app.dripify.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1052822.jpg",
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
        entryUrl: "https://app.dripify.io",
    }

    constructor() {
        super(DripifyCollector.CONFIG);
    }
}
