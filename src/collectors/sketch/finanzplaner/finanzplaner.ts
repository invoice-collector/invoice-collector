
import { SketchCollector } from '../../sketchCollector';

export class FinanzplanerCollector extends SketchCollector {

    static CONFIG = {
        id: "finanzplaner",
        name: "FinanzPlaner",
        description: "i18n.collectors.finanzplaner.description",
        version: "0",
        website: "https://cloud.finanzportal24.de/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4203088.jpg",
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
        entryUrl: "https://cloud.finanzportal24.de/Login",
    }

    constructor() {
        super(FinanzplanerCollector.CONFIG);
    }
}
