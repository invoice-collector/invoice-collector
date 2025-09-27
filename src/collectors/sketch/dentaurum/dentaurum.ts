
import { SketchCollector } from '../../sketchCollector';

export class DentaurumCollector extends SketchCollector {

    static CONFIG = {
        id: "dentaurum",
        name: "Dentaurum",
        description: "i18n.collectors.dentaurum.description",
        version: "0",
        website: "https://shop.dentaurum.de/login.php?source=&ch=c12a5c",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445901.jpg",
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
        entryUrl: "https://shop.dentaurum.de/login.php?source=&ch=c12a5c",
    }

    constructor() {
        super(DentaurumCollector.CONFIG);
    }
}
