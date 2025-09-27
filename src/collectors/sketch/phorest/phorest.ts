
import { SketchCollector } from '../../sketchCollector';

export class PhorestCollector extends SketchCollector {

    static CONFIG = {
        id: "phorest",
        name: "Phorest",
        description: "i18n.collectors.phorest.description",
        version: "0",
        website: "https://messenger6.phorest.com/clientlogin.php?lang=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45114.jpg",
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
        entryUrl: "https://messenger6.phorest.com/clientlogin.php?lang=de",
    }

    constructor() {
        super(PhorestCollector.CONFIG);
    }
}
