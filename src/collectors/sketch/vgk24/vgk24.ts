
import { SketchCollector } from '../../sketchCollector';

export class Vgk24Collector extends SketchCollector {

    static CONFIG = {
        id: "vgk24",
        name: "VGK24",
        description: "i18n.collectors.vgk24.description",
        version: "0",
        website: "https://www.vgk24.de/wp-login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2603249.jpg",
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
        entryUrl: "https://www.vgk24.de/wp-login.php",
    }

    constructor() {
        super(Vgk24Collector.CONFIG);
    }
}
