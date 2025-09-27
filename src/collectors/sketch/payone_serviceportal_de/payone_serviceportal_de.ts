
import { SketchCollector } from '../../sketchCollector';

export class PayoneServiceportalDeCollector extends SketchCollector {

    static CONFIG = {
        id: "payone_serviceportal_de",
        name: "PayOne Serviceportal.de",
        description: "i18n.collectors.payone_serviceportal_de.description",
        version: "0",
        website: "https://www.meinservice-portal.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1172518.jpg",
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
        entryUrl: "https://www.meinservice-portal.de/login.php",
    }

    constructor() {
        super(PayoneServiceportalDeCollector.CONFIG);
    }
}
