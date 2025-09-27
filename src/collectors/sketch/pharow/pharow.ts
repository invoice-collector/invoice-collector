
import { SketchCollector } from '../../sketchCollector';

export class PharowCollector extends SketchCollector {

    static CONFIG = {
        id: "pharow",
        name: "pharow",
        description: "i18n.collectors.pharow.description",
        version: "0",
        website: "https://app.pharow.com/admin-login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/899482.jpg",
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
        entryUrl: "https://app.pharow.com/admin-login/",
    }

    constructor() {
        super(PharowCollector.CONFIG);
    }
}
