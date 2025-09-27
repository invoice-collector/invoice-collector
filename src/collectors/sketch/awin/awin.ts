
import { SketchCollector } from '../../sketchCollector';

export class AwinCollector extends SketchCollector {

    static CONFIG = {
        id: "awin",
        name: "Awin",
        description: "i18n.collectors.awin.description",
        version: "0",
        website: "https://ui.awin.com/idp/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32240.jpg",
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
        entryUrl: "https://ui.awin.com/idp/de/login",
    }

    constructor() {
        super(AwinCollector.CONFIG);
    }
}
