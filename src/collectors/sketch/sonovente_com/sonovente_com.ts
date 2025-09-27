
import { SketchCollector } from '../../sketchCollector';

export class SonoventeComCollector extends SketchCollector {

    static CONFIG = {
        id: "sonovente_com",
        name: "Sonovente.com",
        description: "i18n.collectors.sonovente_com.description",
        version: "0",
        website: "https://www.sonovente.com/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123507.jpg",
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
        entryUrl: "https://www.sonovente.com/account/",
    }

    constructor() {
        super(SonoventeComCollector.CONFIG);
    }
}
