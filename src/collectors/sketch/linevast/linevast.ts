
import { SketchCollector } from '../../sketchCollector';

export class LinevastCollector extends SketchCollector {

    static CONFIG = {
        id: "linevast",
        name: "Linevast",
        description: "i18n.collectors.linevast.description",
        version: "0",
        website: "https://panel.linevast.de/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11945.jpg",
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
        entryUrl: "https://panel.linevast.de/clientarea.php",
    }

    constructor() {
        super(LinevastCollector.CONFIG);
    }
}
