
import { SketchCollector } from '../../sketchCollector';

export class KartonplusCollector extends SketchCollector {

    static CONFIG = {
        id: "kartonplus",
        name: "Kartonplus",
        description: "i18n.collectors.kartonplus.description",
        version: "0",
        website: "https://www.kartonplus.de/download_rechnung.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47279.jpg",
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
        entryUrl: "https://www.kartonplus.de/download_rechnung.php",
    }

    constructor() {
        super(KartonplusCollector.CONFIG);
    }
}
