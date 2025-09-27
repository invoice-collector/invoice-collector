
import { SketchCollector } from '../../sketchCollector';

export class KalideaCollector extends SketchCollector {

    static CONFIG = {
        id: "kalidea",
        name: "Kalidea",
        description: "i18n.collectors.kalidea.description",
        version: "0",
        website: "https://billetterie.kalidea.com/SSO/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120474.jpg",
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
        entryUrl: "https://billetterie.kalidea.com/SSO/Login",
    }

    constructor() {
        super(KalideaCollector.CONFIG);
    }
}
