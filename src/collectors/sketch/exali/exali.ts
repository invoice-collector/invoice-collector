
import { SketchCollector } from '../../sketchCollector';

export class ExaliCollector extends SketchCollector {

    static CONFIG = {
        id: "exali",
        name: "Exali",
        description: "i18n.collectors.exali.description",
        version: "0",
        website: "https://www.exali.de/Kundencenter/Kunden-Login,100336.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/336.jpg",
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
        entryUrl: "https://www.exali.de/Kundencenter/Kunden-Login,100336.php",
    }

    constructor() {
        super(ExaliCollector.CONFIG);
    }
}
