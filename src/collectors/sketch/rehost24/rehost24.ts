
import { SketchCollector } from '../../sketchCollector';

export class Rehost24Collector extends SketchCollector {

    static CONFIG = {
        id: "rehost24",
        name: "ReHost24",
        description: "i18n.collectors.rehost24.description",
        version: "0",
        website: "https://kundencenter.rehost24.com/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30869.jpg",
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
        entryUrl: "https://kundencenter.rehost24.com/clientarea.php",
    }

    constructor() {
        super(Rehost24Collector.CONFIG);
    }
}
