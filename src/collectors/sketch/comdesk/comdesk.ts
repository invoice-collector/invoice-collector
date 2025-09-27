
import { SketchCollector } from '../../sketchCollector';

export class ComdeskCollector extends SketchCollector {

    static CONFIG = {
        id: "comdesk",
        name: "Comdesk",
        description: "i18n.collectors.comdesk.description",
        version: "0",
        website: "https://app.comdesk.de/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14236.jpg",
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
        entryUrl: "https://app.comdesk.de/index.php",
    }

    constructor() {
        super(ComdeskCollector.CONFIG);
    }
}
