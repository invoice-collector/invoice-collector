
import { SketchCollector } from '../../sketchCollector';

export class OekopostCollector extends SketchCollector {

    static CONFIG = {
        id: "oekopost",
        name: "Oekopost",
        description: "i18n.collectors.oekopost.description",
        version: "0",
        website: "https://www.oekopost.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45679.jpg",
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
        entryUrl: "https://www.oekopost.de/login/",
    }

    constructor() {
        super(OekopostCollector.CONFIG);
    }
}
