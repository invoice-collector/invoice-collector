
import { SketchCollector } from '../../sketchCollector';

export class DavasoCollector extends SketchCollector {

    static CONFIG = {
        id: "davaso",
        name: "Davaso",
        description: "i18n.collectors.davaso.description",
        version: "0",
        website: "https://portal.davaso.de/portal/secure/postfach",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1744815.jpg",
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
        entryUrl: "https://portal.davaso.de/portal/secure/postfach",
    }

    constructor() {
        super(DavasoCollector.CONFIG);
    }
}
