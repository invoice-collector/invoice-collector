
import { SketchCollector } from '../../sketchCollector';

export class ApagCollector extends SketchCollector {

    static CONFIG = {
        id: "apag",
        name: "APAG",
        description: "i18n.collectors.apag.description",
        version: "0",
        website: "https://www.meine.apag.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778120.jpg",
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
        entryUrl: "https://www.meine.apag.de/",
    }

    constructor() {
        super(ApagCollector.CONFIG);
    }
}
