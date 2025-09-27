
import { SketchCollector } from '../../sketchCollector';

export class SilvrCollector extends SketchCollector {

    static CONFIG = {
        id: "silvr",
        name: "Silvr",
        description: "i18n.collectors.silvr.description",
        version: "0",
        website: "https://app.silvr.co/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079816.jpg",
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
        entryUrl: "https://app.silvr.co/login/",
    }

    constructor() {
        super(SilvrCollector.CONFIG);
    }
}
