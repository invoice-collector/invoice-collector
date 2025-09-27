
import { SketchCollector } from '../../sketchCollector';

export class MobileDePrivatkundenCollector extends SketchCollector {

    static CONFIG = {
        id: "mobile_de_privatkunden",
        name: "mobile.de Privatkunden",
        description: "i18n.collectors.mobile_de_privatkunden.description",
        version: "0",
        website: "https://www.mobile.de/rechnung/herunterladen/?utmSource=invoice-email",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846856.jpg",
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
        entryUrl: "https://login.mobile.de/a2/login",
    }

    constructor() {
        super(MobileDePrivatkundenCollector.CONFIG);
    }
}
