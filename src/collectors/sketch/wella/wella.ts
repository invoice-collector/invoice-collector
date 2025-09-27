
import { SketchCollector } from '../../sketchCollector';

export class WellaCollector extends SketchCollector {

    static CONFIG = {
        id: "wella",
        name: "WELLA",
        description: "i18n.collectors.wella.description",
        version: "0",
        website: "https://at.wella.professionalstore.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/789367.jpg",
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
        entryUrl: "https://at.wella.professionalstore.com/",
    }

    constructor() {
        super(WellaCollector.CONFIG);
    }
}
