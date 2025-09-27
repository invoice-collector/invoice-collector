
import { SketchCollector } from '../../sketchCollector';

export class ChocopingCollector extends SketchCollector {

    static CONFIG = {
        id: "chocoping",
        name: "Chocoping",
        description: "i18n.collectors.chocoping.description",
        version: "0",
        website: "https://chocoping.com/processing/viewinvoice.php?id=1004129&paymentsuccess=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1480716.jpg",
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
        entryUrl: "https://chocoping.com/processing/viewinvoice.php?id=1004129&paymentsuccess=true",
    }

    constructor() {
        super(ChocopingCollector.CONFIG);
    }
}
